"use client";

import { useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  NARRATIVE_FORMATS,
  CONTENT_PORTFOLIO,
  AMAZON_AFP,
  STRATEGY,
  IMPACT,
} from "@/lib/content";

/* ─── Shared panel shell ───────────────────────────────────────────────── */
function Panel({
  id,
  number,
  label,
  children,
  glowColor = "amber",
}: {
  id: string;
  number: string;
  label: string;
  children: React.ReactNode;
  glowColor?: "amber" | "indigo" | "orange" | "cyan" | "violet";
}) {
  const glowMap = {
    amber: "bg-amber-500/08",
    indigo: "bg-indigo-500/08",
    orange: "bg-orange-500/08",
    cyan: "bg-cyan-500/08",
    violet: "bg-violet-500/08",
  };

  return (
    <section
      id={id}
      className="h-panel w-screen h-screen flex-shrink-0 flex flex-col overflow-hidden relative bg-black"
    >
      {/* ── Panel Background Glow & Grid ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] ${glowMap[glowColor]}`} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Panel number watermark */}
      <span
        className="absolute bottom-0 right-6 text-[22vw] font-black text-white/[0.025] leading-none select-none pointer-events-none"
        aria-hidden
      >
        {number}
      </span>

      <div className="h-panel-content flex flex-col h-full px-8 md:px-16 lg:px-20 py-16 relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8 shrink-0">
          <span className="text-amber-400 font-mono text-sm font-semibold">{number}</span>
          <div className="w-10 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            {label}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </section>
  );
}

/* ─── 05 CONTENT ───────────────────────────────────────────────────────── */
export function ContentPanel() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Panel id="content" number="05" label="Content" glowColor="amber">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left — headline */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.92]">
              NARRATIVE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-200">
                FORMATS
              </span>
            </h2>
            <p className="mt-4 text-neutral-300 text-base max-w-sm font-light">
              Seven formats bridging branded storytelling and platform
              entertainment.
            </p>
          </div>

          {/* Portfolio pills */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {CONTENT_PORTFOLIO.categories.map((cat, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/60 backdrop-blur-md text-xs font-mono text-neutral-300 hover:border-amber-500/40 transition-colors"
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col justify-center overflow-y-auto pr-2 space-y-2">
          {NARRATIVE_FORMATS.map((f, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                expanded === i
                  ? "border-amber-500/40 bg-neutral-950/80 backdrop-blur-xl shadow-lg"
                  : "border-neutral-800/60 bg-neutral-950/30 hover:border-neutral-700"
              }`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm md:text-base font-medium ${expanded === i ? "text-amber-400" : "text-neutral-200"}`}>
                  {f.title}
                </span>
                <span
                  className={`text-amber-400/80 font-mono transition-transform duration-300 ${expanded === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 text-sm text-neutral-400 leading-relaxed font-light ${
                  expanded === i ? "max-h-24 mt-2.5 pt-2 border-t border-neutral-800/50" : "max-h-0"
                }`}
              >
                {f.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ─── 06 AMAZON AFP ────────────────────────────────────────────────────── */
export function AmazonAFPPanel() {
  return (
    <Panel id="amazon-afp" number="06" label="Amazon AFP" glowColor="orange">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.92]">
              ADVERTISER
              <br />
              FUNDED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-amber-200">
                PROGRAMMING
              </span>
            </h2>
            <p className="mt-4 text-neutral-300 text-sm max-w-sm leading-relaxed font-light">
              {AMAZON_AFP.description}
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {AMAZON_AFP.stats.slice(0, 4).map((s, i) => (
              <div key={i} className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl shadow-lg">
                <AnimatedCounter
                  value={s.value}
                  className="text-2xl md:text-3xl font-bold block mb-1 text-white"
                />
                <p className="text-xs font-mono text-amber-400/80 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — win-win-win */}
        <div className="flex flex-col justify-center gap-3.5">
          <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-amber-400 mb-1">
            Win-Win-Win Ecosystem
          </h3>
          {Object.entries(AMAZON_AFP.ecosystem).map(([role, desc], i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-neutral-800/70 bg-neutral-950/60 backdrop-blur-xl hover:border-amber-500/30 transition-all shadow-md"
            >
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-orange-400 font-semibold block mb-1">
                {role}
              </span>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ─── 07 STRATEGY ──────────────────────────────────────────────────────── */
export function StrategyPanel() {
  const [active, setActive] = useState(0);
  const phases = STRATEGY.codevelopmentModel.phases;

  return (
    <Panel id="strategy" number="07" label="Strategy" glowColor="indigo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left — phase selector */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[0.92]">
              THE CO-DEVELOPMENT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-indigo-200">
                MODEL
              </span>
            </h2>
            <p className="mt-4 text-sm text-neutral-300 max-w-sm font-light leading-relaxed">
              {STRATEGY.codevelopmentModel.description}
            </p>
          </div>

          {/* Phase tabs */}
          <div className="flex flex-col gap-2.5 mt-4">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm text-left transition-all duration-300 font-mono ${
                  active === i
                    ? "bg-amber-400 text-black font-semibold shadow-[0_0_25px_rgba(245,158,11,0.3)]"
                    : "border border-neutral-800/80 bg-neutral-950/60 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                <span className="font-bold">{p.phase}</span>
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right — active phase */}
        <div className="flex flex-col justify-center p-8 rounded-3xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-2xl shadow-2xl">
          <span className="text-6xl font-mono font-black text-amber-400/30 mb-1">
            {phases[active].phase}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">{phases[active].title}</h3>
          <p className="text-sm text-neutral-300 mb-6 leading-relaxed font-light">
            {phases[active].description}
          </p>
          <div className="grid grid-cols-1 gap-2.5">
            {phases[active].activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-sm text-neutral-300 font-light">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ─── 08 IMPACT ────────────────────────────────────────────────────────── */
export function ImpactPanel() {
  return (
    <Panel id="impact" number="08" label="Impact" glowColor="violet">
      <div className="h-full flex flex-col justify-between">
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.92] shrink-0">
          MEASURABLE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-200">
            IMPACT
          </span>
        </h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 content-start">
          {IMPACT.metrics.map((cat, ci) => (
            <div key={ci} className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl shadow-xl">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 mb-4 border-b border-neutral-800/60 pb-2">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.items.map((item, ii) => (
                  <div key={ii}>
                    <AnimatedCounter
                      value={item.value}
                      className="text-3xl md:text-4xl font-bold block text-white"
                    />
                    <p className="text-xs text-neutral-300 mt-1 font-light">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ─── 09 CONTACT ───────────────────────────────────────────────────────── */
export function ContactPanel() {
  return (
    <Panel id="contact" number="09" label="Contact" glowColor="cyan">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.9]">
            LET&apos;S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-neutral-400">
              WHAT&apos;S NEXT.
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
            Ready to create content that brands want to fund, platforms want to
            air, and audiences want to watch?
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@saltmedia.in"
              className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_35px_rgba(245,158,11,0.3)]"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "General", value: "hello@saltmedia.in" },
            { label: "Partnerships", value: "partnerships@saltmedia.in" },
            { label: "Location", value: "Mumbai, India" },
          ].map((c, i) => (
            <div key={i} className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl shadow-lg">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 mb-2">
                {c.label}
              </h4>
              <p className="text-sm text-neutral-200 font-light">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800/80 pt-6 flex justify-between items-center">
          <p className="text-xs text-neutral-500 font-mono">
            © {new Date().getFullYear()} Salt Media
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "YouTube"].map((s) => (
              <span key={s} className="text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
