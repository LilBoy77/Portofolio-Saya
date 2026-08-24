"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { CircularButton } from "../ui/circular-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;

    if (!container || !heading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading.querySelectorAll(".line-inner"),
        { yPercent: 110, rotate: 1.5, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(portfolio.identity.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = portfolio.identity.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="min-h-[90svh] py-24 sm:py-32 bg-[#1C1D20] text-white flex flex-col justify-between relative z-10"
    >
      <div className="container-custom my-auto">
        {/* Section Label */}
        <div className="font-mono text-xs uppercase tracking-widest text-white/60 mb-10 flex items-center gap-3">
          <span className="text-[#455CE9] font-bold">05 //</span>
          <span>CONTACT & COLLABORATION</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10 sm:mb-12">
          <h2
            ref={headingRef}
            className="font-h1 font-medium tracking-tighter text-white leading-[0.92] max-w-4xl flex flex-col gap-2"
          >
            <div className="line-mask">
              <span className="line-inner">Let&apos;s work</span>
            </div>
            <div className="line-mask">
              <span className="line-inner text-white/90">together.</span>
            </div>
          </h2>

          <div className="flex-shrink-0">
            <CircularButton
              href={`mailto:${portfolio.identity.email}`}
              label="Get in touch"
              ariaLabel="Send an email to Ulil Arsyad"
              size="lg"
            />
          </div>
        </div>

        {/* Copyable Email & Social Links Baseline Aligned */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-white/15">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href={`mailto:${portfolio.identity.email}`}
              aria-label="Send an email to Ulil Arsyad"
              className="font-mono text-xs sm:text-sm text-white hover:text-[#455CE9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20] rounded transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#455CE9]" />
              <span>{portfolio.identity.email}</span>
            </a>

            <button
              onClick={copyEmail}
              type="button"
              aria-label={copied ? "Email address copied" : "Copy email address"}
              className="px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white/70 hover:border-[#455CE9] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20] transition-colors cursor-pointer"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-white/70 uppercase tracking-widest">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#455CE9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20] rounded transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#455CE9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20] rounded transition-colors"
            >
              LinkedIn ↗
            </a>
            {portfolio.socials.instagram && (
              <a
                href={portfolio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#455CE9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20] rounded transition-colors"
              >
                Instagram ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
