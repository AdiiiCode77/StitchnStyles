// components/SocialLinks.js
import Image from 'next/image';
import React from 'react';

const SocialLinks = () => {
  const links = [
    { name: 'Facebook', url: 'https://www.facebook.com', img: '/Images/facebook.png', color: 'bg-white' },
    { name: 'Instagram', url: 'https://www.instagram.com', img: '/Images/instagram.png', color: 'bg-white' },
    { name: 'TikTok', url: 'https://www.tiktok.com', img: '/Images/tik-tok.png', color: 'bg-white' },
    { name: 'Gmail', url: 'mailto:your-email@gmail.com', img: '/Images/email.png', color: 'bg-white' },
  ];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/Images/stitch.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center py-10 text-center px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">Connect with Stitch & Styles</h1>
        
        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full max-w-xs sm:max-w-md lg:max-w-lg p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 border-l-4 hover:border-indigo-500"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ${link.color} bg-opacity-90`}>
                <Image src={link.img} alt={`${link.name} logo`} width={32} height={32} />
              </div>
              <span className="ml-4 text-gray-700 font-semibold">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Logo at the bottom */}
        <div className="mt-12">
          <Image src="/Images/abcd.jpg" alt="Stitch & Styles Logo" width={120} height={120} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
