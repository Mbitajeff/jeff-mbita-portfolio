import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { certifications, education } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Reveal>
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              <TypewriterText text="Credentials" speed={80} />
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl md:text-5xl text-zinc-900 dark:text-white">
              Certifications and Education
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" aria-hidden="true" /> Certifications
              </h3>
            </Reveal>
            <div className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={(i % 3) as 0 | 1 | 2}>
                  <div className={`bg-white dark:bg-zinc-900 rounded-xl p-4 border transition-colors ${
                    cert.featured
                      ? "border-accent shadow-sm shadow-accent/10"
                      : "border-zinc-100 dark:border-zinc-800"
                  }`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`text-sm font-semibold leading-snug ${
                          cert.featured ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-200"
                        }`}>
                          {cert.featured && (
                            <span className="inline-block bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-2 mb-0.5 align-middle">
                              Featured
                            </span>
                          )}
                          {cert.name}
                        </p>
                        <p className="text-xs text-zinc-400 mt-1">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-accent font-medium shrink-0">{cert.year}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <h3 className="font-[family-name:var(--font-pt-sans)] font-bold text-xl text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" aria-hidden="true" /> Education
              </h3>
            </Reveal>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <Reveal key={edu.institution} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-zinc-100 dark:border-zinc-800">
                    <p className="font-semibold text-sm text-zinc-900 dark:text-white">{edu.qualification}</p>
                    <p className="text-sm text-accent font-medium mt-0.5">{edu.institution}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-zinc-400">{edu.period}</span>
                      {edu.result && (
                        <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded-full">
                          {edu.result}
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
