import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { mdxComponents } from "@/components/mdx-components";
import { getGuide, getGuides } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = getGuides().filter((item) => item.slug !== guide.slug);

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]}
        />
      </Container>
      <Container className="pb-20">
        <article>
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
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{guide.description}</p>
          <div className="richtext mt-10 max-w-3xl">
            <MDXRemote source={guide.content} components={mdxComponents} />
          </div>
        </article>
        <aside className="mt-16 border-t border-line pt-8">
          <h2 className="font-display text-3xl text-ink">Other guides</h2>
          <ul className="mt-4 space-y-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/guides/${item.slug}`} className="text-ink underline underline-offset-4">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  );
}
