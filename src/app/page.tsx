"use client";

import Navigation from "@/components/ui/Navigation";
import AmbientParticles from "@/components/ui/AmbientParticles";
import VideoHeroSection from "@/components/sections/VideoHeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import {
  ContentPanel,
  AmazonAFPPanel,
  StrategyPanel,
  ImpactPanel,
  ContactPanel,
} from "@/components/sections/HorizontalPanels";

// Horizontal transition indicator
function HorizontalTransitionMarker() {
  return (
    <div className="relative flex items-center justify-center py-8 overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="absolute flex items-center gap-3 bg-black px-6">
        <div className="w-2 h-2 rounded-full border border-neutral-600" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">
          Swipe Right
        </span>
        <div className="w-2 h-2 rounded-full border border-neutral-600" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AmbientParticles />
      <Navigation />

      <main id="main-scroll-container" className="relative w-full">

        {/* ── VERTICAL HALF ─────────────────────────────────────────── */}
        <VideoHeroSection />
        <AboutSection />
        <OpportunitySection />
        <EcosystemSection />

        {/* ── PIVOT MARKER ──────────────────────────────────────────── */}
        <HorizontalTransitionMarker />

        {/* ── HORIZONTAL HALF ───────────────────────────────────────── */}
        <HorizontalScroll>
          <ContentPanel />
          <AmazonAFPPanel />
          <StrategyPanel />
          <ImpactPanel />
          <ContactPanel />
        </HorizontalScroll>

      </main>
    </>
  );
}
