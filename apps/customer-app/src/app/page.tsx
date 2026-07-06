"use client";

import { Search, Sparkles, MapPin, Star, ShieldCheck, Clock } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Link from 'next/link';

export default function Home() {
  const user = useAuthStore((state) => state.user);

  const categories = [
    { id: '1', name: 'Kitchen', icon: '🍳', color: 'bg-orange-100' },
    { id: '2', name: 'Bathroom', icon: '🛁', color: 'bg-blue-100' },
    { id: '3', name: 'Sofa', icon: '🛋️', color: 'bg-purple-100' },
    { id: '4', name: 'Full Home', icon: '🏠', color: 'bg-green-100' },
  ];

  return (
    <main className="pb-24">
      {/* Header section with curve */}
      <div className="bg-blue-600 rounded-b-[40px] pt-12 pb-8 px-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles size={120} />
        </div>
        
        <div className="flex justify-between items-center relative z-10">
          <div>
            <p className="text-blue-100 text-sm font-medium">Location</p>
            <div className="flex items-center text-white font-bold mt-0.5">
              <MapPin size={16} className="mr-1" />
              Mumbai, India
            </div>
          </div>
          {!user ? (
            <Link href="/login" className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
              Sign In
            </Link>
          ) : (
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-sm">
              {user.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="mt-8 relative z-10">
          <h1 className="text-3xl font-extrabold text-white mb-2 leading-tight">
            Need a <br /> spotless home?
          </h1>
        </div>

        <div className="mt-6 relative z-10 flex items-center bg-white rounded-2xl p-2 shadow-lg">
          <div className="pl-3 text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for 'Sofa Cleaning'" 
            className="w-full pl-3 pr-4 py-2 outline-none text-gray-700 bg-transparent"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          <button className="text-sm text-blue-600 font-bold">See All</button>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link href={`/services/${cat.id}`} key={cat.id} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700 mt-2 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="px-6 mt-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-blue-600">
            <ShieldCheck size={100} />
          </div>
          <div className="relative z-10 w-2/3">
            <h3 className="font-bold text-blue-900 mb-1">100% Safe & Verified</h3>
            <p className="text-xs text-blue-700">All our partners undergo strict background checks.</p>
          </div>
          <div className="relative z-10 h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
            <ShieldCheck size={24} />
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="px-6 mt-10 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Packages</h2>
        
        <div className="space-y-4">
          {[
            { title: 'Intense Deep Clean', price: '₹1499', rating: '4.8', time: '3 hrs', badge: 'Bestseller' },
            { title: 'Sofa Shampooing', price: '₹599', rating: '4.9', time: '1 hr' }
          ].map((pkg, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex justify-between items-center relative overflow-hidden">
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}
              
              <div className="w-2/3 pt-2">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{pkg.title}</h3>
                <div className="flex items-center text-xs text-gray-500 space-x-3 mb-2">
                  <span className="flex items-center"><Star size={12} className="text-orange-400 mr-1 fill-current" /> {pkg.rating}</span>
                  <span className="flex items-center"><Clock size={12} className="mr-1" /> {pkg.time}</span>
                </div>
                <p className="font-extrabold text-blue-600">{pkg.price}</p>
              </div>
              
              <button className="bg-gray-900 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md hover:bg-gray-800 transition-colors">
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
