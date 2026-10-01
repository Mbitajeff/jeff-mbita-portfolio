import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, BookOpen, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCover } from "@/components/ui/ProjectCover";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jeff Mbita`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors mb-8 nl">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((c) => (
              <span key={c} className="text-xs bg-blue-50 dark:bg-zinc-800 text-accent border border-blue-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                {c === "cloud-devops" ? "Cloud and DevOps" : c === "ai-on-aws" ? "AI on AWS" : c === "data" ? "Data" : "Full-stack"}
              </span>
            ))}
          </div>
          <h1 className="font-[family-name:var(--font-pt-sans)] font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.shortDescription}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.links.article && !project.links.article.startsWith("TODO") && (
              <a href={project.links.article} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors">
                <BookOpen className="w-4 h-4" /> Article
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-10">

            <section aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-3">Problem</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.problem}</p>
            </section>

            <section aria-labelledby="role-heading">
              <h2 id="role-heading" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-3">My Role</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.myRole}</p>
            </section>

            <section aria-labelledby="arch-heading">
              <h2 id="arch-heading" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-3">Architecture</h2>
              {project.hasDiagram ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/diagrams/${project.slug}.png`}
                  alt={`Architecture diagram for ${project.title}`}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-700 w-full"
                />
              ) : (
                <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 w-full h-64">
                  <ProjectCover
                    slug={project.slug}
                    title={project.title}
                    categories={project.categories}
                  />
                </div>
              )}
            </section>

            <section aria-labelledby="decisions-heading">
              <h2 id="decisions-heading" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-3">Key Decisions</h2>
              <ul className="space-y-2">
                {project.keyDecisions.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-accent font-bold shrink-0">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="outcome-heading">
              <h2 id="outcome-heading" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-3">Outcome</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.outcome}</p>
            </section>

          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 sticky top-24">
              <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-base text-zinc-900 dark:text-white mb-4">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

      </div>
    </main>
  );
}
