import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth';
import { createRazorpayOrder, verifyRazorpayPayment } from '../controllers/payment.controller';

const router = Router();

// Customer creates a payment order
router.post('/razorpay/create-order', requireAuth, requireRole(['CUSTOMER']), createRazorpayOrder);

// Customer verifies payment after checkout
router.post('/razorpay/verify', requireAuth, requireRole(['CUSTOMER']), verifyRazorpayPayment);

export default router;
