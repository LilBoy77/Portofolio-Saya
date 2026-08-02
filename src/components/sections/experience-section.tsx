"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Calendar, Building2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "../ui/section-label";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ExperienceSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useReducedMotion();
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion || !targetRef.current || !trackRef.current) return;

    const target = targetRef.current;
    const track = trackRef.current;

    const scrollWidth = track.scrollWidth - window.innerWidth + 120;

    const tween = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [isDesktop, prefersReducedMotion]);

  return (
    <section
      id="experience"
      ref={targetRef}
      className="py-24 lg:py-32 border-b border-border/30 relative z-10 overflow-hidden"
    >
      <div className="container-custom mb-12">
        <SectionLabel number="02" label="Timeline & Experience" />
        <h2 className="font-h2 text-text-primary font-bold tracking-tight">
          Career Journey
        </h2>
      </div>

      {/* Desktop Horizontal Scroll Track */}
      {isDesktop && !prefersReducedMotion ? (
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-8 px-16 w-max min-h-[460px]"
          >
            {portfolio.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="w-[560px] shrink-0 p-8 rounded-2xl border border-border/70 bg-surface/90 backdrop-blur-md flex flex-col justify-between shadow-xl relative group hover:border-accent/50 transition-colors"
              >
                {/* Year Indicator */}
                <div className="absolute -top-8 right-6 font-mono text-7xl font-extrabold text-white/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                  {exp.period.split("—")[0]?.trim()}
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-accent mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="font-h3 text-text-primary font-bold mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="border-t border-border/40 pt-4 flex flex-col gap-2">
                  <span className="font-mono text-xs text-text-primary font-bold">
                    KEY ACHIEVEMENTS:
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-text-secondary">
                    {exp.achievements.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Mobile Vertical Stack */
        <div className="container-custom flex flex-col gap-8">
          {portfolio.experiences.map((exp, idx) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border/70 bg-surface flex flex-col gap-4"
              >
                <div className="flex items-center justify-between text-xs font-mono text-accent">
                  <span>{exp.period}</span>
                  <span>{exp.company}</span>
                </div>

                <h3 className="font-h3 text-text-primary font-bold">
                  {exp.role}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>

                <button
                  onClick={() => setOpenAccordionIdx(isOpen ? null : idx)}
                  className="flex items-center justify-between text-xs font-mono text-text-primary pt-2 border-t border-border/40 focus-visible:outline-none"
                >
                  <span>ACHIEVEMENTS ({exp.achievements.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <ul className="flex flex-col gap-2 text-xs text-text-secondary pt-2">
                    {exp.achievements.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
