"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "g4-cookie-consent";
type Consent = "accepted" | "declined" | "unset" | "unknown";

const listeners = new Set<() => void>();

function emitConsent() {
  listeners.forEach((listener) => listener());
}

function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function serverConsent(): Consent {
  return "unknown";
}

function readConsent(): Exclude<Consent, "unknown"> {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
  } catch {
    return "unset";
  }
  return "unset";
}

function loadGa(measurementId: string) {
  if (document.getElementById("ga4-loader")) return;
  const script = document.createElement("script");
  script.id = "ga4-loader";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export function CookieNotice() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const consent = useSyncExternalStore<Consent>(
    subscribeConsent,
    readConsent,
    serverConsent,
  );

  useEffect(() => {
    if (consent === "accepted" && measurementId) loadGa(measurementId);
  }, [consent, measurementId]);

  if (!measurementId || consent !== "unset") return null;

  function choose(next: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage can be blocked. The choice still applies for this view. */
    }
    emitConsent();
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div className="max-w-2xl">
          <p id="cookie-title" className="text-sm font-medium text-ink">
            Analytics cookies
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Google Analytics is off until you accept. It is used to see which
            pages are used. The site works either way.{" "}
            <Link href="/cookies" className="text-ink underline underline-offset-4">
              Cookie details
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-line px-4 text-sm text-ink"
            onClick={() => choose("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-line px-4 text-sm text-ink"
            onClick={() => choose("accepted")}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
