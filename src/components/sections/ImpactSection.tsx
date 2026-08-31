"use client";

import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS, ECOSYSTEM_PARTNERS } from "@/lib/content";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-[600px] h-[600px] bg-amber-500/08 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 right-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        09
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="text-amber-400 font-mono text-sm font-semibold">09</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Verified Credentials
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-4xl mb-4">
          PROVEN SCALE &
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            CRAFT CREDENTIALS
          </span>
        </h2>
        <p className="relative z-10 text-base md:text-xl text-neutral-300 max-w-2xl mb-12 font-light">
          A track record built over 11+ years of narrative production, trusted by major platforms, brands, and government institutions.
        </p>
      </Reveal>

      {/* Verified Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {STATS.map((stat, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative p-8 border border-neutral-800/80 rounded-2xl bg-neutral-950/60 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/05 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
              <div>
                <AnimatedCounter
                  value={stat.value}
                  className={`font-bold tracking-tight block mb-2 text-white ${
                    /^\d/.test(stat.value)
                      ? "text-4xl md:text-5xl"
                      : "text-2xl md:text-3xl lg:text-4xl leading-tight"
                  }`}
                />
                <span className="text-sm font-semibold tracking-wider font-mono text-amber-400 block mb-2">
                  {stat.label}
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {stat.subtext}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-800/80 text-[10px] font-mono text-neutral-500 uppercase">
                VERIFIED CREDENTIAL
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Brand & Partner Track Record */}
      <div className="relative z-10 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
        <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold mb-6">
          APPROVED BRAND & INSTITUTION COLLABORATIONS
        </h3>

        <div className="flex flex-wrap gap-3">
          {ECOSYSTEM_PARTNERS.approvedBrands.map((brand, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-300 hover:border-amber-400/40 hover:text-white transition-all duration-300"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
