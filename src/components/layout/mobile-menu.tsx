"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#1C1D20] text-white p-6 sm:p-10 transition-opacity duration-300 md:hidden overflow-y-auto"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/15 pb-6">
        <span className="font-mono text-xs tracking-widest uppercase text-white/60">
          NAVIGATION
        </span>
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="p-3 min-w-[44px] min-h-[44px] rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#455CE9]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4 my-auto py-8">
        {navItems.map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-center justify-between font-sans text-4xl sm:text-5xl text-white/90 hover:text-white transition-colors py-3 border-b border-white/10 min-h-[52px]"
          >
            <span className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#455CE9]">
                0{idx + 1}
              </span>
              <span className="font-medium tracking-tight">{item.label}</span>
            </span>
            <ArrowUpRight className="w-6 h-6 text-[#455CE9] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="flex flex-col gap-4 border-t border-white/15 pt-6">
        <div className="flex items-center justify-between text-xs font-mono text-white/60 uppercase">
          <span>LOCATION</span>
          <span>{portfolio.identity.location}</span>
        </div>

        <a
          href={portfolio.identity.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[48px] inline-flex items-center justify-center rounded-full bg-[#455CE9] text-white font-mono text-xs uppercase tracking-widest"
        >
          View Resume PDF ↗
        </a>
      </div>
    </div>
  );
}
