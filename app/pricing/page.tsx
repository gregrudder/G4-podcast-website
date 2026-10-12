import type { Metadata } from "next";
import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { primaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PricingTable } from "@/components/pricing-table";
import {
  editingPricing,
  shortFormPricing,
  socialPricing,
  studioRateList,
} from "@/data/packages";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Podcast studio prices",
  description:
    `Hourly studio rates plus VAT: ${studioRateList()}. Editing and clips are quoted. Social media management is a consultation.`,
  path: "/pricing",
});

const other = [
  {
    title: "Podcast and video editing",
    price: editingPricing.label,
    body: "Audio and video edits are priced per job. Add an edit to a studio booking, or send files recorded elsewhere. Turnaround and revisions are in the quote.",
    href: "/podcast-editing",
    intent: "editing",
    cta: "Ask for an edit quote",
  },
  {
    title: "Short-form and repurposing",
    price: shortFormPricing.label,
    body: "Clips for TikTok, Instagram Reels and YouTube Shorts, cut from a longer recording. Tell us how many, and roughly how long.",
    href: "/short-form-content",
    intent: "short-form",
    cta: "Ask for a clip quote",
  },
  {
    title: "Social media management",
    price: socialPricing.label,
    body: "There is no fixed price. Book a consultation and we will say what the work covers and what it costs.",
    href: "/short-form-content",
    intent: "social",
    cta: socialPricing.cta,
  },
  {
    title: "On-location recording",
    price: "Quoted per job",
    body: "Travel, the minimum time and the kit are confirmed for the address you send. There is no call-out menu on this page.",
    href: "/on-location-recording",
    intent: "on-location",
    cta: "Ask about a location",
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
          <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Studio rates, and what is quoted
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Four hourly studio rates, all plus VAT. Editing, short-form clips,
            on-location recording and social media management are not on this
            rate card.
          </p>
        </Container>
      </header>
      <Container className="space-y-16 py-14 md:py-20">
        <PricingTable />
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          VAT is added to these rates. The VAT number is not published on this
          site yet. What each named tier includes — cameras, a producer, an
          edit, revisions, a thumbnail — is also not published yet. We put that
          in the written confirmation before you pay.
        </p>
        <section>
          <h2 className="font-display text-4xl text-ink">Quoted separately</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {other.map((item) => (
              <li key={item.title} className="flex flex-col border border-line p-5">
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
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-ink underline underline-offset-4">
                    Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <FaqList
          ids={["studio-price", "inclusions", "vat", "editing", "clips", "social"]}
        />
      </Container>
      <CtaBand
        title="Ask for a rate or a quote"
        body="Say which tier you are looking at, or describe the edit, the clips, or the consultation. We reply by email."
      />
    </>
  );
}
