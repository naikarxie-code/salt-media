"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { COMPANY } from "@/lib/content";

const CameraScene = dynamic(() => import("@/components/3d/CameraScene"), { ssr: false });

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Simple entrance animations — no ScrollTrigger needed for hero
    const tl = gsap.timeline({ delay: 0.3 });

    if (labelRef.current) {
      gsap.set(labelRef.current, { opacity: 0, y: 20 });
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0);
    }
    if (headlineRef.current) {
      gsap.set(headlineRef.current, { opacity: 0, y: 40 });
      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.15);
    }
    if (subRef.current) {
      gsap.set(subRef.current, { opacity: 0, y: 30 });
      tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.35);
    }
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.5);
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* 3D Camera — anchored inside hero, scrolls away with it */}
      <CameraScene />
      <div className="max-w-3xl">
        <p
          ref={labelRef}
          className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-amber-400 font-mono font-semibold mb-3 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
          CREATOR-LED PRODUCTION STUDIO • BRANDED CONTENT & AFP
        </p>

        <div className="mb-4 md:mb-6">
          <img
            src="/Salt%20media%20Logo_2.png"
            alt="Salt Media Logo"
            className="h-24 md:h-36 lg:h-44 w-auto object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          />
        </div>

        <h1
          ref={headlineRef}
          className="text-[clamp(2rem,4vw,4rem)] font-bold tracking-[-0.04em] leading-[0.92]"
        >
          BRANDED{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
            CONTENT
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 text-lg md:text-2xl font-light text-neutral-400 max-w-xl leading-relaxed"
        >
          {COMPANY.positioning}
        </p>

        <div ref={ctaRef} className="mt-12 flex gap-4 items-center">
          <a
            href="#about"
            className="group relative px-8 py-4 bg-white text-black font-medium text-sm tracking-wider uppercase rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Explore</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-neutral-700 text-neutral-300 font-medium text-sm tracking-wider uppercase rounded-full hover:border-neutral-400 hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
