export type WorkCategory =
  | "Podcasts"
  | "Short-form"
  | "Social"
  | "Business"
  | "Event"
  | "On-location";

export const workCategories: readonly WorkCategory[] = [
  "Podcasts",
  "Short-form",
  "Social",
  "Business",
  "Event",
  "On-location",
];

export type WorkImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type WorkItem = {
  id: string;
  title: string;
  categories: readonly WorkCategory[];
  summary: string;
  images: readonly WorkImage[];
  /** Set when a case-study page exists. */
  slug?: string;
  placeholderId?: string;
};

export const workItems: readonly WorkItem[] = [
  {
    id: "relatively-blonde",
    slug: "relatively-blonde",
    title: "Relatively Blonde",
    categories: ["Podcasts"],
    summary:
      "Relatively Blonde, recorded in Studio 1 at G4 in Wishaw. Jade and Lorri are pictured. One host in the set is not named here.",
    images: [
      {
        src: "/images/relatively-blonde-jade-studio-1.jpg",
        alt: "Jade recording Relatively Blonde in Studio 1 at G4 in Wishaw, seated in a red chair with a microphone.",
        caption: "Jade, Relatively Blonde, Studio 1.",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/relatively-blonde-lorri-studio-1.jpg",
        alt: "Lorri recording Relatively Blonde in Studio 1 at G4 in Wishaw, with the show name in neon behind her.",
        caption: "Lorri, Relatively Blonde, Studio 1.",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/relatively-blonde-studio-1-blue-top.jpg",
        alt: "A host recording Relatively Blonde in Studio 1 at G4 in Wishaw, wearing a blue top. This host is not named on the site.",
        caption: "Relatively Blonde in Studio 1. This host is not named here.",
        width: 1080,
        height: 1440,
      },
      {
        src: "/images/relatively-blonde-lorri-starbucks.jpg",
        alt: "Lorri recording Relatively Blonde in Studio 1 at G4 in Wishaw, holding a Starbucks cup.",
        caption: "Lorri, Relatively Blonde, Studio 1.",
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    id: "leatherd",
    slug: "leatherd",
    title: "Leather'd",
    categories: ["Podcasts", "On-location"],
    summary:
      "Leather'd, an MMA podcast with Paul Craig and Ross Cooper, recorded with G4 in Wishaw. Also filmed on location at Higher Level MMA with Ross Cooper, Sean Clancy Jnr and Paul Craig, for technique breakdowns for the Leather'd Patreon. The photographs here are from the Wishaw studio. The mat photographs are not on this page yet.",
    images: [
      {
        src: "/images/leatherd-ross-cooper-paul-craig.jpg",
        alt: "Ross Cooper and Paul Craig recording Leather'd together at G4 in Wishaw.",
        caption: "Ross Cooper and Paul Craig, Leather'd.",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/leatherd-ross-cooper.jpg",
        alt: "Ross Cooper recording Leather'd at G4 in Wishaw, seated in a red chair with a microphone.",
        caption: "Ross Cooper, Leather'd.",
        width: 1440,
        height: 810,
      },
      {
        src: "/images/leatherd-paul-craig.jpg",
        alt: "Paul Craig, a retired UFC fighter, recording Leather'd at G4 in Wishaw.",
        caption: "Paul Craig, Leather'd.",
        width: 1440,
        height: 810,
      },
    ],
  },
  {
    id: "a-pint-and-two-shots",
    slug: "a-pint-and-two-shots",
    title: "A Pint and Two Shots",
    categories: ["Podcasts"],
    summary:
      "Greg's sports and chat podcast, produced by G4 and recorded in the Wishaw studio. The set branding includes Grado and Boab. At the Scottish Podcast Awards '26 the show was tagged as Best Entertainment and Pop Culture Podcast. Hosts were not named in that post.",
    images: [
      {
        src: "/portfolio/apats/DSC00102.jpg",
        alt: "A host at the microphone for A Pint and Two Shots, with the show backdrop and football jerseys behind him.",
        caption: "A Pint and Two Shots, recorded in the Wishaw studio.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/apats/scottish-podcast-awards-2026.jpg",
        alt: "Two hosts of A Pint and Two Shots with the Scottish Podcast Awards '26 trophy, in front of the awards backdrop.",
        caption:
          "A Pint and Two Shots at the Scottish Podcast Awards '26. The show was tagged as Best Entertainment and Pop Culture Podcast. The hosts are not named on this photograph.",
        width: 1200,
        height: 2608,
      },
      {
        src: "/portfolio/apats/DSC00155.jpg",
        alt: "A host in front of the A Pint and Two Shots backdrop. The branding also reads Grado and Boab.",
        caption: "Show branding in the Wishaw studio, including Grado and Boab.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/apats/DSC00149.jpg",
        alt: "A guest laughing during an A Pint and Two Shots recording in the Wishaw studio.",
        caption: "A guest during an A Pint and Two Shots recording.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/portfolio/apats/DSC00146.jpg",
        alt: "A guest at the microphone during A Pint and Two Shots, with the show banner behind them.",
        caption: "A guest at the microphone, with the show banner.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/portfolio/apats/DSC00100.jpg",
        alt: "A host at the microphone during A Pint and Two Shots, seen past the camera.",
        caption: "Recording A Pint and Two Shots in the Wishaw studio.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/apats/DSC00152.jpg",
        alt: "A guest at the microphone during an A Pint and Two Shots recording.",
        caption: "A guest on the microphone during A Pint and Two Shots.",
        width: 1200,
        height: 1800,
      },
    ],
  },
  {
    id: "roughing-the-podcasters",
    slug: "roughing-the-podcasters",
    title: "Roughing The Podcasters",
    categories: ["Podcasts"],
    summary:
      "An NFL podcast recorded with G4 in Wishaw. Photographs are not on this site yet.",
    images: [],
    placeholderId: "G4-WORK-04",
  },
  {
    id: "well-society",
    slug: "well-society",
    title: "The Well Society",
    categories: ["Podcasts", "Event", "On-location"],
    summary:
      "The Well Society live audience podcast recording. This is a recording in front of an audience, not a livestream.",
    images: [
      {
        src: "/images/well-society-live-podcast.jpg",
        alt: "The Well Society live audience podcast: presenters at a table on a stage, with a seated audience and cameras in front of them.",
        caption: "The Well Society live audience podcast recording.",
        width: 1817,
        height: 2048,
      },
    ],
  },
  {
    id: "two-hosts-studio",
    title: "Two-host studio recording",
    categories: ["Podcasts"],
    summary:
      "Two hosts during a podcast recording in the studio. The show title is not published with this photograph.",
    images: [
      {
        src: "/images/studio-two-hosts-eagles-cap.jpg",
        alt: "Two hosts recording a podcast in the studio, seated in red chairs with microphones. One host is wearing a baseball cap.",
        caption: "Two hosts during a podcast recording in the studio.",
        width: 2048,
        height: 1539,
      },
    ],
  },
  {
    id: "three-hosts-studio",
    title: "Three-host studio recording",
    categories: ["Podcasts"],
    summary:
      "Three hosts during a podcast recording in the studio. The show title is not published with this photograph.",
    images: [
      {
        src: "/images/studio-three-hosts-glass-table.jpg",
        alt: "Three hosts recording a podcast in the studio, seated at a glass table with microphones.",
        caption: "Three hosts during a podcast recording in the studio.",
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    id: "audience-location",
    title: "On-location audience recording",
    categories: ["Podcasts", "Event", "On-location"],
    summary:
      "A camera operator filming a podcast in front of a seated audience. The venue is not named here. This is a recording, not a livestream.",
    images: [
      {
        src: "/images/on-location-camera-operator-audience.jpg",
        alt: "A camera operator films presenters at a table, with a seated audience behind the camera, during an on-location podcast recording.",
        caption: "On-location podcast recording with a live audience.",
        width: 1817,
        height: 2048,
      },
    ],
  },
  {
    id: "player-2-pro",
    slug: "player-2-pro",
    title: "Player 2 Pro",
    categories: ["Social", "On-location"],
    summary:
      "On-location social content with Player 2 Pro, Calvin Miller and Dylan Tait, filmed on a football pitch. Social media content is quoted case by case. There is no set price.",
    images: [
      {
        src: "/portfolio/player-2-pro/DSC04538.jpg",
        alt: "Calvin Miller kicking a football during a Player 2 Pro content shoot on a pitch.",
        caption: "Calvin Miller, Player 2 Pro, on location.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/player-2-pro/DSC04325.jpg",
        alt: "Calvin Miller with a football and a water bottle during a Player 2 Pro content shoot.",
        caption: "Calvin Miller during the Player 2 Pro pitch shoot.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/player-2-pro/DSC03772.jpg",
        alt: "Dylan Tait with a football during a Player 2 Pro content shoot on a pitch.",
        caption: "Dylan Tait, Player 2 Pro, on location.",
        width: 1600,
        height: 1066,
      },
    ],
  },
  {
    id: "meet-your-competition",
    slug: "meet-your-competition",
    title: "Meet Your Competition",
    categories: ["Podcasts"],
    summary:
      "A multi-guest studio session tagged Meet Your Competition. Host names are not published for this recording.",
    images: [
      {
        src: "/portfolio/meet-your-competition/DSC00715.jpg",
        alt: "Two guests at microphones during a Meet Your Competition studio session, with blue and purple lighting.",
        caption: "Meet Your Competition, a multi-guest studio session.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/meet-your-competition/DSC00731.jpg",
        alt: "A guest at the microphone during a Meet Your Competition studio session.",
        caption: "A guest during Meet Your Competition. The host is not named.",
        width: 1600,
        height: 1066,
      },
      {
        src: "/portfolio/meet-your-competition/DSC00746.jpg",
        alt: "A guest in a football shirt at the microphone during a Meet Your Competition studio session.",
        caption: "A guest during Meet Your Competition.",
        width: 1600,
        height: 2400,
      },
    ],
  },
];

export const emptyWorkSlots: readonly {
  category: WorkCategory;
  placeholderId: string;
  note: string;
}[] = [
  {
    category: "Short-form",
    placeholderId: "G4-WORK-01",
    note: "No short-form project is published yet.",
  },
  {
    category: "Social",
    placeholderId: "G4-WORK-02",
    note: "No social project is published yet.",
  },
  {
    category: "Business",
    placeholderId: "G4-WORK-03",
    note: "No business video project is published yet.",
  },
];

export function workBySlug(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}

export function workInCategory(category: WorkCategory): WorkItem[] {
  return workItems.filter((item) => item.categories.includes(category));
}
