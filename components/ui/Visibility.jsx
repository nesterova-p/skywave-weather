"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { FaEye } from "react-icons/fa"; // Using FaEye from react-icons instead of missing 'eye' icon
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import React from "react";
import {FaWater} from "react-icons/fa6";

export default function Visibility() {
    const { forecast } = useGlobalContext();

    if (!forecast || forecast?.visibility === undefined) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const { visibility } = forecast;

    const visibilityKm = Math.round(visibility / 1000);

    function getVisibilityDescription(visibility) {
        if (visibilityKm > 10)
            return "Excellent: Clear and vast view.";
        if (visibilityKm > 5)
            return "Good: Easily navigable.";
        if (visibilityKm > 2)
            return "Moderate: Some limitations.";
        return "Poor: Restricted and unclear.";
    }

    return (
        <div className="p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none">
            <div className="flex items-center gap-2 font-medium">
                <FaEye size={25} />
                <h2>Visibility</h2>
            </div>


            <p className="pt-4 text-2xl">
                {visibilityKm} km
            </p>

            <p className="text-sm">
                {getVisibilityDescription(visibility)}
            </p>
        </div>
    );
}
