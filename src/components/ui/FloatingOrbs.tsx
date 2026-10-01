"use client";

export function FloatingOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div
        className="absolute rounded-full bg-accent/5 dark:bg-accent/8 blur-3xl"
        style={{
          width: "600px", height: "600px",
          top: "10%", left: "-10%",
          animation: "orb1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full bg-blue-400/5 dark:bg-blue-400/6 blur-3xl"
        style={{
          width: "500px", height: "500px",
          top: "50%", right: "-8%",
          animation: "orb2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full bg-accent/4 dark:bg-accent/6 blur-3xl"
        style={{
          width: "400px", height: "400px",
          bottom: "10%", left: "30%",
          animation: "orb3 16s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes orb1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(60px, 40px) scale(1.08); }
          66%       { transform: translate(-30px, 80px) scale(0.95); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          40%       { transform: translate(-80px, -60px) scale(1.12); }
          70%       { transform: translate(40px, 50px) scale(0.9); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(50px, -70px) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation: orb"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
