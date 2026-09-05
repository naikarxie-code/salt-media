"use client";

import Reveal from "@/components/ui/Reveal";
import { AMAZON_AFP } from "@/lib/content";

export default function AmazonAFPSection() {
  return (
    <section
      id="amazon-afp"
      className="relative py-6 md:py-10 lg:py-12 px-6 md:px-12 lg:px-20 bg-black flex flex-col justify-center min-h-screen"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-[600px] h-[600px] bg-amber-500/08 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-600/06 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-6 right-10 text-[20vw] lg:text-[22vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        06
      </span>

      {/* Section label */}
      <Reveal>
        <div className="relative z-10 flex items-center gap-3 mb-2 md:mb-3">
          <span className="text-amber-400 font-mono text-xs md:text-sm font-semibold">06</span>
          <div className="w-10 md:w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
            Amazon AFP Partnership
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal>
        <h2 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl mb-2 md:mb-3">
          ADVERTISER FUNDED
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            PROGRAMMING (AFP)
          </span>
        </h2>
        <p className="relative z-10 text-xs md:text-sm lg:text-base text-neutral-300 max-w-3xl mb-4 md:mb-6 font-light">
          {AMAZON_AFP.description}
        </p>
      </Reveal>

      {/* ── Win-Win-Win 4 Stakeholder Framework ── */}
      <div className="relative z-10 mb-4 md:mb-6">
        <Reveal>
          <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold mb-2">
            THE WIN-WIN-WIN ECOSYSTEM
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              role: "BRAND",
              color: "text-amber-400",
              border: "border-amber-500/30",
              bg: "bg-amber-950/20",
              desc: AMAZON_AFP.ecosystem.brand,
            },
            {
              role: "PLATFORM",
              color: "text-orange-400",
              border: "border-orange-500/30",
              bg: "bg-orange-950/20",
              desc: AMAZON_AFP.ecosystem.platform,
            },
            {
              role: "AUDIENCE",
              color: "text-indigo-400",
              border: "border-indigo-500/30",
              bg: "bg-indigo-950/20",
              desc: AMAZON_AFP.ecosystem.audience,
            },
            {
              role: "PRODUCER",
              color: "text-emerald-400",
              border: "border-emerald-500/30",
              bg: "bg-emerald-950/20",
              desc: AMAZON_AFP.ecosystem.producer,
            },
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div
                className={`p-3.5 md:p-4 rounded-xl border ${item.border} ${item.bg} backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[10px] md:text-xs font-bold tracking-widest ${item.color}`}>
                      0{idx + 1} • {item.role}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                  <p className="text-xs text-neutral-200 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10 text-[9px] md:text-[10px] font-mono text-neutral-400 uppercase">
                  STAKEHOLDER BENEFIT
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Why Salt Media for AFP ── */}
      <div className="relative z-10 p-4 md:p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-amber-950/20 backdrop-blur-2xl">
        <Reveal>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold block mb-1">
            WHY SALT MEDIA FOR AFP
          </span>
          <h3 className="text-base md:text-xl font-bold text-white tracking-tight mb-3">
            Built Specifically for Platform-Native Brand Programming
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
          {AMAZON_AFP.whySaltMedia.map((reason, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-neutral-800 bg-black/60 hover:border-amber-400/40 transition-all duration-300"
            >
              <span className="text-amber-400 font-mono text-[10px] md:text-xs font-bold block mb-1">0{idx + 1}</span>
              <h4 className="text-xs font-bold text-white mb-1">{reason.title}</h4>
              <p className="text-[11px] text-neutral-300 font-light leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
