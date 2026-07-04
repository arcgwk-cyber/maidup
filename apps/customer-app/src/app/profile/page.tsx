export default function ProfilePage() {
  return (
    <main className="p-8 pb-24 bg-gray-50 min-h-screen">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">
          JD
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
          <p className="text-gray-500">+91 9876543210</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <a href="#" className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="font-medium text-gray-700">Wallet Balance</span>
          <span className="text-green-600 font-bold">₹250</span>
        </a>
        <a href="#" className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="font-medium text-gray-700">Manage Addresses</span>
          <span className="text-gray-400">➔</span>
        </a>
        <a href="#" className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="font-medium text-gray-700">MaidApp Membership</span>
          <span className="text-orange-500 font-medium">Gold Member</span>
        </a>
        <a href="#" className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="font-medium text-red-600">Logout</span>
        </a>
      </div>
      
      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
        <a href="/" className="text-gray-500 font-medium">Home</a>
        <a href="/booking" className="text-gray-500 font-medium">Bookings</a>
        <a href="/profile" className="text-blue-600 font-medium">Profile</a>
      </div>
    </main>
  );
}
