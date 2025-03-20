"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import styles from "./styles.module.css";


export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={styles.themeToggle}>
            <span>
                {theme === "dark" ?
                    <SunIcon className={styles.themeToggleIcon} onClick={() => setTheme("light")} />
                    : <MoonIcon  className={styles.themeToggleIcon} onClick={() => setTheme("dark")} />
                }
            </span>
        </div>
    );
}