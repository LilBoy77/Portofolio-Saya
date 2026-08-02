"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "../ui/button";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#experience" },
  { label: "Works", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false); // Scrolling down
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:font-bold focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform",
          isScrolled ? "glass-nav py-4 shadow-2xl" : "bg-transparent py-6",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Homepage"
          >
            <div className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center font-mono text-sm font-bold text-text-primary group-hover:border-accent group-hover:text-accent transition-colors">
              {portfolio.identity.shortName}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm tracking-tight group-hover:text-accent transition-colors">
                {portfolio.identity.name}
              </span>
              <span className="text-[11px] font-mono text-text-secondary">
                {portfolio.identity.role}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop Resume Button & Mobile Menu Trigger) */}
          <div className="flex items-center gap-4">
            <Button
              href={portfolio.identity.resumeUrl}
              external
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2.5 rounded-full border border-border bg-surface/80 text-text-primary hover:border-text-secondary md:hidden focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Dialog */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
