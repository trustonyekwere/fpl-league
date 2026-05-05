"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
    toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    // initialize from localStorage or OS preference on mount
    useEffect(() => {
        try {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) {
            setDarkMode(JSON.parse(saved));
            return;
        }
        } catch (e) {
        // ignore
        }

        const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(!!prefersDark);
    }, []);

    // persist and apply class to document root
    useEffect(() => {
        try {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        } catch (e) {}

        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    const toggle = () => setDarkMode((d) => !d);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, toggle }}>
        {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
