"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Github, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { AnimatedFilterBar } from "@/components/ui/AnimatedFilterBar";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/data/projects";
import type { ProjectCategory, Project } from "@/lib/types";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Cloud and DevOps", value: "cloud-devops" },
  { label: "AI on AWS", value: "ai-on-aws" },
  { label: "Data", value: "data" },
  { label: "Full-stack", value: "fullstack" },
];

const categoryLabel: Record<ProjectCategory, string> = {
  "cloud-devops": "Cloud and DevOps",
  "ai-on-aws": "AI on AWS",
  data: "Data",
  fullstack: "Full-stack",
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      {project.links.code && (
        <a href={project.links.code} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository"
          className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors">
          <Github className="w-4 h-4" />
        </a>
      )}
      {project.links.article && !project.links.article.startsWith("TODO") && (
        <a href={project.links.article} target="_blank" rel="noopener noreferrer" aria-label="Article"
          className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors">
          <BookOpen className="w-4 h-4" />
        </a>
      )}
      {project.links.demo && (
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
          className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors">
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const visibleFeatured = featured.filter(
    (p) => active === "all" || p.categories.includes(active)
  );
  const visibleRest = rest.filter(
    (p) => active === "all" || p.categories.includes(active)
  );

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Reveal>
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                <TypewriterText text="Portfolio" speed={80} />
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl md:text-5xl text-zinc-900 dark:text-white">
                Projects
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Filter bar with sliding pill */}
        <Reveal className="mb-10">
          <AnimatedFilterBar
            options={filters}
            active={active}
            onChange={setActive}
            ariaLabel="Filter projects by category"
          />
        </Reveal>

        {/* Featured 3-col grid */}
        {visibleFeatured.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {visibleFeatured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <TiltCard className="h-full">
                <article className="card-h group h-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col">
                  <div className="pf w-full h-44 bg-gradient-to-br from-accent/20 to-zinc-200 dark:to-zinc-700 flex items-center justify-center relative overflow-hidden">
                    {p.hasDiagram ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/diagrams/${p.slug}.png`}
                        alt={`${p.title} architecture diagram`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProjectCover slug={p.slug} title={p.title} categories={p.categories} />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.categories.map((c) => (
                        <span key={c} className="text-xs bg-blue-50 dark:bg-zinc-800 text-accent border border-blue-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                          {categoryLabel[c]}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                      {p.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.stack.slice(0, 4).map((s) => (
                        <span key={s} className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <a href={`/projects/${p.slug}/`} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">
                        View details <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <ProjectLinks project={p} />
                    </div>
                  </div>
                </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        )}

        {/* Compact grid */}
        {visibleRest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleRest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <article className="card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent h-full flex flex-col">
                  {/* Thumbnail */}
                  <div className="w-full h-28 bg-gradient-to-br from-accent/10 to-zinc-200 dark:to-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
                    {p.hasDiagram ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/diagrams/${p.slug}.png`}
                        alt={`${p.title} architecture diagram`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProjectCover slug={p.slug} title={p.title} categories={p.categories} />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.categories.map((c) => (
                        <span key={c} className="text-xs bg-blue-50 dark:bg-zinc-800 text-accent border border-blue-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                          {categoryLabel[c]}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-base text-zinc-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                      {p.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <a href={`/projects/${p.slug}/`} className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white nl">
                        Details <ArrowRight className="w-3 h-3" />
                      </a>
                      <ProjectLinks project={p} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {visibleFeatured.length === 0 && visibleRest.length === 0 && (
          <p className="text-zinc-400 text-sm py-10 text-center">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
