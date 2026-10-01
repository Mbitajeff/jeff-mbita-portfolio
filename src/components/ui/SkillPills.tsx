"use client";

import { useEffect, useRef, useState } from "react";

interface SkillPillsProps {
  skills: string[];
}

export function SkillPills({ skills }: SkillPillsProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap gap-2" role="list" aria-label="Skills">
      {skills.map((s, i) => (
        <span
          key={s}
          role="listitem"
          style={{
            transitionDelay: `${i * 40}ms`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
          className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent hover:text-accent hover:bg-blue-50 dark:hover:bg-zinc-700 cursor-default select-none"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
