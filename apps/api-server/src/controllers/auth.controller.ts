import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@maidapp/db';
import { z } from 'zod';
import { config } from '../config';

const registerSchema = z.object({
  phone: z.string().min(10),
  password: z.string().min(6),
  name: z.string().min(2),
  role: z.enum(['CUSTOMER', 'PARTNER', 'ADMIN']).default('CUSTOMER')
});

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }
    const { phone, password, name, role } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { phone } });
    if (existingUser) {
      return res.status(400).json({ error: 'Phone number already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        phone,
        name,
        password: hashedPassword,
        role: role as any,
      }
    });

    // Create the associated profile based on role
    if (role === 'CUSTOMER') {
      await prisma.customer.create({ data: { userId: user.id } });
    } else if (role === 'PARTNER') {
      await prisma.partner.create({ data: { userId: user.id } });
    } else if (role === 'ADMIN') {
      await prisma.admin.create({ data: { userId: user.id } });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, config.jwtSecret, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user.id, name: user.name, role: user.role }
    });
  } catch (error) {
    console.error('Registration error', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const loginSchema = z.object({
  phone: z.string().min(10),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }
    const { phone, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user || !user.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, config.jwtSecret, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, role: user.role }
    });
  } catch (error) {
    console.error('Login error', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
