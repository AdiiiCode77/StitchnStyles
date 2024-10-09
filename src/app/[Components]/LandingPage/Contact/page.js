import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins">
    <div className="absolute inset-0 z-0 opacity-10">
        <img src="/Assets/Images/Logo.png" alt="Background" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center justify-center py-24 px-8 md:px-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form className="w-full max-w-2xl  p-8 space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-black font-bold hover:py- text-lg rounded-md hover:white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
