export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-500 font-medium">Last Updated: July 6, 2026</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing, registering, or using MaidApp ("the Platform", "we", "our", or "us"), you agree to be bound by these Terms & Conditions. 
              If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-extrabold text-red-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              2. Zero-Tolerance Safety Policy
            </h2>
            <p className="font-medium mb-3">
              The safety, dignity, and well-being of our Service Partners (maids, cleaners, and professionals) is our absolute highest priority. 
              Many of our Service Partners are women, and we enforce a strict, zero-tolerance policy against any form of abuse.
            </p>
            <ul className="list-disc pl-5 space-y-2 font-bold text-red-900">
              <li><strong>Physical Abuse:</strong> Any unwanted physical contact, assault, or threat of violence.</li>
              <li><strong>Sexual Harassment:</strong> Any inappropriate comments, gestures, exposure, or non-consensual advances.</li>
              <li><strong>Verbal Abuse:</strong> Use of derogatory language, screaming, intimidation, or discriminatory remarks based on caste, religion, or gender.</li>
            </ul>
            <p className="mt-4 font-bold text-red-700">
              Violating this policy will result in the immediate and permanent termination of your account, forfeiture of all wallet funds and pending bookings, and automatic reporting of the incident and your registered details to local Law Enforcement Authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing & Services</h2>
            <p>
              Prices for our services are subject to change without notice. The price displayed at the time of booking is the final price, inclusive of all applicable taxes unless stated otherwise. 
              We reserve the right to modify or discontinue a service (or any part or content thereof) without notice at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Policy</h2>
            <p>
              All payments are securely processed via Razorpay. We accept all major Credit/Debit Cards, UPI, and Net Banking. 
              Payment must be completed in full before the service begins or as dictated by the specific booking flow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
            <p>
              We understand that plans change. Our cancellation policy is designed to be fair to both customers and our Service Partners:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>More than 24 hours prior:</strong> Cancellations made more than 24 hours before the scheduled service time will receive a 100% full refund.</li>
              <li><strong>Between 4 and 24 hours prior:</strong> Cancellations will incur a 20% cancellation fee to compensate the Service Partner for blocked time.</li>
              <li><strong>Less than 4 hours prior:</strong> Cancellations made within 4 hours of the scheduled time are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Policy</h2>
            <p>
              Refunds are issued under the following conditions:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>If a Service Partner fails to show up for a scheduled booking and no replacement is available.</li>
              <li>If a booking is canceled by the Customer within the eligible 100% refund window (see Cancellation Policy).</li>
              <li>If MaidApp cancels the service due to unforeseen circumstances or operational issues.</li>
            </ul>
            <p className="mt-3 font-medium">
              <strong>Processing Time:</strong> All eligible refunds will be initiated automatically. Please allow <strong>5 to 7 business days</strong> for the refunded amount to reflect in your original payment method (Bank Account, Card, or UPI), depending on your bank's processing times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
            <p>
              Any disputes regarding service quality must be raised within 24 hours of service completion via our Help & Support section. 
              We will mediate between the Customer and the Service Partner to reach a fair resolution, which may include partial refunds or service re-do at our sole discretion.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
