"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FallbackOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const artwork = artworkRef.current;
    if (!container || !artwork) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = (e.clientX - centerX) / (rect.width / 2);
      mouseY = (e.clientY - centerY) / (rect.height / 2);
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.04;
      currentY += (mouseY - currentY) * 0.04;

      artwork.style.transform = `translate3d(${currentX * 16}px, ${currentY * 16}px, 0px) rotate(${currentX * 2}deg)`;
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full min-h-[380px] sm:min-h-[460px] pointer-events-none select-none"
    >
      {/* Editorial Abstract Artwork Composition */}
      <div
        ref={artworkRef}
        className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[420px] transition-transform ease-out duration-300"
      >
        {/* Paper Plane Background */}
        <div className="absolute inset-0 bg-surface rounded-2xl border border-border/80 shadow-sm transform -rotate-3" />

        {/* Terracotta Accent Block */}
        <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-accent/15 border border-accent/30" />

        {/* Matte Circle Cutout */}
        <div className="absolute bottom-10 left-8 w-32 h-32 rounded-full border border-text-primary/20 bg-surface-raised flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-dashed border-accent/60 animate-spin-slow" />
        </div>

        {/* Typography Fragment */}
        <div className="absolute top-12 left-10 font-serif text-8xl font-normal text-text-primary/10 select-none">
          №01
        </div>

        {/* Crosshair & Line Grid */}
        <div className="absolute inset-8 flex flex-col justify-between border-t border-b border-border/40 pointer-events-none">
          <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary tracking-widest pt-2">
            <span>VOL. 2026</span>
            <span className="text-accent">EDIT. 01</span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary tracking-widest pb-2 border-t border-border/30">
            <span>ARCHIVAL SYSTEM</span>
            <span>CREATIVE ENG.</span>
          </div>
        </div>

        {/* Terracotta Floating Stamp Badge */}
        <div className="absolute -bottom-4 right-4 bg-accent text-inverse-text font-mono text-xs font-bold px-4 py-2 rounded-full shadow-md">
          WARM EDITORIAL
        </div>
      </div>
    </div>
  );
}
