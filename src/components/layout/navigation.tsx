"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Magnetic } from "../ui/magnetic";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#experience" },
  { label: "Works", href: "/#projects" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
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
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(true);
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#455CE9] focus:text-white focus:font-bold focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out transform bg-transparent px-6 sm:px-10 lg:px-16",
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="navigation">
          {/* Left Column Logo */}
          <div className="navigation-left flex items-center">
            <Magnetic strength={0.25}>
              <Link
                href="/"
                className="group flex items-center focus-visible:outline-none"
                aria-label="Homepage"
              >
                <span className="font-mono text-lg sm:text-xl tracking-tight text-text-primary group-hover:text-[#455CE9] transition-colors whitespace-nowrap">
                  <span className="font-extrabold">UAR</span>
                  <span className="font-light">Code</span>
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Center Column Links (Only >= 1100px) */}
          <nav className="navigation-center hidden min-[1100px]:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.href} strength={0.3}>
                <a
                  href={item.href}
                  className="group relative block overflow-hidden py-1 navigation-link text-text-secondary hover:text-text-primary focus-visible:outline-none"
                >
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 block text-[#455CE9] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                    {item.label}
                  </span>
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Right Column Actions */}
          <div className="navigation-right flex items-center gap-4">
            <Magnetic strength={0.3}>
              <a
                href={portfolio.identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex min-h-[44px] px-6 items-center justify-center rounded-full border border-border bg-transparent text-xs font-mono uppercase tracking-widest text-text-primary hover:border-[#455CE9] hover:text-[#455CE9] transition-colors"
              >
                Resume
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="p-2.5 min-h-[44px] min-w-[44px] rounded-full border border-border bg-background text-text-primary hover:border-[#455CE9] min-[1100px]:hidden focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center"
              >
                <Menu className="w-5 h-5" />
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
