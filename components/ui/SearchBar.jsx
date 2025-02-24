"use client";
import React, { useState } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { useGlobalContext } from "@/app/context/globalContext";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
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
        unit,
        geoCodedList,
        inputValue,
        handleInput,
        setActiveCityCoordinates,
    } = useGlobalContext();

    const [hoverIndex, setHoverIndex] = useState(0);

    const gotClickedCoordinates = (lat, lon) => {
        setActiveCityCoordinates([lat, lon]);
    };

    return (
        <div className="flex items-center space-x-3">
            {/* Active Location */}
            <div className="location-info">
                <FaLocationArrow size={20} className="text-black transition-scale" />
                <span className="text-gray-700">NYC, United States 20{unit}</span>
            </div>

            {/* Search Button / Dialog */}
            <Dialog>
                <DialogTrigger asChild>
                    <button className="icon-btn">
                        <FaSearch className="text-black" size={18} />
                    </button>
                </DialogTrigger>

                <DialogContent className="p-0">
                    <DialogTitle>
                        <VisuallyHidden>Search for a City</VisuallyHidden>
                    </DialogTitle>


                    <Command shouldFilter={false} className="rounded-lg border shadow-md">
                        <CommandInput
                            placeholder="Type a city name..."
                            value={inputValue}
                            onValueChange={(value) => handleInput({ target: { value } })}
                        />

                        <CommandList>

                            <CommandEmpty>No Results</CommandEmpty>

                            <CommandGroup heading="Suggestions">
                                {geoCodedList?.map((item, index) => {
                                    const { name, country, state, lat, lon } = item;
                                    return (
                                        <CommandItem
                                            key={index}
                                            onSelect={() => gotClickedCoordinates(lat, lon)}
                                            onMouseEnter={() => setHoverIndex(index)}
                                            className={`cursor-pointer ${
                                                hoverIndex === index ? "bg-accent" : ""
                                            }`}
                                        >
                                            {name}
                                            {state ? `, ${state}` : ""}
                                            {country ? `, ${country}` : ""}
                                        </CommandItem>
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
