"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/types/portfolio";
import { ProjectVisual } from "./project-visual";
import { Button } from "../ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectChapterProps {
  project: Project;
  index: number;
}

export function ProjectChapter({ project, index }: ProjectChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const visual = visualRef.current;
    const numberEl = numberRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=110%",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
      },
    });

    if (visual) {
      timeline.fromTo(
        visual,
        { scale: 0.92, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }

    if (numberEl) {
      timeline.fromTo(
        numberEl,
        { y: 40, opacity: 0.1 },
        { y: -10, opacity: 0.25, duration: 0.5 },
        "<"
      );
    }

    timeline.to(content, { opacity: 1, y: 0, duration: 0.3 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-20 border-b border-border/40 overflow-hidden"
    >
      <div className="container-wide relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div
            ref={visualRef}
            className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
          >
            <ProjectVisual project={project} />
          </div>

          {/* Details Column */}
          <div
            ref={contentRef}
            className={`lg:col-span-5 flex flex-col justify-center gap-6 ${
              index % 2 === 1 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Number & Category */}
            <div className="relative flex items-baseline justify-between border-b border-border pb-4">
              <div
                ref={numberRef}
                className="absolute -top-12 -left-4 font-serif text-8xl font-normal select-none opacity-20 text-accent pointer-events-none"
              >
                {project.number}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                {project.category}
              </span>
              <span className="font-mono text-xs text-text-secondary">
                {project.year}
              </span>
            </div>

            {/* Title (Editorial Serif) */}
            <h3 className="font-serif text-4xl sm:text-5xl text-text-primary font-normal tracking-tight">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-accent transition-colors focus-visible:outline-none"
              >
                {project.title}
              </Link>
            </h3>

            {/* Summary */}
            <p className="text-text-secondary text-body-large leading-relaxed">
              {project.summary}
            </p>

            {/* Impact Metric */}
            {project.impact && (
              <div className="p-4 rounded-xl bg-surface border border-border font-mono text-xs text-text-primary">
                <span className="text-accent font-bold">IMPACT // </span>
                {project.impact}
              </div>
            )}

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface-raised border border-border text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-6">
              <Button href={`/projects/${project.slug}`} variant="primary">
                View Case Study <ArrowUpRight className="w-4 h-4" />
              </Button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
