"use client";

import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Magnetic } from "../ui/magnetic";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1C1D20] text-white py-12 border-t border-white/10 relative z-10 font-mono text-xs uppercase tracking-widest text-white/60">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Copyright & Availability Info */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left text-xs leading-relaxed">
          <span className="whitespace-nowrap">© 2026 {portfolio.identity.name}</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span className="max-w-2xl">
            {portfolio.identity.availability.toUpperCase()}
          </span>
        </div>

        {/* Back to Top Magnetic Button */}
        <Magnetic strength={0.3}>
          <button
            onClick={scrollToTop}
            type="button"
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2 px-4 rounded-full border border-white/15 hover:border-[#455CE9] flex-shrink-0"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-[#455CE9]" />
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}
