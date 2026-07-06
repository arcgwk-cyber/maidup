import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaidApp - Admin Dashboard",
  description: "Next Generation Home Cleaning Marketplace Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 flex h-screen`}
      >
        <Providers>
          <aside className="w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold text-blue-400">MaidApp Admin</div>
            <nav className="flex-1 px-4 space-y-2">
              <a href="/" className="block px-4 py-2 rounded bg-gray-800 text-white">Dashboard</a>
              <a href="/bookings" className="block px-4 py-2 rounded text-gray-300 hover:bg-gray-800">Bookings</a>
              <a href="/users" className="block px-4 py-2 rounded text-gray-300 hover:bg-gray-800">Users & Partners</a>
              <a href="/services" className="block px-4 py-2 rounded text-gray-300 hover:bg-gray-800">Services</a>
            </nav>
          </aside>
          <main className="flex-1 overflow-y-auto flex flex-col bg-gray-50">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
