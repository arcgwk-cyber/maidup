"use client";

import { useEffect, useState } from 'react';
import { connectSocket, disconnectSocket } from '@maidapp/api-client';

export default function LocationListener({ bookingId }: { bookingId: string }) {
  const [partnerLocation, setPartnerLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let socket = connectSocket();

    socket.on('connect', () => {
      setIsConnected(true);
      socket.emit('join-booking-room', bookingId);
    });

    socket.on('partner-location-update', (data: { lat: number, lng: number, timestamp: string }) => {
      setPartnerLocation({ lat: data.lat, lng: data.lng });
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // Make sure it connects if it was already initialized but disconnected
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      disconnectSocket();
    };
  }, [bookingId]);

  return (
    <div className="mt-6 p-4 border rounded-xl bg-green-50 border-green-100">
      <h3 className="font-bold text-green-900 flex items-center">
        <span className="relative flex h-3 w-3 mr-2">
          {isConnected && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`}></span>
        </span>
        Live Partner Tracking
      </h3>
      
      {!partnerLocation ? (
        <p className="text-sm text-green-700 mt-2">Waiting for partner to start journey...</p>
      ) : (
        <div className="mt-2 text-sm text-green-800 font-mono bg-white p-3 rounded-lg border border-green-200">
          <p>Lat: {partnerLocation.lat.toFixed(6)}</p>
          <p>Lng: {partnerLocation.lng.toFixed(6)}</p>
          <p className="text-xs text-gray-500 mt-1 italic">Location updating in real-time</p>
        </div>
      )}
    </div>
  );
}
