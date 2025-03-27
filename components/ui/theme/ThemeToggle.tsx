"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";


export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);
    if (isLoading) return <></>

    return (
        <div className={styles.themeToggle}>
            <span>
                {theme === "dark" ?
                    <SunIcon className={styles.themeToggleIcon} onClick={() => setTheme("light")} />
                    : <MoonIcon className={styles.themeToggleIcon} onClick={() => setTheme("dark")} />
                }
            </span>
        </div>
    );
}