"use client";
import React from "react";
import {FaUserGroup} from "react-icons/fa6";
import {useGlobalContext} from "@/app/context/globalContext";
import {Skeleton} from "@/components/ui/skeleton";

export default function Population() {

    const {fiveDayForecast } = useGlobalContext();
    const {city } = fiveDayForecast;

    if (!city || !fiveDayForecast) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    function formatNumber(num) {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1) + " M";
        }
        if (num >= 1_000) {
            return (num / 1_000).toFixed(1) + " K";
        }
        return num.toString(); // Return as-is if below 1K
    }


    return (


        <div className={"p-6 h-[12rem] border rounded-lg flex flex-col gap-8 shadow-md dark:shadow-none "}>
            <div className={"top"}>
                <h2 className={"flex start gap-2 font-medium"}>
                    <FaUserGroup size={25} />Population
                </h2>
                <p className={"pt-4 text-2xl font-bold"}>
                    {formatNumber(city.population)}
                </p>

                <p className={"text-sm mt-7"}>Latest UN population data for {city.name}</p>
            </div>

        </div>
    )
}