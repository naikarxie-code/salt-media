"use client";

import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function AskSalt() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigateSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON (Bottom-Right) ────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[180]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-3 px-5 py-3 rounded-full border shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-amber-400 border-amber-300 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-105"
              : "bg-neutral-950/90 border-amber-400/40 text-white hover:border-amber-400 hover:bg-neutral-900 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          }`}
          aria-label="Toggle ASK SALT AI Assistant"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 relative" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase leading-none text-amber-400 group-hover:text-amber-300 transition-colors">
              AI ASSISTANT
            </span>
            <span className="text-xs font-bold tracking-tight uppercase leading-snug">
              ASK SALT
            </span>
          </div>
        </button>
      </div>

      {/* ── BACKDROP OVERLAY ─────────────────────────────────────────── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[190] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* ── CHAT DRAWER — POPS FROM LEFT WHEN CLICKED ─────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[440px] md:w-[480px] z-[200] transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        {isOpen && (
          <ChatWindow
            onClose={() => setIsOpen(false)}
            onNavigateSection={handleNavigateSection}
          />
        )}
      </div>
    </>
  );
}
