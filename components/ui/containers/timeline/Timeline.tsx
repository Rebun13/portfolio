"use client";

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.css";
import { LinkLogo } from "@/components/ui/logos/Logos";
import { TimelineItem } from "@/components/types";

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
                            <div className={styles.itemImage} ><LinkLogo src={item.image} alt={"logo"} height={120} width={200}/></div>
                            <div className={styles.itemDetails}>
                                <h2 className={styles.itemTitle}>{item.title}</h2>
                                <h3 className={styles.itemSubtitle}>{item.subtitle}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}
