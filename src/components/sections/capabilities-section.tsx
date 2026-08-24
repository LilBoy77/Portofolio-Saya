"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!container || !heading || cards.length === 0) return;

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

      // Cards reveal
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
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
      id="capabilities"
      className="py-24 sm:py-32 bg-[#F1F1F1] text-[#1C1D20] relative z-10 border-b border-border/40"
    >
      <div className="container-custom">
        {/* Section Label */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#1C1D20]/60 mb-12 flex items-center gap-3">
          <span className="text-[#455CE9] font-bold">04 //</span>
          <span>CAPABILITIES & ARCHITECTURE</span>
        </div>

        <h2
          ref={headingRef}
          className="font-h2 font-medium tracking-tight text-[#1C1D20] leading-[0.98] mb-16 max-w-4xl"
        >
          <div className="line-mask">
            <span className="line-inner">Services & Expertise</span>
          </div>
        </h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {portfolio.capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="flex flex-col justify-between p-8 rounded-2xl border border-[#1C1D20]/15 bg-white shadow-sm hover:border-[#455CE9] transition-colors duration-300 min-h-[360px]"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#455CE9] block mb-4">
                  0{idx + 1} {"//"} {cap.title.toUpperCase()}
                </span>
                <h3 className="font-sans text-2xl font-medium tracking-tight text-[#1C1D20] mb-3">
                  {cap.subtitle}
                </h3>
                <p className="text-xs text-[#1C1D20]/75 font-sans leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="border-t border-[#1C1D20]/10 pt-4 flex flex-wrap gap-1.5">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#F1F1F1] border border-[#1C1D20]/10 text-[#1C1D20]/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Banner */}
        <div className="mt-20 py-6 border-y border-[#1C1D20]/15 overflow-hidden relative select-none">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F1F1F1] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F1F1F1] to-transparent z-10" />

          <div className="animate-marquee flex w-max gap-8 items-center">
            {/* First half */}
            {[...portfolio.skills, ...portfolio.skills].map((skill, idx) => (
              <div
                key={`a-${idx}`}
                className="flex items-center gap-4 text-xs font-mono text-[#1C1D20]/75 uppercase tracking-widest flex-shrink-0"
              >
                <span className="hover:text-[#455CE9] transition-colors">{skill}</span>
                <span className="text-[#455CE9] font-bold">•</span>
              </div>
            ))}
            {/* Second half for infinite seamless loop */}
            {[...portfolio.skills, ...portfolio.skills].map((skill, idx) => (
              <div
                key={`b-${idx}`}
                className="flex items-center gap-4 text-xs font-mono text-[#1C1D20]/75 uppercase tracking-widest flex-shrink-0"
              >
                <span className="hover:text-[#455CE9] transition-colors">{skill}</span>
                <span className="text-[#455CE9] font-bold">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
