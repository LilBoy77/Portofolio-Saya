import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { generateSiteMetadata } from "@/lib/metadata";
import { ProjectVisual } from "@/components/project/project-visual";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!project) return {};

  return generateSiteMetadata(
    `${project.title} — Case Study`,
    project.summary
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = portfolio.projects.findIndex((p) => p.slug === slug);
  const project = portfolio.projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject =
    portfolio.projects[(projectIndex + 1) % portfolio.projects.length];

  return (
    <main className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="container-custom">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors group focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO SELECTED WORKS</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="flex flex-col gap-6 mb-16 border-b border-border/40 pb-12">
          <div className="flex items-center gap-4 text-xs font-mono text-accent">
            <span>PROJECT {project.number}</span>
            <span>{"//"}</span>
            <span>{project.category}</span>
            <span>{"//"}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-h1 text-text-primary font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="text-body-large text-text-secondary max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-4 border-t border-border/30 text-xs font-mono">
            <div>
              <span className="text-text-secondary block mb-1">ROLE</span>
              <span className="text-text-primary font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-text-secondary block mb-1">YEAR</span>
              <span className="text-text-primary font-bold">{project.year}</span>
            </div>
            <div>
              <span className="text-text-secondary block mb-1">CATEGORY</span>
              <span className="text-text-primary font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-text-secondary block mb-1">LIVE DEMO</span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Visit Link ↗
                </a>
              ) : (
                <span className="text-text-secondary">Internal Project</span>
              )}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mb-20">
          <ProjectVisual project={project} className="shadow-2xl" />
        </div>

        {/* Core Analysis Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* Problem */}
            {project.problem && (
              <section className="flex flex-col gap-4">
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                  01 // THE CHALLENGE & PROBLEM
                </span>
                <h2 className="font-h2 text-text-primary font-bold">
                  Understanding the Bottlenecks
                </h2>
                <p className="text-text-secondary text-body-large leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="flex flex-col gap-4">
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                  02 // THE ARCHITECTURAL SOLUTION
                </span>
                <h2 className="font-h2 text-text-primary font-bold">
                  Engineered for Performance & Interaction
                </h2>
                <p className="text-text-secondary text-body-large leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Process */}
            {project.process && project.process.length > 0 && (
              <section className="flex flex-col gap-6">
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                  03 // PROCESS & WORKFLOW
                </span>
                <h2 className="font-h2 text-text-primary font-bold mb-2">
                  Systematic Execution
                </h2>
                <div className="flex flex-col gap-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border/50 text-sm text-text-secondary"
                    >
                      <span className="font-mono text-accent font-bold">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Impact Card */}
            {project.impact && (
              <div className="p-6 rounded-2xl bg-surface-raised border border-accent/30 flex flex-col gap-3">
                <span className="font-mono text-xs text-accent font-bold tracking-widest">
                  OUTCOME & IMPACT
                </span>
                <p className="text-text-primary font-bold text-base leading-snug">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col gap-4">
              <span className="font-mono text-xs text-text-secondary font-bold tracking-widest">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface-raised border border-border text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <Button href={project.liveUrl} external variant="primary">
                  Launch Live Demo <ArrowUpRight className="w-4 h-4" />
                </Button>
              )}
              {project.sourceUrl && (
                <Button href={project.sourceUrl} external variant="outline">
                  View Source Code ↗
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="border-t border-border/50 pt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-mono text-xs text-text-secondary">
              NEXT CASE STUDY
            </span>
            <h3 className="font-h2 text-text-primary font-bold">
              {nextProject.title}
            </h3>
          </div>
          <Button href={`/projects/${nextProject.slug}`} variant="primary" size="lg">
            Read Next Study <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
}
