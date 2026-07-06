import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import BottomNav from "@/components/BottomNav";
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
  title: "MaidApp - Home Cleaning Marketplace",
  description: "Next Generation Home Cleaning Marketplace Platform",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MaidApp",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 font-sans`}
      >
        <Providers>
          <div className="min-h-[100dvh] relative flex flex-col">
            <div className="flex-1 pb-20 md:pb-0">
              {children}
            </div>
            <Footer />
            {/* Bottom Nav only shows on small screens */}
            <div className="block md:hidden">
              <BottomNav />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
