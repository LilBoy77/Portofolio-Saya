"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "../ui/section-label";
import { MagneticLink } from "../ui/magnetic-link";
import { ExternalLink } from "../ui/external-link";
import { Button } from "../ui/button";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="min-h-[90svh] py-28 flex flex-col justify-between relative z-10"
    >
      <div className="container-custom my-auto">
        <SectionLabel number="05" label="The Last Frame" />

        <div className="max-w-4xl flex flex-col items-start gap-8">
          <h2 className="font-h1 text-text-primary font-extrabold tracking-tight">
            Have an idea worth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-text-primary to-text-secondary">
              bringing to life?
            </span>
          </h2>

          <p className="text-body-large text-text-secondary max-w-2xl leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan proyek baru, eksplorasi teknologi kreatif, atau posisi engineering yang berkesan. Mari berbicara.
          </p>

          {/* Magnetic CTA Button */}
          <div className="pt-4">
            <MagneticLink strength={0.4}>
              <Button
                href={`mailto:${portfolio.identity.email}`}
                size="lg"
                variant="primary"
                className="text-lg px-10 py-5"
              >
                Start a Conversation ↗
              </Button>
            </MagneticLink>
          </div>

          {/* Copyable Email Box */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-surface border border-border mt-6">
            <div className="flex items-center gap-3 text-text-primary font-mono text-sm">
              <Mail className="w-4 h-4 text-accent" />
              <span>{portfolio.identity.email}</span>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-raised border border-border/80 text-text-secondary hover:text-text-primary hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/40 w-full text-sm">
            <ExternalLink href={portfolio.socials.github}>GitHub</ExternalLink>
            <ExternalLink href={portfolio.socials.linkedin}>LinkedIn</ExternalLink>
            {portfolio.socials.instagram && (
              <ExternalLink href={portfolio.socials.instagram}>
                Instagram
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
