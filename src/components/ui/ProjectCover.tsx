interface ProjectCoverProps {
  slug: string;
  title: string;
  categories: string[];
}

interface CoverConfig {
  bg: string;
  accent: string;
  icon: string;
  label: string;
  dots: { cx: number; cy: number; r: number; opacity: number }[];
}

const configs: Record<string, CoverConfig> = {
  "academl-ocr-pipeline": {
    bg: "#0f172a",
    accent: "#8b5cf6",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#8b5cf6" opacity="0.9">🔬</text>`,
    label: "ML · OCR · SageMaker",
    dots: [
      { cx: 30, cy: 40, r: 2, opacity: 0.4 },
      { cx: 70, cy: 25, r: 1.5, opacity: 0.3 },
      { cx: 85, cy: 60, r: 2.5, opacity: 0.5 },
      { cx: 15, cy: 70, r: 1.5, opacity: 0.3 },
      { cx: 55, cy: 80, r: 2, opacity: 0.4 },
    ],
  },
  "afyasmart-health-app": {
    bg: "#0a1628",
    accent: "#22c55e",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#22c55e" opacity="0.9">🏥</text>`,
    label: "AWS · Lambda · CI/CD",
    dots: [
      { cx: 20, cy: 30, r: 2, opacity: 0.4 },
      { cx: 75, cy: 20, r: 1.5, opacity: 0.3 },
      { cx: 90, cy: 55, r: 2, opacity: 0.5 },
      { cx: 10, cy: 65, r: 2.5, opacity: 0.3 },
      { cx: 60, cy: 75, r: 1.5, opacity: 0.4 },
    ],
  },
  "coffee-suppliers-app": {
    bg: "#1a0a00",
    accent: "#f59e0b",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#f59e0b" opacity="0.9">☕</text>`,
    label: "MERN · Docker · ECS/EKS",
    dots: [
      { cx: 25, cy: 35, r: 2, opacity: 0.4 },
      { cx: 80, cy: 22, r: 1.5, opacity: 0.3 },
      { cx: 88, cy: 65, r: 2, opacity: 0.5 },
      { cx: 12, cy: 72, r: 2, opacity: 0.3 },
      { cx: 50, cy: 82, r: 1.5, opacity: 0.4 },
    ],
  },
  "aws-automation-python-boto3": {
    bg: "#0a1628",
    accent: "#f97316",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#f97316" opacity="0.9">🐍</text>`,
    label: "Python · Boto3 · EC2 · S3",
    dots: [
      { cx: 18, cy: 28, r: 2.5, opacity: 0.4 },
      { cx: 72, cy: 18, r: 1.5, opacity: 0.3 },
      { cx: 92, cy: 58, r: 2, opacity: 0.5 },
      { cx: 8, cy: 68, r: 2, opacity: 0.3 },
      { cx: 55, cy: 78, r: 1.5, opacity: 0.4 },
    ],
  },
  "covid-tracker": {
    bg: "#0f1923",
    accent: "#06b6d4",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#06b6d4" opacity="0.9">📊</text>`,
    label: "Python · Pandas · Matplotlib",
    dots: [
      { cx: 22, cy: 32, r: 2, opacity: 0.4 },
      { cx: 78, cy: 20, r: 1.5, opacity: 0.3 },
      { cx: 87, cy: 62, r: 2.5, opacity: 0.5 },
      { cx: 14, cy: 70, r: 2, opacity: 0.3 },
      { cx: 52, cy: 80, r: 1.5, opacity: 0.4 },
    ],
  },
  "library-management-system": {
    bg: "#0d1117",
    accent: "#3b82f6",
    icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#3b82f6" opacity="0.9">📚</text>`,
    label: "MySQL · SQL · Database Design",
    dots: [
      { cx: 28, cy: 38, r: 2, opacity: 0.4 },
      { cx: 76, cy: 22, r: 1.5, opacity: 0.3 },
      { cx: 89, cy: 60, r: 2, opacity: 0.5 },
      { cx: 11, cy: 68, r: 2.5, opacity: 0.3 },
      { cx: 58, cy: 76, r: 1.5, opacity: 0.4 },
    ],
  },
};

const fallbackConfig: CoverConfig = {
  bg: "#0a1628",
  accent: "#2563eb",
  icon: `<text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="#2563eb" opacity="0.9">☁️</text>`,
  label: "AWS Cloud",
  dots: [
    { cx: 20, cy: 30, r: 2, opacity: 0.4 },
    { cx: 75, cy: 20, r: 1.5, opacity: 0.3 },
    { cx: 85, cy: 60, r: 2, opacity: 0.5 },
  ],
};

export function ProjectCover({ slug, title }: ProjectCoverProps) {
  const cfg = configs[slug] ?? fallbackConfig;

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 100 50">
      <!-- Background -->
      <rect width="100" height="50" fill="${cfg.bg}"/>

      <!-- Grid lines -->
      <line x1="0" y1="10" x2="100" y2="10" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="0" y1="20" x2="100" y2="20" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="0" y1="30" x2="100" y2="30" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="0" y1="40" x2="100" y2="40" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="20" y1="0" x2="20" y2="50" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="40" y1="0" x2="40" y2="50" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="60" y1="0" x2="60" y2="50" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>
      <line x1="80" y1="0" x2="80" y2="50" stroke="${cfg.accent}" stroke-width="0.1" opacity="0.15"/>

      <!-- Dots -->
      ${cfg.dots.map(d => `<circle cx="${d.cx}" cy="${d.cy}" r="${d.r}" fill="${cfg.accent}" opacity="${d.opacity}"/>`).join("")}

      <!-- Connection lines between dots -->
      ${cfg.dots.slice(0, -1).map((d, i) => {
        const next = cfg.dots[i + 1];
        return `<line x1="${d.cx}" y1="${d.cy}" x2="${next.cx}" y2="${next.cy}" stroke="${cfg.accent}" stroke-width="0.3" opacity="0.2"/>`;
      }).join("")}

      <!-- Glow circle behind icon -->
      <circle cx="50" cy="24" r="12" fill="${cfg.accent}" opacity="0.08"/>

      <!-- Icon -->
      ${cfg.icon}

      <!-- Label -->
      <text x="50%" y="88%" text-anchor="middle" dominant-baseline="middle"
        font-family="monospace" font-size="3.5" fill="${cfg.accent}" opacity="0.7"
        letter-spacing="0.5">${cfg.label}</text>

      <!-- Bottom accent line -->
      <rect x="35" y="47" width="30" height="0.6" rx="0.3" fill="${cfg.accent}" opacity="0.5"/>
    </svg>
  `;

  const dataUri = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgContent)))}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dataUri}
      alt={`${title} project cover`}
      className="w-full h-full object-cover"
    />
  );
}
