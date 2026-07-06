export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4">Contact Us</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            We are here to help! If you have any questions, concerns, or need assistance with your booking, please reach out to us using the details below:
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-6">
            <h3 className="font-bold text-xl mb-4">Customer Support</h3>
            <p><strong>Email:</strong> support@maidapp.com</p>
            <p><strong>Phone:</strong> +91 99999 99999</p>
            <p><strong>Operating Hours:</strong> Monday - Sunday, 8:00 AM to 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
