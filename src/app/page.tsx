"use client";

import Navigation from "@/components/ui/Navigation";
import AmbientParticles from "@/components/ui/AmbientParticles";
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

export default function Home() {
  return (
    <>
      <AmbientParticles />
      <Navigation />

      <main id="main-scroll-container" className="relative w-full bg-black">
        {/* 01 HOME / HERO */}
        <VideoHeroSection />

        {/* 02 ABOUT */}
        <AboutSection />

        {/* 03 OPPORTUNITY */}
        <OpportunitySection />

        {/* 04 ECOSYSTEM */}
        <EcosystemSection />

        {/* 05 CONTENT UNIVERSE */}
        <ContentSection />

        {/* 06 AMAZON AFP */}
        <AmazonAFPSection />

        {/* 07 STRATEGY & SOCIAL INTELLIGENCE */}
        <StrategySection />

        {/* 08 STARTER TERRITORIES & OUTPUT STACK */}
        <StarterTerritoriesSection />

        {/* 09 VERIFIED CREDENTIALS */}
        <ImpactSection />

        {/* 10 CONTACT & THE FIRST MOVE */}
        <ContactSection />
      </main>
    </>
  );
}
