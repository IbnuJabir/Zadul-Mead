'use client';

function Navbar() {
  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:justify-between lg:items-center lg:px-8 lg:py-4">
        <div className="text-white text-xl">
          <p>ZADUL MEAD</p>
        </div>
        <ul className="flex space-x-6 text-white">
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
      <div className="lg:hidden flex justify-between items-center p-2.5 text-white bg-gray-900 bg-opacity-70">
        <div className="text-white text-xl">
          <p>ZADUL MEAD</p>
        </div>
        <div className="relative">
          <img 
            src='/assets/menubar.png' 
            alt="menubar" 
            className="w-15 h-9 fixed top-2 right-5 bg-gray-800 p-2 rounded-full bg-opacity-55 px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
