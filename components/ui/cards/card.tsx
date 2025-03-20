"use client"

import * as motion from "motion/react-client"
import { ReactNode, useRef } from "react"
import { CardProp } from "../../work-exp-cards/cards"

import styles from './styles.module.css'
import Image from 'next/image'
import Markdown from 'react-markdown'

import '@/app/globals.css'

export function Card({ card }: { card: CardProp }): ReactNode {
    const ref = useRef(null)

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
                        src={card.image}
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