"use client"

import React from "react"
import { useRef } from "react";
import {
  motion, useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "motion/react"

import slide1 from "@/app/slides/1.json"
import slide2 from "@/app/slides/2.json"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Slide({ title, content }: { title: string, content: string[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        {content.map((paragraph, index) => <p key={`${title.replace(/\s/g, "")}-${index}`} className="slide-text">{paragraph}</p>)}
      </div>
      <motion.h2 style={{ y }}>{title}</motion.h2>
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
    slide2
  ]

  return (
    <>
      {slides.map((slide) => (
        <Slide title={slide.title} content={slide.content} key={slide.title} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
