"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { FaWater } from "react-icons/fa6"; // Using FaWater as an equivalent for "droplets"
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Humidity() {
    const { forecast } = useGlobalContext();

    if (!forecast || !forecast?.main || forecast?.main?.humidity === undefined) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const { humidity } = forecast?.main;

    function getHumidityText(humidity) {
        if (humidity < 30)
            return "Dry: May cause skin irritation.";
        if (humidity >= 30 && humidity < 50)
            return "Comfortable: Ideal for health and comfort.";
        if (humidity >= 50 && humidity < 70)
            return "Moderate: Sticky, may increase allergens.";
        return "High: Uncomfortable, mold growth risk.";
    }

    return (
        <div className="p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none">
            <div className="flex items-center gap-2 font-medium">
                <FaWater size={25} />
                <h2>Humidity</h2>
            </div>


            <p className="pt-4 text-2xl">
                {humidity}%
            </p>

            <p className="text-sm">
                {getHumidityText(humidity)}
            </p>
        </div>
    );
}
