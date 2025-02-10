import Image from 'next/image';
import {FaArrowRight, FaCloud, FaTimes, FaShareAlt, FaInstagram, FaAt, FaFacebookF} from "react-icons/fa";

export default function HeroSection() {
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

            {/* Overlay */}
            <div className={"flex  flex-col items-center"}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Precise weather <br/> precisely for you.
                </h1>

                {/* Animated Button */}
                <button
                    className="relative flex items-center space-x-4 bg-white/30 backdrop-blur-md px-10 py-3 rounded-full shadow-md border border-white/20  font-semibold overflow-hidden group text-2xl">
                    <span className="text-white opacity-75">Let's start!</span>
                    <span className="relative flex items-center">
                        <FaArrowRight className="text-white text-xl transition-transform animate-arrowMove"/>
                    </span>
                </button>
            </div>

            {/*Bottom */}
            <div
                className={"absolute bottom-4 right-4 backdrop-blur-md p-3  flex items-center space-x-3 bg-white rounded-full shadow-md border border-gray-300  z-10 "}>
                <div className={"flex space-x-2"}>
                    <FaCloud className="text-gray-700 text-xl"/>
                    <FaCloud className="text-gray-500 text-xl opacity-70"/>
                    <FaCloud className="text-gray-300 text-xl opacity-50"/>
                </div>

                <span className={"text-gray-700 text-sm text-right"}>Get SkyWave for all-in-one <br/>weather assistant on your device</span>

                <button className="p-1 rounded-full hover:bg-gray-200">
                    <FaTimes className={"text-gray-700 text-xs"}/>
                </button>

            </div>

            {/* Right */}
            <div className="fixed right-4 top-1/3 flex flex-col items-center space-y-2 z-50">

                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <div
                    className="relative flex items-center space-x-2 bg-white/30 backdrop-blur-md px-3 py-3 rounded-full shadow-md border border-white/20 font-semibold overflow-hidden group">
                    <FaShareAlt className="text-white text-xl"/>
                </div>
                </a>

                <div
                    className="flex flex-col items-center space-y-2 bg-white/30 backdrop-blur-md rounded-full shadow-md border border-white/20 p-1">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <div className="p-2 bg-white/30 backdrop-blur-md rounded-full shadow-md border border-white/20">
                            <FaInstagram className="text-white text-xl"/>
                        </div>
                    </a>

                    <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer">
                        <div className="p-2 bg-white/30 backdrop-blur-md rounded-full shadow-md border border-white/20">
                            <FaAt className="text-white text-xl"/>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <div className="p-2 bg-white/30 backdrop-blur-md rounded-full shadow-md border border-white/20">
                            <FaFacebookF className="text-white text-xl"/>
                        </div>
                    </a>
                </div>

            </div>


        </section>
    );
}
