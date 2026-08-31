"use client";

import Navigation from "@/components/ui/Navigation";
import AmbientParticles from "@/components/ui/AmbientParticles";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import VideoHeroSection from "@/components/sections/VideoHeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ContentSection from "@/components/sections/ContentSection";
import AmazonAFPSection from "@/components/sections/AmazonAFPSection";
import StrategySection from "@/components/sections/StrategySection";
import StarterTerritoriesSection from "@/components/sections/StarterTerritoriesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ContactSection from "@/components/sections/ContactSection";

// Horizontal transition pivot indicator
function HorizontalTransitionMarker() {
  return (
    <div className="relative flex items-center justify-center py-12 overflow-hidden bg-black">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute flex items-center gap-3 bg-black px-6 py-2 rounded-full border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-amber-300 font-semibold">
          SCROLL TO EXPLORE PANELS →
        </span>
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AmbientParticles />
      <Navigation />

      <main id="main-scroll-container" className="relative w-full bg-black overflow-x-hidden">
        {/* ── VERTICAL SECTIONS (01 - 04) ─────────────────────────────────── */}
        <VideoHeroSection />
        <AboutSection />
        <OpportunitySection />
        <EcosystemSection />

        {/* ── PIVOT MARKER ──────────────────────────────────────────────── */}
        <HorizontalTransitionMarker />

        {/* ── HORIZONTAL SCROLL PANELS (05 - 10) ────────────────────────── */}
        <HorizontalScroll>
          <ContentSection />
          <AmazonAFPSection />
          <StrategySection />
          <StarterTerritoriesSection />
          <ImpactSection />
          <ContactSection />
        </HorizontalScroll>
      </main>
    </>
  );
}
