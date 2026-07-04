export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold tracking-tight text-blue-600">Home Services Marketplace</h1>
        <p className="mt-4 text-lg text-gray-600">Find the best cleaning professionals near you.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-5xl">
        <a href="/services/kitchen" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Kitchen Cleaning</h2>
        </a>
        <a href="/services/bathroom" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Bathroom Deep Clean</h2>
        </a>
        <a href="/services/sofa" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Sofa Cleaning</h2>
        </a>
        <a href="/services/full-home" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Full Home Makeover</h2>
        </a>
      </div>
      
      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
        <a href="/" className="text-blue-600 font-medium">Home</a>
        <a href="/booking" className="text-gray-500 font-medium">Bookings</a>
        <a href="/profile" className="text-gray-500 font-medium">Profile</a>
      </div>
    </main>
  );
}
