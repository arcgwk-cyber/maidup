import { Request, Response } from 'express';
import { prisma } from '@maidapp/db';
import { getIo } from '../socket';

export const createBooking = async (req: Request, res: Response) => {
  try {
    // req.user is set by requireAuth middleware
    const userId = (req as any).user.userId;
    
    const { addressId, scheduledAt, items } = req.body;
    
    // 1. Get the customer ID
    const customer = await prisma.customer.findUnique({
      where: { userId },
    });
    
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // 2. Calculate Total Price
    let totalPrice = 0;
    const bookingItemsToCreate = [];

    for (const item of items) {
      const service = await prisma.service.findUnique({
        where: { id: item.serviceId }
      });
      
      if (!service) {
        return res.status(404).json({ message: `Service ${item.serviceId} not found` });
      }
      
      const priceForQuantity = service.price * (item.quantity || 1);
      totalPrice += priceForQuantity;
      
      bookingItemsToCreate.push({
        serviceId: service.id,
        quantity: item.quantity || 1,
        priceAtBooking: service.price
      });
    }

    // 3. Create the Booking
    const booking = await prisma.booking.create({
      data: {
        customerId: customer.id,
        addressId,
        scheduledAt: new Date(scheduledAt),
        totalPrice,
        items: {
          create: bookingItemsToCreate
        }
      },
      include: {
        items: true,
        address: true
      }
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getMyBookings = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    
    let whereClause = {};
    
    if (user.role === 'CUSTOMER') {
      const customer = await prisma.customer.findUnique({ where: { userId: user.userId } });
      if (customer) whereClause = { customerId: customer.id };
    } else if (user.role === 'PARTNER') {
      const partner = await prisma.partner.findUnique({ where: { userId: user.userId } });
      if (partner) whereClause = { partnerId: partner.id };
    } else {
      // ADMIN sees all
    }

    const bookings = await prisma.booking.findMany({
      where: whereClause,
      include: {
        address: true,
        partner: {
          include: { user: { select: { name: true, phone: true } } }
        },
        items: {
          include: { service: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = (req as any).user;
    
    const booking = await prisma.booking.findUnique({ where: { id } });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Validation could go here (e.g. only assigned partner can update)
    
    let updateData: any = { status };
    
    if (status === 'STARTED') {
      updateData.startedAt = new Date();
    } else if (status === 'COMPLETED') {
      updateData.completedAt = new Date();
    }

    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: updateData
    });

    // Broadcast the status update to anyone in the booking room
    getIo().to(`booking_${id}`).emit('booking-status-changed', {
      bookingId: id,
      status,
      timestamp: new Date().toISOString()
    });

    res.json(updatedBooking);
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
