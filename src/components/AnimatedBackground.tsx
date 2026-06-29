"use client";

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="animate-gradient-shift absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #070b14 0%, #0f172a 40%, #0c1222 70%, #070b14 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.8) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="animate-blob-1 absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl md:h-[36rem] md:w-[36rem]" />
      <div className="animate-blob-2 absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl md:h-96 md:w-96" />
      <div className="animate-blob-3 absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl md:h-80 md:w-80" />
    </div>
  );
}
