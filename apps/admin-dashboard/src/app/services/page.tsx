export default function ServicesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add Service</button>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">Kitchen Deep Cleaning</h3>
            <p className="text-gray-500 text-sm mt-1">₹599 • 2 Hours</p>
          </div>
          <button className="text-blue-600 font-medium">Edit</button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">Bathroom Cleaning</h3>
            <p className="text-gray-500 text-sm mt-1">₹249 • 45 Mins</p>
          </div>
          <button className="text-blue-600 font-medium">Edit</button>
        </div>
      </div>
    </div>
  );
}
