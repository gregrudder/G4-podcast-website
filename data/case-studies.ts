/**
 * Named productions Greg has cleared for the site.
 * No audience figures, download counts or outcome claims.
 * Long-form copy lives in content/work/<slug>.mdx.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  format: string;
  people: readonly string[];
  summary: string;
  metaDescription: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "a-pint-and-two-shots",
    title: "A Pint and Two Shots",
    format: "Podcast",
    people: ["Grado", "Stephen Purdon", "Chris Toal"],
    summary:
      "A podcast with Grado, Stephen Purdon and Chris Toal, recorded with G4 in Wishaw.",
    metaDescription:
      "A Pint and Two Shots, with Grado, Stephen Purdon and Chris Toal, recorded with G4 Podcast Studio in Wishaw.",
  },
  {
    slug: "leatherd",
    title: "Leather’d",
    format: "MMA podcast",
    people: ["Paul Craig", "Ross Cooper"],
    summary:
      "An MMA podcast with Paul Craig and Ross Cooper, recorded with G4 in Wishaw.",
    metaDescription:
      "Leather’d, an MMA podcast with Paul Craig and Ross Cooper, recorded with G4 Podcast Studio in Wishaw.",
  },
  {
    slug: "roughing-the-podcasters",
    title: "Roughing The Podcasters",
    format: "NFL podcast",
    people: [],
    summary: "An NFL podcast recorded with G4 in Wishaw.",
    metaDescription:
      "Roughing The Podcasters, an NFL podcast recorded with G4 Podcast Studio in Wishaw.",
  },
];

export function getCaseStudyMeta(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
