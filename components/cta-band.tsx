import { BookLink } from "@/components/book-link";
import { primaryButtonClass, secondaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { MailLink, PhoneLink, WhatsAppLink } from "@/components/mail-link";

export function CtaBand({
  title = "Ready to record?",
  body = "Tell us the show or the business, what you need, and any dates. We reply by email with the hourly package or a quote. Nothing is booked until we confirm it in writing.",
  intent = "studio",
  cta = "Arrange a Visit",
}: {
  title?: string;
  body?: string;
  intent?: string;
  cta?: string;
}) {
  return (
    <section className="border-t border-line">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-wrap gap-3">
            <BookLink
              href={`/contact?intent=${intent}`}
              intent={intent}
              className={primaryButtonClass}
            >
              {cta}
            </BookLink>
            <WhatsAppLink className={secondaryButtonClass} />
          </div>
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <PhoneLink className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" />
            <MailLink className="inline-flex min-h-11 items-center text-ink underline underline-offset-4" />
          </p>
        </div>
      </Container>
    </section>
  );
}
