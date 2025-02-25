"use client";

import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import axios from "axios";
import defaultStates from "@/app/utils/defaultStates";
import { debounce } from "lodash";

// Create Contexts
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

// Global Context Provider
export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});
    const [unit, setUnit] = useState("°C");
    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, setUVIndex] = useState({});

    const [geoCodedList, setGeoCodedList] = useState(defaultStates);
    const [inputValue, setInputValue] = useState("");

    const [activeCityCoordinates, setActiveCityCoordinates] = useState([52.2298, 21.0122]);
    const [selectedCityLabel, setSelectedCityLabel] = useState("Warsaw, Masovian Voivodeship, PL");

    const fetchForecast = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
            setForecast(response.data);
            {/*console.log("Fetched forecast:", response.data);*/}
        } catch (error) {
            console.error("Error fetching forecast data:", error.message);
        }
    };

    const fetchAirQuality = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/pollution?lat=${lat}&lon=${lon}`);
            {/*console.log("Fetched air data:", response.data);*/}
            setAirQuality(response.data);
        } catch (error) {
            console.error("Error fetching forecast data:", error.message);
        }
    }

    const fetchFiveDayForecast = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/fiveDays?lat=${lat}&lon=${lon}`);
            {/*console.log("Fetched five days data:", response.data);*/}
            setFiveDayForecast(response.data);
        } catch (error) {
            console.error("Error fetching 5-day forecast:", error.message);
        }
    };

    const fetchUVIndex = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`);
            {/*console.log("Fetched uv index data:", response.data);*/}
            setUVIndex(response.data);
        } catch (error) {
            console.error("Error fetching uv index data:", error.message);
        }
    }

    const fetchGeoCodedList = async (search) => {
        try {
            const res = await axios.get(`/api/geocoded?search=${search}`);
            setGeoCodedList(res.data);
        } catch (error) {
            console.log("Error fetching geocoded list: ", error.message);
        }
    };



    const handleInput = (e) => {
        setInputValue(e.target.value);

        if (e.target.value === "") {
            setGeoCodedList(defaultStates);
        }
    };

    useEffect(() => {
        const debouncedFetch = debounce((search) => {
            fetchGeoCodedList(search);
        }, 500);

        if (inputValue) {
            debouncedFetch(inputValue);
        }

        // cleanup
        return () => debouncedFetch.cancel();
    }, [inputValue]);


    useEffect(() => {
        const [lat, lon] = activeCityCoordinates;
        fetchForecast(lat, lon);
        fetchAirQuality(lat, lon);
        fetchFiveDayForecast(lat, lon);
        fetchUVIndex(lat, lon);
    }, [activeCityCoordinates]);


    const contextValue = {
        forecast,
        unit,
        setForecast,
        setUnit,
        airQuality,
        setAirQuality,
        fiveDayForecast,
        setFiveDayForecast,
        uvIndex,
        setUVIndex,
        geoCodedList,
        inputValue,
        handleInput,
        activeCityCoordinates,
        setActiveCityCoordinates,
        selectedCityLabel,
        setSelectedCityLabel
    }

    return (
        <GlobalContext.Provider value={contextValue
        }>
            <GlobalContextUpdate.Provider
                value={{
                    setActiveCityCoordinates,
                }}
            >
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};


// Custom Hooks for Context Usage
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
