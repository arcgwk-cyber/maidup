export default function CancelPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4">Cancellation Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            We understand that plans change. Our cancellation policy is designed to be fair to both customers and our Service Partners:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>More than 24 hours prior:</strong> Cancellations made more than 24 hours before the scheduled service time will receive a 100% full refund.</li>
            <li><strong>Between 4 and 24 hours prior:</strong> Cancellations will incur a 20% cancellation fee to compensate the Service Partner for blocked time.</li>
            <li><strong>Less than 4 hours prior:</strong> Cancellations made within 4 hours of the scheduled time are non-refundable.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
