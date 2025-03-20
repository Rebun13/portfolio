"use client";

import { accentFont } from "@/components/fonts/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/logos/Logos";
import styles from "./styles.module.css";

interface Element {
    label: string
    path: string
}

export function Navbar() {
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
            className={`${accentFont.className} ${styles.navbar}`}
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
        </header>
    )
}