import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { initSocket } from './socket';
import { config } from './config';

dotenv.config();

const app: Express = express();
const httpServer = createServer(app);
const port = config.port;

// Initialize Socket.io
initSocket(httpServer);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

import authRoutes from './routes/auth.routes';
import bookingRoutes from './routes/booking.routes';
import paymentRoutes from './routes/payment.routes';

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API Server for MaidApp is running');
});

httpServer.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
