"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    // Disable scroll for all screen sizes
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Reset on component unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins flex items-center justify-start">
    <div className="absolute inset-0 z-0 opacity-10">
        <img src="/Assets/Images/Logo.png" alt="Background" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 text-center z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12">
          Welcome to AutoModel Insight
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 lg:mb-10">
          Select an option to begin your journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card for Car Identification */}
          <div
            className="cursor-pointer bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mb-3 sm:mb-4">
              Car Identification
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Upload an image of any car and let our AI detect the car model with high precision.
            </p>
          </div>

          {/* Card for 3D Modeling & Customization */}
          <Link href="/Components/Car-Identification"
            className="cursor-pointer bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mb-3 sm:mb-4">
              3D Modeling & Customization
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Visualize, customize, and experience advanced 3D models of cars to match your preferences.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
