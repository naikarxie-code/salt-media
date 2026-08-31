"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STRATEGY, SOCIAL_INTELLIGENCE } from "@/lib/content";

export default function StrategySection() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const model = STRATEGY.codevelopmentModel;
  const currentPhase = model.phases[activePhase];

  return (
    <section
      id="strategy"
      className="h-panel w-screen min-h-screen lg:h-screen flex-shrink-0 relative py-12 md:py-16 px-6 md:px-16 lg:px-24 overflow-y-auto overflow-x-hidden bg-black"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-amber-500/05 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-indigo-500/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 left-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        07
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="text-amber-400 font-mono text-sm font-semibold">07</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Strategy & Execution
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-4">
          THE CO-DEVELOPMENT
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            MODEL
          </span>
        </h2>
        <p className="relative z-10 text-base md:text-xl text-neutral-300 max-w-3xl mb-8 font-light">
          {model.description}
        </p>
      </Reveal>

      {/* Operating Logic Pipeline Banner */}
      <div className="relative z-10 mb-12 p-4 rounded-2xl border border-amber-400/30 bg-neutral-950/80 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold shrink-0">
          OPERATING LOGIC
        </span>
        <div className="text-xs md:text-sm font-mono text-white text-center md:text-right font-medium">
          {model.operatingLogic}
        </div>
      </div>

      {/* Interactive 4-Phase Strategy Tabs */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Phase selector column */}
        <div className="lg:col-span-5 space-y-3">
          {model.phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                activePhase === idx
                  ? "border-amber-400 bg-neutral-900 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                  : "border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${activePhase === idx ? "bg-amber-400 text-black" : "bg-neutral-800 text-amber-400"}`}>
                  {phase.phase}
                </span>
                <span className="text-base font-bold text-white tracking-tight">
                  {phase.title}
                </span>
              </div>
              <span className="text-amber-400 font-mono text-sm">→</span>
            </button>
          ))}
        </div>

        {/* Phase details column */}
        <div className="lg:col-span-7 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-amber-400 font-mono text-xs font-bold px-3 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                PHASE {currentPhase.phase}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {currentPhase.title}
              </h3>
            </div>

            <p className="text-base text-neutral-200 leading-relaxed font-light mb-6">
              {currentPhase.description}
            </p>

            <h4 className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold mb-3">
              KEY DELIVERABLES & ACTIVITIES
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPhase.activities.map((act, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl border border-neutral-800/60 bg-neutral-900/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-xs md:text-sm text-neutral-300 font-light">{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500">
            <span>SALT MEDIA PRODUCTION PIPELINE</span>
            <span>END-TO-END EXECUTION</span>
          </div>
        </div>
      </div>

      {/* ── SUBSECTION: SOCIAL & TREND INTELLIGENCE ── */}
      <div className="relative z-10 p-8 md:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-amber-950/20 backdrop-blur-2xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-2">
            SOCIAL INTELLIGENCE & RETENTION
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {SOCIAL_INTELLIGENCE.headline}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 font-light max-w-3xl mb-8">
            {SOCIAL_INTELLIGENCE.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_INTELLIGENCE.pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-neutral-800 bg-black/60 hover:border-amber-400/40 transition-all duration-300"
            >
              <span className="text-amber-400 font-mono text-xs font-bold block mb-2">{p.num}</span>
              <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
