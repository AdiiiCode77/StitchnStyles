"use client";
import React, { useState } from "react";

const CarIdentificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [carModel, setCarModel] = useState("");
  const [loading, setLoading] = useState(false); // For showing a loader during API call
  const [error, setError] = useState(null); // For error handling
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the actual file to send to the API
      setShowPopup(false); // Close popup after selecting
    }
  };

  // Function to handle the car identification API call
  const identifyCarModel = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedImage); // Append the selected image to formData

    try {
      // Make the API call to send the image
      const response = await fetch("https://brave-tools-do.loca.lt", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to identify the car model");
      }

      const data = await response.json(); // Assuming the response is in JSON format

      // Set the identified car model in the state
      setCarModel(data.model); // Change this according to your API response structure
    } catch (err) {
      setError("Error identifying the car model. Please try again.");
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  // Function to open file input
  const openFileInput = () => {
    setShowPopup(false); // Close the popup
    const input = document.getElementById("imageInput");
    input.setAttribute("capture", ""); // Reset capture attribute
    input.click(); // Open file input
  };

  // Function to open camera input
  const openCameraInput = () => {
    setShowPopup(false); // Close the popup
    const input = document.getElementById("imageInput");
    input.setAttribute("capture", "camera"); // Set to use camera
    input.click(); // Open file input
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
              src={URL.createObjectURL(selectedImage)} // Show the preview of the image
              alt="Selected Car"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <p className="mb-4 text-gray-500">No image uploaded. Please upload a car image.</p>
        )}

        <button
          onClick={() => setShowPopup(true)} // Show the popup when clicked
          className="bg-[#3F418C] text-white px-6 py-2 rounded-lg hover:bg-[#2c316f] transition duration-300 w-full"
        >
          Upload Photo
        </button>

        {/* Popup for options on mobile */}
        {showPopup && (
          <div className="fixed inset-0 flex items-end justify-center z-50">
            <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm">
              <h2 className="text-lg font-semibold mb-2">Select an Option</h2>
              <button
                onClick={openFileInput} // Open file input
                className="block w-full bg-[#3F418C] text-white px-4 py-2 rounded-lg mb-2 hover:bg-[#2c316f]"
              >
                From Files
              </button>
              <button
                onClick={openCameraInput} // Open camera input
                className="block w-full bg-[#3F418C] text-white px-4 py-2 rounded-lg hover:bg-[#2c316f]"
              >
                From Camera
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="block w-full text-center text-red-600 mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <input
          type="file"
          id="imageInput"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />

        {selectedImage && (
          <button
            onClick={identifyCarModel}
            className="bg-[#3F418C] text-white px-6 py-2 rounded-lg hover:bg-[#2c316f] transition duration-300 w-full mt-4"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Identifying..." : "Identify Car Model"}
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 p-4 rounded-lg shadow-lg text-red-700 mt-4 w-full max-w-lg z-10 relative">
          <p>{error}</p>
        </div>
      )}

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
