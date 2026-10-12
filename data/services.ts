import { fromHourlyLabel } from "@/data/packages";

export type ServiceSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type ServiceRecord = {
  id: string;
  path:
    | "/podcast-studio"
    | "/podcast-production"
    | "/podcast-editing"
    | "/short-form-content"
    | "/business-podcasts"
    | "/on-location-recording";
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  standfirst: string;
  priceLabel: string;
  enquiryIntent: string;
  ctaLabel: string;
  sections: readonly ServiceSection[];
  faqIds: readonly string[];
  related: readonly string[];
};

const fromHourly = fromHourlyLabel();

export const services: readonly ServiceRecord[] = [
  {
    id: "podcast-studio",
    path: "/podcast-studio",
    label: "Studio hire",
    metaTitle: "Podcast and video studio hire in Wishaw",
    metaDescription:
      `Two multi-camera podcast studios in Wishaw, North Lanarkshire, with free parking. Couch and desk sets. ${fromHourly}.`,
    h1: "Podcast and video studio hire in Wishaw",
    standfirst: `Two podcast studios in Wishaw, North Lanarkshire, set up for multi-camera recording. Free parking on site. ${fromHourly}.`,
    priceLabel: fromHourly,
    enquiryIntent: "studio-recording",
    ctaLabel: "Book a session",
    faqIds: [
      "where",
      "parking",
      "studio-price",
      "inclusions",
      "video",
      "first-time",
      "visit",
    ],
    related: ["podcast-production", "podcast-editing", "on-location-recording"],
    sections: [
      {
        heading: "What you are booking",
        paragraphs: [
          "You are booking time in one of the two studios. The published prices are hourly rates, plus VAT. They are for the studio session.",
          "Editing, short clips and social media management are separate. Those are quoted, or, for social media management, agreed after a consultation. We say what the hour covers in writing before you book, because the tier inclusions are not published yet.",
        ],
      },
      {
        heading: "Two studios, two kinds of set",
        paragraphs: [
          "There are two podcast studios on the Wishaw site. Both are for podcast and video recording. Couch and desk sets are available. A TV can show your branding, so send a logo or a still ahead of the session if you want it on screen.",
          "How the two rooms differ — size, layout, and which set is in which room — is confirmed when you book. Capacity and step-free access are not published on this page yet. Ask us before you travel if either of those matters.",
        ],
      },
      {
        heading: "Getting here",
        paragraphs: [
          "The studios are in Wishaw, North Lanarkshire, south-east of Glasgow. There is free parking on site, which is the practical reason many Glasgow and Lanarkshire clients drive here rather than book a city-centre room.",
          "The street address, station details and drive times are not on this page yet. Email info@g4-marketing.net and we will send them. We do not publish a separate page for each nearby town.",
        ],
      },
    ],
  },
  {
    id: "podcast-production",
    path: "/podcast-production",
    label: "Production",
    metaTitle: "Podcast and video podcast production",
    metaDescription:
      "Podcast production from two studios in Wishaw: plan the episode, record multi-camera, then edit. Studio hours are on the rate card. Production is quoted.",
    h1: "Podcast production from the Wishaw studios",
    standfirst:
      "Production is the managed job: plan the episode, record it in the studio or on location, then edit. Video podcasts are part of this, not a separate room.",
    priceLabel: "Studio hours on the rate card. Production quoted.",
    enquiryIntent: "production",
    ctaLabel: "Book a session",
    faqIds: ["editing", "inclusions", "files", "booking", "video"],
    related: ["podcast-studio", "podcast-editing", "short-form-content"],
    sections: [
      {
        heading: "What production covers",
        paragraphs: [
          "Studio hire is the room and the kit, priced by the hour. Production is the work around that hour: agreeing the shape of the episode, recording it with the studio kit, and editing it afterwards.",
          "A video podcast is the normal way these studios are used. Multi-camera, professional lighting, and a mixer — the RØDECaster Pro II — are already in the room. You do not need a second supplier for picture and sound.",
        ],
      },
      {
        heading: "How a job is priced",
        paragraphs: [
          "The studio hour is on the rate card: Bronze, Silver, Gold and Platinum, all plus VAT. What each tier includes is confirmed in writing, not assumed from the name.",
          "The edit, any clips, and any extra producer time beyond the booked hour are quoted before work starts. We do not publish a single “episode package” price, because episode length and camera count change the job.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Existing shows that want a fixed room and a crew, businesses recording a run of episodes, and new shows that want someone else to handle the recording and the edit.",
          "If you only want the room, book studio time. If you want the episode finished, say so on the form and we will quote the production.",
        ],
      },
    ],
  },
  {
    id: "podcast-editing",
    path: "/podcast-editing",
    label: "Editing",
    metaTitle: "Podcast and video editing",
    metaDescription:
      "Podcast editing and video editing, quoted per job. Add an edit to a Wishaw studio session, or send files you recorded elsewhere in the UK.",
    h1: "Podcast and video editing",
    standfirst:
      "Editing is quoted per job. It covers audio podcasts and video podcasts, whether the files were recorded in Wishaw or somewhere else.",
    priceLabel: "Quoted per job",
    enquiryIntent: "editing",
    ctaLabel: "Ask for an edit quote",
    faqIds: ["editing", "files", "booking", "clips"],
    related: ["podcast-production", "short-form-content", "podcast-studio"],
    sections: [
      {
        heading: "What you can send",
        paragraphs: [
          "Book an edit with studio time, or send files from a session you recorded elsewhere. Podcast editing and video editing are both available. Say which you need. A multi-camera video edit is a different job from a single audio track, and the quote will say so.",
          "Turnaround, the number of revision rounds, and how the master is delivered are agreed in the quote. They are not fixed on this page.",
        ],
        bullets: [
          "Audio podcast edit",
          "Video podcast edit, including multi-camera",
          "Short clips, if you add them to the same quote",
        ],
      },
      {
        heading: "What to put in the brief",
        paragraphs: [
          "The useful brief is short: the running order, which takes to use, names and spellings, anything that must stay in, and anything that must come out. If you want music, say whether you have the right to use it.",
          "There is a longer version of this on the guide to briefing an editor. Agree the loudness target and the file format in the quote rather than after the edit is done.",
        ],
      },
    ],
  },
  {
    id: "short-form-content",
    path: "/short-form-content",
    label: "Short-form",
    metaTitle: "Short-form video and content repurposing",
    metaDescription:
      "TikTok, Instagram Reels and YouTube Shorts cut from podcast and video recordings. Quoted per job. Social media management by consultation.",
    h1: "Short-form clips and content repurposing",
    standfirst:
      "One recording can become a full episode and a set of vertical clips. Clips for TikTok, Reels and Shorts are quoted. Social media management is a consultation, not a rate card.",
    priceLabel: "Quoted per job",
    enquiryIntent: "short-form",
    ctaLabel: "Ask for a clip quote",
    faqIds: ["clips", "social", "booking", "editing"],
    related: ["podcast-editing", "business-podcasts", "podcast-production"],
    sections: [
      {
        heading: "Clips from a longer recording",
        paragraphs: [
          "Short-form means vertical video for TikTok, Instagram Reels and YouTube Shorts, cut from a podcast or another recording. Content repurposing is the same idea applied to the whole session: the long episode stays intact, and selected moments are cut for social.",
          "The quote depends on how many clips you want, how long they are, and whether captions are burned in. Those details are not a fixed menu yet. Tell us the numbers and we will price them.",
        ],
      },
      {
        heading: "Footage from the studio, or footage you already have",
        paragraphs: [
          "Clips can be cut from a session recorded at G4. If you want us to cut footage you recorded elsewhere, say so. We will confirm in the quote whether we can take those files.",
        ],
      },
      {
        heading: "Social media management",
        paragraphs: [
          "Social media management — posting and looking after accounts — is a separate service. It has no fixed price. The next step is a consultation, not a package on the rate card.",
          "Book a consultation and describe the accounts and how often you publish. We will reply with what we would do and what it would cost. Nothing is assumed from a follower count or a monthly bundle, because we do not publish one.",
        ],
      },
    ],
  },
  {
    id: "business-podcasts",
    path: "/business-podcasts",
    label: "Business",
    metaTitle: "Podcasts and video for businesses",
    metaDescription:
      `Podcast and video content for businesses, recorded in Wishaw or on location. ${fromHourly}. Production, edits and clips quoted.`,
    h1: "Podcasts and video for businesses",
    standfirst:
      "A business can record in the Wishaw studios, or we can come to you. Studio time is on the rate card. Production, editing and clips are quoted to the job.",
    priceLabel: "Studio hours on the rate card. Production quoted.",
    enquiryIntent: "business",
    ctaLabel: "Book a session",
    faqIds: ["studio-price", "editing", "clips", "on-location", "booking"],
    related: ["podcast-production", "short-form-content", "on-location-recording"],
    sections: [
      {
        heading: "What businesses use the studios for",
        paragraphs: [
          "A founder interview, a customer conversation, a recruitment piece, or a regular show for clients. The recording is the raw material. The edit and the clips are what get published. You can book the room only, or the room plus the edit.",
          "The named shows on the work page are sport and personality podcasts: A Pint and Two Shots, Leather’d, and Roughing The Podcasters. They show the kind of recording the studios handle. They are not case studies of a corporate series, and we do not invent results for them.",
        ],
      },
      {
        heading: "In the studio or at your premises",
        paragraphs: [
          "The studios have couch and desk sets, multi-camera recording, professional lighting, and a TV for your branding. Free parking makes a half-day with a small team straightforward.",
          "If the recording has to happen in your office or at an event, that is on-location work. It is quoted, including travel. The studio is usually the simpler option when people can come to Wishaw.",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          "Tell us who will be in the room, what the piece is for, and whether you need an edit and clips. We will say which studio, which hourly rate, and what the rest of the job costs, before you commit.",
        ],
      },
    ],
  },
  {
    id: "on-location-recording",
    path: "/on-location-recording",
    label: "On location",
    metaTitle: "On-location podcast and video recording",
    metaDescription:
      "On-location podcast and video recording for businesses and events. Travel, kit and price are confirmed per job. Studios remain in Wishaw.",
    h1: "On-location podcast and video recording",
    standfirst:
      "We record on location when the place is the point: a workplace, a shop floor, an event. The price, the travel and the kit are confirmed for that job. They are not a flat fee on this page.",
    priceLabel: "Quoted per job",
    enquiryIntent: "on-location",
    ctaLabel: "Ask about a location",
    faqIds: ["on-location", "booking", "where", "editing"],
    related: ["podcast-studio", "business-podcasts", "podcast-production"],
    sections: [
      {
        heading: "When on-location is the right booking",
        paragraphs: [
          "Use the Wishaw studios when you want the sets, the lighting and the parking already in place. Book on-location when the recording has to happen somewhere else: your office, a site, or an event.",
          "Tell us the address and the date. We will say whether we can cover it, what we would bring, how long we need, and what it costs. There is no published mileage rate or minimum hire yet.",
        ],
      },
      {
        heading: "Kit",
        paragraphs: [
          "In the studios the kit is fixed: Sony ZV-E10 cameras, a RØDECaster Pro II, RØDE wireless microphones, professional podcast microphones, multi-camera recording and professional lighting.",
          "The kit for an on-location job is agreed per booking. Do not assume the full studio rig travels. The quote will list what comes with us.",
        ],
      },
    ],
  },
];

export function getService(id: string): ServiceRecord {
  const service = services.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
}

export function getServiceByPath(path: string): ServiceRecord | undefined {
  return services.find((item) => item.path === path);
}
