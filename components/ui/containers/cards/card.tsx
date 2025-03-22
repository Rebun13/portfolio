"use client"

import { ReactNode } from "react"
import { CardProp } from "../../../data/work-exp-cards/cards"
import { useTheme } from "next-themes"
import {LinkLogo} from "@/components/ui/logos/Logos"

import styles from './styles.module.css'
import Markdown from 'react-markdown'


export function Card({ card }: Readonly<{ card: CardProp }>): ReactNode {
    const { theme } = useTheme();

    return (
        <div
            className={styles.cardContainer}
        >
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <LinkLogo
                        src={theme === "light" ? card.image_light : card.image_dark}
                        width={400}
                        height={100}
                        alt={card.title}
                    />
                </div>
                <div className={styles.cardDetails}>
                    <div className={styles.cardDetailsTitle}>{card.title}</div>
                    <div className={styles.cardDetailsSubtitle}>{card.subtitle}</div>
                    <Markdown className={styles.cardDetailsDescr}>{card.description}</Markdown>
                </div>
            </div>
        </div>
    )
}