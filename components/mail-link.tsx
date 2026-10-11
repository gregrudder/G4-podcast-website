"use client";

import type { ReactNode } from "react";
import { business } from "@/config/business";
import { track } from "@/lib/track";

export function MailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={className}
      href={`mailto:${business.email}`}
      onClick={() => track("mailto_click")}
    >
      {children ?? business.email}
    </a>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  if (!business.phone) return null;
  const href = `tel:${business.phone.replace(/\s/g, "")}`;
  return (
    <a className={className} href={href} onClick={() => track("tel_click")}>
      {business.phone}
    </a>
  );
}
