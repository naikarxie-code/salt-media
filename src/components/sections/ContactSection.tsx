"use client";

import Reveal from "@/components/ui/Reveal";
import { CONTACT_PITCH } from "@/lib/content";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-6 md:py-10 lg:py-12 px-6 md:px-12 lg:px-20 bg-black border-t border-neutral-900 flex flex-col justify-center min-h-screen"
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-10 right-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        10
      </span>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section Label */}
        <Reveal>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
              10 • THE FIRST MOVE
            </span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.04em] leading-[0.95] text-white mb-3">
            LET'S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              WHAT'S NEXT.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-xs md:text-sm lg:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-5">
            {CONTACT_PITCH.subheadline}
          </p>
        </Reveal>

        {/* ── THE FIRST MOVE OFFER BOX ── */}
        <Reveal>
          <div className="p-4 md:p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-b from-neutral-950/90 via-neutral-900/80 to-amber-950/30 backdrop-blur-2xl shadow-[0_0_100px_-20px_rgba(245,158,11,0.2)] mb-5 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.35em] font-mono text-amber-400 font-semibold block mb-4">
              WHAT WE DELIVER IN THE FIRST MEETING
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {CONTACT_PITCH.offerBox.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-amber-400/30 bg-black/60 text-amber-300 font-mono text-xs font-bold flex flex-col justify-center items-center"
                >
                  <span className="text-amber-400 text-xs mb-1">0{idx + 1}</span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="mailto:partnerships@saltmedia.in?subject=Salt%20Media%20x%20Amazon%20AFP%20Partnership"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-amber-400 text-black font-bold text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              <span>START A CONVERSATION</span>
              <span className="text-base">→</span>
            </a>

            <div className="mt-3.5 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[11px] font-mono text-neutral-400 tracking-wider">
              <span>
                Partnerships:{" "}
                <a
                  href="mailto:partnerships@saltmedia.in?subject=Salt%20Media%20x%20Amazon%20AFP%20Partnership"
                  className="text-amber-300 hover:text-white underline decoration-amber-500/50 underline-offset-4 font-semibold transition-colors"
                >
                  partnerships@saltmedia.in
                </a>
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span>
                General:{" "}
                <a
                  href="mailto:hello@saltmedia.in?subject=Salt%20Media%20Inquiry"
                  className="text-amber-300 hover:text-white underline decoration-amber-500/50 underline-offset-4 font-semibold transition-colors"
                >
                  hello@saltmedia.in
                </a>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Contact info strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5 border-t border-neutral-900 text-left max-w-4xl mx-auto">
          {CONTACT_PITCH.details.map((detail, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-neutral-900 bg-neutral-950/40">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                {detail.label}
              </span>
              <span className="text-sm font-medium text-white">{detail.value}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-neutral-900/60 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-neutral-400 gap-3">
          <span>© {new Date().getFullYear()} SALT MEDIA. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            {CONTACT_PITCH.socials.map((s) => (
              <span key={s} className="hover:text-amber-400 cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
