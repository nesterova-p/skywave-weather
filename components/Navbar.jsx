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
import {useGlobalContext} from "@/app/context/globalContext";
import SearchBar from "@/components/ui/SearchBar";

const NavBar = () => {
    const {unit, setUnit} = useGlobalContext();
    return (
        <nav className="navbar">
            {/* Left Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Menu Icon (always visible) */}
                <div className="menu-icon">
                    <div className="space-y-1">
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                    </div>
                </div>


                {/* Get The App (visible only on md and larger screens) */}
                <div className="get-the-app">
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
                        <FaGooglePlay size={20} className="text-black transition-scale " />
                    </a>
                    <button className="transition-scale">
                        <FaDownload size={18} className="text-black" />
                    </button>
                </div>
            </div>

            {/* Center Section */}
            <div className="nav-center-glass">
                {/* Location */}
                <SearchBar/>
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
                <button className="btn-black">
                    SkyWave
                    <FaChevronDown className="ml-2" />
                </button>

                {/* About (visible only on md and larger screens) */}
                <button className="pill-desktop">About</button>

                {/* Services (visible only on md and larger screens) */}
                <button className="pill-desktop-icon">
                    Services
                    <FaChevronDown className="ml-2" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
