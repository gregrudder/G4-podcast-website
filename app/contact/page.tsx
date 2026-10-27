import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { secondaryButtonClass } from "@/components/button-styles";
import { Container } from "@/components/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MailLink, PhoneLink, WhatsAppLink } from "@/components/mail-link";
import { business } from "@/config/business";
import { pageMeta } from "@/lib/metadata";
import { graph, localBusinessNode, organizationNode } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Enquire about a studio hour, an edit, clips, a shoot or social media. Social media has no set price. G4 replies from info@g4-marketing.net.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graph(organizationNode(), localBusinessNode())} />
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      </Container>
      <Container className="grid gap-12 pb-20 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Arrange a visit or ask for a quote
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Say what you are recording and what you need back. We reply by
            email. The form does not take payment, and a date is not held until
            we confirm it in writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneLink className={secondaryButtonClass} />
            <MailLink className={secondaryButtonClass}>{business.email}</MailLink>
            <WhatsAppLink className={secondaryButtonClass} />
          </div>
          <div className="mt-10">
            <EnquiryForm />
          </div>
        </div>
        <aside className="border border-line p-5">
          <h2 className="font-display text-3xl text-ink">What happens next</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
            <li>We read the enquiry at {business.email}.</li>
            <li>We reply with the hourly package or a quote, and what it covers.</li>
            <li>You decide. The booking terms page explains that the email is the agreement.</li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {business.address.locality}, {business.address.region}.{" "}
            {business.parking}. The street address is sent when you are booking,
            not published on this page yet.
          </p>
        </aside>
      </Container>
      <Container className="pb-20">
        <FaqList ids={["booking", "files", "hours", "visit"]} />
      </Container>
    </>
  );
}
