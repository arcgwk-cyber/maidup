"use client";

import { ChevronLeft, Star, Clock, CheckCircle2, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServiceDetailsPage() {
  const params = useParams();
  
  return (
    <main className="w-full bg-gray-50 min-h-screen pb-32 md:pb-0">
      
      {/* Mobile Back Button */}
      <div className="md:hidden absolute top-6 left-6 z-50">
        <Link href="/" className="w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-sm border border-white/20">
          <ChevronLeft size={24} />
        </Link>
      </div>

      <div className="md:hidden w-full h-72 relative">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
          alt="Deep Cleaning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto md:py-12 md:px-6">
        
        {/* Desktop Back Button */}
        <div className="hidden md:block mb-8">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 font-bold transition-colors">
            <ChevronLeft size={20} className="mr-1" /> Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-t-[40px] md:rounded-[40px] shadow-2xl md:shadow-[0_8px_40px_rgb(0,0,0,0.04)] -mt-10 relative z-10 p-6 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12">
          
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4">
              <Star size={14} className="mr-1 fill-current" /> 4.8 (1.2k Reviews)
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Intense Deep Cleaning
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
              A comprehensive top-to-bottom cleaning of your home, focusing on hard-to-reach areas and stubborn stains. Leaves your home sparkling like new.
            </p>

            <div className="bg-blue-50/50 rounded-3xl p-6 border border-blue-100 mb-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <CheckCircle2 size={20} className="text-blue-600 mr-2" /> What's Included
              </h3>
              <ul className="space-y-4">
                {[
                  'Dry vacuuming of all rooms & furniture',
                  'Deep scrubbing of bathroom tiles & fittings',
                  'Kitchen degreasing (chimney, cabinets, slabs)',
                  'Floor scrubbing & mopping with sanitizers',
                  'Window channels & ceiling fans dusting'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <CheckCircle2 size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <Info size={20} className="text-gray-400 flex-shrink-0" />
              <p>Customers are requested to provide a ladder or stool for reaching high fans & ceilings.</p>
            </div>
          </div>

          {/* Desktop Right Column / Mobile Sticky Footer equivalent */}
          <div className="md:w-96 flex-shrink-0">
            <div className="hidden md:block w-full h-64 rounded-3xl overflow-hidden shadow-lg mb-8 relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                alt="Deep Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 sticky top-32">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Total Price</p>
                  <p className="text-4xl font-extrabold text-blue-600">₹1499</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 font-medium mb-1">Est. Time</p>
                  <p className="text-xl font-bold text-gray-900 flex items-center justify-end"><Clock size={18} className="mr-1 text-gray-400" /> 3 hrs</p>
                </div>
              </div>
              
              <button className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-2xl shadow-xl hover:bg-gray-800 transition-all active:scale-[0.98] flex justify-center items-center">
                Book Service Now
              </button>
              
              <div className="mt-6 flex items-center justify-center text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-green-500 mr-1.5" /> 100% Satisfaction Guarantee
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between">
        <div>
          <p className="text-2xl font-extrabold text-blue-600">₹1499</p>
          <p className="text-xs text-gray-500 font-medium">3 hrs • Top Rated</p>
        </div>
        <button className="bg-gray-900 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg active:scale-95 transition-transform">
          Book Now
        </button>
      </div>

    </main>
  );
}
