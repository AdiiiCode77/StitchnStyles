"use client";
import React, { useState } from "react";

const CarIdentificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [carModel, setCarModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const identifyCarModel = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://127.0.0.1:5001/identify_car", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to identify the car model");
      }

      const data = await response.json();
      setCarModel(data.model);
    } catch (err) {
      console.error(err);
      setError("Error identifying the car model. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins flex flex-col items-center justify-center px-4 md:px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Car Identification
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl">
        {/* Upload Section */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg text-gray-700 flex-1 w-full max-w-md">
          <div className="mb-4 w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Car"
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="path/to/dummy-image.jpg" // Replace with the path to your dummy image
                alt="Dummy Car"
                className="w-full h-full object-contain"
              />
            )}
          </div>

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
              disabled={loading}
            >
              {loading ? "Identifying..." : "Identify Car Model"}
            </button>
          )}
        </div>

        {/* Car Model Display Section */}
        <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg text-gray-700 flex-1 w-full max-w-md">
          {carModel ? (
            <>
              <h2 className="text-xl font-semibold text-center">Identified Car Model</h2>
              <p className="text-lg mt-2 text-center">{carModel}</p>
            </>
          ) : (
            <p className="text-gray-500 text-center">Awaiting identification...</p>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-100 p-4 rounded-lg shadow-lg text-red-700 mt-4 w-full max-w-lg">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CarIdentificationPage;