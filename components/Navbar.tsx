"use client"

import { motion } from "motion/react"
import { accentFont } from "@/components/fonts/fonts"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface Element {
    label: string
    path: string
}

export function Navbar(){
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
        <motion.header className={accentFont.className}>
            {links.map((link: Element) => {
                return (
                    <Link href={link.path} key={link.label}>
                        <motion.h3
                            whileHover={{scale: 1.2, color: "#00666b"}}
                            className={pathname==link.path ? "active" : ""}
                        >
                            {pathname==link.path ? `> ${link.label} <` : link.label}
                        </motion.h3>
                    </Link>
                )
            })}
        </motion.header>
    )
}