"use client";

import React from "react";
import {
  motion, useScroll,
  useSpring,
} from "motion/react";
import slide1 from "@/components/slides/1.json";
import slide2 from "@/components/slides/2.json";
import slide3 from "@/components/slides/3.json";
import { Slide, SlidesContainer } from "@/components/ui/containers/slides/Slide";


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
    <div className="mainPage">
      <h1 className="title">About me</h1>
      <SlidesContainer>
        {slides.map((slide) => (
          <Slide title={slide.title} content={slide.content} key={slide.title} />
        ))}
      </SlidesContainer>
      <motion.div className="progress" style={{ scaleX: scaleX }} />
    </div>
  );
}
