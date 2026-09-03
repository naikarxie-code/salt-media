"use client";

import Reveal from "@/components/ui/Reveal";
import { OUTPUT_STACK } from "@/lib/content";

export default function OutputStackSection() {
  return (
    <section
      id="output-stack"
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
        08B
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-3 mb-2 md:mb-3">
          <span className="text-amber-400 font-mono text-xs md:text-sm font-semibold">08B</span>
          <div className="w-10 md:w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Output Stack Architecture
          </span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal>
        <h2 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-2 md:mb-3">
          ONE HERO IDEA →
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            ENTIRE CONTENT ECOSYSTEM
          </span>
        </h2>
        <p className="relative z-10 text-xs md:text-sm lg:text-base text-neutral-300 max-w-3xl mb-4 md:mb-6 font-light">
          Unlocking maximum ROI by deriving promos, reels, BTS, and cutdowns from one single hero shoot.
        </p>
      </Reveal>

      {/* Output Stack Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pb-12 lg:pb-0">
        {OUTPUT_STACK.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.08}>
            <div className="p-4 md:p-5 rounded-xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl hover:border-amber-400/50 hover:bg-neutral-900/60 transition-all duration-300 shadow-xl flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-400 font-mono text-[10px] md:text-xs font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    LEVEL 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-400/40 group-hover:bg-amber-400 transition-colors" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-1.5 group-hover:text-amber-300 transition-colors">
                  {item.level}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[9px] md:text-[10px] font-mono text-neutral-500 uppercase flex justify-between">
                <span>MULTI-FORMAT ASSET</span>
                <span className="text-amber-400/80">DERIVED OUTPUT</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
