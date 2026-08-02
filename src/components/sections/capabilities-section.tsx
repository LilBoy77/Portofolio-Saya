"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "../ui/section-label";
import { Reveal } from "../motion/reveal";

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="capabilities"
      className="py-24 lg:py-36 border-b border-border/30 relative z-10"
    >
      <div className="container-custom mb-16">
        <SectionLabel number="04" label="Capabilities & Tech Stack" />
        <h2 className="font-h2 text-text-primary font-bold tracking-tight">
          What I Bring to the Table
        </h2>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {portfolio.capabilities.map((cap, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? "bg-surface-raised border-accent shadow-[0_0_30px_rgba(120,169,255,0.15)]"
                      : "bg-surface/60 border-border/60 hover:border-text-secondary/50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-xs font-bold text-accent">
                      0{idx + 1} {"//"} AREA
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform lg:-rotate-90 ${
                        isActive ? "text-accent" : "text-text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="font-h3 text-text-primary font-bold">
                    {cap.title}
                  </h3>
                  <span className="text-xs font-mono text-text-secondary mt-1">
                    {cap.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column Active Detail Drawer */}
          <div className="lg:col-span-7">
            <Reveal key={activeTab} direction="left">
              <div className="p-8 sm:p-10 rounded-2xl border border-border/80 bg-surface/90 backdrop-blur-md flex flex-col gap-8 shadow-2xl min-h-[380px] justify-between">
                <div>
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    AREA DETAIL — {portfolio.capabilities[activeTab].title}
                  </span>
                  <h4 className="font-h3 text-text-primary font-bold mt-2 mb-4">
                    {portfolio.capabilities[activeTab].subtitle}
                  </h4>
                  <p className="text-text-secondary text-body-large leading-relaxed">
                    {portfolio.capabilities[activeTab].description}
                  </p>
                </div>

                <div className="border-t border-border/40 pt-6">
                  <span className="font-mono text-xs text-text-primary font-bold block mb-4">
                    CORE SKILLS & METHODOLOGIES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portfolio.capabilities[activeTab].skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-text-secondary bg-surface-raised/60 p-3 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Slow Decorative Marquee Banner */}
        <div className="mt-20 py-6 border-y border-border/30 overflow-hidden relative group">
          <div className="flex w-max gap-8 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...portfolio.skills, ...portfolio.skills].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 text-sm font-mono text-text-secondary/70 uppercase tracking-widest"
              >
                <span>{skill}</span>
                <span className="text-accent">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
