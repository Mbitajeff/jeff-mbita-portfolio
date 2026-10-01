import { ArrowDown, MessageCircle, Linkedin, Download } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-950">

      {/* Full-section particle network */}
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleNetwork className="opacity-90" />
      </div>

      {/* Subtle vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 40% 50%, transparent 30%, rgba(9,9,11,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Reveal>
              <p className="text-sm font-medium text-green-400 tracking-widest uppercase mb-4">
                AWS Certified &middot; Nairobi, Kenya
              </p>
            </Reveal>

            <Reveal delay={1}>
              {/* Terminal prompt line */}
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-700/60 rounded-lg px-4 py-2 mb-6 font-mono text-xs text-green-400 backdrop-blur-sm">
                <span className="text-zinc-500">$</span>
                <span>whoami</span>
                <span className="cursor-blink text-green-400 ml-1">▌</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="font-[family-name:var(--font-pt-sans)] font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="text-accent">Jeff</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                <strong className="font-medium text-zinc-200">AWS Cloud Solutions Architect</strong> based in Nairobi, Kenya. I design and build cloud infrastructure, secure AI workloads, and automate everything with Terraform and CI/CD.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  href="#projects"
                  className="shimmer inline-flex items-center gap-2 bg-white text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-200 transition-colors text-sm"
                >
                  View projects <ArrowDown className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  Get in touch
                </MagneticButton>

                <MagneticButton
                  href="/jeff-mbita-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  <Download className="w-4 h-4" /> Download CV
                </MagneticButton>

                <MagneticButton
                  href="https://wa.me/254745888904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-medium px-5 py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/jeff-mbita-a91672241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-medium px-5 py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </MagneticButton>
              </div>
            </Reveal>

            {/* Animated stats */}
            <Reveal delay={4}>
              <div className="flex gap-8 mt-14 pt-8 border-t border-zinc-800">
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl text-white">
                    <CountUp to={2} suffix="x" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">AWS Certified</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl text-white">
                    <CountUp to={14} suffix="+" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">Cloud projects</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-3xl text-white">
                    <CountUp to={2} suffix="y+" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">AWS experience</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal delay={2} className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing ring behind photo */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
                  transform: "scale(1.15)",
                  animation: "glow-pulse 3s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              <div className="pf w-full h-full rounded-3xl relative z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jeff-mbita.png"
                  alt="Jeff Mbita — AWS Cloud Solutions Architect"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 bg-accent text-white font-[family-name:var(--font-pt-sans)] font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg shadow-accent/30">
                Remote &middot; Hybrid &middot; Nairobi
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
