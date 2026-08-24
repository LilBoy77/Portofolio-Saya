"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export function ProjectVisual({ project, className = "" }: ProjectVisualProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-[18px] border border-[#1C1D20]/15 bg-[#E5E5E5] ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E5E5E5] flex items-center justify-center">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#E5E5E5]">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 font-bold text-[#455CE9]">
              {project.category}
            </span>
            <h4 className="font-sans text-3xl text-[#1C1D20] font-medium mb-3">
              {project.title}
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white border border-[#1C1D20]/15 text-[#1C1D20]/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
