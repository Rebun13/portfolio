"use client";

import { accentFont } from "@/components/fonts/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/logos/Logos";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

interface Element {
    label: string
    path: string
}

export function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsHovered(false);
        }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
        document.removeEventListener("click", handleClick, true);
        };
    }, [ref, isHovered]);

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

    return (
        <div
            className={`${accentFont.className} ${styles.navbar} ${isHovered ? styles.active : ""}`}
            onClick={() => setIsHovered(!isHovered)}
            onBlur={() => setIsHovered(false)}
            ref={ref}
        >
            <Logo />
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