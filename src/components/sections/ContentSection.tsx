"use client";

import { useState, ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  NARRATIVE_FORMATS,
  SELECTED_WORKS,
  MICRO_DRAMAS,
  FACTUAL_DOCUMENTARIES,
  AWARDS,
  ECOSYSTEM_PARTNERS,
} from "@/lib/content";

function SectionContainer({ id, children }: { id: string, children: ReactNode }) {
  return (
    <div className="h-panel w-screen h-screen flex-shrink-0 overflow-hidden relative">
      <div 
        data-lenis-prevent="true" 
        style={{ overscrollBehavior: 'auto' }}
        className="h-full overflow-y-auto overflow-x-hidden max-w-[100vw]"
      >
        <section
          id={id}
          className="relative pt-24 md:pt-28 pb-12 px-6 md:px-12 lg:px-20 bg-black min-h-screen flex flex-col justify-start"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-amber-500/06 rounded-full blur-[180px]" />
            <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-orange-600/05 rounded-full blur-[160px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          </div>
          <span
            className="absolute top-10 left-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
            aria-hidden
          >
            05
          </span>
          {children}
        </section>
      </div>
    </div>
  );
}

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
    <>
      <SectionContainer id="content-1">

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-4 mb-4">
          <span className="text-amber-400 font-mono text-sm font-semibold">05</span>
          <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Content Universe
          </span>
        </div>
      </Reveal>

      {/* Section Headline */}
      <Reveal>
        <h2 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-8">
          IPs, FORMATS &
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            CINEMATIC STORIES
          </span>
        </h2>
      </Reveal>

      {/* ── SUBSECTION 1: NARRATIVE FORMATS (ACCORDION) ── */}
      <div className="relative z-10 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
            01 • NARRATIVE FORMATS
          </span>
        </div>

        <div className="space-y-2.5">
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
                className="w-full p-3.5 md:p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                    {format.title}
                  </h3>
                </div>
                <span className="text-amber-400 font-mono text-lg">
                  {activeFormat === idx ? "−" : "+"}
                </span>
              </button>

              {activeFormat === idx && (
                <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-neutral-300 font-light border-t border-neutral-800/50 mt-1">
                  {format.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>

      <SectionContainer id="content-2">
      {/* ── SUBSECTION 2: SELECTED WORK & SCRIPTED IPs ── */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
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
                className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative p-5 rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl hover:border-amber-400/50 hover:bg-neutral-900/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {work.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{work.format}</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-1.5">
                  {work.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  {work.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>SALT MEDIA IP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>

      <SectionContainer id="content-3">
      {/* ── SUBSECTION 3: MICRO-DRAMA & SHORT-FORM IP UNIVERSE ── */}
      <div className="relative z-10 mb-12 p-6 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-amber-950/20 backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
              03 • VERTICAL & MICRO-DRAMA UNIVERSE
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Mobile-First Short-Form IPs
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">
            VERTICAL 9:16 FORMATS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MICRO_DRAMAS.map((drama, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl border border-neutral-800/80 bg-black/60 hover:border-amber-400/50 transition-all duration-300 flex flex-col group"
            >
              <div className="w-full aspect-[9/13] rounded-lg bg-neutral-900 flex flex-col justify-between p-2.5 border border-neutral-800 mb-2 relative overflow-hidden">
                {drama.image ? (
                  <>
                    <img
                      src={drama.image}
                      alt={drama.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-amber-950/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                  </>
                )}

                <span className="relative z-10 text-[9px] font-mono font-semibold uppercase tracking-wider text-amber-400 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-md border border-amber-400/30 w-max shadow-sm">
                  {drama.category}
                </span>
                <span className="relative z-10 text-xs font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {drama.title}
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 block text-center uppercase group-hover:text-amber-400/80 transition-colors">
                {drama.platform}
              </span>
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>

      <SectionContainer id="content-4">
      {/* ── SUBSECTION 4: FACTUAL & DOCUMENTARY SHOWCASE ── */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
              04 • FACTUAL & DOCUMENTARY
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Non-Fiction & Cultural Documentaries
            </h3>
          </div>

          {/* High-visibility Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md shadow-xl flex-wrap self-start lg:self-auto">
            {["ALL", "FACTUAL", "DOC", "INSTITUTIONAL"].map((tab) => {
              const isActive = activeDocTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveDocTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/90"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocs.map((doc, idx) => (
            <div
              key={`${activeDocTab}-${doc.title}`}
              style={{
                animation: "docFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${idx * 40}ms`,
              }}
              className="p-5 rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl hover:border-amber-400/40 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {doc.badge}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">{doc.subline}</span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-1.5 group-hover:text-amber-300 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                  {doc.description}
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-neutral-800/60 text-[10px] font-mono text-neutral-500 uppercase group-hover:text-amber-400/70 transition-colors">
                SALT MEDIA PRODUCTION
              </div>
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>

      <SectionContainer id="content-5">
      {/* ── SUBSECTION 5: VERIFIED AWARDS & RECOGNITION ── */}
      <div className="relative z-10 p-6 rounded-3xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
            05 • AWARDS & FESTIVAL RECOGNITION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AWARDS.map((award, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-800/80 bg-black/40 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="text-amber-400 font-mono text-xs font-bold mb-1">★ RECOGNITION</div>
              <h5 className="text-sm font-bold text-white mb-1">{award.title}</h5>
              <div className="text-xs font-mono text-neutral-400 mb-1.5">{award.event}</div>
              <p className="text-[11px] text-neutral-500 font-light">{award.note}</p>
            </div>
          ))}
        </div>
      </div>
      </SectionContainer>
    </>
  );
}
