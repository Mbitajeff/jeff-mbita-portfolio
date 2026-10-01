"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FilterOption<T extends string> {
  label: string;
  value: T;
}

interface AnimatedFilterBarProps<T extends string> {
  options: FilterOption<T>[];
  active: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
}

export function AnimatedFilterBar<T extends string>({
  options,
  active,
  onChange,
  ariaLabel,
}: AnimatedFilterBarProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const btn = buttonRefs.current.get(active);
    const container = containerRef.current;
    if (!btn || !container) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={ariaLabel}
      className="relative flex flex-wrap gap-2"
    >
      {/* Sliding pill indicator */}
      <div
        aria-hidden="true"
        className="absolute top-0 h-full rounded-full bg-accent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none"
        style={{ left: indicator.left, width: indicator.width }}
      />

      {options.map((opt) => (
        <button
          key={opt.value}
          ref={(el) => {
            if (el) buttonRefs.current.set(opt.value, el);
          }}
          onClick={() => onChange(opt.value)}
          aria-pressed={active === opt.value}
          className={cn(
            "relative z-10 text-sm px-4 py-2 rounded-full border transition-colors duration-200",
            active === opt.value
              ? "border-accent text-white"
              : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
