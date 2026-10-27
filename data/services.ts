import { fromHourlyLabel, socialPricing } from "@/data/packages";

export type ServiceSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type ServiceId =
  | "podcast-studio"
  | "podcast-production"
  | "remote-podcast-editing"
  | "podcast-clips"
  | "social-media-management"
  | "content-shoots"
  | "event-content"
  | "on-location"
  | "business-video"
  | "start-a-podcast";

export type ServiceRecord = {
  id: ServiceId;
  path: string;
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
  related: readonly ServiceId[];
  mediaIds: readonly string[];
};

const fromHourly = fromHourlyLabel();

export const services: readonly ServiceRecord[] = [
  {
    id: "podcast-studio",
    path: "/podcast-studio",
    label: "Podcast studio",
    metaTitle: "Podcast studio hire in Wishaw",
    metaDescription:
      `Two multi-camera podcast studios in Wishaw, North Lanarkshire, with free parking. ${fromHourly}. Bronze, Silver, Gold and Platinum are hourly.`,
    h1: "A professional podcast studio in Wishaw",
    standfirst:
      "Two studios in Wishaw for multi-camera recording, with RØDE audio, professional lighting, and a set you can dress for the show. Free parking and a guest waiting room.",
    priceLabel: fromHourly,
    enquiryIntent: "studio",
    ctaLabel: "Arrange a Studio Visit",
    faqIds: ["where", "parking", "studio-price", "inclusions", "video", "visit"],
    related: ["podcast-production", "start-a-podcast", "on-location"],
    mediaIds: ["G4-STUDIO-01", "G4-STUDIO-02", "G4-STUDIO-03", "G4-STUDIO-06", "G4-STUDIO-07"],
    sections: [
      {
        heading: "Two rooms, one site",
        paragraphs: [
          "Studio 1 and Studio 2 are both in Wishaw, North Lanarkshire. People come from Glasgow, Motherwell and the rest of Lanarkshire. There is no second address in Glasgow.",
          "The photographs of Studio 1 are from a Relatively Blonde recording. Studio 2 is shown in its own set-ups. Which room you use is confirmed when you book.",
          "Meet Your Competition is a multi-guest studio session. Host names are not published for that recording.",
        ],
      },
      {
        heading: "What the hour is",
        paragraphs: [
          "Studio hire is hourly, plus VAT. Bronze is £40, Silver £70, Gold £90 and Platinum £130. The pricing page lists what each hour includes. Bronze is the room, three cameras and the raw files, and no producer sits in. Silver, Gold and Platinum add a producer and an edited podcast.",
          "Bring your own SD cards on Bronze. Further revisions, after the rounds included in Silver, Gold or Platinum, are £5 each.",
        ],
      },
    ],
  },
  {
    id: "podcast-production",
    path: "/podcast-production",
    label: "Podcast production",
    metaTitle: "Podcast production in Wishaw",
    metaDescription:
      "Plan, record, edit and deliver a podcast with G4 in Wishaw. The hourly packages do not all include the same edit, clips or producer.",
    h1: "Plan, record, edit, deliver",
    standfirst:
      "Full podcast production from the Wishaw studios, or around a recording you already have. The package you book decides whether a producer, an edit and clips are included.",
    priceLabel: fromHourly,
    enquiryIntent: "production",
    ctaLabel: "Discuss Your Podcast",
    faqIds: ["studio-price", "inclusions", "editing", "clips", "booking"],
    related: ["podcast-studio", "remote-podcast-editing", "podcast-clips"],
    mediaIds: ["G4-STUDIO-04", "G4-EDIT-01"],
    sections: [
      {
        heading: "The shape of a job",
        paragraphs: [
          "A production can include the recording, cameras, audio, a multi-camera edit, colour, a mix, intros, outros, graphics, clips and delivery. Not every one of those is in every hour.",
        ],
        bullets: [
          "Bronze: studio, 3 cameras, raw audio and video. No producer in the room. Your own SD cards.",
          "Silver: a producer for the session, and a complete edited podcast with 1 revision.",
          "Gold: a producer who will fact check and bring up on-screen images and videos, an edit with 2 revisions, and 1 basic clip, TikTok or Reel.",
          "Platinum: everything in Gold, with 4 revisions, 3 clips, and a YouTube thumbnail.",
        ],
      },
      {
        heading: "Agreed in writing",
        paragraphs: [
          "Individual synced video files have an additional cost where the rate card says so. That amount is confirmed in the quote. The booking email is what you are buying.",
        ],
      },
    ],
  },
  {
    id: "remote-podcast-editing",
    path: "/remote-podcast-editing",
    label: "Remote editing",
    metaTitle: "Remote podcast editing in the UK",
    metaDescription:
      "You record. We edit. Remote podcast editing for shows anywhere in the UK. Quoted per job. Studio packages that include an edit are on the pricing page.",
    h1: "You record. We edit.",
    standfirst:
      "Send the files from anywhere in the UK. We cut the episode to the brief. This is for recordings made outside a G4 studio hour, or for an edit beyond the package.",
    priceLabel: "Quoted per job",
    enquiryIntent: "editing",
    ctaLabel: "Get an Editing Quote",
    faqIds: ["editing", "files", "booking"],
    related: ["podcast-production", "podcast-clips", "podcast-studio"],
    mediaIds: ["G4-EDIT-01", "G4-EDIT-02"],
    sections: [
      {
        heading: "How a remote edit runs",
        paragraphs: [
          "You upload the recording, send the brief, we edit, you review. Silver, Gold and Platinum studio hours already include a complete edited podcast with a set number of revisions. Bronze does not. A file recorded somewhere else is quoted on its own.",
        ],
      },
    ],
  },
  {
    id: "podcast-clips",
    path: "/podcast-clips",
    label: "Podcast clips",
    metaTitle: "Podcast clips, Reels and TikToks",
    metaDescription:
      "Short-form clips from a podcast. Gold includes 1 basic clip. Platinum includes 3, plus a YouTube thumbnail. Further clips are quoted.",
    h1: "Turn a podcast into clips",
    standfirst:
      "Reels, TikToks and Shorts cut from the episode, with captions and a hook when the brief asks for them. Gold and Platinum include a set number. Anything beyond that is quoted.",
    priceLabel: "Included in Gold and Platinum, or quoted",
    enquiryIntent: "clips",
    ctaLabel: "Turn Your Podcast Into Content",
    faqIds: ["clips", "inclusions", "social"],
    related: ["podcast-production", "social-media-management", "content-shoots"],
    mediaIds: ["G4-CLIPS-01"],
    sections: [
      {
        heading: "What the hour already includes",
        paragraphs: [
          "Gold includes 1 basic clip, TikTok or Reel of your choice. Platinum includes 3 clips, Reels or TikToks of your choice, and a YouTube thumbnail. There is no separate four-clip package price on this site.",
          "We do not promise views, followers or a viral result.",
        ],
      },
    ],
  },
  {
    id: "social-media-management",
    path: "/social-media-management",
    label: "Social media",
    metaTitle: "Social media management in Lanarkshire",
    metaDescription:
      "Social media management for businesses in Lanarkshire and beyond. Planning, creation, scheduling and reporting. Quoted case by case. No set price.",
    h1: "Social media, quoted case by case",
    standfirst:
      "Planning, creation, scheduling and reporting for the accounts you actually use. Every enquiry is its own job. There is no social media package price.",
    priceLabel: socialPricing.label,
    enquiryIntent: "social",
    ctaLabel: socialPricing.cta,
    faqIds: ["social", "booking"],
    related: ["podcast-clips", "content-shoots", "event-content"],
    mediaIds: ["G4-SOCIAL-01", "G4-SOCIAL-02"],
    sections: [
      {
        heading: "Book a consultation",
        paragraphs: [
          socialPricing.note,
          "Tell us the accounts, how often you want to post, and whether the pictures come from a studio day, a shoot, or files you already have. We reply with what the work covers and what it costs before anything starts.",
          "We will not promise followers, sales or a viral result. A recent example of social content, not a management retainer, is the Player 2 Pro pitch shoot with Calvin Miller and Dylan Tait.",
        ],
      },
    ],
  },
  {
    id: "content-shoots",
    path: "/content-shoots",
    label: "Content shoots",
    metaTitle: "One-off content shoots in Lanarkshire",
    metaDescription:
      "One-off content shoots for businesses and creators. One shoot, then pictures and clips you can post. Quoted per job.",
    h1: "One shoot. Plenty of content.",
    standfirst:
      "A single recording day for the posts, the clips and the stills you need afterwards. The price is a quote. It is not one of the hourly studio packages unless you are booking the studio.",
    priceLabel: "Request a Quote",
    enquiryIntent: "content-shoot",
    ctaLabel: "Plan a Content Shoot",
    faqIds: ["booking", "clips"],
    related: ["social-media-management", "business-video", "podcast-studio"],
    mediaIds: ["G4-SHOOT-01", "G4-SHOOT-02", "G4-SHOOT-03"],
    sections: [
      {
        heading: "What to tell us",
        paragraphs: [
          "Who is in front of the camera, where it happens, and what you need back: stills, vertical clips, or both. Player 2 Pro, with Calvin Miller and Dylan Tait, is one pitch shoot we have already done.",
        ],
      },
    ],
  },
  {
    id: "event-content",
    path: "/event-content",
    label: "Event content",
    metaTitle: "Event social content in Scotland",
    metaDescription:
      "Social-first video and photography from events. Recordings in front of an audience. Not a livestream.",
    h1: "Content from the event, not a livestream",
    standfirst:
      "We film the room, the speakers and the audience for the posts that follow. A live audience podcast recording is something we do. We do not sell a livestream or a standalone live production.",
    priceLabel: "Request a Quote",
    enquiryIntent: "event",
    ctaLabel: "Tell Us About Your Event",
    faqIds: ["on-location", "booking"],
    related: ["on-location", "social-media-management", "content-shoots"],
    mediaIds: ["G4-EVENT-01", "G4-EVENT-02"],
    sections: [
      {
        heading: "What we have recorded",
        paragraphs: [
          "The Well Society is a live audience podcast recording. There is also an on-location recording with a camera operator and a seated audience. Both are recordings. They are not livestreams.",
        ],
      },
    ],
  },
  {
    id: "on-location",
    path: "/on-location",
    label: "On location",
    metaTitle: "On-location podcast recording",
    metaDescription:
      "Podcast recording at your location in Scotland, including rooms with an audience. Quoted per job. Not a livestream.",
    h1: "Your location. Our production.",
    standfirst:
      "We bring cameras and audio to you. That includes a room with an audience. Travel and the kit are quoted. The Wishaw hourly rates do not automatically apply off site.",
    priceLabel: "Quoted per job",
    enquiryIntent: "on-location",
    ctaLabel: "Enquire About Location Recording",
    faqIds: ["on-location", "booking", "where"],
    related: ["podcast-studio", "event-content", "business-video"],
    mediaIds: ["G4-LOCATION-01", "G4-LOCATION-02", "G4-LOCATION-04", "G4-LOCATION-03", "G4-EVENT-01"],
    sections: [
      {
        heading: "Recordings, not a livestream",
        paragraphs: [
          "On-location work we can show includes an audience recording, The Well Society live audience podcast, a Player 2 Pro shoot on a football pitch with Calvin Miller and Dylan Tait, and Leather'd technique breakdowns at Higher Level MMA with Ross Cooper, Sean Clancy Jnr and Paul Craig.",
          "None of that is a livestream, and it is not a standing live-production service.",
        ],
      },
    ],
  },
  {
    id: "business-video",
    path: "/business-video",
    label: "Business video",
    metaTitle: "Business video and photography in Lanarkshire",
    metaDescription:
      "Business video and photography from Wishaw, for companies across Lanarkshire and Glasgow. Quoted per project.",
    h1: "Business video and photography",
    standfirst:
      "Interviews, explainers and stills for a business, shot in the studio or on location. Each project is quoted. This page does not list a package price.",
    priceLabel: "Request a Quote",
    enquiryIntent: "business",
    ctaLabel: "Discuss Your Project",
    faqIds: ["booking", "video"],
    related: ["content-shoots", "podcast-production", "on-location"],
    mediaIds: ["G4-BUSINESS-01", "G4-BUSINESS-02"],
    sections: [
      {
        heading: "Start with the job",
        paragraphs: [
          "Tell us who speaks, where it is used, and whether you need a finished edit or the rushes. We will not invent a client list on this page.",
        ],
      },
    ],
  },
  {
    id: "start-a-podcast",
    path: "/start-a-podcast",
    label: "Start a podcast",
    metaTitle: "Start a podcast in Wishaw",
    metaDescription:
      "Got a podcast idea? G4 will help you get it recorded in Wishaw. Hourly studio packages from £40 plus VAT. Inclusions differ by package.",
    h1: "Got a podcast idea? We'll help you get it recorded.",
    standfirst:
      "You do not need microphones or a back catalogue. You need the people, a rough running order, and a note of what you want back.",
    priceLabel: fromHourly,
    enquiryIntent: "start-podcast",
    ctaLabel: "Start Your Podcast",
    faqIds: ["first-time", "studio-price", "inclusions", "booking"],
    related: ["podcast-studio", "podcast-production", "podcast-clips"],
    mediaIds: ["G4-STUDIO-01", "G4-STUDIO-02"],
    sections: [
      {
        heading: "From enquiry to files",
        paragraphs: [
          "Enquire, talk it through, choose a studio, record, then edit if the package includes an edit. Clips are in Gold and Platinum, or quoted. We deliver what the confirmation email lists.",
        ],
        bullets: [
          "Enquiry",
          "A conversation about the show",
          "Choose Studio 1 or Studio 2",
          "Record",
          "Edit, when the package includes it",
          "Clips, when the package includes them or you ask for a quote",
          "Delivery",
        ],
      },
    ],
  },
];

export function getService(id: ServiceId): ServiceRecord {
  const service = services.find((item) => item.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}
