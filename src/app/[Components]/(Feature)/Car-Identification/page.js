"use client";
import React, { useState } from "react";

const CarIdentificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [carModel, setCarModel] = useState("");

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Simulate car model identification (replace this with actual AI processing logic)
  const identifyCarModel = () => {
    setTimeout(() => {
      setCarModel("Tesla Model S"); // This is a mock result. Replace with real AI response.
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins flex flex-col items-center justify-center py-4 px-4 md:px-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="/Assets/Images/Logo.png" alt="Background" className="w-full h-full object-contain" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 z-10 relative text-center">
        Car Identification
      </h1>

      <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg text-gray-700 max-w-lg w-full z-10 relative">
        {selectedImage ? (
          <div className="mb-4 w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={selectedImage}
              alt="Selected Car"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <p className="mb-4 text-gray-500">No image uploaded. Please upload a car image.</p>
        )}

        <label
          htmlFor="carImageUpload"
          className="block bg-[#3F418C] text-white px-4 py-2 rounded-lg cursor-pointer mb-4 transition duration-300 hover:bg-[#2c316f] text-center"
        >
          Upload Car Image
        </label>
        <input
          type="file"
          id="carImageUpload"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />

        {selectedImage && (
          <button
            onClick={identifyCarModel}
            className="bg-[#3F418C] text-white px-6 py-2 rounded-lg hover:bg-[#2c316f] transition duration-300 w-full"
          >
            Identify Car Model
          </button>
        )}
      </div>

      {carModel && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-gray-700 mt-8 w-full max-w-lg z-10 relative">
          <h2 className="text-xl font-semibold text-center">Identified Car Model</h2>
          <p className="text-lg mt-2 text-center">{carModel}</p>
        </div>
      )}
    </div>
  );
};

export default CarIdentificationPage;
