import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { getGuides } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Guides",
  description:
    "Practical notes on booking a podcast studio, choosing audio or video, and briefing an editor. Written for people recording in the UK.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getGuides();
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Guides", path: "/guides" }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          Guides for recording and editing
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Three practical pieces. They are useful if you book G4, and useful if
          you book somewhere else. They do not repeat the old news posts from
          the previous site.
        </p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {guides.map((guide) => (
            <li key={guide.slug} className="py-6">
              <p className="text-sm text-muted">
                <time dateTime={guide.published}>
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "Europe/London",
                  }).format(new Date(`${guide.published}T00:00:00Z`))}
                </time>
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">
                <Link href={`/guides/${guide.slug}`} className="underline underline-offset-4">
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{guide.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
