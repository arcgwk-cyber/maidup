import { Request, Response } from 'express';
import { prisma } from '@maidapp/db';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { config } from '../config';

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: config.razorpayKeyId,
  key_secret: config.razorpayKeySecret
});

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.body;
    const userId = (req as any).user.userId;

    const customer = await prisma.customer.findUnique({ where: { userId } });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId }
    });

    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    // Amount in paise (multiply by 100)
    const amount = Math.round(booking.totalPrice * 100);

    const options = {
      amount,
      currency: 'INR',
      receipt: `receipt_booking_${booking.id}`,
    };

    const order = await razorpay.orders.create(options);

    // Create a pending Payment record
    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        customerId: customer.id,
        amount: booking.totalPrice,
        status: 'PENDING',
        method: 'UPI', // Defaulting for now, frontend can specify
        transactionId: order.id // Store razorpay order id here temporarily
      }
    });

    res.json(order);
  } catch (error) {
    console.error('Create Razorpay Order Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const verifyRazorpayPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const secret = config.razorpayKeySecret;

    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpay_signature) {
      return res.status(400).json({ message: 'Transaction not legit!' });
    }

    // Find the payment by order ID
    const payment = await prisma.payment.findFirst({
      where: { transactionId: razorpay_order_id }
    });

    if (!payment) return res.status(404).json({ message: 'Payment record not found' });

    // Mark Payment as COMPLETED and update transactionId to the actual payment_id
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: 'COMPLETED',
        transactionId: razorpay_payment_id
      }
    });

    res.json({ message: 'Payment verified successfully', paymentId: razorpay_payment_id });
  } catch (error) {
    console.error('Verify Razorpay Payment Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
