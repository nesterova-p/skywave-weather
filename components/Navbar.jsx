"use client";

import { useState } from "react";
import {
    FaApple,
    FaGooglePlay,
    FaDownload,
    FaSearch,
    FaLocationArrow,
    FaChevronDown,
} from "react-icons/fa";

const NavBar = () => {
    const [unit, setUnit] = useState("°C");

    return (
        <nav
            className="p-4 flex items-center justify-between w-full
        fixed top-0 left-0 bg-black bg-opacity-0 z-50"
        >
            {/* Left Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Menu Icon (always visible) */}
                <div className="icon-btn">
                    <div className="space-y-1">
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                    </div>
                </div>

                {/* Get The App (visible only on md and larger screens) */}
                <div className="hidden md:flex items-center bg-white px-4 py-1 rounded-full shadow-md border-light space-x-3">
                    <span className="text-gray-700 font-medium">Get The App</span>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaApple size={25} className="text-black transition-scale" />
                    </a>
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlay size={20} className="text-black transition-scale ml-2" />
                    </a>
                    <button className="transition-scale">
                        <FaDownload size={18} className="text-black" />
                    </button>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex items-center space-x-4 glass-white px-6 py-2 rounded-full shadow-md">
                {/* Location */}
                <div className="flex items-center space-x-3 bg-white px-4 py-1 rounded-full shadow-md border-light">
                    <FaLocationArrow size={20} className="text-black transition-scale" />
                    <span className="text-gray-700">NYC, United States 20{unit}</span>
                </div>
                {/* Search Button */}
                <button className="icon-btn">
                    <FaSearch className="text-black" size={18} />
                </button>
                {/* Temperature */}
                <button
                    className="icon-btn font-bold"
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
                <button className="hidden md:block px-4 py-2 bg-white text-black rounded-full shadow-md border-light">
                    About
                </button>

                {/* Services (visible only on md and larger screens) */}
                <button className="hidden md:flex px-4 py-2 items-center bg-white text-black rounded-full shadow-md border-light transition-scale">
                    Services
                    <FaChevronDown className="ml-2" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
