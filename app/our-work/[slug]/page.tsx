import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { mdxComponents } from "@/components/mdx-components";
import { WorkPhoto } from "@/components/work-photo";
import { workBySlug, workItems } from "@/data/portfolio";
import { getCaseStudy } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return workItems.flatMap((item) => (item.slug ? [{ slug: item.slug }] : []));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMeta({
    title: study.title,
    description: study.metaDescription,
    path: `/our-work/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);
  if (!study || !work) notFound();

  const others = workItems.filter((item) => item.slug && item.slug !== slug);

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Our work", path: "/our-work" },
            { name: study.title, path: `/our-work/${study.slug}` },
          ]}
        />
      </Container>
      <Container className="pb-10">
        <p className="text-sm uppercase tracking-[0.16em] text-muted">{study.format}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
          {study.title}
        </h1>
        {study.people.length > 0 ? (
          <p className="mt-4 text-ink">{study.people.join(", ")}</p>
        ) : null}
        <p className="mt-4 max-w-2xl text-lg text-muted">{study.summary}</p>
      </Container>
      {work.images.length > 0 ? (
        <Container className="grid gap-8 pb-12 md:grid-cols-2">
          {work.images.map((image, index) => (
            <WorkPhoto
              key={image.src}
              image={image}
              priority={index === 0}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </Container>
      ) : (
        <Container className="pb-12">
          <p className="border border-line bg-raised p-6 text-muted">
            Photographs for this recording are not on this page yet.
          </p>
        </Container>
      )}
      <Container className="pb-8">
        <div className="richtext max-w-3xl">
          <MDXRemote source={study.content} components={mdxComponents} />
        </div>
      </Container>
      <Container className="pb-16">
        <h2 className="font-display text-3xl text-ink">More work</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {others.map((item) => (
            <li key={item.id}>
              <Link
                href={`/our-work/${item.slug}`}
                className="text-ink underline underline-offset-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand
        title="Record in Wishaw, or on location"
        body="Tell us the format and the date. Studio time is hourly. An edit is included in Silver, Gold and Platinum. Clips beyond those packages are quoted."
        intent="studio"
        cta="Arrange a Visit"
      />
    </>
  );
}
