"use client";

import { useState } from "react";
import { FaApple, FaGooglePlay, FaDownload, FaSearch, FaLocationArrow, FaChevronDown } from "react-icons/fa";

const NavBar = () => {
    const [unit, setUnit] = useState("°C");

    return (
        <nav className="p-4 flex items-center justify-between w-full
        fixed top-0 left-0  bg-black bg-opacity-0  z-50">
            {/* Left Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Menu Icon (always visible) */}
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border border-gray-300 hover:scale-110 transition-transform">
                    <div className="space-y-1">
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                    </div>
                </div>

                {/* Get The App (visible only on md and larger screens) */}
                <div className="hidden md:flex items-center bg-white px-4 py-1 rounded-full shadow-md border border-gray-300 space-x-3">
                    <span className="text-gray-700 font-medium">Get The App</span>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <FaApple size={25} className="text-black hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <FaGooglePlay size={20} className="text-black hover:scale-110 transition-transform ml-2" />
                    </a>
                    <button className="text-white p-2 rounded-full hover:scale-110 transition-transform">
                        <FaDownload size={18} className="text-black" />
                    </button>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex items-center space-x-4 bg-white/30 backdrop-blur-md px-6 py-2 rounded-full shadow-md border border-white/20">
                {/* Location */}
                <div className="flex items-center space-x-3 bg-white px-4 py-1 rounded-full shadow-md border border-gray-300 ">
                    <FaLocationArrow size={20} className="text-black hover:scale-110 transition-transform" />
                    <span className="text-gray-700">NYC, United States 20{unit}</span>
                </div>
                {/* Search Button */}
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-300 hover:scale-105 transition-transform">
                    <FaSearch className="text-black" size={18} />
                </button>
                {/* Temperature */}
                <button
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-300 hover:scale-105 transition-transform font-bold"
                    onClick={() => setUnit(unit === "°C" ? "°F" : "°C")}
                >
                    {unit}
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 flex-shrink-0">
                {/* SkyWave Logo/Button (always visible) */}
                <button className="flex items-center px-4 py-2 text-white rounded-full shadow-md bg-gray-900 border border-gray-700">
                    SkyWave
                    <FaChevronDown className="ml-2" />
                </button>

                {/* About (visible only on md and larger screens) */}
                <button className="hidden md:block px-4 py-2 bg-white text-black rounded-full shadow-md border border-gray-300">
                    About
                </button>

                {/* Services (visible only on md and larger screens) */}
                <button className="hidden md:flex px-4 py-2 items-center bg-white text-black rounded-full shadow-md border border-gray-300 hover:scale-110 transition-transform">
                    Services
                    <FaChevronDown className="ml-2" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
