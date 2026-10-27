"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookLink } from "@/components/book-link";
import { primaryButtonClass } from "@/components/button-styles";
import { Logo } from "@/components/logo";
import { business } from "@/config/business";
import { primaryNav, visitCta } from "@/data/navigation";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
      {primaryNav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={onNavigate}
              className={`inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline ${
                current ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function HeaderBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="mr-auto flex min-w-0 items-center gap-2">
          <Logo variant="monogram" alt="" className="h-10 w-10 shrink-0" />
          <Logo variant="wordmark-dark" alt="" className="hidden h-7 w-auto xl:block" />
          <span className="sr-only">{business.tradingName}, home</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <NavLinks />
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center border border-line px-3 text-sm text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <BookLink href={visitCta.href} intent={visitCta.intent} className={primaryButtonClass}>
          {visitCta.label}
        </BookLink>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Primary" className="menu-panel border-t border-line px-4 py-3 lg:hidden">
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>
      ) : null}
    </header>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} />;
}
