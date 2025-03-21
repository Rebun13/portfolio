"use client";

import { Card } from "@/components/ui/containers/cards/card";
import { motion, useScroll, useSpring } from "motion/react";

import { CardProp, aimenCard, kaseyaCard, ctagCard } from "@/components/work-exp-cards/cards"


export default async function WorkExperience() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const cards: CardProp[] = [aimenCard, kaseyaCard, ctagCard]
    return (
        <div className="mainPage">
            <h1 className="title">Work experience</h1>
            {cards.map((card: CardProp) =>
                <Card key={card.title} card={card} />
            )}
            <motion.div className="progress" style={{ scaleX: scaleX }} />
        </div>
    )
}