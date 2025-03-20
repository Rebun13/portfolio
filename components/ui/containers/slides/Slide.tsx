
import Markdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import styles from "./styles.module.css";

export function Slide({ title, content }: Readonly<{ title: string | null, content: string[] }>) {
    return (
        <div className={styles.slide}>
            { title? <div className={styles.slideTitle}><span>{title}</span></div> : <></>}
            <div className={styles.slideContent}>
                {content.map((paragraph) => <div key={uuid()} className={styles.slidetext}><Markdown >{paragraph}</Markdown ></div>)}
            </div>
        </div>
    );
}

export function SlidesContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={styles.slidesContainer}>
            {children}
        </div>
    );
}