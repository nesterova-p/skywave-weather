"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useGlobalContext } from "@/app/context/globalContext";
import {
    FaSun,
    FaCloudRain,
    FaSnowflake,
    FaCloud,
    FaLocationArrow,
    FaCloudShowersHeavy, FaSmog,
} from "react-icons/fa";
import {FaCloudShowersWater, FaTornado} from "react-icons/fa6";
import {Skeleton} from "@/components/ui/shadcn/skeleton";

export default function Temperature() {
    const {forecast, unit} = useGlobalContext();
    const {weather, timezone, name, main} = forecast || {};

    // state
    const [localTime, setLocalTime] = useState("");
    const [currentDay, setCurrentDate] = useState("");

    function convertTemp(kelvin){
        if (unit === "°C"){
            return Math.floor(kelvin - 273.15)
        }
        else{
            return Math.floor((kelvin - 273.15) * 9 / 5 + 32 );
        }
    }

    // time live
    useEffect(() => {
        const int = setInterval(() => {
            const localMoment = moment().utcOffset(timezone / 60);
            const formatTime = localMoment.format("HH:mm:ss"); // 24-hour format
            const day = localMoment.format("dddd");
            setLocalTime(formatTime);
            setCurrentDate(day);
        }, 1000);

        // Clear interval on unmount
        return () => clearInterval(int);
    }, [timezone]);


    const getIcon = () => {
        switch (weatherMain) {
            case "Drizzle":
                return <FaCloudRain size={25} />;
            case "Rain":
                return <FaCloudShowersHeavy size={25} />;
            case "Snow":
                return <FaSnowflake size={25} />;
            case "Clear":
                return <FaSun size={25} />;
            case "Clouds":
                return <FaCloud size={25} />;
            case "Tornado":
                return <FaTornado size={25} />;
            case "Thunderstorm":
                return <FaCloudShowersWater size={25} />;
            case "Mist":
            case "Haze":
            case "Smoke":
            case "Dust":
            case "Fog":
            case "Sand":
            case "Ash":
            case "Squall":
                return <FaSmog size={25} />;
            default:
                return <FaSun size={25} />;
        }
    }

    const temp = convertTemp(main?.temp || 0);
    const minTemp = convertTemp(main?.temp_min || 0);
    const maxTemp = convertTemp(main?.temp_max || 0);

    if(!forecast || !weather) {
        return <Skeleton className="flex h-[14rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none"/>

    }

    const {main: weatherMain , description } = weather[0];


    return (
        <div className={"p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none"}>
            <p className={"flex justify-between items-center"}>
                <span className={"font-medium"}>
                    {currentDay}
                </span>
                <span className={"font-medium"}>
                    {localTime}
                </span>
            </p>
            <p className={"pt-2 font-bold flex gap-1"}>
                <span>{name}</span>
                <span><FaLocationArrow  size={10}/></span>
            </p>
            <p className={"py-10 text-9xl font-bold self-center"}>
                {temp}{unit}
            </p>

            <div>
                <div>
                    <span>{getIcon()}</span>
                    <p className={"pt-2 capitalize text-lg font-medium"}>{description}</p>
                </div>
                <p className={"flex gap-2"}>
                    <span >Low: <b>{minTemp} {unit} </b></span>
                    <span>High: <b>{maxTemp} {unit}</b></span>
                </p>
            </div>

        </div>
    );
}