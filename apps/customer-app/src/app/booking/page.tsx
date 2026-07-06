"use client";

import { useAuthStore } from '../../store/authStore';
import LocationListener from '../../components/LocationListener';
import { Calendar, Clock, MapPin, CheckCircle2, CircleDashed } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BookingPage() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  // If you strictly want to force login for bookings, you can redirect here:
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null; // Prevent flash while redirecting

  return (
    <main className="pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-extrabold text-gray-900">Your Bookings</h1>
        <p className="text-sm text-gray-500 mt-1">Track your active and past services</p>
      </div>
      
      <div className="px-6 mt-6 space-y-5">
        
        {/* Active Booking Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-blue-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
                  <CircleDashed size={12} className="mr-1 animate-spin-slow" /> ACTIVE
                </span>
                <h3 className="font-extrabold text-lg text-gray-900 leading-tight">Sofa Deep Cleaning</h3>
                <p className="text-sm font-bold text-blue-600 mt-1">₹799</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-2 border border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-2 text-gray-400" />
                <span className="font-medium">Tomorrow, 14th Oct</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2 text-gray-400" />
                <span className="font-medium">02:00 PM - 03:00 PM</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={14} className="mr-2 text-gray-400" />
                <span className="font-medium truncate">Block B, 4th Floor, Apartment</span>
              </div>
            </div>
            
            {/* Live Tracking Widget */}
            <LocationListener bookingId="mock-booking-123" />
          </div>
        </div>
        
        {/* Past Booking Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative opacity-70">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 mb-2">
                  <CheckCircle2 size={12} className="mr-1" /> COMPLETED
                </span>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">Kitchen Deep Cleaning</h3>
                <p className="text-sm font-bold text-gray-900 mt-1">₹599</p>
              </div>
            </div>

            <div className="mt-3 text-xs text-gray-500 font-medium">
              Completed on 12th Oct • Rated 5 Stars
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
