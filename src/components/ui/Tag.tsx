import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-[var(--surface)] text-[var(--muted)] border border-[var(--divider)]",
        variant === "accent" &&
          "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20",
        className
      )}
    >
      {children}
    </span>
  );
}
