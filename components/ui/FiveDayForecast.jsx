"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function convertTemp(kelvin, unit) {
    if (unit === "°C") {
        return Math.floor(kelvin - 273.15);
    }
    return Math.floor((kelvin - 273.15) * 9 / 5 + 32);
}

export default function FiveDayForecast() {
    const { fiveDayForecast, unit, setUnit } = useGlobalContext();

    const location = fiveDayForecast?.city;
    const forecastList = fiveDayForecast?.list || [];

    if (!fiveDayForecast || !location || !forecastList) {
        return <Skeleton className="h-[12rem] w-full" />;
    }

    const calculateTemperatureRange = (dayForecast) => {
        let minTemp = Number.MAX_VALUE;
        let maxTemp = Number.MIN_VALUE;

        dayForecast.forEach((forecast) => {
            if (forecast.main.temp_min < minTemp) {
                minTemp = forecast.main.temp_min;
            }
            if (forecast.main.temp_max > maxTemp) {
                maxTemp = forecast.main.temp_max;
            }
        });

        return {
            day: new Date(dayForecast[0].dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
            minTemp: convertTemp(minTemp, unit),
            maxTemp: convertTemp(maxTemp, unit),
        };
    };

    const weeklyForecast = [];

    for (let i = 0; i < 40; i += 8) {
        const dayForecast = forecastList.slice(i, i + 5);

        weeklyForecast.push(calculateTemperatureRange(dayForecast));
    }

    return (
        <div className="p-6 border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none">
            <div className="flex justify-between items-center">
                <h2 className="flex items-center gap-2 font-medium">
                    <FaCalendarAlt size={20} />
                    5-Day Forecast for {location.name}
                </h2>

                <button
                    className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"

                    onClick={() => setUnit(unit === "°C" ? "°F" : "°C")}
                >
                    {unit === "°C" ? "Switch to °F" : "Switch to °C"}
                </button>

            </div>

            <div className="pt-3">
                {weeklyForecast.map((day, index) => (
                    <div key={index} className="py-4 flex flex-col border-b-2">
                        <p className="text-xl min-w-[3.5rem]">{day.day}</p>
                        <p className="text-sm flex justify-between">
                            <span>Low</span>
                            <span>High</span>
                        </p>

                        <div className="flex-1 flex items-center justify-between gap-4">
                            <p className="font-bold">
                                {day.minTemp}{unit}
                            </p>

                            <div className="temperature flex-1 w-full h-2 rounded-lg bg-gray-400"></div>

                            <p className="font-bold">
                                {day.maxTemp}{unit}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
