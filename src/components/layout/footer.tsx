"use client";

import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "../ui/external-link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background py-12 relative z-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary">
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} {portfolio.identity.name}.
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="font-mono text-xs">
            Designed & built with Next.js & GSAP
          </span>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-6">
          <ExternalLink href={portfolio.socials.github} showIcon={false}>
            GitHub
          </ExternalLink>
          <ExternalLink href={portfolio.socials.linkedin} showIcon={false}>
            LinkedIn
          </ExternalLink>
          {portfolio.socials.instagram && (
            <ExternalLink href={portfolio.socials.instagram} showIcon={false}>
              Instagram
            </ExternalLink>
          )}
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm py-1 px-2"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
