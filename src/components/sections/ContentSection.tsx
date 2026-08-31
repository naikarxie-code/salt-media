"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { NARRATIVE_FORMATS, CONTENT_PORTFOLIO } from "@/lib/content";

export default function ContentSection() {
  const [expandedFormat, setExpandedFormat] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="content"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neutral-600 text-sm font-light">05</span>
          <div className="w-12 h-px bg-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Content
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95]">
              NARRATIVE
              <br />
              <span className="text-neutral-500">FORMATS</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-neutral-400 max-w-xl">
              Seven distinct content formats designed for the intersection of
              branded storytelling and platform entertainment.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Expandable Formats */}
      <div className="mt-16 space-y-0">
        {NARRATIVE_FORMATS.map((format, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div
              className={`border-b border-neutral-800/50 transition-all duration-500 cursor-pointer group ${
                expandedFormat === i ? "bg-neutral-900/30" : ""
              }`}
              onClick={() =>
                setExpandedFormat(expandedFormat === i ? null : i)
              }
            >
              <div className="flex items-center justify-between py-6 px-2">
                <div className="flex items-center gap-6">
                  <span className="text-neutral-700 text-sm font-light w-6">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg md:text-2xl font-medium tracking-tight group-hover:text-white transition-colors">
                    {format.title}
                  </h3>
                </div>
                <span
                  className={`text-neutral-600 text-2xl transition-transform duration-300 ${
                    expandedFormat === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedFormat === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-neutral-400 pl-12 pr-8 leading-relaxed">
                  {format.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Content Portfolio */}
      <div className="mt-32">
        <Reveal>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-12">
            Content Portfolio
          </h3>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {CONTENT_PORTFOLIO.categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-white text-black"
                    : "border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active category content */}
        <Reveal>
          <div className="p-8 border border-neutral-800/50 rounded-2xl bg-neutral-900/20">
            <p className="text-lg text-neutral-300 mb-6">
              {CONTENT_PORTFOLIO.categories[activeCategory].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CONTENT_PORTFOLIO.categories[activeCategory].examples.map(
                (example, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-neutral-800/40 bg-neutral-900/30 hover:bg-neutral-800/40 transition-colors"
                  >
                    <p className="text-sm text-neutral-400">{example}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
