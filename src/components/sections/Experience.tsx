"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { AnimatedTimelineLine } from "@/components/ui/AnimatedTimeline";
import { AnimatedFilterBar } from "@/components/ui/AnimatedFilterBar";
import { experience } from "@/data/experience";
import type { SkillTag } from "@/lib/types";

const skillFilters: { label: string; value: SkillTag | "none" }[] = [
  { label: "AWS", value: "aws" },
  { label: "Terraform", value: "terraform" },
  { label: "Containers", value: "containers" },
  { label: "Security", value: "security" },
  { label: "Data", value: "data" },
  { label: "ML and AI", value: "ml-ai" },
];

export function Experience() {
  const [activeSkill, setActiveSkill] = useState<SkillTag | "none">("none");
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["gca"]));

  const toggleEntry = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const entryMatches = (entry: typeof experience[0]) =>
    activeSkill === "none" || entry.bullets.some((b) => b.skills.includes(activeSkill as SkillTag));

  return (
    <section id="experience" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <Reveal>
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              <TypewriterText text="Work history" speed={70} />
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl md:text-5xl text-zinc-900 dark:text-white">
              Experience
            </h2>
          </Reveal>
        </div>

        {/* Skill filter with sliding pill */}
        <Reveal className="mb-10">
          <AnimatedFilterBar
            options={skillFilters}
            active={activeSkill}
            onChange={(v) => setActiveSkill(v === activeSkill ? "none" : v)}
            ariaLabel="Filter by skill"
          />
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <AnimatedTimelineLine />
          {/* Static fallback track */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
          <div className="flex flex-col gap-6 pl-8">
            {experience.map((entry, i) => {
              const matches = entryMatches(entry);
              const isOpen = expanded.has(entry.id);

              return (
                <Reveal key={entry.id} delay={(i % 3) as 0 | 1 | 2}>
                  <div className={`relative transition-opacity duration-300 ${!matches && activeSkill !== "none" ? "opacity-40" : "opacity-100"}`}>
                    <div className="absolute -left-8 top-2.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-white dark:bg-zinc-950" aria-hidden="true" />

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                      <button
                        onClick={() => toggleEntry(entry.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <div>
                          <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-lg text-zinc-900 dark:text-white">
                            {entry.title}
                          </h3>
                          <p className="text-sm text-accent font-medium mt-0.5">{entry.company}</p>
                          <p className="text-xs text-zinc-400 mt-1">
                            {entry.period} &middot; {entry.location}
                          </p>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                        )}
                      </button>

                      {isOpen && (
                        <ul className="px-6 pb-6 space-y-2">
                          {entry.bullets.map((b, bi) => {
                            const bulletMatches =
                              activeSkill === "none" ||
                              b.skills.includes(activeSkill as SkillTag);
                            return (
                              <li
                                key={bi}
                                className={`text-sm leading-relaxed pl-4 border-l-2 transition-colors ${
                                  activeSkill !== "none" && bulletMatches
                                    ? "border-accent text-zinc-900 dark:text-zinc-100 bg-accent/5 rounded-r pr-2 py-1"
                                    : "border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
                                }`}
                              >
                                {b.text}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
