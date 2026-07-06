import LocationEmitter from '../../../components/LocationEmitter';

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <main className="p-6 pb-24 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <a href="/" className="text-gray-500 font-medium">← Back</a>
        <h1 className="text-xl font-bold">Job #{resolvedParams.id}</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4">
        <h2 className="text-xl font-bold mb-2">Kitchen Deep Cleaning</h2>
        <p className="text-gray-600 mb-4">₹599 • Expected time: 2 hours</p>
        
        <hr className="my-4" />
        
        <h3 className="font-semibold mb-2">Customer Details</h3>
        <p className="font-medium">John Doe</p>
        <p className="text-gray-500 text-sm">123 Main St, Block B, Floor 4</p>
        
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-lg font-medium">Call</button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium">Map</button>
        </div>
      </div>

      <LocationEmitter bookingId={resolvedParams.id} />

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-4">
        <h3 className="font-semibold mb-4">Job Actions</h3>
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mb-3 shadow-md">
          Reached Location
        </button>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md opacity-50 cursor-not-allowed">
          Start Verification
        </button>
      </div>
    </main>
  );
}
