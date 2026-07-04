import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth';
import { createBooking, getMyBookings, updateBookingStatus } from '../controllers/booking.controller';

const router = Router();

// Customer creates a booking
router.post('/', requireAuth, requireRole(['CUSTOMER']), createBooking);

// Any authenticated user can get their bookings (logic handled in controller)
router.get('/', requireAuth, getMyBookings);

// Partner/Admin updates booking status
router.put('/:id/status', requireAuth, requireRole(['PARTNER', 'ADMIN']), updateBookingStatus);

export default router;
