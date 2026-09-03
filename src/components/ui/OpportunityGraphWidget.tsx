"use client";

import { useState } from "react";
import { STATS, ECOSYSTEM_PARTNERS, SELECTED_WORKS, FACTUAL_DOCUMENTARIES, MICRO_DRAMAS, OUTPUT_STACK } from "@/lib/content";

export default function OpportunityGraphWidget() {
  const [activeTab, setActiveTab] = useState<"scale" | "ip">("scale");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const scaleMetrics = [
    {
      label: "Brand Collaborations",
      value: STATS[1].value, // 100+
      subtext: "Automotive, Tech, FMCG & Government Partners",
      fillPct: 92,
      tag: "100+ BRANDS",
      highlights: ECOSYSTEM_PARTNERS.approvedBrands.slice(0, 5).map(b => b.name).join(" • "),
    },
    {
      label: "Crew Scale-Up Capacity",
      value: STATS[2].value, // 150+
      subtext: "End-to-end production infrastructure across India",
      fillPct: 96,
      tag: "150+ CREW",
      highlights: "Concept → Writing → Production → Post → Delivery",
    },
    {
      label: "Years of Craft",
      value: STATS[0].value, // 11+
      subtext: "Deep production expertise in fiction & factual",
      fillPct: 78,
      tag: "11+ YEARS",
      highlights: "Scripted • Factual • Ad Films • Micro-Dramas",
    },
    {
      label: "Platform Network",
      value: `${ECOSYSTEM_PARTNERS.platforms.length} Key Partners`,
      subtext: "National OTT & Broadcast distribution channels",
      fillPct: 85,
      tag: "7 PLATFORMS",
      highlights: ECOSYSTEM_PARTNERS.platforms.slice(0, 4).map(p => p.name).join(" • "),
    },
  ];

  const ipDistribution = [
    {
      category: "Factual & Documentaries",
      count: FACTUAL_DOCUMENTARIES.length,
      color: "from-amber-400 to-amber-600",
      pct: 40,
      detail: `${FACTUAL_DOCUMENTARIES.length} Titles (e.g. OMG! Yeh Mera India, Kashi Vishwanath)`,
    },
    {
      category: "Micro-Drama Short IPs",
      count: MICRO_DRAMAS.length,
      color: "from-orange-400 to-orange-600",
      pct: 35,
      detail: `${MICRO_DRAMAS.length} Mobile Formats (e.g. Omi the GOAT, Notice Period)`,
    },
    {
      category: "Scripted Web Series",
      count: SELECTED_WORKS.length,
      color: "from-yellow-400 to-amber-500",
      pct: 25,
      detail: `${SELECTED_WORKS.length} Major Series (e.g. FIRST COPY S1&S2, The Holiday)`,
    },
  ];

  return (
    <div className="relative w-full border border-amber-500/25 rounded-2xl bg-gradient-to-br from-neutral-950/95 via-neutral-900/90 to-amber-950/30 backdrop-blur-xl p-5 md:p-6 shadow-[0_0_60px_-15px_rgba(245,158,11,0.18)] transition-all duration-300 overflow-hidden">
      {/* Background glow dot */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-neutral-800/80">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
            SALT MEDIA DATA INDEX
          </span>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1 bg-black/60 border border-neutral-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("scale")}
            className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md transition-all ${
              activeTab === "scale"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Scale Metrics
          </button>
          <button
            onClick={() => setActiveTab("ip")}
            className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md transition-all ${
              activeTab === "ip"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            IP Distribution
          </button>
        </div>
      </div>

      {/* TAB 1: SCALE METRICS */}
      {activeTab === "scale" && (
        <div className="space-y-4">
          {scaleMetrics.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredBar(idx)}
              onMouseLeave={() => setHoveredBar(null)}
              className="group p-3 rounded-xl bg-black/40 border border-neutral-800/80 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-xs md:text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="text-sm md:text-base font-mono font-bold text-amber-400">
                  {item.value}
                </span>
              </div>

              {/* Glowing animated bar */}
              <div className="relative h-2 w-full bg-neutral-800 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.fillPct}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span className="truncate max-w-[70%]">{item.subtext}</span>
                <span className="text-amber-400/80 shrink-0">{item.tag}</span>
              </div>

              {/* Hover highlight preview */}
              {hoveredBar === idx && (
                <div className="mt-2 pt-2 border-t border-neutral-800 text-[10px] font-mono text-amber-300/90 truncate animate-fadeIn">
                  ⚡ {item.highlights}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: IP DISTRIBUTION & DERIVATIVES */}
      {activeTab === "ip" && (
        <div className="space-y-5">
          {/* Stacked bar visualization */}
          <div>
            <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-2">
              <span>Verified IP Library Mix</span>
              <span className="text-amber-400">22+ Active Titles</span>
            </div>
            <div className="flex h-3 w-full rounded-full overflow-hidden bg-neutral-800 gap-0.5">
              {ipDistribution.map((ip, i) => (
                <div
                  key={i}
                  className={`h-full bg-gradient-to-r ${ip.color} transition-all duration-700`}
                  style={{ width: `${ip.pct}%` }}
                  title={`${ip.category}: ${ip.count} Titles`}
                />
              ))}
            </div>
          </div>

          {/* Breakdown cards */}
          <div className="grid grid-cols-1 gap-2.5">
            {ipDistribution.map((ip, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-neutral-800 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${ip.color}`} />
                  <div>
                    <span className="font-medium text-neutral-200 block">{ip.category}</span>
                    <span className="text-[10px] font-mono text-neutral-400">{ip.detail}</span>
                  </div>
                </div>
                <span className="font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-xs">
                  {ip.count} IPs
                </span>
              </div>
            ))}
          </div>

          {/* Output Stack Footer Pill */}
          <div className="p-3 rounded-xl bg-neutral-900/90 border border-amber-500/20">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-1.5">
              <span>ONE IDEA ➔ 6 OUTPUT DERIVATIVES</span>
              <span>100% ROI</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {OUTPUT_STACK.map((out, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-neutral-300 border border-amber-400/20"
                >
                  {out.level}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Widget Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>Source: Salt Media Portfolio & Canva Presentation</span>
        <span className="text-amber-400/90">Verified Website Data</span>
      </div>
    </div>
  );
}
