// ThemeProviders.jsx

"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import {GlobalContextProvider} from "/app/context/globalContext.js";

// Export a *default* function:
export default function ThemeProviders({ children, ...props }) {
    return (
        <NextThemeProvider {...props}>
            <GlobalContextProvider>{children}</GlobalContextProvider>
        </NextThemeProvider>
    );
}
