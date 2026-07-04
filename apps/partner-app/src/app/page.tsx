export default function PartnerDashboard() {
  return (
    <main className="p-6 pb-24 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Partner</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-medium text-green-700">ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Today's Earnings</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">₹1,240</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Jobs Completed</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Active Jobs</h2>
      <div className="space-y-4">
        <a href="/jobs/123" className="block p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Kitchen Deep Cleaning</h3>
            <span className="text-sm font-medium text-orange-600">ON THE WAY</span>
          </div>
          <p className="text-sm text-gray-600">Customer: John Doe</p>
          <p className="text-sm text-gray-500 mt-1">123 Main St, Block B</p>
        </a>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
        <a href="/" className="text-blue-600 font-medium">Dashboard</a>
        <a href="/wallet" className="text-gray-500 font-medium">Wallet</a>
      </div>
    </main>
  );
}
