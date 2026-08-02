"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FallbackOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const orb = orbRef.current;
    if (!container || !orb) return;

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

      const rotateX = -currentY * 16;
      const rotateY = currentX * 16;
      const translateX = currentX * 12;
      const translateY = currentY * 12;

      orb.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`;
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
      className="relative flex items-center justify-center w-full h-full min-h-[360px] sm:min-h-[440px] pointer-events-none select-none"
    >
      {/* Deep Atmosphere Glow */}
      <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#78A9FF]/25 via-[#A78BFA]/15 to-transparent blur-[70px] animate-pulse" />

      {/* Main Matte 3D Sphere */}
      <div
        ref={orbRef}
        className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full transition-transform ease-out duration-300"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.45) 0%, transparent 22%),
            radial-gradient(circle at 40% 40%, #78A9FF 0%, #10151C 62%, #090C10 100%)
          `,
          boxShadow: `
            inset -18px -18px 45px rgba(9, 12, 16, 0.95),
            inset 12px 12px 35px rgba(255, 255, 255, 0.28),
            0 24px 60px rgba(0, 0, 0, 0.7)
          `,
        }}
      >
        {/* Orbital Ring 1 */}
        <div className="absolute inset-1.5 rounded-full border border-white/15 opacity-60 animate-spin-slow" />

        {/* Orbital Ring 2 (Tilted) */}
        <div
          className="absolute -inset-5 rounded-full border border-[#78A9FF]/35 opacity-50"
          style={{ transform: "rotateX(72deg) rotateY(18deg)" }}
        />

        {/* Specular Highlight */}
        <div className="absolute top-[16%] left-[20%] w-16 h-12 rounded-full bg-white/25 blur-md" />
      </div>
    </div>
  );
}
