"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    setMounted(true);

    // Check if intro has already been shown in this session
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("hasLoadedIntro");
      if (hasLoaded) {
        setLoading(false);
        return;
      }
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 6;
      if (progress >= 100) {
        progress = 100;
        setCounter(100);
        clearInterval(interval);
        startExitAnimation();
      } else {
        setCounter(progress);
      }
    }, 45);

    function startExitAnimation() {
      const container = containerRef.current;
      const path = pathRef.current;
      if (!container || !path) {
        setLoading(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("hasLoadedIntro", "true");
        }
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const targetPath = `M0 0 L${w} 0 L${w} 0 Q${w / 2} 0 0 0 Z`;

      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("hasLoadedIntro", "true");
          }
        },
      });

      tl.to(path, {
        attr: { d: targetPath },
        duration: 0.8,
        ease: "power4.inOut",
      }).to(
        container,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        0
      );
    }

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col justify-between p-8 bg-[#1C1D20] text-white pointer-events-auto select-none"
    >
      <div className="flex items-center justify-between font-mono text-xs text-white/60 uppercase tracking-widest">
        <span>ULIL ARSYAD RAMADHAN</span>
        <span>PORTFOLIO © 2026</span>
      </div>

      <div className="my-auto flex flex-col items-center justify-center">
        <span className="font-h1 font-medium font-display text-white tracking-tighter">
          {counter}%
        </span>
      </div>

      <div className="flex items-center justify-between font-mono text-xs text-white/60 uppercase tracking-widest">
        <span>CREATIVE DEVELOPER</span>
        <span>INDONESIA</span>
      </div>

      {/* SVG Curve Edge */}
      <svg
        ref={svgRef}
        className="absolute top-full left-0 w-full h-[300px] pointer-events-none fill-[#1C1D20]"
      >
        <path
          ref={pathRef}
          d={`M0 0 L1440 0 L1440 300 Q720 300 0 300 Z`}
        />
      </svg>
    </div>
  );
}
