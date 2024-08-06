'use client';

import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex md:justify-between md:items-center md:px-8 md:py-4">
        <div className="text-white text-xl">
          <p>ZADUL MEAD</p>
        </div>
        <ul className="flex md:space-x-6 lg:space-x-16 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Announcements</li>
          <li>Contact</li>
        </ul>
        <div className="text-white">
          <a href="#" className="border-b border-white">Register</a>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-2.5 text-white bg-gray-900 bg-opacity-70">
        <div className="text-white text-xl">
          <p>ZADUL MEAD</p>
        </div>
        <div className="relative z-40">
          <Image 
            src='/assets/menubar.png' 
            alt="menubar" 
            width={60}
            height={100}
            className="w-15 h-9 fixed top-2 right-3 bg-gray-800 p-2 rounded-full bg-opacity-55 px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
