"use client";
import defaultStates from "@/app/utils/defaultStates";
import {useGlobalContext} from "@/app/context/globalContext";


export default function LargeCities() {
    const {setActiveCityCoordinates} = useGlobalContext();

    const getClickedCords = (lat, lon) => {
        setActiveCityCoordinates([lat, lon]);

    }

    return (
        <div className={"border rounded-lg flex flex-col justify-between shadow-md dark:shadow-none p-6  h-[420px]"}>
            <h2 className={"flex items-center font-medium mb-2 text-lg "}>
                <b>Top Large Cities</b>
            </h2>
            <div className={"flex flex-col gap-3"}>
                {defaultStates.map((state, index) => {
                    return (
                        <div
                            key={index}
                            className="border rounded-lg cursor-pointer shadow-md dark:shadow-none"
                            onClick={() => {
                                getClickedCords(state.lat, state.lon);
                            }}
                        >
                            <p className="px-6 py-4">{state.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}