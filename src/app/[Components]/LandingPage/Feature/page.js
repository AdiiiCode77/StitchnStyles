import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-[#3F418C] text-gray-800 font-poppins">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-white text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg lg:text-2xl font-semibold mb-1 lg:mb-2">Car Detection</h3>
              <p>Our AI-driven technology allows you to upload an image and instantly detect the car model with high accuracy.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg lg:text-2xl font-semibold mb-1 lg:mb-2">3D Modeling & Customization</h3>
              <p>Experience the future of car customization with our advanced 3D tools, enabling you to visualize and modify car designs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg lg:text-2xl font-semibold mb-1 lg:mb-2">Real-time Analysis</h3>
              <p>Get real-time insights and analysis on car models and their specifications, enhancing your decision-making process.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg lg:text-2xl font-semibold mb-1 lg:mb-2">User-Friendly Interface</h3>
              <p>Navigate through our platform with ease, thanks to our intuitive and user-friendly interface designed for all users.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
