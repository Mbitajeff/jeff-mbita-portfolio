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

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <Reveal>
              <p className="text-xs font-medium text-green-400 tracking-widest uppercase mb-4">
                AWS Certified &middot; Nairobi, Kenya
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-700/60 rounded-lg px-3 py-1.5 mb-5 font-mono text-xs text-green-400 backdrop-blur-sm">
                <span className="text-zinc-500">$</span>
                <span>whoami</span>
                <span className="cursor-blink text-green-400 ml-1">▌</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="font-[family-name:var(--font-pt-sans)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-5">
                Hi, I&apos;m{" "}
                <span className="text-accent">Jeff</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-md mb-8">
                <strong className="font-medium text-zinc-200">AWS Cloud Engineer and MERN Full-Stack Developer</strong> based in Nairobi, Kenya. I build across the whole stack — cloud infrastructure, web applications, data analysis and agentic AI — delivering solutions that are secure, scalable and production-ready.
              </p>
            </Reveal>

            <Reveal delay={3}>
              {/* Primary actions row */}
              <div className="flex flex-wrap gap-3 mb-3">
                <MagneticButton
                  href="#projects"
                  className="shimmer inline-flex items-center gap-2 bg-white text-zinc-900 font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors text-sm"
                >
                  View projects <ArrowDown className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  Get in touch
                </MagneticButton>

                <MagneticButton
                  href="/jeff-mbita-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex items-center gap-2 bg-accent text-white font-medium px-5 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  <Download className="w-4 h-4" /> Download CV
                </MagneticButton>
              </div>
              {/* Secondary actions row */}
              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href="https://wa.me/254745888904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-400 font-medium px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/jeff-mbita-a91672241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-400 font-medium px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </MagneticButton>
              </div>
            </Reveal>

            {/* Animated stats */}
            <Reveal delay={4}>
              <div className="flex gap-6 mt-10 pt-8 border-t border-zinc-800">
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-2xl sm:text-3xl text-white">
                    <CountUp to={2} suffix="x" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">AWS Certified</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-2xl sm:text-3xl text-white">
                    <CountUp to={14} suffix="+" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">Cloud projects</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-pt-sans)] font-bold text-2xl sm:text-3xl text-white">
                    <CountUp to={2} suffix="y+" />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">AWS experience</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photo — shown above text on mobile, right on desktop */}
          <Reveal delay={2} className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
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
              <div className="absolute -bottom-3 -left-3 z-20 bg-accent text-white font-[family-name:var(--font-pt-sans)] font-bold text-xs sm:text-sm px-3 py-2 rounded-xl shadow-lg shadow-accent/30 whitespace-nowrap">
                Remote &middot; Hybrid &middot; Nairobi
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
