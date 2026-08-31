"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { COMPANY, STATS } from "@/lib/content";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      const lines = text.querySelectorAll(".reveal-line");

      gsap.fromTo(
        lines,
        { opacity: 0, y: 30, immediateRender: false },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-black"
    >
      {/* ── Background Aesthetics (Ambient Glows & Subtle Grid Pattern) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/05 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-500/05 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Large Backdrop Watermark */}
      <span
        className="absolute top-12 right-10 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden
      >
        02
      </span>

      {/* Section label */}
      <div className="relative z-10 flex items-center gap-4 mb-10">
        <span className="text-amber-400 font-mono text-sm font-semibold">02</span>
        <div className="w-12 h-px bg-gradient-to-r from-amber-400/50 to-neutral-700" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-medium">About</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
            A STUDIO
            <br />BUILT FOR THE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-amber-200/80">
              FUTURE OF MEDIA
            </span>
          </h2>

          {/* Core Pillars */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {COMPANY.corePillars.map((pillar, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-xl border border-neutral-800/60 bg-neutral-950/40">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-xs text-neutral-300 font-mono">{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={textRef} className="flex flex-col gap-6 lg:pt-2">
          <p className="reveal-line text-lg md:text-xl text-neutral-200 leading-relaxed font-light">
            {COMPANY.description}
          </p>
          
          {/* Highlighted Philosophy Quote */}
          <div className="reveal-line p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-neutral-950/60 to-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />
            <p className="text-sm uppercase font-mono tracking-widest text-amber-400 mb-2 font-semibold">THE SALT PHILOSOPHY</p>
            <p className="text-base md:text-lg text-white font-medium italic">
              "{COMPANY.philosophy}"
            </p>
          </div>

          <div className="reveal-line grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-mono mb-1.5">Vision</h3>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{COMPANY.vision}</p>
            </div>
            <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-mono mb-1.5">Mission</h3>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{COMPANY.mission}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMPANY.differentiators.map((diff, i) => (
          <div
            key={i}
            className="group relative p-5 border border-neutral-800/70 rounded-2xl bg-neutral-950/40 backdrop-blur-md hover:border-amber-500/40 hover:bg-neutral-900/40 transition-all duration-500 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/05 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-colors" />
            <div className="flex items-center gap-3 mb-2">
              <span className="text-amber-400 font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20">
                0{i + 1}
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">{diff}</p>
          </div>
        ))}
      </div>

      {/* Verified Credentials stats strip */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-3xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-2xl shadow-2xl">
        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col justify-center p-3 border-b sm:border-b-0 sm:border-r last:border-none border-neutral-800/60">
            <AnimatedCounter value={stat.value} className="text-3xl md:text-4xl font-bold tracking-tight text-white block" />
            <div className="text-xs font-semibold tracking-wider font-mono text-amber-400 mt-2">{stat.label}</div>
            <p className="text-[11px] text-neutral-400 mt-1 font-light">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
