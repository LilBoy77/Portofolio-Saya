"use client";

import React, { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticLink({
  children,
  className = "",
  strength = 0.3,
}: MagneticLinkProps) {
  const linkRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsTouchDevice(
      "ontouchstart" in window || (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || isTouchDevice || !linkRef.current) return;
    const { left, top, width, height } = linkRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={linkRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
      }}
    >
      {children}
    </div>
  );
}
