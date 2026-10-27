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
    format: "Sports and chat podcast",
    people: ["Grado", "Stephen Purdon", "Chris Toal"],
    summary:
      "Greg's sports and chat podcast, produced by G4 and recorded in the Wishaw studio. The set branding includes Grado and Boab.",
    metaDescription:
      "A Pint and Two Shots, a G4-produced sports and chat podcast recorded in the Wishaw studio. Tagged at the Scottish Podcast Awards '26 as Best Entertainment and Pop Culture Podcast.",
  },
  {
    slug: "relatively-blonde",
    title: "Relatively Blonde",
    format: "Podcast",
    people: ["Jade", "Lorri"],
    summary:
      "Relatively Blonde, recorded in Studio 1 at G4 in Wishaw. Jade and Lorri are pictured.",
    metaDescription:
      "Relatively Blonde, recorded in Studio 1 at G4 Podcast Studio in Wishaw, with Jade and Lorri.",
  },
  {
    slug: "leatherd",
    title: "Leather’d",
    format: "MMA podcast",
    people: ["Paul Craig", "Ross Cooper", "Sean Clancy Jnr"],
    summary:
      "An MMA podcast with Paul Craig and Ross Cooper, recorded with G4 in Wishaw, and filmed on location at Higher Level MMA.",
    metaDescription:
      "Leather’d, an MMA podcast with Paul Craig and Ross Cooper, recorded with G4 in Wishaw and on location at Higher Level MMA.",
  },
  {
    slug: "roughing-the-podcasters",
    title: "Roughing The Podcasters",
    format: "NFL podcast",
    people: [],
    summary: "An NFL podcast recorded with G4 in Wishaw. Photographs are not on this page yet.",
    metaDescription:
      "Roughing The Podcasters, an NFL podcast recorded with G4 Podcast Studio in Wishaw.",
  },
  {
    slug: "well-society",
    title: "The Well Society",
    format: "Live audience podcast",
    people: [],
    summary:
      "The Well Society live audience podcast recording. This is a recording in front of an audience, not a livestream.",
    metaDescription:
      "The Well Society live audience podcast, recorded with G4. A recording in front of an audience, not a livestream.",
  },
  {
    slug: "player-2-pro",
    title: "Player 2 Pro",
    format: "Social content",
    people: ["Calvin Miller", "Dylan Tait"],
    summary:
      "On-location social content with Player 2 Pro, Calvin Miller and Dylan Tait, filmed on a football pitch.",
    metaDescription:
      "Social content filmed on a football pitch with Player 2 Pro, Calvin Miller and Dylan Tait. Quoted case by case.",
  },
  {
    slug: "meet-your-competition",
    title: "Meet Your Competition",
    format: "Studio recording",
    people: [],
    summary:
      "A multi-guest studio session tagged Meet Your Competition. Host names are not published.",
    metaDescription:
      "Meet Your Competition, a multi-guest studio recording with G4. Host names are not published.",
  },
];

export function getCaseStudyMeta(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
