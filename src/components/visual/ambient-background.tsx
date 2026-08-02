"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 30 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let targetX = 50;
    let targetY = 30;
    let currentX = 50;
    let currentY = 30;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-1000"
      aria-hidden="true"
    >
      {/* Primary Radial Glow */}
      <div
        className="absolute -inset-[100px] opacity-40 blur-[120px] transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 169, 255, 0.18) 0%, rgba(16, 21, 28, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Secondary Ambient Accent Glow */}
      <div
        className="absolute top-1/4 -right-[20%] h-[600px] w-[600px] rounded-full opacity-20 blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Grid Accent */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
      />
    </div>
  );
}
