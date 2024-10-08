"use client"
import React, { useEffect } from 'react';

const LandingPage = () => {
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          document.body.style.overflow = 'auto'; // Enable scrolling for small and medium screens
        } else {
          document.body.style.overflow = 'hidden'; // Disable scrolling for larger screens
        }
      };
  
      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize); // Update on resize
  
      return () => {
        document.body.style.overflow = 'auto'; // Re-enable scrolling when component unmounts
        window.removeEventListener('resize', handleResize); // Clean up event listener
      };
    }, []);

  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between py-24 px-8 md:px-16">
        {/* Left Side: Header and Section Content */}
        <div className="md:w-3/5 flex flex-col justify-center items-center text-center animate-fadeIn h-full space-y-8">
          <h1 className=" text-2xl lg:text-5xl font-bold">AutoModel Insight</h1>
          <p className="text-lg lg:text-xl">Revolutionizing Car Detection and 3D Modeling</p>
          <a href="/Components/LandingPage/Feature" alt="none" className="inline-block px-10 py-3 bg-white text-black rounded-lg shadow-lg  hover:px-12 transition duration-300">
            Learn More
          </a>
          <div className="flex justify-around py-10 space-x-4">
            <div className="w-1/2 bg-white bg-opacity-10 p-6 hover:p-4 rounded-lg shadow-lg animate-slideIn">
              <h2 className="text-lg lg:text-2xl font-semibold mb-2">Car Detection</h2>
              <p>Upload an image and let our AI detect the car model instantly.</p>
            </div>
            <div className="w-1/2 bg-white bg-opacity-10 p-6 hover:p-4 rounded-lg shadow-lg animate-slideIn">
              <h2 className="text-lg lg:text-2xl font-semibold mb-2">3D Modeling & Customization</h2>
              <p>Experience the future of car customization with our 3D tools.</p>
            </div>
          </div>
        </div>
        {/* Right Side: Car Image */}
        <div className="md:w-2/5 mt-8 md:mt-0 animate-slideIn hover:shadow-lg hover:rounded-lg">
          <img src="Assets/Images/BG.png" alt="Car" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
