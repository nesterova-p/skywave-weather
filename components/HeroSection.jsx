"use client";

import Image from "next/image";
import { FaArrowRight, FaCloud, FaTimes } from "react-icons/fa";
import { useState } from "react";
// Import our new SocialPanel
import SocialPanel from "@/components/SocialPanel";

export default function HeroSection() {
    const [isPopupVisible, setIsPopupVisible] = useState(true);

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white px-4">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero-bg.png"
                    alt="Skyscrapers Background"
                    fill
                    className="object-cover object-center"
                />
            </div>

            {/* Dashed Oval SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70%] h-[70%]"
                >
                    <ellipse
                        cx="200"
                        cy="200"
                        rx="180"
                        ry="100"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="12 8"
                        fill="none"
                        opacity="0.5"
                        transform="rotate(-30 200 200)"
                    />
                </svg>
            </div>

            {/* Overlay Content */}
            <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Precise weather <br /> precisely for you.
                </h1>

                {/* Animated Glass Button */}
                <button className="glass-cta group">
                    <span className="text-white opacity-75">Let's start!</span>
                    <span className="relative flex items-center">
            <FaArrowRight className="text-white text-xl animate-arrowMove" />
          </span>
                </button>
            </div>

            {/* Bottom Right Popup */}
            {isPopupVisible && (
            <div
                className="absolute bottom-4 right-4 bg-white p-3 flex items-center space-x-3 rounded-full z-10"
            >
                <div className="flex space-x-2">
                    <FaCloud className="text-gray-700 text-xl" />
                    <FaCloud className="text-gray-500 text-xl opacity-70" />
                    <FaCloud className="text-gray-300 text-xl opacity-50" />
                </div>

                <span className="text-gray-700 text-sm text-right">
          Get SkyWave for all-in-one <br />
          weather assistant on your device
        </span>

                <button className="p-1 rounded-full hover:bg-gray-200" onClick={() => setIsPopupVisible(false)}>
                    <FaTimes className="text-gray-700 text-xs"/>
                </button>
            </div>
            )}

            {/* SocialPanel (light , hero) */}
            <SocialPanel variant="light" positionVariant="hero" />
        </section>
    );
}
