"use client";

import { Linkedin, Github, BookOpen, MessageCircle } from "lucide-react";

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

const links = [
  { href: "https://www.linkedin.com/in/jeff-mbita-a91672241/", label: "LinkedIn", icon: Linkedin, track: "linkedin" },
  { href: "https://github.com/Mbitajeff", label: "GitHub", icon: Github, track: "github" },
  { href: "https://medium.com/@jeffmbita69", label: "Medium", icon: BookOpen, track: "medium" },
  { href: "https://dev.to/mbitajeff", label: "Dev.to", icon: DevToIcon, track: "devto" },
  { href: "https://x.com/jeffmbita", label: "X", icon: XIcon, track: "x" },
  { href: "https://instagram.com/Jey_nbita", label: "Instagram", icon: InstagramIcon, track: "instagram" },
  { href: "https://wa.me/254745888904", label: "WhatsApp", icon: MessageCircle, track: "whatsapp" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #2563EB 40%, #22c55e 60%, transparent)",
          animation: "footer-line 4s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes footer-line {
          0%   { opacity: 0.3; transform: scaleX(0.6); }
          50%  { opacity: 1;   transform: scaleX(1); }
          100% { opacity: 0.3; transform: scaleX(0.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes footer-line { 0%, 100% { opacity: 0.6; transform: none; } }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-zinc-600 dark:text-zinc-300 font-medium">Jeff Mbita</span>
          . All rights reserved.
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-700 hidden sm:block">
          This site records anonymous visit analytics.
        </p>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          {links.map(({ href, label, icon: Icon, track }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-track={track}
              className="group relative text-zinc-400 hover:text-accent transition-colors duration-200"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-all duration-300 scale-150"
              />
              <Icon className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:scale-125" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
