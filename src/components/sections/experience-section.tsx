"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const rows = rowsRef.current.filter(Boolean);

    if (!container || !heading || rows.length === 0) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        heading.querySelectorAll(".line-inner"),
        { yPercent: 110, rotate: 1.5, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.8,
          },
        }
      );

      // Rows reveal
      gsap.fromTo(
        rows,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 35%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-24 sm:py-32 bg-[#1C1D20] text-white relative z-10 border-b border-white/10"
    >
      <div className="container-custom">
        {/* Section Label */}
        <div className="font-mono text-xs uppercase tracking-widest text-white/60 mb-12 flex items-center gap-3">
          <span className="text-[#455CE9] font-bold">02 //</span>
          <span>TIMELINE & EXPERIENCE</span>
        </div>

        <h2
          ref={headingRef}
          className="font-h2 font-medium tracking-tight text-white leading-[0.98] mb-16 max-w-4xl"
        >
          <div className="line-mask">
            <span className="line-inner">Experience</span>
          </div>
        </h2>

        {/* Minimal Editorial Table List */}
        <div className="flex flex-col border-t border-white/15">
          {portfolio.experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={(el) => {
                rowsRef.current[idx] = el;
              }}
              className="group relative py-8 border-b border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 hover:bg-white/[0.03] px-2 sm:px-4"
            >
              {/* Company & Role */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 max-w-2xl">
                <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-[#455CE9] transition-colors duration-300">
                  {exp.company}
                </h3>
                <span className="font-mono text-sm text-white/60 uppercase tracking-wider">
                  {exp.role}
                </span>
              </div>

              {/* Description & Period */}
              <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
                <span className="font-mono text-xs text-[#455CE9] font-bold">
                  {exp.period}
                </span>
                <p className="text-xs text-white/70 max-w-md font-sans leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
