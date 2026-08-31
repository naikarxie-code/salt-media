"use client";

import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { IMPACT } from "@/lib/content";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <Reveal>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neutral-600 text-sm font-light">08</span>
          <div className="w-12 h-px bg-neutral-700" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Impact
          </span>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
          MEASURABLE
          <br />
          <span className="text-neutral-500">IMPACT</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 text-lg text-neutral-400 max-w-2xl">
          Every campaign we produce is measured against clear KPIs — from
          audience reach to brand impact to production scale.
        </p>
      </Reveal>

      {/* Metric Categories */}
      <div className="mt-20 space-y-16">
        {IMPACT.metrics.map((category, catIdx) => (
          <div key={catIdx}>
            <Reveal>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-8 flex items-center gap-4">
                <span>{category.category}</span>
                <div className="flex-1 h-px bg-neutral-800/50" />
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {category.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group">
                    <AnimatedCounter
                      value={item.value}
                      className="text-4xl md:text-6xl font-bold tracking-tight block mb-2 group-hover:text-neutral-300 transition-colors"
                    />
                    <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
