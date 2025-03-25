"use client";

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.css";
import { LinkLogo } from "@/components/ui/logos/Logos";
import { TimelineItem } from "@/components/types";
import Markdown from "react-markdown";

export default function Timeline({ items }: Readonly<{ items: Array<TimelineItem> }>) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);
    if (isLoading) return <></>;

    return (
        <div className={styles.timeline}>
            <div className={styles.timelineWrapper}>
                {items.map((item) => (
                    <div key={uuid()} className={styles.timelineItem}>
                        <span className={styles.timeTag}>{item.dates}</span>
                        <div className={styles.itemContent}>
                            <div className={styles.itemImage} ><LinkLogo src={item.image} alt={"logo"}/></div>
                            <div className={styles.itemDetails}>
                                <h2 className={styles.itemTitle}>{item.title}</h2>
                                <h3 className={styles.itemSubtitle}>{item.subtitle}</h3>
                                <div className={styles.itemDescription}><Markdown>{item.description}</Markdown></div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}
