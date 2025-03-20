"use client";

import Image from 'next/image'
import lightlogo from "@/public/LogoLight.png"
import darklogo from "@/public/LogoDark.png"
import { useTheme } from 'next-themes';

export function Logo() {
    const { theme } = useTheme();
    return (
        <Image
            src={theme === "light" ? lightlogo : darklogo}
            width={40}
            height={40}
            alt="Logo"
        />
    );
}
