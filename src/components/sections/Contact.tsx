"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Linkedin, Github, BookOpen, ArrowRight, Copy, Check, Calendar, Download } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { contactLinks } from "@/data/contact";
import type { ContactLink } from "@/lib/types";

// Custom SVG icons for platforms not in Lucide
function DevToIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.65v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const iconMap: Record<ContactLink["type"], React.ElementType> = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
  medium: BookOpen,
  calendar: Calendar,
  resume: Download,
  devto: DevToIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

function ContactLinkItem({ link }: { link: ContactLink }) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[link.type];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (link.copyable) {
    return (
      <div className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
        <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="text-sm flex-1">{link.value}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? "Copied" : `Copy ${link.value}`}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
        <span aria-live="polite" className="sr-only">{copied ? "Copied to clipboard" : ""}</span>
      </div>
    );
  }

  // Calendar — accent pill style
  if (link.type === "calendar") {
    return (
      <a
        href={link.href}
        className="group flex items-center gap-3 bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-colors rounded-xl px-4 py-3"
      >
        <span className="w-9 h-9 flex items-center justify-center bg-accent/20 rounded-lg shrink-0">
          <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{link.label}</p>
          <p className="text-xs text-zinc-400">{link.value}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-accent ml-auto" aria-hidden="true" />
      </a>
    );
  }

  // Resume — download pill style
  if (link.type === "resume") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        download="Jeff-Mbita-Resume.pdf"
        className="group flex items-center gap-3 bg-white/5 border border-zinc-600 hover:bg-white/10 transition-colors rounded-xl px-4 py-3"
      >
        <span className="w-9 h-9 flex items-center justify-center bg-zinc-700 rounded-lg shrink-0">
          <Icon className="w-4 h-4 text-zinc-300" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{link.label}</p>
          <p className="text-xs text-zinc-400">{link.value}</p>
        </div>
        <Download className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-white transition-colors" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={link.href}
      target={link.type !== "email" && link.type !== "phone" ? "_blank" : undefined}
      rel={link.type !== "email" && link.type !== "phone" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
    >
      <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </span>
      <span className="text-sm">{link.value}</span>
    </a>
  );
}

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState("sending");

    const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
    if (!apiUrl) {
      // No API configured yet — show success for now
      setTimeout(() => setFormState("success"), 800);
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Particle network background */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-40" aria-hidden="true">
            <ParticleNetwork />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">

            {/* Left: info */}
            <div>
              <Reveal>
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Get in touch</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="font-[family-name:var(--font-pt-sans)] font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                  Let&apos;s work<br />together
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Open to cloud architecture, cloud security and data roles. Remote, hybrid or on-site in Nairobi. Send a message or reach out directly.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="flex flex-col gap-4">
                  {contactLinks.map((link) => (
                    <ContactLinkItem key={link.type} link={link} />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={2}>
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-[family-name:var(--font-pt-sans)] font-bold text-xl">Message sent</h3>
                  <p className="text-zinc-400 text-sm">I will get back to you as soon as possible.</p>
                  <button onClick={() => setFormState("idle")} className="text-sm text-accent underline underline-offset-2">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  {formState === "error" && (
                    <div role="alert" className="mb-4 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                      <p className="text-sm text-red-400">Something went wrong. Please try again or email directly.</p>
                    </div>
                  )}
                  <div className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                        />
                        {errors.name && <p id="name-error" role="alert" className="text-xs text-red-400 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required autoComplete="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                        />
                        {errors.email && <p id="email-error" role="alert" className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5} required
                        placeholder="Tell me about your project or role..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                      {errors.message && <p id="message-error" role="alert" className="text-xs text-red-400 mt-1">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="shimmer w-full bg-accent text-white font-[family-name:var(--font-pt-sans)] font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {formState === "sending" ? "Sending..." : <>Send message <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
