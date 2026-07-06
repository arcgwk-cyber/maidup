"use client";

import { useState } from 'react';
import { Power, MapPin, Wallet, CalendarCheck, TrendingUp, Star, ChevronRight, Bell } from 'lucide-react';
import LocationEmitter from '../../components/LocationEmitter';

export default function PartnerDashboard() {
  const [isOnline, setIsOnline] = useState(false);
  const [showIncomingRequest, setShowIncomingRequest] = useState(false);

  // Simulation: Trigger incoming request when they go online for demo purposes
  const toggleOnline = () => {
    setIsOnline(!isOnline);
    if (!isOnline) {
      setTimeout(() => setShowIncomingRequest(true), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-24 font-sans">
      
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 flex justify-between items-center shadow-sm sticky top-0 z-40">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Partner Portal</h1>
          <p className="text-sm font-medium text-gray-500">Welcome back, John</p>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
            <Bell size={20} />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
        </div>
      </div>

      <div className="px-6 mt-6">
        {/* Online/Offline Toggle */}
        <div className={`p-6 rounded-[30px] flex items-center justify-between shadow-lg transition-all duration-500 ${isOnline ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-white border border-gray-100'}`}>
          <div>
            <h2 className={`text-xl font-extrabold ${isOnline ? 'text-white' : 'text-gray-900'}`}>
              {isOnline ? "You're Online!" : "You're Offline"}
            </h2>
            <p className={`text-sm mt-1 font-medium ${isOnline ? 'text-green-100' : 'text-gray-500'}`}>
              {isOnline ? 'Waiting for booking requests...' : 'Go online to receive bookings'}
            </p>
          </div>
          <button 
            onClick={toggleOnline}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform active:scale-95 ${isOnline ? 'bg-white text-green-500' : 'bg-gray-900 text-white'}`}
          >
            <Power size={28} />
          </button>
        </div>

        {isOnline && <LocationEmitter partnerId="mock-partner-123" />}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
              <Wallet size={20} />
            </div>
            <p className="text-gray-500 text-sm font-medium mb-1">Today's Earnings</p>
            <h3 className="text-2xl font-extrabold text-gray-900">₹2,450</h3>
          </div>
          <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
              <CalendarCheck size={20} />
            </div>
            <p className="text-gray-500 text-sm font-medium mb-1">Jobs Completed</p>
            <h3 className="text-2xl font-extrabold text-gray-900">4</h3>
          </div>
        </div>

        {/* Performance Metric */}
        <div className="bg-white mt-4 p-5 rounded-[24px] shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mr-4">
              <Star size={24} className="fill-current" />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Average Rating</p>
              <h3 className="text-xl font-extrabold text-gray-900">4.9 / 5.0</h3>
            </div>
          </div>
          <div className="text-green-500 flex items-center text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
            <TrendingUp size={16} className="mr-1" /> +0.2
          </div>
        </div>
      </div>

      {/* Incoming Request Popup Overlay */}
      {showIncomingRequest && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center pb-8 px-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[40px] p-8 shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
            
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center relative shadow-inner">
                <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
                <MapPin size={32} className="text-blue-600 relative z-10" />
              </div>
            </div>

            <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-2">New Booking Request!</h2>
            <p className="text-center text-gray-500 font-medium mb-8">Intense Deep Cleaning • 3 hrs</p>

            <div className="bg-gray-50 rounded-3xl p-5 mb-8 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-medium text-sm">Distance</span>
                <span className="font-bold text-gray-900">2.4 km away</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-medium text-sm">Expected Earnings</span>
                <span className="font-extrabold text-green-600 text-xl">₹950</span>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium text-sm">Location</span>
                <span className="font-bold text-gray-900">Andheri West, Mumbai</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setShowIncomingRequest(false)}
                className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                Reject
              </button>
              <button 
                onClick={() => setShowIncomingRequest(false)}
                className="flex-[2] bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
              >
                Accept Booking
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
