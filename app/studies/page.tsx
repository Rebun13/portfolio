"use client";

import Timeline from "@/components/ui/containers/timeline/Timeline";
import { items } from "@/components/data/studies/data";
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
            <h1 className="title">Studies</h1>
            <Timeline items={items} />
            <motion.div className="progress" style={{ scaleX: scaleX }} />
        </>
    )
}