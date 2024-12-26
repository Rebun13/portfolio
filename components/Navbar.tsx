"use client"

import { motion } from "motion/react"
import { accentFont } from "@/components/fonts/fonts"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Logo } from "./Logo"
import { useState } from "react"

interface Element {
    label: string
    path: string
}

export function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const height = isHovered ? "300px" : "60px"
    const width = isHovered ? "180px" : "60px"
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
    ]

    return (
        <header
            className={accentFont.className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ height: height, width: width }}
        >
            <Logo />
            {links.map((link: Element) =>
                <Link href={link.path} key={link.label}>
                    <motion.h3
                        whileHover={{ scale: 1.2, color: "#00666b" }}
                        className={pathname == link.path ? "active" : ""}
                    >
                        {pathname == link.path ? `> ${link.label} <` : link.label}
                    </motion.h3>
                </Link>

            )}
        </header>
    )
}