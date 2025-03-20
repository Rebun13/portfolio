
import Markdown from 'react-markdown';

import styles from "./styles.module.css";

export function Slide({ title, content }: Readonly<{ title: string, content: string[] }>) {
    return (
        <div className={styles.slide}>
            <div className={styles.slideTitle}><span>{title}</span></div>
            <div className={styles.slideContent}>
                {content.map((paragraph, index) => <div key={`${title.replace(/\s/g, "")}-${index}`} className={styles.slidetext}><Markdown >{paragraph}</Markdown ></div>)}
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