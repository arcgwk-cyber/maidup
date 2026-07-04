export default async function ServiceCategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const resolvedParams = await params;
  return (
    <main className="p-8 pb-24">
      <h1 className="text-2xl font-bold capitalize text-blue-600">{resolvedParams.categoryId} Services</h1>
      <p className="text-gray-500 mt-2">Select a service to view pricing and duration.</p>
      
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-white rounded-lg border shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Standard Cleaning</h3>
            <p className="text-sm text-gray-500">₹499 • 45 mins</p>
          </div>
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded font-medium">Add</button>
        </div>
        
        <div className="p-4 bg-white rounded-lg border shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Deep Cleaning</h3>
            <p className="text-sm text-gray-500">₹999 • 120 mins</p>
          </div>
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded font-medium">Add</button>
        </div>
      </div>
    </main>
  );
}
