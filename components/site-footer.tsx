import Link from "next/link";
import { Container } from "@/components/container";
import { MailLink, PhoneLink } from "@/components/mail-link";
import { business } from "@/config/business";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerServiceLinks,
} from "@/data/navigation";

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-ink">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-muted underline underline-offset-4">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl text-mark">G4</p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {business.legalName}, trading as {business.tradingName}.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {business.address.locality}, {business.address.region},{" "}
            {business.address.country}. {business.parking}.
          </p>
          <p className="mt-3 text-sm">
            <MailLink className="text-ink underline underline-offset-4" />
          </p>
          <p className="mt-2 text-sm">
            <PhoneLink className="text-ink underline underline-offset-4" />
          </p>
          <p className="mt-4 text-sm text-muted">
            Studio rates are hourly and exclude VAT.
          </p>
        </div>
        <LinkGroup title="Services" links={footerServiceLinks} />
        <LinkGroup title="Company" links={footerCompanyLinks} />
        <LinkGroup title="Legal" links={footerLegalLinks} />
      </Container>
      <Container className="border-t border-line py-4">
        <p className="text-sm text-muted">
          © {business.copyrightYear} {business.legalName}. {business.domain}
        </p>
      </Container>
    </footer>
  );
}
