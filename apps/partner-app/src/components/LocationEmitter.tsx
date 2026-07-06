"use client";

import { useEffect, useState } from 'react';
import { connectSocket, disconnectSocket } from '@maidapp/api-client';

export default function LocationEmitter({ bookingId }: { bookingId: string }) {
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, []);

  const toggleLocationSharing = () => {
    if (isSharing) {
      disconnectSocket();
      setIsSharing(false);
    } else {
      try {
        const socket = connectSocket();
        socket.emit('join-booking-room', bookingId);
        
        // In a real app, use navigator.geolocation.watchPosition
        // For testing, we emit a mock location interval
        const intervalId = setInterval(() => {
          socket.emit('partner-location', {
            bookingId,
            lat: 19.0760 + (Math.random() * 0.001),
            lng: 72.8777 + (Math.random() * 0.001)
          });
        }, 5000);

        setIsSharing(true);

        socket.on('disconnect', () => {
          clearInterval(intervalId);
          setIsSharing(false);
        });

      } catch (err) {
        console.error(err);
        setError('Failed to connect to tracking server');
      }
    }
  };

  return (
    <div className="mt-4 p-4 border rounded-xl bg-blue-50">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-blue-900">Live Tracking</h4>
          <p className="text-sm text-blue-700">
            {isSharing ? 'Sharing location with customer' : 'Location sharing paused'}
          </p>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
        <button 
          onClick={toggleLocationSharing}
          className={`px-4 py-2 rounded-lg font-bold text-white shadow-sm ${isSharing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isSharing ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}
