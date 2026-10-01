"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const totalHeight = parent.scrollHeight;

    const onScroll = () => {
      const rect = parent.getBoundingClientRect();
      const viewH = window.innerHeight;
      // how far we've scrolled into the timeline
      const scrolled = Math.max(0, viewH - rect.top);
      const pct = Math.min(scrolled / rect.height, 1);
      setHeight(pct * totalHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ height: `${height}px` }}
      className="absolute left-[7px] top-2 w-0.5 bg-accent transition-none"
    />
  );
}
