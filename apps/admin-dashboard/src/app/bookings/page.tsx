export default function BookingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Live Bookings Map</h1>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-96 flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Google Maps / React Leaflet Placeholder</p>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Partner Enroute</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Cleaning Started</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Recent Bookings</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#BKG-1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Customer</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Partner</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Started</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
