import Link from "next/link";
import { Container } from "@/components/container";
import { secondaryButtonClass } from "@/components/button-styles";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink">This page is not on the site.</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        The address may be from the old website. Try the studio page, pricing, or the contact form.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <Link href="/" className={secondaryButtonClass}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/podcast-studio" className={secondaryButtonClass}>
            Studio
          </Link>
        </li>
        <li>
          <Link href="/pricing" className={secondaryButtonClass}>
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className={secondaryButtonClass}>
            Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
}
