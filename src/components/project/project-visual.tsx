"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export function ProjectVisual({ project, className = "" }: ProjectVisualProps) {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 }); // Tilt max ~2deg
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-surface transition-all duration-500 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Accent Glow backdrop */}
      <div
        className="absolute -inset-1 opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${project.accent} 0%, transparent 70%)`,
        }}
      />

      {/* Main Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-raised flex items-center justify-center">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Editorial Fallback Placeholder if Image is missing */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-surface-raised via-surface to-background border border-white/5">
            <span
              className="font-mono text-xs tracking-widest uppercase mb-2 font-bold opacity-60"
              style={{ color: project.accent }}
            >
              {project.category}
            </span>
            <h4 className="font-h3 text-text-primary mb-3 font-bold">
              {project.title}
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>
    </div>
  );
}
