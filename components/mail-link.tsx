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

export function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={className}
      href={business.phone.href}
      onClick={() => track("tel_click")}
    >
      {children ?? business.phone.display}
    </a>
  );
}

export function WhatsAppLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={className}
      href={business.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click")}
    >
      {children ?? business.whatsapp.label}
      <span className="sr-only"> (opens in WhatsApp)</span>
    </a>
  );
}
