export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4">Refund Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Refunds are issued under the following conditions:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li>If a Service Partner fails to show up for a scheduled booking and no replacement is available.</li>
            <li>If a booking is canceled by the Customer within the eligible 100% refund window (see Cancellation Policy).</li>
            <li>If MaidApp cancels the service due to unforeseen circumstances or operational issues.</li>
          </ul>
          <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="font-medium text-blue-900">
              <strong>Processing Time:</strong> All eligible refunds will be initiated automatically. Please allow <strong>5 to 7 business days</strong> for the refunded amount to reflect in your original payment method (Bank Account, Card, or UPI), depending on your bank's processing times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
