import type { EnquiryOptionId } from "@/data/enquiry-options";

export type CreateOption = {
  id: string;
  label: string;
  hint: string;
  href: string;
  intent: EnquiryOptionId;
};

export const createOptions: readonly CreateOption[] = [
  {
    id: "start",
    label: "I want to start a podcast",
    hint: "From the first recording to the edit.",
    href: "/start-a-podcast",
    intent: "start-podcast",
  },
  {
    id: "studio",
    label: "I need a professional recording studio",
    hint: "Two studios in Wishaw, with free parking.",
    href: "/podcast-studio",
    intent: "studio",
  },
  {
    id: "editing",
    label: "I already have a podcast and need editing",
    hint: "Send the files. We cut the episode.",
    href: "/remote-podcast-editing",
    intent: "editing",
  },
  {
    id: "clips",
    label: "I need short-form content",
    hint: "Clips, Reels and TikToks from the episode.",
    href: "/podcast-clips",
    intent: "clips",
  },
  {
    id: "social",
    label: "I need someone to manage our social media",
    hint: "Quoted case by case. No set price.",
    href: "/social-media-management",
    intent: "social",
  },
  {
    id: "shoot",
    label: "I need a one-off content shoot",
    hint: "One session, then the pictures you can post.",
    href: "/content-shoots",
    intent: "content-shoot",
  },
  {
    id: "event",
    label: "I need content from an event",
    hint: "Social-first coverage. Not a livestream.",
    href: "/event-content",
    intent: "event",
  },
  {
    id: "location",
    label: "I need a podcast recorded at my location",
    hint: "We bring the recording to you.",
    href: "/on-location",
    intent: "on-location",
  },
];
