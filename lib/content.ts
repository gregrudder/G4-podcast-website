import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import {
  caseStudies,
  getCaseStudyMeta,
  type CaseStudy,
} from "@/data/case-studies";

const guideFrontmatter = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  published: z.preprocess((value) => {
    if (value instanceof Date) {
      return value.toISOString().slice(0, 10);
    }
    return value;
  }, z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
  order: z.number().int(),
});

export type Guide = {
  slug: string;
  title: string;
  description: string;
  published: string;
  order: number;
  content: string;
};

export type CaseStudyPage = CaseStudy & { content: string };

function readMdx(filePath: string): { data: unknown; content: string } {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data, content: parsed.content.trim() };
}

export function getGuides(): Guide[] {
  const dir = path.join(process.cwd(), "content/guides");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const parsed = readMdx(path.join(dir, file));
      const data = guideFrontmatter.parse(parsed.data);
      return { slug, content: parsed.content, ...data };
    })
    .sort((a, b) => a.order - b.order);
}

export function getGuide(slug: string): Guide | undefined {
  return getGuides().find((guide) => guide.slug === slug);
}

export function getCaseStudies(): CaseStudyPage[] {
  const dir = path.join(process.cwd(), "content/work");
  const files = new Set(
    fs.readdirSync(dir).filter((file) => file.endsWith(".mdx")),
  );

  const pages = caseStudies.map((study) => {
    const filename = `${study.slug}.mdx`;
    if (!files.has(filename)) {
      throw new Error(`Missing content/work/${filename}`);
    }
    files.delete(filename);
    const parsed = readMdx(path.join(dir, filename));
    return { ...study, content: parsed.content };
  });

  if (files.size > 0) {
    throw new Error(
      `Case study MDX has no entry in data/case-studies.ts: ${[...files].join(", ")}`,
    );
  }

  return pages;
}

export function getCaseStudy(slug: string): CaseStudyPage | undefined {
  const meta = getCaseStudyMeta(slug);
  if (!meta) return undefined;
  return getCaseStudies().find((study) => study.slug === slug);
}
