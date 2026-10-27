"use client";

import { track as vercelTrack } from "@vercel/analytics";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function track(name: string, params?: Record<string, string>): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.gtag?.("event", name, params);

  if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true") {
    vercelTrack(name, params);
  }
}
