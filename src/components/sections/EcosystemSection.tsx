"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { ECOSYSTEM_PARTNERS } from "@/lib/content";

export default function EcosystemSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "platforms" | "brands" | "creators">("all");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="text-amber-400 font-mono text-sm font-semibold">04</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Ecosystem
          </span>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-4xl mb-4">
          THE SALT MEDIA
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-200">
            ECOSYSTEM
          </span>
        </h2>
        <p className="relative z-10 text-base md:text-xl text-neutral-300 max-w-2xl mb-8 font-light">
          We operate at the intersection of platforms, brands, and creators — building
          content that serves all three seamlessly.
        </p>
      </Reveal>

      {/* Interactive Category Filter Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-10 border-b border-neutral-800 pb-4">
        {[
          { id: "all", label: "ALL ECOSYSTEM" },
          { id: "platforms", label: "PLATFORMS / NETWORKS" },
          { id: "brands", label: "APPROVED BRANDS" },
          { id: "creators", label: "CREATORS / TALENT" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
              activeCategory === tab.id
                ? "bg-amber-400 text-black font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Ecosystem Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Category 1: Platforms */}
        {(activeCategory === "all" || activeCategory === "platforms") && (
          <div className="p-6 rounded-3xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                Platforms / Networks
              </h3>
            </div>
            <div className="space-y-3">
              {ECOSYSTEM_PARTNERS.platforms.map((p, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(p.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-3 rounded-xl border transition-all duration-300 flex justify-between items-center ${
                    hoveredItem === p.name
                      ? "border-amber-400 bg-neutral-900 text-white scale-[1.02]"
                      : "border-neutral-800/60 bg-neutral-900/30 text-neutral-300"
                  }`}
                >
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">{p.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Approved Brands */}
        {(activeCategory === "all" || activeCategory === "brands") && (
          <div className="p-6 rounded-3xl border border-amber-500/20 bg-neutral-950/60 backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                Approved Brand Partners
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {ECOSYSTEM_PARTNERS.approvedBrands.map((b, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(b.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    hoveredItem === b.name
                      ? "border-amber-400 bg-amber-500/10 text-white scale-105"
                      : "border-neutral-800/60 bg-neutral-900/30 text-neutral-300"
                  }`}
                >
                  <span className="text-xs font-semibold block">{b.name}</span>
                  <span className="text-[9px] font-mono text-amber-400/80 block mt-0.5">{b.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 3: Creators / Talent */}
        {(activeCategory === "all" || activeCategory === "creators") && (
          <div className="p-6 rounded-3xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                Creator & Talent Network
              </h3>
            </div>
            <div className="space-y-3">
              {ECOSYSTEM_PARTNERS.creatorNetwork.map((c, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(c)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    hoveredItem === c
                      ? "border-emerald-400 bg-emerald-500/10 text-white scale-[1.02]"
                      : "border-neutral-800/60 bg-neutral-900/30 text-neutral-300"
                  }`}
                >
                  <span className="text-sm font-medium">{c}</span>
                  <span className="text-[10px] font-mono text-emerald-400">Collaborator</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Central Hub Note */}
      <div className="relative z-10 mt-10 p-4 rounded-2xl border border-neutral-800 bg-neutral-950/80 text-center">
        <span className="text-xs font-mono text-neutral-400">
          SALT MEDIA OPERATES AS THE CENTRAL CREATIVE ENGINE CONNECTING NETWORKS, BRANDS & TALENT
        </span>
      </div>
    </section>
  );
}
