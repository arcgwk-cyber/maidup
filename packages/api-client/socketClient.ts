import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (socket) return socket;

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  // Default to localhost in dev, but expect API_URL to be passed in from the frontend env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  socket = io(apiUrl, {
    auth: {
      token
    },
    autoConnect: false // We manually connect after ensuring auth
  });

  return socket;
};

export const connectSocket = () => {
  const s = getSocket();
  if (!s.connected) {
    s.connect();
  }
  return s;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
