import { BookLink } from "@/components/book-link";
import { primaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";

export function CtaBand({
  title = "Ready to record?",
  body = "Tell us the show or the business, what you need, and any dates. We reply by email with the rate or a quote. Nothing is booked until we confirm it in writing.",
  intent = "studio-recording",
  cta = "Book a session",
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
        <BookLink
          href={`/contact?intent=${intent}`}
          intent={intent}
          className={primaryButtonClass}
        >
          {cta}
        </BookLink>
      </Container>
    </section>
  );
}
