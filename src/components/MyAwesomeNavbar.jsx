import React from 'react';

const MyAwesomeNavbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">MyAwesomeApp</a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyAwesomeNavbar;