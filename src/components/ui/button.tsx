"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full select-none cursor-pointer";

  const variants = {
    primary:
      "bg-text-primary text-inverse-text border border-text-primary hover:bg-accent hover:border-accent active:scale-95",
    secondary:
      "bg-surface-raised text-text-primary border border-border hover:border-text-primary active:scale-95",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent active:scale-95",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 gap-1.5",
    md: "px-6 py-3 gap-2 font-medium",
    lg: "px-8 py-4 gap-2.5 font-bold",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
