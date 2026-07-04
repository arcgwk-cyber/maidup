export type Role = 'CUSTOMER' | 'PARTNER' | 'ADMIN';

export type User = {
  id: string;
  phone: string;
  name: string;
  role: Role;
};

export type ServiceCategory = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
};

export type Service = {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price: number;
  estimatedMinutes: number;
  imageUrl?: string;
};

export type BookingStatus = 'PENDING' | 'PARTNER_ASSIGNED' | 'ON_THE_WAY' | 'REACHED' | 'STARTED' | 'COMPLETED' | 'CANCELLED';

export type Booking = {
  id: string;
  customerId: string;
  partnerId?: string;
  addressId: string;
  status: BookingStatus;
  scheduledAt: string;
  totalPrice: number;
};

export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
