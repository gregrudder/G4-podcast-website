import { business } from "@/config/business";
import { studioRateList } from "@/data/packages";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

const email = business.email;

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
    answer: `Studio time is charged by the hour, plus VAT. The rates are ${studioRateList()}, all excluding VAT. Editing, short-form clips and on-location work are quoted separately. The pricing page has the full table.`,
  },
  {
    id: "inclusions",
    question: "What is included in Bronze, Silver, Gold and Platinum?",
    answer:
      "The hourly rates are confirmed. The list of what each tier includes is not published yet, so we will not guess at cameras, a producer, revisions or clips. We confirm what your hour covers in writing before you book.",
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
      "Yes. Podcast editing and video editing are available. They are quoted per job, not taken from the hourly studio card. You can add an edit to a studio booking, or send files you recorded somewhere else.",
  },
  {
    id: "clips",
    question: "Can you make short clips?",
    answer:
      "Yes. We cut short-form video for TikTok, Instagram Reels and YouTube Shorts, and we repurpose longer recordings into those formats. The price is a quote. Tell us how many clips you need and roughly how long they should be.",
  },
  {
    id: "social",
    question: "Do you manage social media accounts?",
    answer:
      "Yes. Social media management is available and it does not have a fixed price. Book a consultation and we will say what the work covers and what it costs before anything starts.",
  },
  {
    id: "on-location",
    question: "Do you record outside the studio?",
    answer:
      "Yes. We record on location as well as in the two Wishaw studios. Travel, the minimum time and the kit for that job are confirmed when you enquire. There is no set call-out price on this website.",
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
      "Delivery, how long we keep files, and who owns the recording are written into the confirmation for that job. Those terms are not fixed on this website yet. The booking terms page explains how a booking is agreed.",
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
      "Yes. You do not need to bring microphones or cameras. Bring the people, a running order, and a logo file if you want it on the TV. Say in the enquiry that it is your first session and we will explain how the hour will run.",
  },
  {
    id: "vat",
    question: "Are the prices plus VAT?",
    answer:
      "Yes. The studio rates are hourly and exclude VAT. VAT is added on the bill. The VAT number is not published on this website yet.",
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
    if (!faq) {
      throw new Error(`Unknown FAQ id: ${id}`);
    }
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
