import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { generateSiteMetadata } from "@/lib/metadata";
import { ProjectVisual } from "@/components/project/project-visual";

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
    <main className="min-h-screen pt-32 pb-24 relative z-10 bg-[#F1F1F1] text-[#1C1D20]">
      <div className="container-custom">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1C1D20]/60 hover:text-[#455CE9] transition-colors group focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#455CE9]" />
            <span>BACK TO SELECTED WORKS</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="flex flex-col gap-6 mb-16 border-b border-[#1C1D20]/15 pb-12">
          <div className="flex items-center gap-4 text-xs font-mono text-[#455CE9] font-bold">
            <span>PROJECT {project.number}</span>
            <span>{"//"}</span>
            <span>{project.category}</span>
            <span>{"//"}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl text-[#1C1D20] font-medium tracking-tight leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-body-large text-[#1C1D20]/80 max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-4 border-t border-[#1C1D20]/15 text-xs font-mono">
            <div>
              <span className="text-[#1C1D20]/60 block mb-1">ROLE</span>
              <span className="text-[#1C1D20] font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-[#1C1D20]/60 block mb-1">YEAR</span>
              <span className="text-[#1C1D20] font-bold">{project.year}</span>
            </div>
            <div>
              <span className="text-[#1C1D20]/60 block mb-1">CATEGORY</span>
              <span className="text-[#1C1D20] font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#1C1D20]/60 block mb-1">LIVE DEMO</span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#455CE9] hover:underline font-bold"
                >
                  Visit Link ↗
                </a>
              ) : (
                <span className="text-[#1C1D20]/60">Internal Project</span>
              )}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mb-20">
          <ProjectVisual project={project} />
        </div>

        {/* Core Analysis Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* Problem */}
            {project.problem && (
              <section className="flex flex-col gap-4">
                <span className="font-mono text-xs text-[#455CE9] font-bold tracking-widest uppercase">
                  01 // THE CHALLENGE & PROBLEM
                </span>
                <h2 className="font-sans text-3xl text-[#1C1D20] font-medium">
                  Understanding the Bottlenecks
                </h2>
                <p className="text-[#1C1D20]/80 text-body-large leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="flex flex-col gap-4">
                <span className="font-mono text-xs text-[#455CE9] font-bold tracking-widest uppercase">
                  02 // THE ARCHITECTURAL SOLUTION
                </span>
                <h2 className="font-sans text-3xl text-[#1C1D20] font-medium">
                  Engineered for Performance & Interaction
                </h2>
                <p className="text-[#1C1D20]/80 text-body-large leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="flex flex-col gap-4">
                <span className="font-mono text-xs text-[#455CE9] font-bold tracking-widest uppercase">
                  KEY FEATURES & HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#1C1D20]/12 text-sm text-[#1C1D20]/85 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#455CE9] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process */}
            {project.process && project.process.length > 0 && (
              <section className="flex flex-col gap-6">
                <span className="font-mono text-xs text-[#455CE9] font-bold tracking-widest uppercase">
                  03 // PROCESS & WORKFLOW
                </span>
                <h2 className="font-sans text-3xl text-[#1C1D20] font-medium mb-2">
                  Systematic Execution
                </h2>
                <div className="flex flex-col gap-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1C1D20]/15 text-sm text-[#1C1D20]/80"
                    >
                      <span className="font-mono text-[#455CE9] font-bold">
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
              <div className="p-6 rounded-2xl bg-white border border-[#455CE9]/30 flex flex-col gap-3 shadow-sm">
                <span className="font-mono text-xs text-[#455CE9] font-bold tracking-widest">
                  OUTCOME & IMPACT
                </span>
                <p className="text-[#1C1D20] font-medium text-base leading-snug">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="p-6 rounded-2xl bg-white border border-[#1C1D20]/15 flex flex-col gap-4">
              <span className="font-mono text-xs text-[#1C1D20]/60 font-bold tracking-widest">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#F1F1F1] border border-[#1C1D20]/15 text-[#1C1D20]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#455CE9] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#334BD3] transition-colors"
                >
                  Launch Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full border border-[#1C1D20]/20 text-[#1C1D20] font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[#455CE9] hover:text-[#455CE9] transition-colors"
                >
                  View Source Code ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="border-t border-[#1C1D20]/15 pt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-mono text-xs text-[#1C1D20]/60">
              NEXT CASE STUDY
            </span>
            <h3 className="font-sans text-4xl text-[#1C1D20] font-medium">
              {nextProject.title}
            </h3>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="px-8 py-4 rounded-full bg-[#455CE9] text-white font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#334BD3] transition-colors"
          >
            Read Next Study <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
