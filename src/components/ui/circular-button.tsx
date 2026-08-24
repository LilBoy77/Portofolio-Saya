"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./magnetic";

interface CircularButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export function CircularButton({
  href,
  onClick,
  label,
  className = "",
  size = "md",
  icon = true,
  ariaLabel,
  target,
  rel,
}: CircularButtonProps) {
  const sizeClasses = {
    sm: "w-20 h-20 sm:w-24 sm:h-24 text-[11px] font-mono uppercase tracking-widest",
    md: "w-[clamp(6.5rem,10vw,8.75rem)] h-[clamp(6.5rem,10vw,8.75rem)] text-xs font-mono uppercase tracking-widest",
    lg: "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 text-xs sm:text-sm font-mono uppercase tracking-widest",
  };

  const content = (
    <div
      className={`group relative flex flex-col items-center justify-center rounded-full bg-[#455CE9] text-white font-medium tracking-widest overflow-hidden transition-transform duration-300 ease-out shadow-[0_8px_24px_rgba(28,29,32,0.12)] hover:scale-[1.03] ${sizeClasses[size]} ${className}`}
    >
      {/* Inner Expansion Circle */}
      <span className="absolute inset-0 rounded-full bg-[#334BD3] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center pointer-events-none" />

      {/* Button Text & Icon */}
      <span className="relative z-10 flex items-center justify-center gap-1 text-center px-3">
        <span>{label}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </span>
    </div>
  );

  const effectiveAriaLabel = ariaLabel || (typeof label === "string" ? label : undefined);

  if (href) {
    const isMailto = href.startsWith("mailto:");
    const isExternal = href.startsWith("http");

    if (isExternal || isMailto) {
      return (
        <Magnetic strength={0.35}>
          <a
            href={href}
            target={isExternal ? target || "_blank" : target}
            rel={isExternal ? rel || "noopener noreferrer" : rel}
            aria-label={effectiveAriaLabel}
            className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20]"
          >
            {content}
          </a>
        </Magnetic>
      );
    }
    return (
      <Magnetic strength={0.35}>
        <Link
          href={href}
          aria-label={effectiveAriaLabel}
          className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20]"
        >
          {content}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.35}>
      <button
        onClick={onClick}
        type="button"
        aria-label={effectiveAriaLabel}
        className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#455CE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1D20]"
      >
        {content}
      </button>
    </Magnetic>
  );
}
