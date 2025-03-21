"use client";

import Image from 'next/image'
import lightlogo from "@/public/LogoLight.png"
import darklogo from "@/public/LogoDark.png"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Logo() {
    const { theme } = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);
    if (isLoading) return <></>

    return (
        <Image
            src={theme === "light" ? lightlogo : darklogo}
            width={40}
            height={40}
            alt="Logo"
        />
    );
}

export function LinkLogo({ height, width, src, alt }: Readonly<{ height: number, width: number, src: string, alt: string }>) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);
    if (isLoading) return <></>

    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            color='black'
        />
    );
}
