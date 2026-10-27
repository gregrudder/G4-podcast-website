import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";

export function ArticlePage({
  title,
  lede,
  path,
  crumb,
  children,
}: {
  title: string;
  lede: string;
  path: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs items={[{ name: crumb, path }]} />
      </Container>
      <Container className="pb-20">
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        <div className="richtext max-w-3xl">{children}</div>
      </Container>
    </>
  );
}
