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
      {/* Subtle Warm Paper Ambient Lighting */}
      <div
        className="absolute -inset-[100px] opacity-30 blur-[100px] transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(183, 72, 43, 0.08) 0%, rgba(231, 224, 213, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Crisp Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,26,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,23,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" />
    </div>
  );
}
