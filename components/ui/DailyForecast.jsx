"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import moment from "moment";
import { FaSun, FaCloudRain, FaSnowflake, FaCloud, FaCloudShowersHeavy, FaSmog } from "react-icons/fa";
import { FaTornado, FaCloudShowersWater } from "react-icons/fa6";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/shadcn/carousel";

export default function DailyForecast() {
    const { forecast, fiveDayForecast, unit } = useGlobalContext();

    const { weather } = forecast || {};

    if (!fiveDayForecast) {
        return <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-4" />;
    }

    const { city, list } = fiveDayForecast;

    if (!city || !list) {
        return <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-4" />;
    }

    if (!forecast || !weather) {
        return <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-4" />;
    }

    function convertTemp(kelvin) {
        if (unit === "°C") {
            return Math.floor(kelvin - 273.15);
        }
        return Math.floor((kelvin - 273.15) * 9 / 5 + 32);
    }

    function getIcon(condition) {
        switch (condition) {
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

    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const todaysForecast = list.filter((item) => {
        return item.dt_txt.startsWith(todayString);
    });


    if (todaysForecast.length < 1) {
        return (
            <Skeleton className="h-[12rem] w-full col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2" />
        );
    }

    return (
        <div
            className="col-span-full sm-2:col-span-2 p-8 h-[12rem] border rounded-lg flex flex-col gap-8 shadow-md dark:shadow-none "
        >
            <div className="h-full flex gap-10 overflow-hidden">
                <div className="w-full">
                    <Carousel>
                        <CarouselContent>
                            {todaysForecast.map((forecastItem) => {
                                const condition = forecastItem?.weather?.[0]?.main || "Clear";
                                const temp = convertTemp(forecastItem.main?.temp || 0);

                                return (
                                    <CarouselItem
                                        key={forecastItem.dt_txt}
                                        className="flex flex-col gap-4 basis-[8.5rem] cursor-grab"
                                    >
                                        <p className="text-gray-300">
                                            {moment(forecastItem.dt_txt).format("HH:mm")}
                                        </p>
                                        <p>{getIcon(condition)}</p>
                                        <p className="mt-4">
                                            {temp}{unit}
                                        </p>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
