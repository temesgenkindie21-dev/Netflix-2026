import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111] text-gray-400 py-10">
      <div className="w-[90%] mx-auto">
        {/* Social Icons */}
        <div className="flex justify-start gap-6 text-white text-2xl mb-6">
          <i className="ri-facebook-circle-fill cursor-pointer hover:text-gray-300"></i>
          <i className="ri-instagram-line cursor-pointer hover:text-gray-300"></i>
          <i className="ri-youtube-fill cursor-pointer hover:text-gray-300"></i>
        </div>

        {/* Links Grid (centered like your example) */}
        <div className="flex justify-center">
          <div className="w-[90%] grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-6">
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Audio Description
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Legal Notice
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Legal Notice
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Corporate Information
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:border hover:border-gray-500 hover:px-3 hover:py-1 hover:text-white hover:cursor-pointer transition duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Code */}
        <div className="flex justify-start mb-4">
          <div className="border border-gray-500 inline-block px-3 py-1 text-sm cursor-pointer hover:text-white">
            Service Code
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-start text-xs text-gray-500 text-center">
          © 1997–2026 Netflix Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
