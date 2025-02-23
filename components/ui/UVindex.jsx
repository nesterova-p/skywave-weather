"use client";
import {FaSun} from "react-icons/fa";
import React from "react";
import {useGlobalContext} from "@/app/context/globalContext";
import {Skeleton} from "@/components/ui/skeleton";
import {Progress} from "@/components/ui/progress";

export default function UVIndex() {
    const {uvIndex} = useGlobalContext();
    if(!uvIndex || !uvIndex.daily) {
        return <Skeleton className="flex h-[12rem] w-full p-4 border rounded-lg shadow-md dark:shadow-none" />;
    }

    const {daily} = uvIndex;
    const uv_index_max = daily?.uv_index_max?.[0] || 0;
    const uv_index_clear_sky_max = daily.uv_index_clear_sky_max?.[0] || 0;
    const uvMax = uv_index_max.toFixed(0);

    const uvIndexCateg = (uvIndex) => {
        if (uvIndex <= 2) {
            return {
                text: "Low",
                protection: "No protection required",
            };
        } else if (uvIndex <= 5) {
            return {
                text: "Moderate",
                protection: "Stay in shade near midday.",
            };
        } else if (uvIndex <= 7) {
            return {
                text: "High",
                protection: "Wear a hat and sunglasses.",
            };
        } else if (uvIndex <= 10) {
            return {
                text: "Very High",
                protection: "Apply sunscreen SPF 30+ every 2 hours.",
            };
        } else {
            return {
                text: "Extreme",
                protection: "Avoid being outside.",
            };
        }
    }

    const mlPercentage = (uvMax / 14) * 100;

    return (
        <div className={"p-6 h-[12rem] border rounded-lg flex flex-col gap-8 shadow-md dark:shadow-none "}>
            <div className={"top"}>
                <h2 className={"flex start gap-2 font-medium"}>
                    <FaSun size={25} />UV Index
                </h2>
                <p className={"pt-4 text-2xl"}>
                    {uvMax}
                    <span className={"text-sm ml-1"}>
                        ({uvIndexCateg(uvMax).text})
                    </span>
                </p>

                <Progress
                max={14}
                className={"progress"}
                value={mlPercentage}
                />

                <p className={"text-sm mt-5"}>{uvIndexCateg(uvMax).protection}</p>
            </div>


        </div>
    )
}