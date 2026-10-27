import type { Metadata } from "next";
import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { primaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PricingTable } from "@/components/pricing-table";
import { socialPricing, studioRateList } from "@/data/packages";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Podcast studio prices",
  description: `Hourly studio rates plus VAT: ${studioRateList()}. Social media management has no set price.`,
  path: "/pricing",
});

const other = [
  {
    title: "Remote podcast editing",
    price: "Quoted per job",
    body: "Silver, Gold and Platinum already include an edited podcast. Files recorded somewhere else are quoted.",
    href: "/remote-podcast-editing",
    intent: "editing",
    cta: "Get an Editing Quote",
  },
  {
    title: "Short-form clips",
    price: "In Gold and Platinum, or quoted",
    body: "Gold includes 1 basic clip. Platinum includes 3, plus a YouTube thumbnail. Further clips are quoted. There is no separate clip package price.",
    href: "/podcast-clips",
    intent: "clips",
    cta: "Turn Your Podcast Into Content",
  },
  {
    title: "Social media management",
    price: socialPricing.label,
    body: "Quoted case by case. There is no set package price. Book a consultation and we will say what the work covers before it starts.",
    href: "/social-media-management",
    intent: "social",
    cta: socialPricing.cta,
  },
  {
    title: "On-location recording",
    price: "Quoted per job",
    body: "Travel and the kit are confirmed for the address you send. The hourly studio card does not automatically apply off site. This is not a livestream.",
    href: "/on-location",
    intent: "on-location",
    cta: "Enquire About Location Recording",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
      </Container>
      <header className="border-b border-line">
        <Container className="pb-14 md:pb-20">
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
            Hourly studio packages
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Bronze, Silver, Gold and Platinum, all plus VAT. The list on each card is what
            that hour includes. Social media management is not on this card.
          </p>
        </Container>
      </header>
      <Container className="space-y-16 py-14 md:py-20">
        <PricingTable />
        <section>
          <h2 className="font-display text-4xl text-ink">Quoted separately</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {other.map((item) => (
              <li key={item.title} className="lift-card flex flex-col border border-line p-5">
                <p className="text-sm text-muted">{item.price}</p>
                <h3 className="mt-2 font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <BookLink
                    href={`/contact?intent=${item.intent}`}
                    intent={item.intent}
                    className={primaryButtonClass}
                  >
                    {item.cta}
                  </BookLink>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink underline underline-offset-4"
                  >
                    Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <FaqList ids={["studio-price", "inclusions", "vat", "editing", "clips", "social"]} />
      </Container>
      <CtaBand
        title="Ask for a package or a quote"
        body="Say which hour you are looking at, or describe the edit, the clips, or the social consultation. We reply by email."
        intent="quote"
        cta="Request a Quote"
      />
    </>
  );
}
