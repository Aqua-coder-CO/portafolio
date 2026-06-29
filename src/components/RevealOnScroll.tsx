"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
}
