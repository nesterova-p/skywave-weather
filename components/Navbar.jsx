"use client";

import React, { useState } from "react";
import {
    FaApple,
    FaGooglePlay,
    FaDownload,
    FaSearch,
    FaChevronDown, FaWind,
} from "react-icons/fa";
import { useGlobalContext } from "@/app/context/globalContext";
import SearchBar from "@/components/ui/SearchBar";

export default function NavBar() {
    const { unit, setUnit } = useGlobalContext();
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu open/close
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            {/* Left Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Menu Icon (always visible) */}
                <div className="menu-icon cursor-pointer" onClick={handleMenuClick}>
                    <div className="space-y-1">
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                        <div className="w-6 h-1 bg-black rounded"></div>
                    </div>
                </div>

                {/* Get The App (visible only on md+ by default); vertical dropdown at the end of the file */}

                <div
                    className={`get-the-app hidden md:flex items-center bg-white px-4 py-1 rounded-full shadow-md border border-gray-300 space-x-3 transition-all ${
                        menuOpen ? "md:hidden" : ""
                    }`}
                >
                    <span className="text-gray-700 font-medium">Get The App</span>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaApple size={25} className="text-black transition-transform" />
                    </a>
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlay size={20} className="text-black transition-transform" />
                    </a>
                    <button className="transition-transform">
                        <FaDownload size={18} className="text-black" />
                    </button>
                </div>
            </div>

            {/* Center Section */}
            <div className="nav-center-glass ">
                <SearchBar />
                {/* Temperature Toggle */}
                <button
                    className="icon-btn font-bold"
                    onClick={() => setUnit(unit === "°C" ? "°F" : "°C")}
                >
                    {unit}
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 flex-shrink-0">
                {/* SkyWave Logo/Button */}
                <button className="btn-black">
                    SkyWave
                    <FaWind className="ml-2" />
                </button>
                {/* About (md+) */}
                <a
                    href="https://github.com/nott-po/skywave-weather"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-desktop-icon"
                >
                    About
                </a>
                {/* Services (md+) */}
                <button className="pill-desktop-icon">
                    Theme
                    <FaChevronDown className="ml-2" />
                </button>
            </div>

            {/*  Mobile vertical dropdown with "Get The App"  */}
            {menuOpen && (
                <div className="md:hidden absolute top-[5rem] left-4 glass-white border border-gray-300 rounded-full shadow-lg p-2 pb-3 flex flex-col items-center gap-4 ">
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaApple size={25} className="text-black transition-transform" />
                    </a>
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlay size={20} className="text-black transition-transform" />
                    </a>
                    <button className="transition-transform">
                        <FaDownload size={18} className="text-black" />
                    </button>
                </div>
            )}

        </nav>
    );
}
