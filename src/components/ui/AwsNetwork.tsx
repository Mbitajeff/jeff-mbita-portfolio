"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number; vx: number; vy: number;
  label: string; radius: number;
}

const LABELS = ["EC2", "S3", "Lambda", "VPC", "EKS", "RDS", "IAM", "CDN", "SES", "KMS", "ECS", "SNS"];

function makeNodes(w: number, h: number): Node[] {
  return LABELS.map((label) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    label,
    radius: 22,
  }));
}

export function AwsNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodesRef.current = makeNodes(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const MAX_DIST = 160;
    const MOUSE_REPEL = 80;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      const nodeColor = isDark ? "rgba(59,130,246,0.85)" : "rgba(37,99,235,0.9)";
      const lineColor = isDark ? "rgba(59,130,246," : "rgba(37,99,235,";
      const textColor = isDark ? "#fff" : "#fff";

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // move
      nodes.forEach((n) => {
        // mouse repel
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          n.vx += (dx / dist) * force * 0.6;
          n.vy += (dy / dist) * force * 0.6;
        }
        // dampen
        n.vx *= 0.98;
        n.vy *= 0.98;
        n.x += n.vx;
        n.y += n.vy;
        // bounce
        if (n.x < n.radius) { n.x = n.radius; n.vx *= -1; }
        if (n.x > w - n.radius) { n.x = w - n.radius; n.vx *= -1; }
        if (n.y < n.radius) { n.y = n.radius; n.vy *= -1; }
        if (n.y > h - n.radius) { n.y = h - n.radius; n.vy *= -1; }
      });

      // lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        // glow
        const grd = ctx.createRadialGradient(n.x, n.y, 2, n.x, n.y, n.radius + 8);
        grd.addColorStop(0, nodeColor);
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // label
        ctx.fillStyle = textColor;
        ctx.font = "bold 9px 'DM Sans', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y);
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
    />
  );
}
