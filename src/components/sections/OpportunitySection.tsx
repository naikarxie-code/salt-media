"use client";

import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { OPPORTUNITY } from "@/lib/content";

export default function OpportunitySection() {
  return (
    <section
      id="opportunity"
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics (Glows & Pattern) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-amber-500/08 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-orange-600/05 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 left-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        03
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-10">
          <span className="text-amber-400 font-mono text-sm font-semibold">03</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Opportunity
          </span>
        </div>
      </Reveal>

      {/* Main headline */}
      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl">
          THE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            ₹1,200 Cr
          </span>
          <br />
          BRANDED ENTERTAINMENT
          <br />
          OPPORTUNITY
        </h2>
      </Reveal>

      {/* Market stats — large animated */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OPPORTUNITY.marketContext.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative p-6 border border-neutral-800/80 rounded-2xl bg-neutral-950/60 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-500 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/05 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
              <AnimatedCounter
                value={item.stat}
                className="text-3xl md:text-4xl font-bold tracking-tight block mb-2 text-white"
              />
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The problems */}
      <div className="relative z-10 mt-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              The Problem
            </h3>
          </div>
          <p className="text-neutral-400 text-base max-w-2xl mb-8 font-light">
            The traditional advertising model is breaking down. Audiences are
            disengaged, and brands are struggling to connect.
          </p>
        </Reveal>

        <div className="space-y-3">
          {OPPORTUNITY.problems.map((problem, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 p-5 border border-neutral-800/60 rounded-2xl bg-neutral-950/40 backdrop-blur-md group hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
                <span className="text-amber-400/90 font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <p className="text-base text-neutral-300 group-hover:text-white transition-colors font-light">
                  {problem}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* The solution */}
      <div className="relative z-10 mt-14">
        <Reveal>
          <div className="relative p-8 md:p-10 border border-amber-500/30 rounded-3xl bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-amber-950/20 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(245,158,11,0.15)] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
                The Solution
              </span>
              <div className="w-8 h-px bg-amber-400/40" />
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-100 max-w-4xl">
              {OPPORTUNITY.solution}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
