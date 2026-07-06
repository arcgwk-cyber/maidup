import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';
import jwt from 'jsonwebtoken';
import { config } from './config';

let io: SocketIOServer;

export const initSocket = (httpServer: HttpServer) => {
  io = new SocketIOServer(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // Socket Authentication Middleware
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication required'));
    }
    try {
      const payload = jwt.verify(token, config.jwtSecret) as any;
      socket.data.user = payload;
      next();
    } catch (err) {
      next(new Error('Invalid token'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id} (User: ${socket.data.user.userId})`);

    // Clients join a room specific to a booking ID to receive updates
    socket.on('join-booking-room', (bookingId: string) => {
      socket.join(`booking_${bookingId}`);
      console.log(`User ${socket.data.user.userId} joined room booking_${bookingId}`);
    });

    // Partner emits location updates which are broadcasted to the booking room
    socket.on('partner-location', (data: { bookingId: string, lat: number, lng: number }) => {
      // Broadcast to everyone in the room except the sender
      socket.to(`booking_${data.bookingId}`).emit('partner-location-update', {
        lat: data.lat,
        lng: data.lng,
        timestamp: new Date().toISOString()
      });
    });

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

// Helper function to emit events from Express controllers (like booking status updates)
export const getIo = () => {
  if (!io) {
    throw new Error('Socket.io has not been initialized');
  }
  return io;
};
