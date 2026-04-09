"use client";

import { accentFont } from "@/components/fonts/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme/ThemeToggle";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'

interface Element {
    label: string
    path: string
}

export function Navbar() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const handleToggle = () => {
        setToggleNavbar(!toggleNavbar);
    }
    let iconToRender;
    if (toggleNavbar) {
        iconToRender = <ChevronDoubleLeftIcon className={styles.toggleIcon}/>;
    } else {
        iconToRender = <ChevronDoubleRightIcon className={styles.toggleIcon}/>
    }
    
    const pathname = usePathname()
    const links: Element[] = [
        {
            "label": "About me",
            "path": "/",
        },
        {
            "label": "Work experience",
            "path": "/work-experience",
        },
        {
            "label": "Studies",
            "path": "/studies",
        },
        {
            "label": "Projects",
            "path": "/projects",
        },
    ]
    if (isLoading) return <></>
    return (
        <div
            className={`${accentFont.className} ${styles.navbar} ${toggleNavbar ? styles.active : ""}`}
        >
            <button className={`${styles.navbarToggle} ${toggleNavbar ? styles.active : ""}`} onClick={() => handleToggle()}>{iconToRender}</button>
            <ThemeToggle />
            {links.map((link: Element) =>
                <Link href={link.path} key={link.label}>
                    <h3
                        className={`${styles.navbarItem} ${pathname == link.path ? styles.active : ""}`}
                    >
                        {pathname == link.path ? `> ${link.label} <` : link.label}
                    </h3>
                </Link>

            )}
        </div>
    )
}