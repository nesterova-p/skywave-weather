"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { FaTachometerAlt } from "react-icons/fa"; // Using FaTachometerAlt as gauge icon
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import React from "react";

export default function Pressure() {
    const { forecast } = useGlobalContext();

    if (!forecast || forecast?.main?.pressure === undefined) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const { pressure } = forecast.main;

    function getPressureDescription(pressure) {
        if (pressure < 1000)
            return "Very low pressure";
        if (pressure < 1015)
            return "Low pressure. Expect weather changes.";
        if (pressure < 1025)
            return "Normal pressure. Stable weather.";
        if (pressure < 1040)
            return "High pressure. Clear skies likely.";
        return "Very high pressure. Dry and stable weather.";
    }

    return (
        <div className="p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none">
            <div className="flex items-center gap-2 font-medium">
                <FaTachometerAlt size={25} />
                <h2>Pressure</h2>
            </div>

            <p className="pt-4 text-2xl">
                {pressure} hPa
            </p>

            <p className="text-sm">
                {getPressureDescription(pressure)}
            </p>
        </div>
    );
}
