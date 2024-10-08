"use client";

import { useState } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
        <nav className="bg-[#F5EFFF] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            <Link href="/">
              <div className="flex-shrink-0">
                <img src="/Assets/Images/Logo.png" className="w-32 h-32" alt="Logo" />
              </div>
              </Link>
              <div className="hidden md:flex md:space-x-8">
                <Link href="/" className="text-2xl text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md font-medium">Home</Link>
                <Link href="/Components/LandingPage/Feature" className="text-2xl text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md font-medium">Features</Link>
                <Link href="/Components/LandingPage/Contact" className="text-2xl text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md font-medium">Contact</Link>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/" className="block text-xl text-gray-500 hover:text-white hover:bg-[#3F418C] px-3 py-2 rounded-md font-medium">Home</Link>
                  <Link href="/Components/LandingPage/Feature" className="block text-xl text-gray-500 hover:bg-[#3F418C] hover:text-white px-3 py-2 rounded-md font-medium">Features</Link>
                  <Link href="/Components/LandingPage/Contact" className="block text-xl text-gray-500 hover:bg-[#3F418C] hover:text-white px-3 py-2 rounded-md font-medium">Contact</Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
