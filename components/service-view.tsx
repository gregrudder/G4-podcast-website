import Link from "next/link";
import type { ReactNode } from "react";
import { BookLink } from "@/components/book-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { primaryButtonClass, secondaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MailLink, PhoneLink, WhatsAppLink } from "@/components/mail-link";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import type { ServiceRecord } from "@/data/services";
import { services } from "@/data/services";
import { graph, serviceNode, studioOfferNodes } from "@/lib/schema";

export function ServiceView({
  service,
  children,
}: {
  service: ServiceRecord;
  children?: ReactNode;
}) {
  const related = service.related
    .map((id) => services.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const offers = service.id === "podcast-studio" ? studioOfferNodes() : undefined;

  return (
    <>
      <JsonLd
        data={graph(
          serviceNode({
            name: service.h1,
            description: service.metaDescription,
            path: service.path,
            offers,
          }),
        )}
      />
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: service.label, path: service.path }]} />
      </Container>
      <header className="border-b border-line">
        <Container className="pb-14 md:pb-20">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">{service.priceLabel}</p>
          <h1 className="headline-in mt-4 max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
            <span>{service.h1}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{service.standfirst}</p>
          <div className="rule-draw mt-8 h-px w-24 bg-brand" />
          <div className="mt-8 flex flex-wrap gap-3">
            <BookLink
              href={`/contact?intent=${service.enquiryIntent}`}
              intent={service.enquiryIntent}
              className={primaryButtonClass}
            >
              {service.ctaLabel}
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
        </Container>
      </header>
      {service.mediaIds.length > 0 ? (
        <Container className="grid gap-6 py-12 md:grid-cols-2">
          {service.mediaIds.map((id) => (
            <MediaSlot key={id} id={id} />
          ))}
        </Container>
      ) : null}
      <Container className="space-y-14 py-14 md:py-20">
        {service.sections.map((section) => (
          <Reveal key={section.heading}>
            <section className="max-w-3xl">
              <h2 className="font-display text-4xl text-ink md:text-5xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          </Reveal>
        ))}
        {children}
        <FaqList ids={service.faqIds} />
        {related.length > 0 ? (
          <section>
            <h2 className="font-display text-4xl text-ink">Related</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.id} className="lift-card border border-line p-5">
                  <Link href={item.path} className="font-display text-2xl text-ink">
                    {item.label}
                  </Link>
                  <p className="mt-2 text-sm text-muted">{item.priceLabel}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section className="max-w-xl" id="enquire">
          <h2 className="font-display text-4xl text-ink">{service.ctaLabel}</h2>
          <p className="mt-3 text-sm text-muted">
            The form does not take payment. We reply by email.
          </p>
          <div className="mt-6">
            <EnquiryForm intent={service.enquiryIntent} />
          </div>
        </section>
      </Container>
      <CtaBand intent={service.enquiryIntent} cta={service.ctaLabel} />
    </>
  );
}
