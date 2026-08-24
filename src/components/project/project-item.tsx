"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/types/portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  const articleRef = useRef<HTMLElement>(null);
  const mediaWrapperRef = useRef<HTMLDivElement>(null);
  const mediaInnerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const titleLineRef = useRef<HTMLHeadingElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  const [imageError, setImageError] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const article = articleRef.current;
    const mediaWrapper = mediaWrapperRef.current;
    const mediaInner = mediaInnerRef.current;
    const meta = metaRef.current;
    const titleLine = titleLineRef.current;

    if (!article || !mediaWrapper || !mediaInner || !meta || !titleLine) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, isTablet, reduceMotion } = context.conditions!;

        if (reduceMotion) {
          gsap.set([mediaWrapper, mediaInner, meta, titleLine, extraRef.current], {
            clearProps: "all",
            opacity: 1,
          });
          return;
        }

        const yVal = isDesktop ? 160 : isTablet ? 100 : 75;
        const scaleVal = isDesktop ? 0.86 : isTablet ? 0.92 : 0.94;
        const xVal = isDesktop ? (isEven ? -20 : 20) : 0;
        const rotateVal = isDesktop ? (isEven ? -1.5 : 1.5) : 0;

        const clipStart = isDesktop
          ? "inset(16% 6% 10% 6% round 60px)"
          : isTablet
          ? "inset(12% 4% 8% 4% round 40px)"
          : "inset(8% 2% 5% 2% round 30px)";

        const clipEnd =
          isDesktop || isTablet
            ? "inset(0% 0% 0% 0% round 18px)"
            : "inset(0% 0% 0% 0% round 14px)";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: article,
            start: isDesktop ? "top 92%" : "top 95%",
            end: isDesktop ? "center 40%" : isTablet ? "center 45%" : "top 25%",
            scrub: isDesktop ? 1.2 : 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Stage 1: Media Expansion
        tl.fromTo(
          mediaWrapper,
          {
            y: yVal,
            x: xVal,
            scale: scaleVal,
            rotate: rotateVal,
            transformOrigin: "50% 100%",
            clipPath: clipStart,
            opacity: 0.78,
          },
          {
            y: 0,
            x: 0,
            scale: 1,
            rotate: 0,
            clipPath: clipEnd,
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
          },
          0
        );

        // 2. Stage 2: Inner Image Parallax
        tl.fromTo(
          mediaInner,
          {
            scale: 1.18,
            yPercent: 10,
          },
          {
            scale: 1,
            yPercent: 0,
            duration: 1.0,
            ease: "power2.out",
          },
          0.15
        );

        // 3. Stage 3: Metadata Reveal
        tl.fromTo(
          meta,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0.65
        );

        // 4. Stage 4: Title Line Reveal
        tl.fromTo(
          titleLine,
          {
            yPercent: 110,
            rotate: 2,
            opacity: 0,
            transformOrigin: "0% 100%",
          },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          0.85
        );

        // 5. Stage 5: Stack & Actions Reveal
        if (extraRef.current) {
          tl.fromTo(
            extraRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            1.1
          );
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, [isEven]);

  const placeholderPath = `public${project.image}`;

  return (
    <article
      ref={articleRef}
      className={`project-item group block relative ${
        index % 2 === 1 ? "md:mt-16 lg:mt-20" : "mt-0"
      }`}
    >
      {/* Media Wrapper */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study details for ${project.title}`}
        className="group block relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] rounded-[18px]"
      >
        <div
          ref={mediaWrapperRef}
          className="project-item__media relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-[#1C1D20] border border-[#1C1D20]/15 will-change-[transform,clip-path,opacity]"
        >
          <div
            ref={mediaInnerRef}
            className="project-item__media-inner relative w-full h-full will-change-transform"
          >
            {!imageError && project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                onLoad={() => ScrollTrigger.refresh()}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1C1D20] text-white select-none relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#455CE9]/25 via-transparent to-transparent pointer-events-none" />
                <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 text-[#455CE9] font-bold">
                  {project.category}
                </span>
                <h4 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight mb-2">
                  {project.title}
                </h4>
                <span className="font-mono text-[10px] text-white/50 max-w-[280px] leading-snug">
                  Add project screenshot in {placeholderPath}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20]/30 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </Link>

      {/* Metadata */}
      <div
        ref={metaRef}
        className="project-item__meta font-mono text-xs uppercase tracking-widest text-[#1C1D20]/60 mt-5 mb-2 flex items-center justify-between"
      >
        <span>
          {project.category} • {project.year}
        </span>
        <span className="text-[#455CE9] font-bold">PROJECT {project.number}</span>
      </div>

      {/* Title & Arrow */}
      <div className="overflow-hidden py-1">
        <h3
          ref={titleLineRef}
          className="project-item__title font-sans text-2xl sm:text-3xl lg:text-4xl text-[#1C1D20] font-medium tracking-tight flex items-center justify-between group-hover:text-[#455CE9] transition-colors duration-300 origin-bottom-left"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-[#455CE9] transition-colors focus-visible:outline-none"
          >
            <span>{project.title}</span>
          </Link>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View case study details for ${project.title}`}
            className="p-1 hover:text-[#455CE9] transition-colors"
          >
            <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 text-[#455CE9] flex-shrink-0 ml-4" />
          </Link>
        </h3>
      </div>

      {/* Summary */}
      <p className="text-sm text-[#1C1D20]/80 leading-relaxed mt-2.5 max-w-xl">
        {project.summary}
      </p>

      {/* Hover Reaction Horizontal Line */}
      <div className="h-[1px] w-0 group-hover:w-full bg-[#455CE9] transition-all duration-500 ease-out mt-3 mb-3" />

      {/* Stack Badges & Live Site Action Row */}
      <div ref={extraRef} className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white border border-[#1C1D20]/15 text-[#1C1D20]/75"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Site Link Button */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo in a new tab`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#455CE9] font-bold hover:underline py-1.5 px-3.5 rounded-full bg-[#455CE9]/10 border border-[#455CE9]/25 hover:bg-[#455CE9] hover:text-white transition-all flex-shrink-0 ml-auto"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
