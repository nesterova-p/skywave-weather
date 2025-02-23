"use client";

import React, {useState} from "react";
import {useGlobalContext} from "@/app/context/globalContext";
import {Skeleton} from "@/components/ui/skeleton";
import {FaCloudShowersWater, FaTemperatureHalf, FaTornado} from "react-icons/fa6";
import {Progress} from "@/components/ui/progress";

export default function AirPollution() {
    const {airQuality} = useGlobalContext();

    if (!airQuality || !airQuality.list || !airQuality.list[0] || !airQuality.list[0].main) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const airQualityIndex = airQuality.list[0].main.aqi * 10; // *10 so max value is 100%

    const airQualityIndexText = [
        { rating: 20, description: "good" },
        { rating: 40, description: "fair" },
        { rating: 60, description: "moderate" },
        { rating: 80, description: "poor" },
        { rating: 100, description: "extreme" },
    ];

    const filteredIndex = airQualityIndexText.reduce((prev, curr) =>
        airQualityIndex >= curr.rating ? curr : prev
    );


    {/*console.log(filteredIndex, "filteredIndex");*/}

    return (
        <div className={"air-pollution col-span-full sm-2:col-span-2 p-8 h-[12rem] border rounded-lg flex flex-col gap-8 shadow-md dark:shadow-none "}>
            <div className="top">
            <h2 className={"flex start gap-2 font-medium"}>
                <FaTemperatureHalf size={25} />Air Pollution
            </h2>
            </div>
            <Progress value={airQualityIndex} max={100} className={"progress"}/>
            <p> Air quality is {filteredIndex?.description} </p>
        </div>
    );
}