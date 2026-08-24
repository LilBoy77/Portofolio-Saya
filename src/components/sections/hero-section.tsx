"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { portfolio } from "@/data/portfolio";
import { CircularButton } from "../ui/circular-button";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLElement | null)[]>([]);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = lineRefs.current.filter(Boolean);
    if (lines.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        lines,
        { yPercent: 105, rotate: 1, opacity: 0, transformOrigin: "0% 100%" },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "power4.out" }
      );

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.5)" },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero bg-[#999D9E] text-[#1C1D20] relative z-10"
    >
      {/* Main Hero Content */}
      <main className="hero-main">
        {/* Name Heading */}
        <div className="hero-heading">
          <div className="hero-line-mask">
            <h1
              ref={(el) => {
                lineRefs.current[0] = el;
              }}
              className="hero-line-inner hero-name"
            >
              ULIL ARSYAD
            </h1>
          </div>
          <div className="hero-line-mask">
            <h1
              ref={(el) => {
                lineRefs.current[1] = el;
              }}
              className="hero-line-inner hero-name text-[#1C1D20]/90"
            >
              RAMADHAN
            </h1>
          </div>
        </div>

        {/* Role Row (Shortened dash, distinct vertical separation) */}
        <div className="hero-role-row">
          <div className="hero-line-mask">
            <p
              ref={(el) => {
                lineRefs.current[2] = el;
              }}
              className="hero-line-inner hero-role"
            >
              - Junior Creative
            </p>
          </div>
          <div className="hero-line-mask">
            <p
              ref={(el) => {
                lineRefs.current[3] = el;
              }}
              className="hero-line-inner hero-role text-[#1C1D20]/85"
            >
              Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Hero Bottom: Description & Circular CTA Button */}
        <div className="hero-bottom">
          <div ref={descRef}>
            <p className="hero-description text-[#1C1D20]/85">
              {portfolio.identity.intro}
            </p>
          </div>

          <div ref={ctaRef} className="hero-cta">
            <CircularButton href="#projects" label="WORK ↘" size="md" icon={false} />
          </div>
        </div>
      </main>
    </section>
  );
}
