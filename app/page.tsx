import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { primaryButtonClass, secondaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { CreateSelector } from "@/components/create-selector";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { WorkPhoto } from "@/components/work-photo";
import { fromHourlyLabel } from "@/data/packages";
import { homeFaqIds } from "@/data/faqs";
import { workItems } from "@/data/portfolio";
import { pageMeta } from "@/lib/metadata";
import { graph, localBusinessNode, organizationNode } from "@/lib/schema";
import type { Metadata } from "next";

const price = fromHourlyLabel();

export const metadata: Metadata = pageMeta({
  title: "G4 Podcast Studio & Marketing",
  description: `Podcasts, content and social from two studios in Wishaw, North Lanarkshire. ${price}. Social media management is quoted case by case.`,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  const hero = workItems.find((item) => item.slug === "a-pint-and-two-shots")?.images[0];
  const featured = workItems.filter((item) => item.images.length > 0).slice(0, 4);

  return (
    <>
      <JsonLd data={graph(organizationNode(), localBusinessNode())} />
      <section className="border-b border-line">
        <Container className="grid items-end gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">Wishaw, North Lanarkshire</p>
            <h1 className="headline-in mt-4 font-display text-6xl leading-[0.9] text-ink sm:text-7xl md:text-8xl">
              <span>PODCASTS.</span>
              <span>CONTENT.</span>
              <span>SOCIAL.</span>
            </h1>
            <div className="rule-draw mt-6 h-px w-24 bg-brand" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Two studios in Wishaw, and a production team for the edit, the clips and the
              social posts that follow. Record here, or send us the files. {price}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/podcast-studio" className={primaryButtonClass}>
                Explore Our Studio
              </Link>
              <BookLink href="/contact?intent=quote" intent="quote" className={secondaryButtonClass}>
                Start a Project
              </BookLink>
            </div>
          </div>
          <div className="hero-frame overflow-hidden border border-line">
            {hero ? (
              <WorkPhoto image={hero} priority sizes="(min-width: 1024px) 40vw, 100vw" />
            ) : (
              <MediaSlot id="G4-HERO-01" priority sizes="(min-width: 1024px) 40vw, 100vw" />
            )}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-3xl font-display text-4xl text-ink md:text-6xl">
            What are you looking to create?
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Eight ways in. Each one opens the right service, with a form at the bottom of the page.
          </p>
          <div className="mt-10">
            <CreateSelector />
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.16em] text-muted">Wishaw</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-6xl">
              Your podcast. Your studio.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Two studios, customisable sets, free parking, and a waiting room. Studio 1 is shown
              during a Relatively Blonde recording. Studio 2 is the room with the fireplace wall.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <MediaSlot id="G4-STUDIO-01" sizes="(min-width: 768px) 50vw, 100vw" />
            <MediaSlot id="G4-STUDIO-02" sizes="(min-width: 768px) 50vw, 100vw" />
            <MediaSlot id="G4-STUDIO-03" sizes="(min-width: 768px) 50vw, 100vw" />
            <MediaSlot id="G4-STUDIO-06" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <p className="mt-6">
            <Link href="/podcast-studio" className="text-ink underline underline-offset-4">
              Meet the studios
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl text-ink md:text-6xl">Our work</h2>
            <Link href="/our-work" className="text-sm text-ink underline underline-offset-4">
              All work
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {featured.map((item) => (
              <li key={item.id}>
                <Link href={item.slug ? `/our-work/${item.slug}` : "/our-work"} className="block">
                  {item.images[0] ? (
                    <WorkPhoto image={item.images[0]} sizes="(min-width: 768px) 50vw, 100vw" />
                  ) : null}
                  <h3 className="mt-4 font-display text-3xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <FaqList ids={[...homeFaqIds]} />
      </Container>
      <CtaBand
        title="Arrange a visit or send a brief"
        body="Tell us the show, the business, or the files you already have. We reply by email with the hourly package or a quote. Nothing is booked until we confirm it in writing."
        intent="studio"
        cta="Arrange a Visit"
      />
    </>
  );
}
