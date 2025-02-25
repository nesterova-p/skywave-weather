"use client";

import React, { useState, useEffect } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { useGlobalContext } from "@/app/context/globalContext";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Command,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
    CommandEmpty,
} from "@/components/ui/command";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function SearchBar() {
    const {
        forecast,
        unit,
        geoCodedList,
        inputValue,
        handleInput,
        selectedCityLabel,
        setSelectedCityLabel,
        setActiveCityCoordinates,
    } = useGlobalContext();

    const [open, setOpen] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(0);
    const [cityTemp, setCityTemp] = useState(null);

    function convertTemp(kelvin) {
        if (unit === "°C") {
            return Math.floor(kelvin - 273.15);
        } else {
            return Math.floor((kelvin - 273.15) * 9 / 5 + 32);
        }
    }

    useEffect(() => {
        if (!forecast || !forecast.main) {
            setCityTemp(null);
            return;
        }
        setCityTemp(convertTemp(forecast.main.temp));
    }, [forecast, unit]);


    const handleSelection = (item) => {
        const { name, state, country, lat, lon } = item;

        const label = [name, state, country].filter(Boolean).join(", ");

        setSelectedCityLabel(label);
        setActiveCityCoordinates([lat, lon]);
        setOpen(false);
    };

    return (
        <div className="flex items-center space-x-3">
            {/* Active Location pill */}
            <div className="location-info bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                <FaLocationArrow size={18} className="text-black" />
                {cityTemp !== null ? (
                    <span className="text-gray-700 font-medium">
                            {selectedCityLabel || "Loading..."}, {cityTemp}{unit}
                    </span>
                ) :
                (
                    <span className="text-gray-700">No Data</span>
                )}
            </div>

            {/* Search Button / Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="icon-btn bg-white p-2 rounded-full shadow-md">
                        <FaSearch className="text-black" size={18} />
                    </button>
                </DialogTrigger>

                <DialogContent className="p-0 w-[400px] bg-white rounded-lg shadow-xl border">
                    <DialogTitle>
                        <VisuallyHidden>Search for a City</VisuallyHidden>
                    </DialogTitle>

                    <Command shouldFilter={false} className="rounded-lg">
                        <CommandInput
                            placeholder="Type a city name..."
                            value={inputValue}
                            onValueChange={(value) => handleInput({ target: { value } })}
                            className="w-full p-2 border-b focus:outline-none"
                        />

                        <CommandList className="max-h-60 overflow-y-auto">
                            <CommandEmpty className="p-3 text-gray-500 text-sm">
                                No Results
                            </CommandEmpty>

                            <CommandGroup heading="Suggestions" className="p-2">
                                {geoCodedList?.map((item, index) => {
                                    const { name, state, country } = item;
                                    return (
                                        <DialogClose asChild key={index}>
                                            <CommandItem
                                                onSelect={() => handleSelection(item)}
                                                onMouseEnter={() => setHoverIndex(index)}
                                                className={`cursor-pointer px-3 py-2 rounded-md flex justify-between items-center ${
                                                    hoverIndex === index ? "bg-gray-100" : ""
                                                }`}
                                            >
                        <span>
                          {name}
                            {state ? `, ${state}` : ""}
                            {country ? `, ${country}` : ""}
                        </span>
                                            </CommandItem>
                                        </DialogClose>
                                    );
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </div>
    );
}
