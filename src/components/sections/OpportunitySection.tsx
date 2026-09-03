"use client";

import Reveal from "@/components/ui/Reveal";
import { OPPORTUNITY } from "@/lib/content";
import OpportunityGraphWidget from "@/components/ui/OpportunityGraphWidget";

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

      {/* Main headline + Data Graph Widget */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 xl:col-span-7">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.98] text-white">
              {OPPORTUNITY.headline}
            </h2>
            <p className="text-base md:text-xl text-amber-400/90 font-mono mt-4 font-light leading-relaxed">
              {OPPORTUNITY.subheadline}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 xl:col-span-5">
          <Reveal delay={0.15}>
            <OpportunityGraphWidget />
          </Reveal>
        </div>
      </div>

      {/* The 5 Narrative Problems */}
      <div className="relative z-10 mt-14">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              The Market Friction
            </h3>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mb-6 font-light">
            Why traditional advertising model is breaking down and where the opportunity lies.
          </p>
        </Reveal>

        <div className="space-y-3">
          {OPPORTUNITY.gapPoints.map((point, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 p-5 border border-neutral-800/60 rounded-2xl bg-neutral-950/40 backdrop-blur-md group hover:border-amber-400/30 hover:bg-neutral-900/40 transition-all duration-300">
                <span className="text-amber-400 font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <p className="text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors font-normal leading-relaxed">
                  {point}
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
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
                THE SOLUTION
              </span>
              <div className="w-8 h-px bg-amber-400/50" />
            </div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              The Co-Development Model
            </h3>

            <p className="text-base md:text-xl text-neutral-300 leading-relaxed font-normal mb-6">
              {OPPORTUNITY.solution}
            </p>

            <div className="p-4 rounded-xl border border-amber-400/30 bg-black/50 text-amber-300 font-mono text-xs md:text-sm italic">
              "{OPPORTUNITY.philosophyQuote}"
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
              {[
                "Creator-first production",
                "Brand involvement day 1",
                "Platform-native thinking",
                "End-to-end production",
                "India digital ecosystem",
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-300 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
