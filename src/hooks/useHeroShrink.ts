"use client";

import { useEffect, useState } from "react";

export const HERO_SHRINK_DISTANCE = 400;

export function useHeroShrink() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const next = Math.min(1, Math.max(0, window.scrollY / HERO_SHRINK_DISTANCE));
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

export function lerp(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}
