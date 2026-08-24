"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PageTransitionOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const isTransitioning = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, downloads, hash links on same page, or modifier keys
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // If clicking same page hash anchor, let native scroll handle
      if (href.startsWith("#") || (href.includes("#") && href.split("#")[0] === pathname)) {
        return;
      }

      // Intercept internal navigation
      e.preventDefault();
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const container = containerRef.current;
      const path = pathRef.current;
      if (!container || !path) {
        router.push(href);
        isTransitioning.current = false;
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const initialPath = `M0 ${h + 300} Q${w / 2} ${h + 300} ${w} ${h + 300} L${w} ${h + 300} L0 ${h + 300} Z`;
      const enterPath = `M0 0 Q${w / 2} -150 ${w} 0 L${w} ${h + 300} L0 ${h + 300} Z`;
      const fullPath = `M0 0 Q${w / 2} 0 ${w} 0 L${w} ${h + 300} L0 ${h + 300} Z`;

      gsap.killTweensOf([container, path]);

      const tl = gsap.timeline({
        onComplete: () => {
          router.push(href);
          window.scrollTo(0, 0);

          // Exit transition after route change
          const exitPath = `M0 0 Q${w / 2} 150 ${w} 0 L${w} 0 L0 0 Z`;
          gsap.timeline({
            onComplete: () => {
              isTransitioning.current = false;
            },
          })
            .to(path, {
              attr: { d: exitPath },
              duration: 0.5,
              ease: "power3.in",
            })
            .to(
              container,
              {
                yPercent: -100,
                duration: 0.5,
                ease: "power3.inOut",
              },
              0
            )
            .set(container, { yPercent: 100 });
        },
      });

      tl.set(container, { yPercent: 0 })
        .set(path, { attr: { d: initialPath } })
        .to(path, {
          attr: { d: enterPath },
          duration: 0.4,
          ease: "power3.in",
        })
        .to(path, {
          attr: { d: fullPath },
          duration: 0.3,
          ease: "power2.out",
        });
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [router, pathname, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99990] pointer-events-none translate-y-full bg-[#1C1D20]"
    >
      <svg className="absolute bottom-full left-0 w-full h-[300px] pointer-events-none fill-[#1C1D20]">
        <path
          ref={pathRef}
          d={`M0 300 Q720 300 1440 300 L1440 300 L0 300 Z`}
        />
      </svg>
    </div>
  );
}
