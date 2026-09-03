"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 3D scene loaded only after video ends
const CameraScene = dynamic(() => import("@/components/3d/CameraScene"), {
  ssr: false,
  loading: () => null,
});

// ─── Main ────────────────────────────────────────────────────────────────────
export default function VideoHeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);   // tall outer (gives scroll room)
  const stickyRef   = useRef<HTMLDivElement>(null);   // CSS sticky viewport
  const videoLayerRef = useRef<HTMLDivElement>(null);
  const sceneLayerRef = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const textRef     = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  const [showScene, setShowScene] = useState(false);

  // ── Text entrance (always fires immediately on mount) ──
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    const tl = gsap.timeline({ delay: 0.2 });
    gsap.set(text.children, { opacity: 0, y: 20 });
    tl.to(text.children, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
    });
    return () => { tl.kill(); };
  }, []);

  // ── Scroll-scrubbed canvas frames (desktop only) ──
  useEffect(() => {

    const wrapper = wrapperRef.current;
    const sceneLayer = sceneLayerRef.current;
    const overlay = overlayRef.current;
    const scrollLine = scrollLineRef.current;
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
    if (!wrapper || !sceneLayer || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 125;
    const currentFrame = (index: number) =>
      `/videos/frames/frame_${(index + 1).toString().padStart(4, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (images[airpods.frame]) {
        // Draw image covering the canvas
        const img = images[airpods.frame];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    // Ensure first frame renders when loaded
    images[0].onload = () => {
        // Handle canvas resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };
        window.addEventListener("resize", resize);
        resize();
    };


    let ctx = gsap.context(() => {
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          onUpdate(self) {
            render();

            // ── Fade overlay (gradient) out slightly as we scroll in
            if (overlay) {
              overlay.style.opacity = String(Math.max(0.2, 1 - self.progress * 0.6));
            }

            // ── Cross-fade canvas → 3D scene at 88–100% ──
            const FADE_START = 0.88;
            const t = Math.max(0, Math.min(1, (self.progress - FADE_START) / (1 - FADE_START)));
            canvas.style.opacity = String(1 - t);
            sceneLayer.style.opacity = String(t);

            // Pre-mount 3D scene when approaching the transition
            if (self.progress > 0.75 && !showScene) {
              setShowScene(true);
            }

            // Hide scroll indicator after user starts scrolling
            if (scrollLine && self.progress > 0.05) {
              scrollLine.style.opacity = "0";
            }
          },
        },
      });
    });

    return () => {
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Scroll room = 3× viewport (2 additional screens of scroll distance) ──
  return (
    <div ref={wrapperRef} id="home" style={{ height: "300vh" }}>
      {/* ── Sticky viewport ──────────────────────────────────────────────── */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        {/* ── Canvas layer (z: 2) ─────────────────────────────────────────── */}
        <canvas
            id="hero-canvas"
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                transition: "opacity 0.1s linear",
            }}
        />

        {/* ── 3D scene layer (z: 3) — fades in at video end ─────────────── */}
        <div
          ref={sceneLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            opacity: 0,
            transition: "opacity 0.1s linear",
          }}
        >
          {/* Mount 3D scene early so it's ready when needed */}
          {showScene && <CameraScene />}
        </div>

        {/* ── Ambient Background Glows (z: 1) ──────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/10 blur-[140px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/05 blur-[120px]" />
        </div>

        {/* ── Camera Viewfinder HUD Overlay (z: 5) ──────────────────────── */}
        <div className="absolute inset-0 pointer-events-none z-[5] p-6 md:p-10 flex flex-col justify-between select-none">
          {/* Top HUD bar */}
          <div className="flex justify-between items-start opacity-40">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase">
                REC • 4K 60FPS
              </span>
            </div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-white uppercase hidden sm:block">
              ISO 800 | f/1.8 | 1/200
            </div>
          </div>

          {/* Viewfinder corner brackets */}
          <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-white/25" />
          <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-white/25" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-white/25" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-white/25" />

          {/* Bottom HUD bar */}
          <div className="flex justify-between items-end opacity-30">
            <span className="text-[9px] font-mono tracking-[0.3em] text-white uppercase">
              RAW 16:9
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-white uppercase">
              SALT_STUDIO_V1
            </span>
          </div>
        </div>

        {/* ── Gradient overlay for text readability (z: 4) ──────────────── */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.1) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Text overlay (z: 10) ───────────────────────────────────────── */}
        <div
          ref={textRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 clamp(2rem, 8vw, 6rem)",
            pointerEvents: "none",
          }}
        >
          {/* Tagline ABOVE logo */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#f59e0b",
                fontWeight: 600,
                fontFamily: "monospace",
              }}
            >
              CREATOR-LED PRODUCTION STUDIO • BRANDED CONTENT & AFP
            </p>
          </div>

          {/* Salt Media Logo from public directory */}
          <div className="mb-4 md:mb-6">
            <img
              src="/Salt%20media%20Logo_2.png"
              alt="Salt Media Logo"
              className="h-24 md:h-36 lg:h-44 w-auto object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            />
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              margin: 0,
            }}
          >
            BRANDED{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #ffffff, #f59e0b, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CONTENT
            </span>
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "48ch",
              lineHeight: 1.6,
            }}
          >
            {COMPANY.positioning}
          </p>

          <p className="mt-3 text-xs md:text-sm text-neutral-400 font-mono tracking-wide">
            {COMPANY.secondaryPositioning}
          </p>

          <div
            style={{
              marginTop: "2.25rem",
              display: "flex",
              gap: "1rem",
              pointerEvents: "auto",
            }}
          >
            <a
              href="#about"
              style={{
                padding: "0.875rem 2rem",
                background: "#fff",
                color: "#000",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:bg-amber-400 hover:text-black shadow-lg"
            >
              EXPLORE
            </a>
            <a
              href="#contact"
              style={{
                padding: "0.875rem 2rem",
                border: "1px solid rgba(245,158,11,0.4)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "9999px",
                textDecoration: "none",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:border-amber-400 hover:bg-amber-400/10"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* ── Scroll indicator (z: 11) ───────────────────────────────────── */}
        <div
          ref={scrollLineRef}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 11,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.45,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "2.5rem",
              background: "linear-gradient(to bottom, #fff, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
