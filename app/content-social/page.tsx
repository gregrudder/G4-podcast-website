import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/metadata";

const ids = [
  "podcast-clips",
  "social-media-management",
  "content-shoots",
  "event-content",
  "business-video",
] as const;

export const metadata: Metadata = pageMeta({
  title: "Content and social",
  description:
    "Clips, social media management, content shoots, event coverage and business video from G4 in Wishaw and on location. Social media has no set price.",
  path: "/content-social",
});

export default function ContentSocialPage() {
  const items = ids.map((id) => services.find((service) => service.id === id)!);
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: "Content and social", path: "/content-social" }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
          Content and social
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          The work after the recording, and the shoots that are not a podcast hour. Social
          media management is quoted case by case.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.id} className="lift-card border border-line p-6">
              <p className="text-sm text-muted">{item.priceLabel}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">
                <Link href={item.path} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </h2>
              <p className="mt-3 text-muted">{item.standfirst}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
