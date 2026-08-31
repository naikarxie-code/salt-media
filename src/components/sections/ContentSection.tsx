"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  NARRATIVE_FORMATS,
  SELECTED_WORKS,
  MICRO_DRAMAS,
  FACTUAL_DOCUMENTARIES,
  AWARDS,
  ECOSYSTEM_PARTNERS,
} from "@/lib/content";

export default function ContentSection() {
  const [activeFormat, setActiveFormat] = useState<number | null>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeDocTab, setActiveDocTab] = useState<string>("ALL");

  // Filtering for Selected Works
  const filteredWorks = selectedFilter === "ALL"
    ? SELECTED_WORKS
    : SELECTED_WORKS.filter((w) => w.category.toUpperCase() === selectedFilter);

  // Filtering for Factual & Docs
  const filteredDocs = activeDocTab === "ALL"
    ? FACTUAL_DOCUMENTARIES
    : FACTUAL_DOCUMENTARIES.filter((d) => d.badge.toUpperCase().includes(activeDocTab));

  return (
    <section
      id="content"
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-amber-500/06 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-orange-600/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 left-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        05
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="text-amber-400 font-mono text-sm font-semibold">05</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Content Universe
          </span>
        </div>
      </Reveal>

      {/* Section Headline */}
      <Reveal>
        <h2 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-12">
          IPs, FORMATS &
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            CINEMATIC STORIES
          </span>
        </h2>
      </Reveal>

      {/* ── SUBSECTION 1: NARRATIVE FORMATS (ACCORDION) ── */}
      <div className="relative z-10 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
            01 • NARRATIVE FORMATS
          </span>
        </div>

        <div className="space-y-3">
          {NARRATIVE_FORMATS.map((format, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeFormat === idx
                  ? "border-amber-400/60 bg-neutral-900/90 shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                  : "border-neutral-800/80 bg-neutral-950/50 hover:border-neutral-700"
              }`}
            >
              <button
                onClick={() => setActiveFormat(activeFormat === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {format.title}
                  </h3>
                </div>
                <span className="text-amber-400 font-mono text-xl">
                  {activeFormat === idx ? "−" : "+"}
                </span>
              </button>

              {activeFormat === idx && (
                <div className="px-5 pb-5 pt-1 text-sm md:text-base text-neutral-300 font-light border-t border-neutral-800/50 mt-1">
                  {format.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBSECTION 2: SELECTED WORK & SCRIPTED IPs ── */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
              02 • SELECTED WORK & ORIGINAL IPs
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "SCRIPTED", "FACTUAL", "DOCUMENTARY", "BRANDED"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedFilter === tab
                    ? "bg-amber-400 text-black font-semibold"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl hover:border-amber-400/50 hover:bg-neutral-900/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {work.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{work.format}</span>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2">
                  {work.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  {work.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>SALT MEDIA IP</span>
                <span className="group-hover:translate-x-1 transition-transform text-amber-400">VIEW DETAILS →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBSECTION 3: MICRO-DRAMA & SHORT-FORM IP UNIVERSE ── */}
      <div className="relative z-10 mb-20 p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-amber-950/20 backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
              03 • VERTICAL & MICRO-DRAMA UNIVERSE
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Mobile-First Short-Form IPs
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1.5 rounded-full bg-neutral-900">
            VERTICAL 9:16 FORMATS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MICRO_DRAMAS.map((drama, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-neutral-800/80 bg-black/60 hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="w-full aspect-[9/12] rounded-lg bg-neutral-900 flex flex-col justify-between p-3 border border-neutral-800 mb-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className="relative z-10 text-[9px] font-mono text-amber-400 px-1.5 py-0.5 rounded bg-black/60 border border-amber-400/20 w-max">
                  {drama.category}
                </span>
                <span className="relative z-10 text-xs font-bold text-white tracking-wide">
                  {drama.title}
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 block text-center uppercase">
                {drama.platform}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBSECTION 4: FACTUAL & DOCUMENTARY SHOWCASE ── */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
              04 • FACTUAL & DOCUMENTARY
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Non-Fiction & Cultural Documentaries
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {["ALL", "FACTUAL", "DOC", "INSTITUTIONAL"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveDocTab(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeDocTab === tab
                    ? "bg-amber-400 text-black font-semibold"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDocs.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {doc.badge}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">{doc.subline}</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                  {doc.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                  {doc.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800/60 text-[10px] font-mono text-neutral-500 uppercase">
                SALT MEDIA PRODUCTION
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBSECTION 5: VERIFIED AWARDS & RECOGNITION ── */}
      <div className="relative z-10 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
            05 • AWARDS & FESTIVAL RECOGNITION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AWARDS.map((award, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-neutral-800/80 bg-black/40 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="text-amber-400 font-mono text-xs font-bold mb-1">★ RECOGNITION</div>
              <h5 className="text-base font-bold text-white mb-1">{award.title}</h5>
              <div className="text-xs font-mono text-neutral-400 mb-2">{award.event}</div>
              <p className="text-[11px] text-neutral-500 font-light">{award.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
