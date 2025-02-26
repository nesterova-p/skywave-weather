"use client";

import { FaArrowRight, FaCloud } from "react-icons/fa";
import SocialPanel from "@/components/SocialPanel"; // Reuse the same SocialPanel

const DontGuess = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-white text-black px-6 min-h-[calc(10vh+80px)] py-16 w-full overflow-hidden">
            {/* Content Block */}
            <div className="max-w-3xl text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Don't guess
                    <span className="inline-block border border-black rounded-full p-2 ml-2">
            <FaCloud className="text-black text-xl" />
          </span>
                    <br />
                    the weather!
                </h1>
                <p className="text-gray-600 text-lg mb-6 max-w-xl text-center leading-relaxed">
                    Rely on Clime for year-round weather forecasts for your location and across the world.
                </p>

                <button
                    onClick={() => {document.getElementById("benefits-section").scrollIntoView({"behavior": "smooth"})}}
                    className="relative flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-900 transition font-semibold text-lg mb-4 z-10">
                    <span>Explore benefits</span>
                    <span className="relative flex items-center">
            <FaArrowRight className="text-blue-200 text-xl animate-arrowMove" />
          </span>
                </button>
            </div>

            {/* Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="wave-svg"
                    fill="currentColor"
                    opacity={0.75}
                >
                    <path d="M0,80 C150,120 350,20 600,40 C850,60 1050,120 1200,90 L1200,120 L0,120 Z"></path>
                </svg>
            </div>

            <SocialPanel variant="dark" positionVariant="center" />
        </section>
    );
};

export default DontGuess;
