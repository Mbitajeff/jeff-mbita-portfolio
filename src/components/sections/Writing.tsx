import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { articles } from "@/data/writing";

export function Writing() {
  return (
    <section id="blogs" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <Reveal>
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                <TypewriterText text="Thoughts" speed={90} />
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl md:text-5xl text-zinc-900 dark:text-white">
                Blogs
              </h2>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <a
              href="https://medium.com/@jeffmbita69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
            >
              All articles on Medium
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article, i) => (
            <Reveal key={article.url} delay={(i % 3 + 1) as 1 | 2 | 3}>
              <article className="card-h group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-accent h-full flex flex-col relative overflow-hidden">
                {/* shimmer sweep on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(37,99,235,0.05) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer-sweep 1.5s ease infinite",
                  }}
                />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-blue-50 dark:bg-zinc-800 text-accent border border-blue-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                    AWS
                  </span>
                  <span className="text-xs text-zinc-400">{article.date}</span>
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                </a>
                {article.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                    {article.description}
                  </p>
                )}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl mt-auto"
                >
                  Read on Medium <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Remaining articles as a list */}
        {articles.length > 3 && (
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {articles.slice(3).map((article) => (
              <Reveal key={article.url}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors card-h"
                >
                  <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{article.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
