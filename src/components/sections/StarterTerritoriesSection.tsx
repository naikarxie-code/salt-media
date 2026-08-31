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
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-amber-500/08 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 -left-24 w-[500px] h-[500px] bg-orange-600/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 right-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        08
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="text-amber-400 font-mono text-sm font-semibold">08</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            AFP Concept Territories
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-4">
          WHAT WE CAN
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            BUILD FIRST
          </span>
        </h2>
        <p className="relative z-10 text-base md:text-xl text-neutral-300 max-w-3xl mb-12 font-light">
          Four turn-key starter concept territories co-designed for Amazon MX Player and brand partners.
        </p>
      </Reveal>

      {/* Interactive Starter Territories Selector */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Territory Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {STARTER_TERRITORIES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTerritory(idx)}
              className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                activeTerritory === idx
                  ? "border-amber-400 bg-neutral-900 shadow-[0_0_25px_rgba(245,158,11,0.15)] scale-[1.01]"
                  : "border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-amber-400 font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {item.number}
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STARTER TERRITORY
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">{item.tagline}</p>
            </button>
          ))}
        </div>

        {/* Territory Deep-Dive Detail Panel */}
        <div className="lg:col-span-7 p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-neutral-950/90 via-neutral-900/80 to-amber-950/30 backdrop-blur-2xl flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
              <span className="text-amber-400 font-mono text-xs font-bold">
                TERRITORY {territory.number}
              </span>
              <span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-3 py-1 rounded-full bg-black/40">
                {territory.format}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              {territory.title}
            </h3>

            <p className="text-base text-neutral-200 leading-relaxed font-light mb-6">
              {territory.concept}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl border border-neutral-800 bg-black/50">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-1">
                  TARGET AUDIENCE
                </span>
                <p className="text-xs md:text-sm text-neutral-300">{territory.audience}</p>
              </div>

              <div className="p-4 rounded-xl border border-amber-400/30 bg-amber-950/20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold block mb-1">
                  BRAND INTEGRATION OPPORTUNITY
                </span>
                <p className="text-xs md:text-sm text-amber-200">{territory.brandOpportunity}</p>
              </div>
            </div>

            {/* Output Stack badges */}
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-semibold block mb-2">
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

          <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-400">
            <span>READY FOR CO-DEVELOPMENT</span>
            <a href="#contact" className="text-amber-400 hover:underline">
              PITCH TREATMENT →
            </a>
          </div>
        </div>
      </div>

      {/* ── SUBSECTION: ONE IDEA → MANY CONTENT OUTPUTS PIPELINE ── */}
      <div className="relative z-10 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
            OUTPUT STACK ARCHITECTURE
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            One Hero Idea → Entire Content Ecosystem
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {OUTPUT_STACK.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-neutral-800 bg-black/60 hover:border-amber-400/40 transition-all duration-300 relative group"
            >
              <span className="text-amber-400 font-mono text-[10px] font-bold block mb-1">
                0{idx + 1}
              </span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                {item.level}
              </h4>
              <p className="text-[11px] text-neutral-400 font-light leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
