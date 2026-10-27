import { business } from "@/config/business";
import {
  extraRevisionFee,
  formatPounds,
  studioPackages,
  studioRateList,
} from "@/data/packages";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

const email = business.email;

const inclusionSummary = studioPackages
  .map(
    (tier) =>
      `${tier.name} (${formatPounds(tier.hourlyRateExVat)} an hour): ${tier.inclusions.join("; ")}.`,
  )
  .join(" ");

export const faqs: readonly Faq[] = [
  {
    id: "where",
    question: "Where is the studio?",
    answer: `The studios are in Wishaw, North Lanarkshire, Scotland. People come from Glasgow, Lanarkshire and further afield. The street address is not published on this website yet. Email ${email} and we will send directions.`,
  },
  {
    id: "parking",
    question: "Is there parking?",
    answer:
      "Yes. There is free parking on site. That is one reason teams drive out from Glasgow rather than using a city-centre room.",
  },
  {
    id: "studio-price",
    question: "How much does the studio cost?",
    answer: `Studio hire is hourly, plus VAT. The rates are ${studioRateList()}, all excluding VAT. What each hour includes is on the pricing page. Social media management has no set price.`,
  },
  {
    id: "inclusions",
    question: "What is included in Bronze, Silver, Gold and Platinum?",
    answer: `${inclusionSummary} Additional revisions after the included rounds are ${formatPounds(extraRevisionFee)} each. Where the card says individual synced video files have an additional cost, that amount is confirmed in the quote. Social media management is not one of these packages.`,
  },
  {
    id: "video",
    question: "Do you record video as well as audio?",
    answer:
      "Yes. The studios are set up for multi-camera video podcasts. The kit includes Sony ZV-E10 cameras, a RØDECaster Pro II, RØDE wireless microphones, professional podcast microphones and professional lighting. A TV in the studio can show your branding.",
  },
  {
    id: "editing",
    question: "Do you edit the episode?",
    answer:
      "Silver, Gold and Platinum include a complete edited podcast, with a set number of revisions. Bronze does not. If you recorded somewhere else, remote editing is quoted per job.",
  },
  {
    id: "clips",
    question: "Can you make short clips?",
    answer:
      "Yes. Gold includes 1 basic clip, TikTok or Reel of your choice. Platinum includes 3, and a YouTube thumbnail. Further clips are quoted. There is no separate clip package price on this site.",
  },
  {
    id: "social",
    question: "Do you manage social media accounts?",
    answer:
      "Yes. Social media management is quoted case by case. There is no set price. Book a consultation and we will say what the work covers and what it costs before anything starts. We do not promise followers, sales or a viral result.",
  },
  {
    id: "on-location",
    question: "Do you record outside the studio?",
    answer:
      "Yes. We record on location as well as in the two Wishaw studios, including rooms with an audience. That is a recording, not a livestream, and we do not sell standalone live production. Travel and the kit are quoted. The hourly studio card does not automatically apply off site.",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer: `Use the contact form, email ${email}, call ${business.phone.display}, or WhatsApp the same number. Tell us the show or business, what you need, and any dates you have in mind. We reply by email. A booking exists only when we confirm it in writing. The form does not take payment.`,
  },
  {
    id: "files",
    question: "When do I get the files, and who owns them?",
    answer:
      "Delivery, how long we keep files, and who owns the recording are written into the confirmation for that job. Those terms are not fixed on this website yet. Bronze includes the raw audio and video files. The booking terms page explains how a booking is agreed.",
  },
  {
    id: "hours",
    question: "What are your opening hours?",
    answer: `Opening hours are not published yet. Sessions are by arrangement. Email ${email} with the day you want and we will say if the studio is free.`,
  },
  {
    id: "visit",
    question: "Can I see the studio before I book?",
    answer:
      "Ask in your enquiry if you want to visit first. We will say whether a visit is possible. The street address is not on this site yet, and the rooms are used for sessions, so do not turn up unannounced.",
  },
  {
    id: "first-time",
    question: "I have not recorded a podcast before. Can I still book?",
    answer:
      "Yes. You do not need to bring microphones or cameras. On Bronze you do need your own SD cards. Bring the people, a running order, and a logo file if you want it on the TV. Say in the enquiry that it is your first session.",
  },
  {
    id: "vat",
    question: "Are the prices plus VAT?",
    answer:
      "The hourly studio rates exclude VAT. VAT is added on the bill. The VAT number is not published on this website yet. The £5 further-revision fee is listed on the rate card as £5 per revision.",
  },
  {
    id: "company",
    question: "Who runs the studio?",
    answer: `The legal entity is ${business.legalName}. It trades as ${business.tradingName}. The website is ${business.domain}. Email ${email}.`,
  },
];

export function getFaqs(ids: readonly string[]): Faq[] {
  return ids.map((id) => {
    const faq = faqs.find((item) => item.id === id);
    if (!faq) throw new Error(`Unknown FAQ id: ${id}`);
    return faq;
  });
}

export const homeFaqIds = [
  "where",
  "parking",
  "studio-price",
  "inclusions",
  "editing",
  "booking",
] as const;
