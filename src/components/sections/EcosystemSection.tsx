"use client";

import Reveal from "@/components/ui/Reveal";
import { ECOSYSTEM_PARTNERS } from "@/lib/content";

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/08 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/06 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 right-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        04
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-10">
          <span className="text-amber-400 font-mono text-sm font-semibold">04</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Ecosystem
          </span>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-4xl mb-6">
          THE SALT MEDIA
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-200">
            ECOSYSTEM
          </span>
        </h2>
        <p className="relative z-10 text-lg md:text-xl text-neutral-300 max-w-2xl mb-12 font-light">
          We operate at the intersection of platforms, brands, and creators — building
          content that serves all three.
        </p>
      </Reveal>

      {/* Visual Ecosystem Diagram */}
      <Reveal>
        <div className="relative z-10 py-16">
          {/* Central node */}
          <div className="flex flex-col items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500/30 to-indigo-500/30 blur-lg group-hover:opacity-100 transition-opacity opacity-70" />
              <div className="relative w-36 h-36 rounded-full border border-amber-400/40 flex items-center justify-center bg-neutral-950/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)]">
                <span className="text-base font-bold tracking-tight text-center leading-tight text-white">
                  SALT
                  <br />
                  <span className="text-amber-400 font-mono text-xs font-normal">MEDIA</span>
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-6">
              <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent" />
            </div>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Platforms */}
            <div className="text-center">
              <Reveal delay={0.1}>
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full border border-neutral-700/80 flex items-center justify-center mx-auto bg-neutral-950/80 backdrop-blur-xl shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">
                      Platforms
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {ECOSYSTEM_PARTNERS.platforms.map((p, i) => (
                    <div
                      key={i}
                      className={`py-3.5 px-5 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-default shadow-md ${
                        p.tier === "primary"
                          ? "border-amber-500/40 bg-neutral-900/60 text-white font-medium shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                          : p.tier === "secondary"
                          ? "border-neutral-700/60 bg-neutral-950/40 text-neutral-200"
                          : "border-neutral-800/40 bg-neutral-950/30 text-neutral-400"
                      }`}
                    >
                      <span className="text-sm">{p.name}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Brand Categories */}
            <div className="text-center">
              <Reveal delay={0.2}>
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full border border-neutral-700/80 flex items-center justify-center mx-auto bg-neutral-950/80 backdrop-blur-xl shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">
                      Brands
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {ECOSYSTEM_PARTNERS.brandCategories.map((cat, i) => (
                    <div
                      key={i}
                      className="py-3.5 px-5 rounded-xl border border-neutral-800/60 bg-neutral-950/40 backdrop-blur-md text-neutral-300 text-sm hover:border-amber-500/30 hover:text-white transition-all duration-300 shadow-md"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Creator Network */}
            <div className="text-center">
              <Reveal delay={0.3}>
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full border border-neutral-700/80 flex items-center justify-center mx-auto bg-neutral-950/80 backdrop-blur-xl shadow-lg">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">
                      Creators
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {ECOSYSTEM_PARTNERS.creatorNetwork.map((creator, i) => (
                    <div
                      key={i}
                      className="py-3.5 px-5 rounded-xl border border-neutral-800/60 bg-neutral-950/40 backdrop-blur-md text-neutral-300 text-sm hover:border-amber-500/30 hover:text-white transition-all duration-300 shadow-md"
                    >
                      {creator}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Value proposition */}
      <Reveal>
        <div className="relative z-10 mt-20 text-center max-w-3xl mx-auto p-8 border border-neutral-800/80 rounded-3xl bg-neutral-950/50 backdrop-blur-xl shadow-2xl">
          <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
            Every piece of content we create sits at the center of this
            ecosystem — funded by brands, distributed by platforms, amplified by
            creators, and consumed by audiences.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
