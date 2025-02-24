"use client";

import { FaWind } from "react-icons/fa";
import React from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Wind() {
    const { forecast } = useGlobalContext();
    const windSpeed = forecast?.wind?.speed;
    const windDirection = forecast?.wind?.deg;

    if (!windSpeed || !windDirection) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    return (
        <div className="p-6 h-[12rem] border rounded-lg flex flex-col gap-3 shadow-md dark:shadow-none overflow-hidden">
            <h2 className="flex items-center gap-2">
                <FaWind size={25} />
                Wind
            </h2>

            <div className="compass relative flex items-center justify-center ">
                <div className="image relative">
                    <Image
                        src="/images/compass_body.svg"
                        alt="compass"
                        width={110}
                        height={110}
                    />
                    <Image
                        src="/images/compass_arrow.svg"
                        alt="compass"
                        className="absolute top-1 left-[40%] transition-all duration-500 ease-in-out dark:invert"
                        style={{
                            transform: `rotate(${windDirection}deg) translateX(-50%)`,
                            height: "100%",
                        }}
                        width={11}
                        height={11}
                    />
                </div>

                    <p
                        className="absolute text-xs dark:text-white font-medium
                       left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        {Math.round(windSpeed)} m/s
                    </p>

            </div>
        </div>
    );
}
