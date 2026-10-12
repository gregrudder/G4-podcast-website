"use client";

import { usePathname } from "next/navigation";
import { WhatsAppLink } from "@/components/mail-link";

/**
 * Mobile-only. Hidden on the contact page so it does not sit on the form.
 * Page padding in globals.css keeps footer controls clear of this control.
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <WhatsAppLink className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex min-h-11 items-center bg-button px-4 text-sm font-medium text-white hover:bg-button-hover md:hidden" />
  );
}
