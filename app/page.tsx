"use client"

import React from "react"
import { useRef } from "react"
import {
  motion, useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "motion/react"
import Markdown from 'react-markdown'
import slide1 from "@/components/slides/1.json"
import slide2 from "@/components/slides/2.json"
import slide3 from "@/components/slides/3.json"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Slide({ title, content }: Readonly<{ title: string, content: string[] }>) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>
      <motion.h2 style={{ y }}>{title}</motion.h2>
      <h3>{title}</h3>
      <div ref={ref}>
        {content.map((paragraph, index) => <div key={`${title.replace(/\s/g, "")}-${index}`} className="slide-text"><Markdown >{paragraph}</Markdown ></div>)}
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const slides = [
    slide1,
    slide2,
    slide3
  ]

  return (
    <>
      {slides.map((slide) => (
        <Slide title={slide.title} content={slide.content} key={slide.title} />
      ))}
      <motion.div className="progress" style={{ scaleX: scaleX }} />
    </>
  );
}
