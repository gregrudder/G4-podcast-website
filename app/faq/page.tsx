import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { faqs } from "@/data/faqs";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Podcast studio FAQ",
  description:
    "Where the Wishaw studios are, hourly rates, what is still to be confirmed, editing, clips, on-location recording and how to book.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          Questions about the studios
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Answers use the facts that are confirmed. Where a number or a policy
          is still open, the answer says so.
        </p>
        <div className="mt-10">
          <FaqList ids={faqs.map((faq) => faq.id)} heading="All questions" />
        </div>
      </Container>
    </>
  );
}
