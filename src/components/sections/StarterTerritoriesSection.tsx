"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STARTER_TERRITORIES, OUTPUT_STACK } from "@/lib/content";

export default function StarterTerritoriesSection() {
  const [activeTerritory, setActiveTerritory] = useState<number>(0);

  const territory = STARTER_TERRITORIES[activeTerritory];

  return (
    <section
      id="starter-territories"
      className="relative py-6 md:py-10 lg:py-12 px-6 md:px-12 lg:px-20 overflow-hidden bg-black flex flex-col justify-center h-full min-h-screen"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-amber-500/08 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 -left-24 w-[500px] h-[500px] bg-orange-600/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-6 right-10 text-[20vw] lg:text-[22vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        08
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-3 mb-2 md:mb-3">
          <span className="text-amber-400 font-mono text-xs md:text-sm font-semibold">08</span>
          <div className="w-10 md:w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            AFP Concept Territories
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal>
        <h2 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-2 md:mb-3">
          WHAT WE CAN
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            BUILD FIRST
          </span>
        </h2>
        <p className="relative z-10 text-xs md:text-sm lg:text-base text-neutral-300 max-w-3xl mb-4 md:mb-6 font-light">
          Four turn-key starter concept territories co-designed for Amazon MX Player and brand partners.
        </p>
      </Reveal>

      {/* Interactive Starter Territories Selector */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Territory Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {STARTER_TERRITORIES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTerritory(idx)}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeTerritory === idx
                  ? "border-amber-400 bg-neutral-900 shadow-[0_0_25px_rgba(245,158,11,0.15)] scale-[1.01]"
                  : "border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-amber-400 font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  STARTER TERRITORY
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-0.5">{item.tagline}</p>
            </button>
          ))}
        </div>

        {/* Territory Deep-Dive Detail Panel */}
        <div className="lg:col-span-7 p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-neutral-950/90 via-neutral-900/80 to-amber-950/30 backdrop-blur-2xl flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-neutral-800">
              <span className="text-amber-400 font-mono text-xs font-bold">
                TERRITORY {territory.number}
              </span>
              <span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-3 py-0.5 rounded-full bg-black/40">
                {territory.format}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
              {territory.title}
            </h3>

            <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-light mb-4">
              {territory.concept}
            </p>

            <div className="space-y-3 mb-4">
              <div className="p-3.5 rounded-xl border border-neutral-800 bg-black/50">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-0.5">
                  TARGET AUDIENCE
                </span>
                <p className="text-xs md:text-sm text-neutral-300">{territory.audience}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-400/30 bg-amber-950/20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-0.5">
                  BRAND INTEGRATION OPPORTUNITY
                </span>
                <p className="text-xs md:text-sm text-amber-200">{territory.brandOpportunity}</p>
              </div>
            </div>

            {/* Output Stack badges */}
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-semibold block mb-1.5">
                DERIVED OUTPUT STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {territory.outputStack.map((out, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    ✓ {out}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-400">
            <span>READY FOR CO-DEVELOPMENT</span>
            <a href="#contact" className="text-amber-400 hover:underline">
              PITCH TREATMENT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
