"use client";

import { Home, ClipboardList, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  // Hide bottom nav on auth screens
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Bookings', href: '/booking', icon: ClipboardList },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-3 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-3xl">
      <div className="flex justify-between items-center relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center w-16 relative"
            >
              <div className={`p-2 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-50 text-blue-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${isActive ? 'text-blue-600 opacity-100' : 'text-gray-400 opacity-0 transform translate-y-1'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
