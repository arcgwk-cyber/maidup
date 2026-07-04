export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-medium">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">₹1,24,500</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-medium">Active Bookings</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
          <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-medium">Registered Partners</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-medium">Pending Approvals</p>
          <p className="text-3xl font-bold text-orange-500 mt-2">8</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400">Recharts Graph Placeholder (Revenue over time)</p>
      </div>
    </div>
  );
}
