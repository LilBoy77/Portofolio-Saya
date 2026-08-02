"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";
import { HeroScene } from "../visual/hero-scene";
import { Button } from "../ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Intro animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(title1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(title2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(introRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(visualRef.current, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");

      // Scroll trigger transformation (0-80% hero scroll)
      if (sectionRef.current) {
        gsap.to([title1Ref.current, title2Ref.current], {
          y: -40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      <div className="container-custom relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Headline and Intro Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{portfolio.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col mb-6">
              <h1
                ref={title1Ref}
                className="font-display text-text-primary tracking-tight"
              >
                {portfolio.hero.titleLine1}
              </h1>
              <h1
                ref={title2Ref}
                className="font-display text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-text-secondary tracking-tight"
              >
                {portfolio.hero.titleLine2}
              </h1>
            </div>

            {/* Intro Subtext */}
            <div ref={introRef} className="max-w-xl flex flex-col gap-8">
              <p className="text-body-large text-text-secondary leading-relaxed">
                {portfolio.identity.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="#projects" size="lg" variant="primary">
                  Explore Selected Works
                </Button>
                <Button href="#contact" size="lg" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* 3D Scene / Fallback Orb Column */}
          <div
            ref={visualRef}
            className="lg:col-span-5 flex items-center justify-center w-full relative z-0"
          >
            <HeroScene splineSceneUrl={portfolio.hero.splineSceneUrl} />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="container-custom relative z-10 flex items-center justify-between pt-8 border-t border-border/20 text-xs font-mono text-text-secondary">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{portfolio.identity.availability}</span>
        </div>

        <a
          href="#about"
          className="group inline-flex items-center gap-2 hover:text-accent transition-colors"
          aria-label="Scroll down to About section"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-accent" />
        </a>
      </div>
    </section>
  );
}
