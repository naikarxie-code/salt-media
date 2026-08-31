"use client";

import { useState, useEffect } from "react";
import { SECTIONS, MENU_NAV_TREE } from "@/lib/content";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section
      const sections = SECTIONS.map((s) => document.getElementById(s.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Primary nav links (About through Impact)
  const primaryNavIds = ["about", "opportunity", "ecosystem", "content", "amazon-afp", "strategy", "impact"];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4 backdrop-blur-xl bg-black/70 border-b border-neutral-900/60" : "py-6"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-lg md:text-xl font-bold tracking-[-0.05em] uppercase hover:opacity-90 transition-opacity"
            aria-label="Go to home"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
            <span className="text-white">SALT MEDIA</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {primaryNavIds.map((id) => {
              const sec = SECTIONS.find((s) => s.id === id);
              if (!sec) return null;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "text-amber-400 font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/80 text-[11px] uppercase tracking-[0.2em] text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all duration-300 z-[101]"
            aria-label="Toggle menu"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${menuOpen ? "bg-amber-400 animate-ping" : "bg-neutral-500"}`} />
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-neutral-950/98 backdrop-blur-2xl transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background glow in menu */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="h-full flex items-center px-6 md:px-16 overflow-y-auto py-28">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-10">
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-amber-400 font-semibold">
                INDEX & ARCHITECTURE
              </span>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-500">
                SALT MEDIA STUDIOS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {MENU_NAV_TREE.map((item) => (
                <div key={item.id} className="group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-start gap-4 text-left w-full border-b border-neutral-900 pb-3 group-hover:border-amber-400/40 transition-colors"
                  >
                    <span className="text-amber-400 font-mono text-xs font-semibold mt-1">
                      {item.number}
                    </span>
                    <div>
                      <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors block">
                        {item.title}
                      </span>
                      {item.subsections && item.subsections.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                          {item.subsections.map((sub, idx) => (
                            <span
                              key={sub}
                              className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors font-light"
                            >
                              {sub}{idx < item.subsections.length - 1 ? " •" : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-mono gap-4">
              <span>MUMBAI, INDIA • CREATOR-LED PRODUCTION STUDIO</span>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-full border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 transition-colors"
              >
                START A CONVERSATION →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Progress Indicator (right side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[98] hidden lg:flex flex-col gap-2.5">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative flex items-center justify-end ${
              activeSection === section.id ? "w-8" : "w-2"
            }`}
            aria-label={`Go to ${section.label}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-[10px] uppercase font-mono px-2 py-1 rounded border border-neutral-800 whitespace-nowrap pointer-events-none">
              {section.number} {section.label}
            </span>
            <div
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeSection === section.id
                  ? "w-8 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  : "w-2 bg-neutral-700 hover:bg-neutral-400"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
