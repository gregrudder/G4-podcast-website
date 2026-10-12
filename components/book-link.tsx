"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/track";

export function BookLink({
  href,
  intent,
  className,
  children,
}: {
  href: string;
  intent: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("booking_cta", { intent })}
    >
      {children}
    </Link>
  );
}
