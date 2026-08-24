"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";
import { ProjectItem } from "../project/project-item";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsSection() {
  const headerRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const lines = lineRefs.current.filter(Boolean);
    const desc = descRef.current;

    if (!header || lines.length === 0 || !desc) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) {
          gsap.set([...lines, desc], { clearProps: "all", opacity: 1 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            end: "top 38%",
            scrub: 1,
          },
        });

        tl.fromTo(
          lines,
          {
            yPercent: 110,
            rotateX: 8,
            rotate: 1.5,
            opacity: 0,
            transformOrigin: "0% 100%",
          },
          {
            yPercent: 0,
            rotateX: 0,
            rotate: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power2.out",
          }
        ).fromTo(
          desc,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="projects" className="featured-work relative z-10 py-24 sm:py-32 bg-[#F1F1F1] text-[#1C1D20] border-b border-border/40 overflow-hidden">
      <div className="container-custom">
        <header ref={headerRef} className="featured-work__header mb-16 lg:mb-24">
          <div className="font-mono text-xs uppercase tracking-widest text-[#1C1D20]/60 mb-6 flex items-center gap-3">
            <span className="text-[#455CE9] font-bold">03 //</span>
            <span>SELECTED WORKS</span>
          </div>

          <h2 className="featured-work__heading font-h1 text-[#1C1D20] font-medium tracking-tight max-w-4xl flex flex-col gap-1 leading-[0.95]">
            <div className="line-mask">
              <span
                ref={(el) => {
                  lineRefs.current[0] = el;
                }}
                className="line-inner"
              >
                Selected work,
              </span>
            </div>
            <div className="line-mask">
              <span
                ref={(el) => {
                  lineRefs.current[1] = el;
                }}
                className="line-inner text-[#1C1D20]/75"
              >
                built with intent.
              </span>
            </div>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6">
            <p
              ref={descRef}
              className="featured-work__desc text-body-large text-[#1C1D20]/80 max-w-xl leading-relaxed"
            >
              A curated selection of digital products, design systems, and interactive experiences built with focus, motion, and performance.
            </p>
            <span className="font-mono text-xs text-[#455CE9] tracking-widest uppercase flex-shrink-0 font-bold">
              {"//"} {portfolio.projects.length} FEATURED PROJECTS
            </span>
          </div>
        </header>

        <div className="featured-work__grid grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-7 gap-y-16 md:gap-y-24 lg:gap-y-28">
          {portfolio.projects.map((project, idx) => (
            <ProjectItem key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
