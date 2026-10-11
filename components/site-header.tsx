import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { primaryButtonClass } from "@/components/button-styles";
import { Logo } from "@/components/logo";
import { business } from "@/config/business";
import { primaryNav } from "@/data/navigation";

function NavLinks({ id }: { id: string }) {
  return (
    <ul id={id} className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
      {primaryNav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center text-sm text-ink underline-offset-4 hover:underline"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="mr-auto flex min-w-0 items-center gap-2">
          <Logo variant="monogram" alt="" className="h-10 w-10 shrink-0" />
          <Logo variant="wordmark-dark" alt="" className="hidden h-7 w-auto lg:block" />
          <span className="sr-only">{business.tradingName}, home</span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <NavLinks id="desktop-nav" />
        </nav>

        <details className="relative md:hidden">
          <summary className="inline-flex min-h-11 cursor-pointer list-none items-center border border-line px-3 text-sm text-ink">
            Menu
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 top-full z-50 mt-2 w-56 border border-line bg-bg p-3"
          >
            <NavLinks id="mobile-nav" />
          </nav>
        </details>

        <BookLink
          href="/contact?intent=studio-recording"
          intent="studio-recording"
          className={primaryButtonClass}
        >
          Book a session
        </BookLink>
      </div>
    </header>
  );
}
