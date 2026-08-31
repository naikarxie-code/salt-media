"use client";

import { ReactNode } from "react";
import Navigation from "@/components/ui/Navigation";
import AmbientParticles from "@/components/ui/AmbientParticles";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import TextMarquee from "@/components/ui/TextMarquee";
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
    <div className="relative overflow-hidden py-4">
      <TextMarquee
        amberAccent
        direction="left"
        items={[
          "SWIPE OR SCROLL TO EXPLORE HORIZONTAL PANELS",
          "SALT MEDIA CONTENT UNIVERSE",
          "AMAZON MX PLAYER AFP",
          "CO-DEVELOPMENT MODEL",
          "11+ YEARS CRAFT",
          "100+ BRAND COLLABORATIONS",
        ]}
      />
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

        <TextMarquee direction="right" speed={20} />

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
