"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const headline = headlineRef.current;
    const copy = copyRef.current;
    const profile = profileRef.current;
    const principles = principlesRef.current;

    if (!container || reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Headline scroll reveal
      if (headline) {
        gsap.fromTo(
          headline.querySelectorAll(".line-inner"),
          { yPercent: 110, rotate: 1.5, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headline,
              start: "top 85%",
              end: "top 45%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Circular avatar reveal
      if (profile) {
        const avatarImg = profile.querySelector(".about-avatar-image");

        gsap.fromTo(
          profile,
          { scale: 0.88, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: profile,
              start: "top 88%",
              end: "top 52%",
              scrub: 0.8,
            },
          }
        );

        if (avatarImg) {
          gsap.fromTo(
            avatarImg,
            { scale: 1.1 },
            {
              scale: 1.03,
              ease: "none",
              scrollTrigger: {
                trigger: profile,
                start: "top 88%",
                end: "top 52%",
                scrub: 0.8,
              },
            }
          );
        }
      }

      // 3. Copy text reveal
      if (copy) {
        const copyItems = copy.querySelectorAll(".about-copy-p");
        gsap.fromTo(
          copyItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: copy,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.8,
            },
          }
        );
      }

      // 4. Principles reveal
      if (principles) {
        const principleItems = principles.querySelectorAll(".about-principle");
        gsap.fromTo(
          principleItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: principles,
              start: "top 88%",
              end: "top 60%",
              scrub: 0.8,
            },
          }
        );
      }

      // Refresh ScrollTrigger after render
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="about py-20 sm:py-28 lg:py-36 bg-[#F1F1F1] text-[#1C1D20] relative z-10 border-b border-border/40"
    >
      <div className="container-custom">
        {/* Section Label */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#1C1D20]/60 mb-8 sm:mb-12 flex items-center gap-3">
          <span className="text-[#455CE9] font-bold">01 //</span>
          <span>ABOUT & PHILOSOPHY</span>
        </div>

        {/* 1. Header & Headline */}
        <header className="about-header">
          <h2
            ref={headlineRef}
            className="about-heading font-medium tracking-tight text-[#1C1D20]"
          >
            <div className="line-mask">
              <span className="line-inner block">Full-stack thinking.</span>
            </div>
            <div className="line-mask">
              <span className="line-inner block about-heading-muted">
                Frontend craftsmanship.
              </span>
            </div>
          </h2>
        </header>

        {/* 2. Intro Grid: Left Copy & Right Profile */}
        <div className="about-intro">
          {/* Description Paragraphs */}
          <div ref={copyRef} className="about-copy">
            {portfolio.identity.bio.map((paragraph, idx) => (
              <p key={idx} className="about-copy-p">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Profile Photo & Caption */}
          <div ref={profileRef} className="about-profile">
            <div className="about-avatar">
              {!imageError ? (
                <Image
                  src="/images/profile-ulil.webp"
                  alt="Ulil Arsyad Ramadhan, Full-Stack Developer"
                  fill
                  sizes="(max-width: 700px) 168px, 224px"
                  className="about-avatar-image"
                  priority={false}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#D7D7D5] text-[#1C1D20]/70 select-none rounded-full">
                  <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                    PROFILE
                  </span>
                  <span className="font-mono text-[9px] text-[#1C1D20]/50 tracking-wider uppercase mt-0.5">
                    PHOTO
                  </span>
                </div>
              )}
            </div>

            <div className="about-profile-caption">
              <span className="about-caption-name">ULIL ARSYAD RAMADHAN</span>
              <span className="about-caption-role">FULL-STACK / FRONTEND</span>
            </div>
          </div>
        </div>

        {/* 3. Principles: 3 Columns Row below Intro */}
        <div ref={principlesRef} className="about-principles">
          {portfolio.values.map((val) => (
            <div key={val.number} className="about-principle">
              <span className="font-mono text-xs text-[#455CE9]">
                {"//"}{val.number} — {val.title}
              </span>
              <p className="text-sm text-[#1C1D20]/75 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
