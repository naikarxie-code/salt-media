"use client";

import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neutral-600 text-sm font-light">09</span>
          <div className="w-12 h-px bg-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </span>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9]">
            LET&apos;S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600">
              WHAT&apos;S NEXT.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to create content that brands want to fund, platforms want to
            air, and audiences want to watch?
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@saltmedia.in"
              className="group relative px-10 py-5 bg-white text-black font-medium text-sm tracking-wider uppercase rounded-full overflow-hidden transition-transform hover:scale-105 inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-neutral-600 mb-3">
                General Inquiries
              </h4>
              <p className="text-neutral-400 text-sm">hello@saltmedia.in</p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-neutral-600 mb-3">
                Business & Partnerships
              </h4>
              <p className="text-neutral-400 text-sm">partnerships@saltmedia.in</p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-neutral-600 mb-3">
                Location
              </h4>
              <p className="text-neutral-400 text-sm">Mumbai, India</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <Reveal>
        <div className="mt-32 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Salt Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "YouTube"].map((social) => (
              <span
                key={social}
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
