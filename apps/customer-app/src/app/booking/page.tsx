import LocationListener from '../../components/LocationListener';

export default function BookingPage() {
  return (
    <main className="p-8 pb-24">
      <h1 className="text-2xl font-bold text-gray-900">Your Bookings</h1>
      
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-white rounded-lg border shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Kitchen Deep Cleaning</h3>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">COMPLETED</span>
          </div>
          <p className="text-sm text-gray-500">Yesterday, 10:00 AM</p>
          <p className="text-sm font-medium mt-2">₹599</p>
        </div>
        
        <div className="p-4 bg-white rounded-lg border shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Sofa Cleaning</h3>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">PENDING</span>
          </div>
          <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
          <p className="text-sm font-medium mt-2">₹799</p>
          <LocationListener bookingId="mock-booking-123" />
        </div>
      </div>
      
      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
        <a href="/" className="text-gray-500 font-medium">Home</a>
        <a href="/booking" className="text-blue-600 font-medium">Bookings</a>
        <a href="/profile" className="text-gray-500 font-medium">Profile</a>
      </div>
    </main>
  );
}
