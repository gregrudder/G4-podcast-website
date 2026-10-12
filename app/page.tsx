import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { primaryButtonClass, secondaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MailLink, PhoneLink, WhatsAppLink } from "@/components/mail-link";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { PricingTable } from "@/components/pricing-table";
import { ClientLogoScreen, Studio2Hero } from "@/components/studio-2-photos";
import { equipment, facilities, business } from "@/config/business";
import { caseStudies } from "@/data/case-studies";
import { homeFaqIds } from "@/data/faqs";
import { lowestStudioRate } from "@/data/packages";
import { services } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/metadata";
import {
  faqNode,
  graph,
  localBusinessNode,
  organizationNode,
} from "@/lib/schema";

export const metadata = pageMeta({
  title: "Podcast and video studios in Wishaw | G4 Podcast Studio & Marketing",
  description:
    `Two multi-camera podcast studios in Wishaw, North Lanarkshire, with free parking. Studio hire from £${lowestStudioRate()} an hour + VAT. Editing and clips are quoted.`,
  path: "/",
  absolute: true,
});

const audiences = [
  {
    title: "Starting a podcast",
    body: "You need a room, microphones and cameras, not a list of gear to buy. Read the booking guide, then look at the studios.",
    href: "/guides/before-you-book-a-podcast-studio",
    label: "What to sort out first",
  },
  {
    title: "An existing show",
    body: "Move a show that already publishes into a multi-camera room, and add an edit if you want the files finished.",
    href: "/podcast-production",
    label: "Production",
  },
  {
    title: "A business",
    body: "Record an interview, a founder conversation or a short series. Studio time is hourly. The edit and clips are quoted.",
    href: "/business-podcasts",
    label: "For businesses",
  },
  {
    title: "A creator",
    body: "Keep the long episode, and add vertical clips for TikTok, Reels and Shorts. Clips are quoted per job.",
    href: "/short-form-content",
    label: "Short-form clips",
  },
] as const;

const steps = [
  {
    title: "Tell us what you need",
    body: "The show or business, how many people, and whether you want an edit or clips.",
  },
  {
    title: "We confirm the booking in writing",
    body: "The studio, the hourly rate or a quote, and what that price covers. Nothing is held until that email is agreed.",
  },
  {
    title: "Record in Wishaw, or on location",
    body: "Two studios with free parking, or a location job if we have agreed the travel and the kit.",
  },
  {
    title: "Take the files you booked",
    body: "If the quote includes an edit or clips, that is what is delivered. The format and the timing are in the quote.",
  },
] as const;

export default function HomePage() {
  const homeFaqs = getFaqs(homeFaqIds);

  return (
    <>
      <JsonLd
        data={graph(
          organizationNode(),
          localBusinessNode(),
          faqNode(homeFaqs),
        )}
      />
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-muted">
            <span className="inline-block h-4 w-1 bg-mark" aria-hidden="true" />
            Wishaw, North Lanarkshire
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[2.4rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            Podcast and video studios in Wishaw, serving Glasgow and Lanarkshire
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Two multi-camera studios, free parking, and production, editing and
            short-form clips when you need them. Studio time is priced by the
            hour, plus VAT. Editing, clips and social media management are quoted.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookLink
              href="/contact?intent=studio-recording"
              intent="studio-recording"
              className={primaryButtonClass}
            >
              Book a session
            </BookLink>
            <Link href="/pricing" className={secondaryButtonClass}>
              See pricing
            </Link>
            <WhatsAppLink className={secondaryButtonClass} />
          </div>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <PhoneLink className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" />
            <MailLink className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" />
          </p>
          <Studio2Hero className="mt-10" />
        </Container>
        <Container className="grid border-t border-line sm:grid-cols-3">
          {[
            ["2", "Studios in Wishaw"],
            ["Multi-camera", "Video and audio"],
            ["Free", "Parking on site"],
          ].map(([value, label]) => (
            <p key={label} className="border-b border-line py-5 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0">
              <span className="block font-display text-3xl text-ink">{value}</span>
              <span className="mt-1 block text-sm text-muted">{label}</span>
            </p>
          ))}
        </Container>
      </section>

      <section className="border-b border-line" aria-label="Shows recorded with G4">
        <Container className="py-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Recorded with G4</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="block border border-line px-4 py-4 text-ink underline-offset-4 hover:bg-raised hover:underline"
                >
                  <span className="block font-display text-2xl">{study.title}</span>
                  <span className="mt-1 block text-sm text-muted">{study.format}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-4xl text-ink md:text-5xl">Who it is for</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {audiences.map((item) => (
              <li key={item.href} className="border border-line p-5">
                <h3 className="font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                <Link href={item.href} className="mt-4 inline-block text-ink underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-4xl text-ink md:text-5xl">Services</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.id} className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
                <div>
                  <h3 className="text-xl text-ink">
                    <Link href={service.path} className="underline underline-offset-4">
                      {service.label}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {service.standfirst}
                  </p>
                </div>
                <p className="text-sm text-ink">{service.priceLabel}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-4xl text-ink md:text-5xl">The studios</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Two rooms in {business.address.locality}. Couch and desk sets, a TV
              that can show a client logo, and the kit below. The photograph is
              Studio 2.
            </p>
            <ul className="mt-6 border-t border-line">
              {[...equipment, ...facilities].map((item) => (
                <li key={item} className="border-b border-line py-2 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/podcast-studio" className="mt-6 inline-block text-ink underline underline-offset-4">
              Studio details
            </Link>
          </div>
          <ClientLogoScreen />
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-4xl text-ink md:text-5xl">How a booking works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-4">
                <p className="text-sm text-muted">0{index + 1}</p>
                <h3 className="mt-2 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl text-ink md:text-5xl">Studio rates</h2>
            <Link href="/pricing" className="text-ink underline underline-offset-4">
              Compare packages
            </Link>
          </div>
          <div className="mt-8">
            <PricingTable />
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <h2 className="font-display text-4xl text-ink md:text-5xl">Work</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Three shows recorded with G4. Names are published with permission.
            Audience figures are not.
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <PlaceholderFrame kicker={study.format} title={study.title} />
                <p className="mt-3 text-sm text-muted">{study.summary}</p>
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-2 inline-block text-ink underline underline-offset-4"
                >
                  Read the case study
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-4xl text-ink md:text-5xl">Wishaw</h2>
            <p className="mt-4 leading-relaxed text-muted">
              {business.address.locality}, {business.address.region}, {business.address.country}.
              The studios serve Glasgow and Lanarkshire. There is free parking on site.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              The street address, opening hours and a map pin are not published
              yet. Email {business.email} and we will send directions.
            </p>
          </div>
          <FaqList ids={homeFaqIds} heading="Before you enquire" />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
