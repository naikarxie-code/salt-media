"use client";

import { useState, useEffect } from "react";
import { SECTIONS, NAVIGATION_ITEMS } from "@/lib/content";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

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

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4 backdrop-blur-md bg-black/50" : "py-6"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg md:text-xl font-bold tracking-[-0.05em] uppercase hover:opacity-70 transition-opacity"
            aria-label="Go to home"
          >
            Salt Media
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION_ITEMS.slice(0, 7).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-white ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[11px] uppercase tracking-[0.2em] hover:text-neutral-400 transition-colors z-[101]"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-black transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex items-center px-8 md:px-24 overflow-y-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 w-full max-w-6xl mx-auto">
            {SECTIONS.map((section) => {
              const navItem = NAVIGATION_ITEMS.find(
                (n) => n.id === section.id
              );
              return (
                <div key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-start gap-4 text-left"
                  >
                    <span className="text-neutral-600 text-sm font-light mt-1">
                      {section.number}
                    </span>
                    <div>
                      <span className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-neutral-400 transition-colors">
                        {section.label}
                      </span>
                      {navItem?.subsections &&
                        navItem.subsections.length > 0 && (
                          <div className="mt-3 flex flex-col gap-1.5">
                            {navItem.subsections.map((sub) => (
                              <span
                                key={sub}
                                className="text-sm text-neutral-600 group-hover:text-neutral-500 transition-colors"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Progress Indicator (right side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[98] hidden lg:flex flex-col gap-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-1.5 transition-all duration-500 rounded-full ${
              activeSection === section.id
                ? "h-8 bg-white"
                : "h-1.5 bg-neutral-700 hover:bg-neutral-500"
            }`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </div>
    </>
  );
}
