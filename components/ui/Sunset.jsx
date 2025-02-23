"use client";
import {useGlobalContext} from "@/app/context/globalContext";
import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import moment from "moment";
import {FaSun} from "react-icons/fa";



export default function Sunset() {
    const {forecast} = useGlobalContext();

    if(!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    function convertTime(unix, timezone){
        return moment.unix(unix).utcOffset(timezone/60).format("HH:mm");
    }

    const timeZone = forecast?.timezone;
    const sunset = convertTime(forecast.sys.sunset, timeZone);
    const sunrise = convertTime(forecast?.sys?.sunrise, timeZone);

    return (
        <div className={"p-6 h-[12rem] border rounded-lg flex flex-col gap-8 shadow-md dark:shadow-none "}>
            <div className={"top"}>
                <h2 className={"flex start gap-2 font-medium"}>
                <FaSun size={25} />Sunset
                </h2>
                <p className={"pt-4 text-2xl"}>{sunset}</p>
            </div>

            <div >
                <span className="font-medium mr-1">Sunrise:</span>
                <span>{sunrise}</span>
            </div>

        </div>
    )
}