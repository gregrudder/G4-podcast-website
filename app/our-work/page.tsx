import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { WorkFilter } from "@/components/work-filter";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Our work",
  description:
    "Podcasts, events and on-location recordings from G4 in Wishaw, including A Pint and Two Shots, Relatively Blonde, Leather'd and The Well Society.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Our work", path: "/our-work" }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
          Our work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Named shows and recordings Greg has cleared. No audience figures. Photographs are
          used only where we have them. A live audience recording is not a livestream.
        </p>
        <div className="mt-10">
          <WorkFilter />
        </div>
      </Container>
    </>
  );
}
