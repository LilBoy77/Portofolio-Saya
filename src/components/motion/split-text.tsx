"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  text: string;
  className?: string;
}

export function SplitText({ text, className = "" }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll(".reveal-word");

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 30%",
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalWords = wordElements.length;
        const activeCount = Math.floor(progress * totalWords);

        wordElements.forEach((el, index) => {
          if (index <= activeCount) {
            el.classList.add("text-text-primary");
            el.classList.remove("text-text-secondary/30");
          } else {
            el.classList.remove("text-text-primary");
            el.classList.add("text-text-secondary/30");
          }
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion, text]);

  return (
    <div
      ref={containerRef}
      className={`font-h2 leading-tight tracking-tight ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="reveal-word inline-block mr-[0.25em] text-text-secondary/30 transition-colors duration-300"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
