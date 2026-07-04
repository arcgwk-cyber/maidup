export default function WalletPage() {
  return (
    <main className="p-6 pb-24 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Wallet & Earnings</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg mb-6">
        <p className="text-blue-100 mb-1">Available Balance</p>
        <h2 className="text-4xl font-bold">₹4,500</h2>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-bold shadow-sm">
          Withdraw Funds
        </button>
      </div>

      <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
          <div>
            <p className="font-semibold text-gray-800">Job #122 Settlement</p>
            <p className="text-xs text-gray-500">Today, 2:30 PM</p>
          </div>
          <span className="text-green-600 font-bold">+₹499</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
          <div>
            <p className="font-semibold text-gray-800">Bank Withdrawal</p>
            <p className="text-xs text-gray-500">Yesterday, 9:00 AM</p>
          </div>
          <span className="text-red-500 font-bold">-₹2,000</span>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
        <a href="/" className="text-gray-500 font-medium">Dashboard</a>
        <a href="/wallet" className="text-blue-600 font-medium">Wallet</a>
      </div>
    </main>
  );
}
