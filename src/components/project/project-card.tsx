import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectVisual } from "./project-visual";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/60 backdrop-blur-sm">
      {/* Visual */}
      <Link href={`/projects/${project.slug}`} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
        <ProjectVisual project={project} />
      </Link>

      {/* Meta Header */}
      <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
        <span className="text-accent font-bold">PROJECT {project.number}</span>
        <span>{project.year}</span>
      </div>

      {/* Title & Category */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-text-secondary tracking-widest uppercase">
          {project.category}
        </span>
        <h3 className="font-h3 text-text-primary font-bold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent transition-colors focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
      </div>

      {/* Summary */}
      <p className="text-text-secondary text-sm leading-relaxed">
        {project.summary}
      </p>

      {/* Impact */}
      {project.impact && (
        <div className="p-3 rounded-lg bg-surface-raised/80 border border-white/5 text-xs font-mono text-text-primary">
          <span className="text-accent font-semibold">IMPACT // </span>
          {project.impact}
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-3 py-1 rounded-full bg-surface-raised border border-border text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/40">
        <Button href={`/projects/${project.slug}`} size="sm" variant="primary">
          View Case Study <ArrowUpRight className="w-4 h-4" />
        </Button>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-secondary hover:text-accent transition-colors"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
