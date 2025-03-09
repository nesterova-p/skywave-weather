"use client";

import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay, FaDownload, FaCloud, FaWind } from "react-icons/fa";

export default function Benefits() {
    return (
        <div className="flex items-center m-10 benefits-section">
        <section className="relative w-full h-[500px] overflow-hidden bg-white ">
            <div className={"flex justify-between gap-x-6 px-8 h-full"}>
            {/* 1 */}
            <div
                className="absolute w-[20%] h-[350px] left-[0%] top-[20px]  rounded-xl shadow-lg p-4
                   flex flex-col justify-center items-center"
            >
                <Image
                    src="/images/s-1.jpg"
                    alt="Benefit 1"
                    fill
                    className="object-cover object-center absolute inset-0 rounded-xl "
                />
                <h2 className="absolute left-2 bottom-2 text-lg font-semibold text-white m-2">
                    Daily morning & evening weather outlooks
                </h2>
            </div>

            {/* 2 */}
            <div
                className="absolute w-[20%] h-[250px] left-[20%] top-[150px] bg-white rounded-xl shadow-lg p-4
                   flex flex-col justify-center items-center border border-gray-200"
            >
                <Image
                    src="/images/s-2.avif"
                    alt="Benefit 2"
                    fill
                    className="object-cover object-center absolute inset-0 rounded-xl"
                />
                <div className="absolute right-2 bottom-2 z-10 flex flex-col  glass-black rounded-full shadow-md hidden md:block">
                    <div className="flex items-center space-x-2 ">
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-black text-white p-1 m-1 rounded-full hover:scale-105 transition "
                        >
                            <FaApple size={25} />
                        </a>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-black text-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <FaGooglePlay size={20} />
                        </a>
                        <button className="glass-black text-white p-2 rounded-full hover:scale-105 transition">
                            <FaDownload size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div
                className="absolute w-[20%] h-[250px] left-[40%] top-[60px] bg-gray-50 rounded-xl shadow-lg p-4
                   flex flex-col justify-center items-center"
            >
                <Image
                    src="/images/s-3.jpg"
                    alt="Benefit 3"
                    fill
                    className="object-cover object-center absolute inset-0 rounded-xl"
                />


                <div className="absolute right-2 bottom-2 z-10 flex flex-col  ">

                        <FaCloud size={40} className="glass-white text-white p-2 rounded-full hover:scale-105 transition"/>
                        <FaWind size={40} className="glass-white text-white p-2 rounded-full hover:scale-105 transition"/>

                </div>
            </div>

            {/* 4 */}
            <div
                className="absolute w-[20%] h-[200px] left-[60%] top-[60px]  rounded-xl shadow-lg p-4
                   flex flex-col justify-center items-center bg-teal-800"
            >
                <div className="relative z-10 flex flex-col items-left space-y-3 text-white ">
                    <div className={"border border-white rounded-full p-2 flex items-center "}>
                        SkyWave
                        <FaWind className="ml-2" />
                    </div>

                    <p className="text-base  text-white font-thin hidden md:block ml-2">
                        Use the weather sharing feature to warm your family
                    </p>
                </div>
            </div>

            {/* 5 */}
            <div
                className="absolute w-[20%] h-[350px] left-[80%] top-[50px] bg-white rounded-xl shadow-lg p-4
                   flex flex-col justify-center items-center"
            >
                <Image
                    src="/images/s-5.jpg"
                    alt="Benefit 5"
                    fill
                    className="object-cover object-center absolute inset-0 rounded-xl "
                />
                <p className="absolute bottom-3 left-3 z-10 text-white border border-white rounded-full px-4 py-1">
                    sky-wave.com
                </p>
            </div>
            </div>
        </section>
        </div>
    );
}
