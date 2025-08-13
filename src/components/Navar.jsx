import React from "react";

const Navar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 relative">
        <div className="container mx-auto flex items-center">
          {/* Logo - Left Side */}
          <span className="text-white text-2xl font-bold">
            {" "}
            Habit Tracker App
          </span>

          {/* Links - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/faq" className="text-white hover:text-gray-300">
              FAQ
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
          {/* Right Side - Placeholder for user profile */}
          <div className="ml-auto">
            <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
              Sign-IN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navar;
