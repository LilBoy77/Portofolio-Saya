"use client";

import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "../ui/section-label";
import { ProjectChapter } from "../project/project-chapter";
import { ProjectCard } from "../project/project-card";
import { useMediaQuery } from "@/hooks/use-media-query";

export function ProjectsSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="projects" className="py-20 lg:py-32 relative z-10">
      {/* Header Intro */}
      <div className="container-custom mb-16 lg:mb-24">
        <SectionLabel number="03" label="Selected Works" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-h1 text-text-primary font-bold tracking-tight max-w-2xl">
            Selected work, <br />
            <span className="text-text-secondary">built with intent.</span>
          </h2>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            {"//"} {portfolio.projects.length} FEATURED PROJECTS
          </span>
        </div>
      </div>

      {/* Desktop Pinned Chapters vs Mobile Stacked Cards */}
      {isDesktop ? (
        <div className="flex flex-col">
          {portfolio.projects.map((project, idx) => (
            <ProjectChapter key={project.slug} project={project} index={idx} />
          ))}
        </div>
      ) : (
        <div className="container-custom flex flex-col gap-10">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
