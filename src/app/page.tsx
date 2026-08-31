"use client";

import { ReactNode } from "react";
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
import OutputStackSection from "@/components/sections/OutputStackSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * PanelWrapper — gives each child section the classes the HorizontalScroll
 * GSAP animation queries: `h-panel`, `w-screen`, `h-screen`, `flex-shrink-0`.
 * The inner content scrolls vertically inside the viewport-locked panel.
 */
function PanelWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="h-panel w-screen h-screen flex-shrink-0 overflow-hidden relative">
      <div className="h-full overflow-y-auto">{children}</div>
    </div>
  );
}

/** Decorative pivot between the vertical and horizontal halves */
function HorizontalTransitionMarker() {
  return (
    <div className="relative flex items-center justify-center py-8 overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="absolute flex items-center gap-3 bg-black px-6">
        <div className="w-2 h-2 rounded-full border border-neutral-600" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">
          Scroll to Explore
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

      <main id="main-scroll-container" className="relative w-full bg-black">

        {/* ── VERTICAL SECTIONS (01–04) ───────────────────────────────── */}
        {/* Hero: video canvas + 3D camera — untouched */}
        <VideoHeroSection />

        <AboutSection />
        <OpportunitySection />
        <EcosystemSection />

        {/* ── PIVOT MARKER ──────────────────────────────────────────── */}
        <HorizontalTransitionMarker />

        {/* ── HORIZONTAL SECTIONS (05–10) ───────────────────────────── */}
        <HorizontalScroll>
          <PanelWrapper>
            <ContentSection />
          </PanelWrapper>

          <PanelWrapper>
            <AmazonAFPSection />
          </PanelWrapper>

          <PanelWrapper>
            <StrategySection />
          </PanelWrapper>

          <PanelWrapper>
            <StarterTerritoriesSection />
          </PanelWrapper>

          <PanelWrapper>
            <OutputStackSection />
          </PanelWrapper>

          <PanelWrapper>
            <ImpactSection />
          </PanelWrapper>

          <PanelWrapper>
            <ContactSection />
          </PanelWrapper>
        </HorizontalScroll>

      </main>
    </>
  );
}
