"use client"

import * as motion from "motion/react-client"
import { ReactNode, useRef } from "react"
import { CardProp } from "../data/work-exp-cards/cards"

import styles from './styles.module.css'
import Image from 'next/image'
import Markdown from 'react-markdown'

import '@/app/globals.css'
import { useTheme } from "next-themes"

export function Card({ card }: Readonly<{ card: CardProp }>): ReactNode {
    const ref = useRef(null)
    const {theme} = useTheme()

    return (
        <motion.div
            className={styles.cardContainer}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }} // Smooth transition
            ref={ref}
        >
            <div className={styles.card}>
                <div>
                    <Image
                        src={theme === "light" ? card.image_light : card.image_dark}
                        width={400}
                        height={100}
                        alt={card.title}
                    />
                </div>
                <div>
                    <Markdown>{card.subtitle}</Markdown>
                    <Markdown>{card.description}</Markdown>
                </div>
            </div>
        </motion.div>
    )
}