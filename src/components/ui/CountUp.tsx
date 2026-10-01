"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number; // ms
  className?: string;
}

export function CountUp({ to, suffix = "", duration = 1800, className }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay so the element is visible before counting
    const timer = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * to));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    }, 600);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          clearTimeout(timer);
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  );
}
