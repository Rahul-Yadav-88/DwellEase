import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed z-10 w-full shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center flex-1">
            <div className="flex items-center justify-center">
              <h1 className="text-lg font-bold">DwellEase</h1>
            </div>
          </div>

          <div className="hidden md:flex justify-center flex-1">
            <div className="flex space-x-4">
              <Link to="/" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/Contact" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              <Link to="/PropertyDetail" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Property Details</Link>
              <Link to="/Villa" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Properties</Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center flex-1">
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600">
              SCHEDULE VISIT
            </Link>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <button 
              onClick={toggleMenu} 
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-2 pb-5">
              <Link to="/" className="text-black hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/Contact" className="text-black hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
              <Link to="/PropertyDetail" className="text-black hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Property Details</Link>
              <Link to="/Villa" className="text-black hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
              <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-green-600">
                SCHEDULE VISIT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
