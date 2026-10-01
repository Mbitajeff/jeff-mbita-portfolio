"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedStepLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // starts animating when top of element enters viewport
      const progress = Math.min(
        Math.max((viewH - rect.top) / (viewH * 0.6), 0),
        1
      );
      setWidth(progress * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden md:block absolute top-4 left-8 right-8 h-px bg-zinc-200 dark:bg-zinc-700 overflow-hidden"
    >
      <div
        className="h-full bg-accent transition-none"
        style={{ width: `${width}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}
