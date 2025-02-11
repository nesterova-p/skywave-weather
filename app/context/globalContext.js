"use client";

import React, { createContext, useContext, useState } from "react";

// Create Contexts
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

// Global Context Provider
export const GlobalContextProvider = ({ children }) => {
    {/*
    const [state, setState] = useState("hello");

    console.log("Global State:", state);
    */}

    return (
        <GlobalContext.Provider value={{ state }}>
            <GlobalContextUpdate.Provider value={setState}>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

// Custom Hooks for Context Usage
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
