import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const linkClasses = (path) => {
    const baseClasses = "px-4 py-2 rounded-lg transition duration-300 font-medium";
    return isActive(path)
      ? `${baseClasses} bg-blue-600 text-white`
      : `${baseClasses} text-gray-700 hover:bg-blue-100`;
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            CleanCarpet Pro
          </Link>
          
          <div className="flex space-x-2">
            <Link to="/" className={linkClasses('/')}>
              Home
            </Link>
            <Link to="/services" className={linkClasses('/services')}>
              Services
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
