"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const numericMatch = value.match(/^([\d,.]+)/);
    const suffix = value.replace(/^[\d,.]+/, "");

    if (!numericMatch) {
      ref.current.textContent = value;
      return;
    }

    const targetNum = parseFloat(numericMatch[1].replace(/,/g, ""));

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetNum,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (!ref.current) return;
            const display =
              targetNum >= 100
                ? Math.round(obj.val).toLocaleString()
                : obj.val.toFixed(targetNum % 1 !== 0 ? 1 : 0);
            ref.current.textContent = display + suffix;
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      0{value.replace(/^[\d,.]+/, "")}
    </span>
  );
}
