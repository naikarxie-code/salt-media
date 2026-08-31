"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextMarqueeProps {
  items?: string[];
  speed?: number; // base duration in seconds
  direction?: "left" | "right";
  className?: string;
  amberAccent?: boolean;
}

const DEFAULT_ITEMS = [
  "SALT MEDIA",
  "CREATOR-LED STUDIO",
  "BRANDED ENTERTAINMENT",
  "ADVERTISER FUNDED PROGRAMMING",
  "ORIGINAL SCRIPTED IPs",
  "MICRO-DRAMA UNIVERSE",
  "FACTUAL & DOCUMENTARY",
  "150+ PRODUCTION CAPACITY",
  "END-TO-END EXECUTION",
];

export default function TextMarquee({
  items = DEFAULT_ITEMS,
  speed = 25,
  direction = "left",
  className = "",
  amberAccent = false,
}: TextMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const dirMultiplier = direction === "left" ? -1 : 1;
    const halfWidth = track.scrollWidth / 2;

    // Endless seamless marquee tween
    const tween = gsap.to(track, {
      x: dirMultiplier * halfWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    tweenRef.current = tween;

    // Dynamically accelerate marquee speed based on user scroll velocity
    const scrollTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const boost = Math.min(velocity / 200, 4); // cap max speed boost
        gsap.to(tween, {
          timeScale: (1 + boost) * (self.direction || 1),
          duration: 0.3,
          overwrite: true,
        });
      },
    });

    return () => {
      tween.kill();
      scrollTrigger.kill();
    };
  }, [speed, direction]);

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full py-4 bg-neutral-950/80 border-y border-neutral-800/80 backdrop-blur-md select-none ${className}`}>
      {/* Subtle glowing edge gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
      >
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span
              className={`text-sm md:text-base font-mono font-bold tracking-[0.25em] uppercase ${
                amberAccent && idx % 2 === 1
                  ? "text-amber-400"
                  : "text-neutral-300 hover:text-white"
              } transition-colors`}
            >
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
