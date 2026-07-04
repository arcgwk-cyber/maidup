import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { requireAuth, requireRole } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// Example protected route for testing
router.get('/me', requireAuth, (req, res) => {
  res.json({ message: 'Authenticated user data', user: (req as any).user });
});

// Example admin-only route
router.get('/admin-only', requireAuth, requireRole(['ADMIN']), (req, res) => {
  res.json({ message: 'Admin access granted' });
});

export default router;
