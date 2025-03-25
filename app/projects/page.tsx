"use client";

import Repos from "@/components/ui/containers/github-profile/github-profile";
import {
    motion, useScroll,
    useSpring,
} from "motion/react";

export default function Studies() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <h1 className="title">Projects</h1>
            <Repos />
            <motion.div className="progress" style={{ scaleX: scaleX }} />
        </>
    )
}