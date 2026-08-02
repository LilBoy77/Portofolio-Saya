"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and set up Escape listener
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
      className="fixed inset-0 z-50 flex flex-col justify-between bg-background/95 backdrop-blur-2xl p-6 sm:p-10 transition-opacity duration-300 md:hidden"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border/50 pb-6">
        <span className="font-mono text-sm tracking-widest font-bold text-accent">
          {portfolio.identity.shortName} {"//"} MENU
        </span>
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="p-2.5 rounded-full border border-border text-text-primary hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-6 my-auto py-8">
        {navItems.map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-center justify-between text-3xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors py-2 border-b border-border/20"
          >
            <span className="flex items-center gap-4">
              <span className="font-mono text-xs text-text-secondary/60">
                0{idx + 1}
              </span>
              <span>{item.label}</span>
            </span>
            <ArrowUpRight className="w-6 h-6 text-text-secondary group-hover:text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="flex flex-col gap-4 border-t border-border/50 pt-6">
        <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
          <span>STATUS</span>
          <span className="text-emerald-400">● {portfolio.identity.availability}</span>
        </div>

        <Button
          href={portfolio.identity.resumeUrl}
          external
          variant="outline"
          className="w-full justify-center"
        >
          View Resume PDF
        </Button>
      </div>
    </div>
  );
}
