import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-10 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-blue-600" size={24} />
          <span className="text-xl font-extrabold text-blue-900 tracking-tight">MaidApp</span>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
          <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/cancel-policy" className="hover:text-blue-600 transition-colors">Cancel Policy</Link>
          <Link href="/refund-policy" className="hover:text-blue-600 transition-colors">Refund Policy</Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 text-xs text-gray-400 text-center md:text-left">
        &copy; {new Date().getFullYear()} MaidApp. All rights reserved.
      </div>
    </footer>
  );
}
