"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { FaTemperatureHalf } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import React from "react";

export default function FeelsLike() {
    const { forecast, unit } = useGlobalContext();

    if (!forecast || !forecast?.main || !forecast?.main?.feels_like) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const { feels_like, temp_min, temp_max } = forecast?.main;

    function convertTemp(kelvin) {
        return unit === "°C"
            ? Math.floor(kelvin - 273.15)
            : Math.floor((kelvin - 273.15) * 9 / 5 + 32);
    }

    const feelsLikeText = (feelsLike, minTemp, maxTemp) => {
        const avgTemp = (minTemp + maxTemp) / 2;

        if (feelsLike < avgTemp - 5) return "Feels significantly colder than actual temperature.";
        if (feelsLike > avgTemp + 5) return "Feels significantly warmer than actual temperature.";
        return "Feels close to the actual temperature.";
    };

    const feelsLikeDescription = feelsLikeText(feels_like, temp_min, temp_max);

    return (
        <div className="p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none">
            <div className="flex items-center gap-2 font-medium">
                <FaTemperatureHalf size={25} />
                <h2>Feels Like </h2>
            </div>
            <p className="pt-4 text-2xl">
                {convertTemp(feels_like)}{unit }
            </p>

            <p className="text-sm mt-5">
                {feelsLikeDescription}
            </p>
        </div>
    );
}
