"use client";

import { Search, Sparkles, MapPin, Star, ShieldCheck, Clock, CheckCircle2, ChevronRight, Menu } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Link from 'next/link';

export default function Home() {
  const user = useAuthStore((state) => state.user);

  const categories = [
    { id: '1', name: 'Kitchen', icon: '🍳', color: 'bg-orange-100', text: 'text-orange-600' },
    { id: '2', name: 'Bathroom', icon: '🛁', color: 'bg-blue-100', text: 'text-blue-600' },
    { id: '3', name: 'Sofa', icon: '🛋️', color: 'bg-purple-100', text: 'text-purple-600' },
    { id: '4', name: 'Full Home', icon: '🏠', color: 'bg-green-100', text: 'text-green-600' },
    { id: '5', name: 'Carpet', icon: '🧹', color: 'bg-pink-100', text: 'text-pink-600' },
    { id: '6', name: 'Plumbing', icon: '🔧', color: 'bg-gray-100', text: 'text-gray-600' },
  ];

  const packages = [
    { id: 'pkg-1', title: 'Intense Deep Clean', price: '₹1499', rating: '4.8', time: '3 hrs', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop' },
    { id: 'pkg-2', title: 'Sofa Shampooing', price: '₹599', rating: '4.9', time: '1 hr', img: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=2070&auto=format&fit=crop' },
    { id: 'pkg-3', title: 'Bathroom Disinfection', price: '₹899', rating: '4.7', time: '1.5 hrs', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop' }
  ];

  return (
    <main className="w-full bg-gray-50 font-sans">
      
      {/* Desktop Top Nav */}
      <nav className="hidden md:flex items-center justify-between px-10 py-5 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-blue-600" size={28} />
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">MaidApp</span>
        </div>
        <div className="flex items-center space-x-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/booking" className="hover:text-blue-600 transition-colors">My Bookings</Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Safety Promise</Link>
        </div>
        <div>
          {!user ? (
            <Link href="/login" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95">
              Sign In
            </Link>
          ) : (
            <Link href="/profile" className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-full transition-colors">
              <span className="font-bold text-gray-800">{user.name}</span>
              <div className="h-10 w-10 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                {user.name.charAt(0)}
              </div>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Top Header (Only visible on small screens) */}
      <div className="md:hidden bg-blue-600 pt-12 pb-6 px-6 relative overflow-hidden rounded-b-[40px] shadow-lg">
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles size={120} />
        </div>
        <div className="flex justify-between items-center relative z-10">
          <div>
            <p className="text-blue-100 text-sm font-medium">Location</p>
            <div className="flex items-center text-white font-bold mt-0.5">
              <MapPin size={16} className="mr-1" /> Mumbai, India
            </div>
          </div>
          {!user ? (
            <Link href="/login" className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
              Sign In
            </Link>
          ) : (
            <Link href="/profile" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-sm">
              {user.name.charAt(0)}
            </Link>
          )}
        </div>
        <div className="mt-8 relative z-10">
          <h1 className="text-3xl font-extrabold text-white leading-tight">Need a <br/> spotless home?</h1>
        </div>
        <div className="mt-6 relative z-10 flex items-center bg-white rounded-2xl p-2 shadow-lg">
          <div className="pl-3 text-gray-400"><Search size={20} /></div>
          <input type="text" placeholder="Search for 'Sofa Cleaning'" className="w-full pl-3 pr-4 py-2 outline-none text-gray-700 bg-transparent" />
        </div>
      </div>

      {/* Massive Desktop Hero Banner */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-between px-10 lg:px-24 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 rounded-l-[100px] opacity-5 z-0 transform translate-x-20"></div>
        <div className="md:w-1/2 relative z-10 pr-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} className="mr-2" /> #1 Home Cleaning App
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Premium Home <br/> <span className="text-blue-600">Cleaning</span> Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Book top-rated, background-checked professionals in 60 seconds. Sit back and relax while we make your home spotless.
          </p>
          <div className="flex items-center bg-white rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-md border border-gray-100">
            <div className="pl-4 text-gray-400"><Search size={24} /></div>
            <input type="text" placeholder="What do you need help with?" className="w-full pl-4 pr-4 py-3 outline-none text-gray-700 bg-transparent text-lg" />
            <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">Search</button>
          </div>
          <div className="flex items-center space-x-6 mt-10">
            <div className="flex items-center text-gray-600 font-medium">
              <CheckCircle2 size={20} className="text-green-500 mr-2" /> 100% Verified
            </div>
            <div className="flex items-center text-gray-600 font-medium">
              <CheckCircle2 size={20} className="text-green-500 mr-2" /> Safe Payments
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative z-10 mt-10 md:mt-0 flex justify-end">
          <div className="relative w-full max-w-lg h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" alt="Cleaning Professional" className="object-cover w-full h-full" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Background Checked</h4>
                <p className="text-sm text-gray-600">All partners undergo strict verification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar (Desktop) */}
      <div className="hidden md:flex justify-around items-center px-24 py-12 bg-white border-y border-gray-100">
        <div className="flex flex-col items-center text-center max-w-[250px]">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm"><ShieldCheck size={32} /></div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Zero-Tolerance Policy</h3>
          <p className="text-gray-500 text-sm">Strict anti-abuse guidelines to ensure safety for everyone.</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[250px]">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 shadow-sm"><CheckCircle2 size={32} /></div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Satisfaction Guarantee</h3>
          <p className="text-gray-500 text-sm">Not happy? We will re-do it for free until it's perfect.</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[250px]">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-4 shadow-sm"><Star size={32} /></div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Top Rated Partners</h3>
          <p className="text-gray-500 text-sm">Only the highest rated professionals make the cut.</p>
        </div>
      </div>

      {/* Trust Banner (Mobile) */}
      <div className="md:hidden px-6 mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-blue-600"><ShieldCheck size={100} /></div>
          <div className="relative z-10 w-2/3">
            <h3 className="font-bold text-blue-900 mb-1">100% Safe & Verified</h3>
            <p className="text-xs text-blue-700">All our partners undergo strict background checks.</p>
          </div>
          <div className="relative z-10 h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
            <ShieldCheck size={24} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-24 py-12">
        
        {/* Categories */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Explore Services</h2>
            <button className="text-blue-600 font-bold hover:underline flex items-center">See All <ChevronRight size={16} /></button>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
            {categories.map((cat) => (
              <Link href={`/services/${cat.id}`} key={cat.id} className="flex flex-col items-center group cursor-pointer">
                <div className={`w-16 h-16 md:w-24 md:h-24 ${cat.color} rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-4xl shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}>
                  {cat.icon}
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-800 mt-3 text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Popular Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-48 w-full relative overflow-hidden">
                  <img src={pkg.img} alt={pkg.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                    <span className="flex items-center font-bold text-gray-700"><Star size={16} className="text-orange-400 mr-1.5 fill-current" /> {pkg.rating}</span>
                    <span className="flex items-center"><Clock size={16} className="mr-1.5" /> {pkg.time}</span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-xl mb-2">{pkg.title}</h3>
                  
                  <div className="mt-auto pt-6 flex justify-between items-center">
                    <p className="font-extrabold text-blue-600 text-2xl">{pkg.price}</p>
                    <Link href={`/services/${pkg.id}`} className="bg-gray-900 text-white text-sm font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-colors">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
