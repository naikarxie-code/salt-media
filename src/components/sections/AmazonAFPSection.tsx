"use client";

import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { AMAZON_AFP } from "@/lib/content";

export default function AmazonAFPSection() {
  return (
    <section
      id="amazon-afp"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neutral-600 text-sm font-light">06</span>
          <div className="w-12 h-px bg-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Amazon AFP
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl">
          ADVERTISER
          <br />
          FUNDED
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            PROGRAMMING
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 text-xl md:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          {AMAZON_AFP.subheadline}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 text-base text-neutral-500 max-w-3xl leading-relaxed">
          {AMAZON_AFP.description}
        </p>
      </Reveal>

      {/* AFP Stats */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {AMAZON_AFP.stats.map((stat, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-6 md:p-8 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-black text-center hover:border-orange-900/30 transition-colors duration-500">
              <AnimatedCounter
                value={stat.value}
                className="text-3xl md:text-4xl font-bold tracking-tight block mb-2"
              />
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* AFP Ecosystem - Win-Win-Win */}
      <div className="mt-32">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            The Win-Win-Win Ecosystem
          </h3>
          <p className="text-neutral-500 text-lg max-w-2xl mb-12">
            The AFP model creates a virtuous cycle where every stakeholder
            benefits.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(AMAZON_AFP.ecosystem).map(([role, description], i) => (
            <Reveal key={role} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-neutral-600/50 transition-all duration-500">
                <h4 className="text-[11px] uppercase tracking-[0.3em] text-orange-400/70 mb-4">
                  {role}
                </h4>
                <p className="text-lg text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-24">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            Key Benefits
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AMAZON_AFP.benefits.map((benefit, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex gap-5 p-6 rounded-xl border border-neutral-800/30 hover:border-neutral-700/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-orange-400 text-sm font-bold">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Content Examples */}
      <div className="mt-24">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            AFP Content Formats
          </h3>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {AMAZON_AFP.contentExamples.map((example, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <span className="px-5 py-3 rounded-full border border-neutral-700/50 text-sm text-neutral-300 hover:border-orange-800/40 hover:text-orange-300/80 transition-all duration-300 cursor-default">
                {example}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
