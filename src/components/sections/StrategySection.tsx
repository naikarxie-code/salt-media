"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STRATEGY } from "@/lib/content";

export default function StrategySection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="strategy"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neutral-600 text-sm font-light">07</span>
          <div className="w-12 h-px bg-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Strategy
          </span>
        </div>
      </Reveal>

      {/* Co-Development Model */}
      <Reveal>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl">
          THE CO-DEVELOPMENT
          <br />
          <span className="text-neutral-500">MODEL</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 text-lg text-neutral-400 max-w-3xl leading-relaxed">
          {STRATEGY.codevelopmentModel.description}
        </p>
      </Reveal>

      {/* Interactive Phase Timeline */}
      <div className="mt-20">
        {/* Phase selector */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {STRATEGY.codevelopmentModel.phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm transition-all duration-500 ${
                  activePhase === i
                    ? "bg-white text-black"
                    : "border border-neutral-700 text-neutral-400 hover:border-neutral-500"
                }`}
              >
                <span className="font-bold">{phase.phase}</span>
                <span>{phase.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active phase content */}
        <Reveal>
          <div className="p-8 md:p-12 rounded-2xl border border-neutral-800/50 bg-neutral-900/20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-bold text-neutral-800">
                {STRATEGY.codevelopmentModel.phases[activePhase].phase}
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {STRATEGY.codevelopmentModel.phases[activePhase].title}
                </h3>
              </div>
            </div>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-3xl">
              {STRATEGY.codevelopmentModel.phases[activePhase].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STRATEGY.codevelopmentModel.phases[activePhase].activities.map(
                (activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg bg-neutral-800/20 border border-neutral-800/30"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    <span className="text-sm text-neutral-300">{activity}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Content Strategy Pillars */}
      <div className="mt-32">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            {STRATEGY.contentStrategy.title}
          </h3>
          <p className="text-neutral-500 text-lg max-w-2xl mb-12">
            Four pillars that guide every piece of content we create.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGY.contentStrategy.pillars.map((pillar, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 h-full hover:bg-neutral-900/50 hover:border-neutral-600/50 transition-all duration-500">
                <span className="text-neutral-700 text-sm">0{i + 1}</span>
                <h4 className="text-lg font-semibold mt-3 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Audience Strategy */}
      <div className="mt-32">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-12">
            {STRATEGY.audienceStrategy.title}
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGY.audienceStrategy.segments.map((segment, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
                <h4 className="text-xl font-bold mb-1">{segment.name}</h4>
                <p className="text-sm text-neutral-500 mb-4">
                  {segment.description}
                </p>
                <div className="border-t border-neutral-800/50 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Key Platforms
                  </span>
                  <p className="text-sm text-neutral-400 mt-1">
                    {segment.platforms}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
