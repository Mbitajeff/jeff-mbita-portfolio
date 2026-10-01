"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#blogs", label: "Blogs" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Read dark state directly from the DOM — the layout inline script already
  // applied the correct class before React hydrates, so we never flash.
  const isDark = () =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Sync React state with whatever the inline script already set
    setDark(isDark());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["contact", "certifications", "blogs", "about", "experience", "projects", "hero"];
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) { setActiveSection("contact"); return; }
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActiveSection(id); return; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a href="#hero" className="font-[family-name:var(--font-pt-sans)] font-bold text-xl tracking-tight">
          <span className="text-zinc-900 dark:text-white">jeff</span>
          <span className="text-accent">mbita</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5 ${
                  activeSection === l.href.slice(1) ? "on !text-zinc-900 dark:!text-white" : ""
                }`}
              >
                {activeSection === l.href.slice(1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Involved <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Get Involved
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
