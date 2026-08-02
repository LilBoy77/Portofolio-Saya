import { portfolio } from "@/data/portfolio";
import { SectionLabel } from "../ui/section-label";
import { SplitText } from "../motion/split-text";
import { Reveal } from "../motion/reveal";
import { Button } from "../ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36 border-b border-border/30 relative z-10">
      <div className="container-custom">
        <SectionLabel number="01" label="Identity & Philosophy" />

        {/* Phase 1: Scroll Word Highlight Reveal Headline */}
        <div className="mb-20 lg:mb-28 max-w-4xl">
          <SplitText text="Good products should feel clear before they feel clever." />
        </div>

        {/* Phase 2: 2-Column Editorial Bio & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Monogram Frame */}
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <div className="relative aspect-[4/5] w-full rounded-2xl border border-border/80 bg-surface/90 p-8 flex flex-col justify-between overflow-hidden group shadow-2xl">
                {/* Ambient Subtle Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-background pointer-events-none" />

                <div className="flex items-center justify-between font-mono text-xs text-text-secondary">
                  <span>LOCATION</span>
                  <span className="text-accent">{portfolio.identity.location}</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center text-center py-10">
                  <div className="w-24 h-24 rounded-full border border-accent/40 bg-surface-raised flex items-center justify-center font-mono text-3xl font-bold text-accent shadow-inner mb-6 group-hover:scale-105 transition-transform duration-500">
                    {portfolio.identity.shortName}
                  </div>
                  <h3 className="font-h3 text-text-primary font-bold">
                    {portfolio.identity.name}
                  </h3>
                  <span className="text-xs font-mono text-text-secondary mt-1">
                    {portfolio.identity.role}
                  </span>
                </div>

                <div className="font-mono text-xs text-text-secondary/70 border-t border-border/50 pt-4 flex items-center justify-between">
                  <span>FOCUS</span>
                  <span className="text-text-primary font-semibold">CREATIVE ENGINEERING</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <Reveal direction="up">
              <div className="flex flex-col gap-6 text-text-secondary text-body-large leading-relaxed">
                {portfolio.identity.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* 3 Core Values — Editorial Line Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/40">
              {portfolio.values.map((val) => (
                <Reveal key={val.number} direction="up" delay={0.1 * parseInt(val.number)}>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent/40 hover:border-accent transition-colors">
                    <span className="font-mono text-xs text-accent font-bold">
                      {"//"}{val.number}
                    </span>
                    <h4 className="font-bold text-text-primary text-base">
                      {val.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal direction="up" delay={0.4}>
              <div className="pt-4">
                <Button href="#contact" variant="outline">
                  Start a Conversation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
