"use client";

import { useEffect, useState } from "react";
import { formatNumber } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Arrival" },
  { id: "about", label: "Identity" },
  { id: "experience", label: "Timeline" },
  { id: "projects", label: "Works" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollPercentage(progress);

      const scrollPosition = currentScroll + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i].id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Horizontal Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-border md:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Desktop Vertical Progress Rail */}
      <aside
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pointer-events-auto"
        aria-label="Section Navigation"
      >
        {/* Section Counter Display */}
        <div className="font-mono text-xs text-text-secondary tracking-widest bg-surface-raised px-2.5 py-1 rounded border border-border">
          <span className="text-accent font-bold">
            {formatNumber(activeSectionIndex + 1)}
          </span>
          <span className="opacity-40"> / {formatNumber(SECTIONS.length)}</span>
        </div>

        {/* Rail Dots */}
        <div className="flex flex-col items-center gap-3 py-2">
          {SECTIONS.map((sec, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                aria-label={`Scroll to ${sec.label}`}
                className="group relative flex items-center justify-center p-1.5 focus-visible:outline-none"
              >
                <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-raised text-text-primary font-mono text-[10px] uppercase px-2 py-1 rounded border border-border whitespace-nowrap pointer-events-none">
                  {sec.label}
                </span>

                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-accent scale-125 ring-4 ring-accent/20"
                      : "bg-text-secondary/40 group-hover:bg-text-primary"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
