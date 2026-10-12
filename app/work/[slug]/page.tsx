import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { mdxComponents } from "@/components/mdx-components";
import { PlaceholderFrame } from "@/components/placeholder-frame";
import { caseStudies } from "@/data/case-studies";
import { getCaseStudy, getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
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
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { name: "Work", path: "/work" },
            { name: study.title, path: `/work/${study.slug}` },
          ]}
        />
      </Container>
      <Container className="grid gap-10 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <PlaceholderFrame kicker={study.format} title={study.title} />
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-muted">{study.format}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            {study.title}
          </h1>
          {study.people.length > 0 ? (
            <p className="mt-4 text-ink">{study.people.join(", ")}</p>
          ) : null}
          <p className="mt-4 text-lg text-muted">{study.summary}</p>
        </div>
      </Container>
      <Container className="pb-8">
        <div className="richtext max-w-3xl">
          <MDXRemote source={study.content} components={mdxComponents} />
        </div>
      </Container>
      <Container className="pb-16">
        <h2 className="font-display text-3xl text-ink">Other shows</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="text-ink underline underline-offset-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand
        title="Record a show in Wishaw"
        body="Tell us the format and the date you have in mind. Studio time is hourly. An edit or clips are quoted."
      />
    </>
  );
}
