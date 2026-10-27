"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "wait" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        } else {
          setState((current) => (current === "in" ? current : "wait"));
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion = state === "wait" ? "motion-wait" : state === "in" ? "is-in" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${stagger ? "reveal-stagger" : ""} ${motion} ${className}`}
    >
      {children}
    </div>
  );
}
