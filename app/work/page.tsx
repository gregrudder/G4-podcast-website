import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { caseStudies } from "@/data/case-studies";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Work",
  description:
    "Shows recorded with G4 in Wishaw: A Pint and Two Shots, Leather’d, and Roughing The Podcasters. No audience figures.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Work", path: "/work" }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          Shows recorded with G4
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          These three productions are named with permission. The pages describe
          the shows. They do not claim download numbers, viewing figures or
          business results.
        </p>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <PlaceholderFrame kicker={study.format} title={study.title} />
              {study.people.length > 0 ? (
                <p className="mt-4 text-sm text-ink">{study.people.join(", ")}</p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-muted">{study.summary}</p>
              <Link
                href={`/work/${study.slug}`}
                className="mt-3 inline-block text-ink underline underline-offset-4"
              >
                Read the case study
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
