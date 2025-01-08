import React from 'react';

const WorkOpening = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 px-6 md:px-12">
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="text-black font-bold text-6xl md:text-8xl leading-tight">
          EYE-
          <br />
          OPENING
        </div>
  
        {/* Right Section */}
        <div className="text-black font-bold text-6xl md:text-8xl leading-tight">
          PRESENTATIONS
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Social Links */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-4">S:</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* Address Links */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-4">L:</h3>
          <address className="not-italic space-y-4">
            <p>
              202-1965 W 4th Ave
              <br />
              Vancouver, Canada
            </p>
            <p>
              30 Chukarina St
              <br />
              Lviv, Ukraine
            </p>
          </address>
        </div>

        {/* Menu Links */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-4">M:</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkOpening;
