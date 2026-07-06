"use client";

import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'next/navigation';
import { LogOut, User, Settings, CreditCard, Bell, ChevronRight, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const menuItems = [
    { icon: User, label: 'Edit Profile', href: '#' },
    { icon: CreditCard, label: 'Payment Methods', href: '#' },
    { icon: Bell, label: 'Notifications', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: HelpCircle, label: 'Help & Support', href: '#' },
  ];

  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white pt-16 pb-8 px-6 rounded-b-[30px] shadow-sm flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-extrabold shadow-lg mb-4 ring-4 ring-blue-50">
          {user.name.charAt(0)}
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900">{user.name}</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">{user.email}</p>
        <div className="mt-4 inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
          MaidApp Member
        </div>
      </div>

      {/* Menu Options */}
      <div className="px-6 mt-8 space-y-3">
        {menuItems.map((item, i) => (
          <button key={i} className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors active:scale-[0.98]">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                <item.icon size={20} />
              </div>
              <span className="font-bold text-gray-800">{item.label}</span>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </button>
        ))}

        <button 
          onClick={handleLogout}
          className="w-full mt-8 bg-red-50 p-4 rounded-2xl border border-red-100 flex items-center justify-between hover:bg-red-100 transition-colors active:scale-[0.98]"
        >
          <div className="flex items-center text-red-600">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <LogOut size={20} />
            </div>
            <span className="font-bold">Log Out</span>
          </div>
        </button>
      </div>
    </main>
  );
}
