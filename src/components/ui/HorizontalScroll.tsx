"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    if (!container || !slider) return;

    // Wait a tick for layout to settle before measuring
    const timer = setTimeout(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".h-panel", slider);
      if (panels.length === 0) return;

      const totalWidth = (panels.length - 1) * window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(slider, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, container);

      return () => ctx.revert();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <div
        ref={sliderRef}
        style={{ display: "flex", width: "fit-content", willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
