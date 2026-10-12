/** Checkbox options on the enquiry form. Ids are validated on the server. */

export const enquiryOptions = [
  { id: "studio-recording", label: "Studio recording" },
  { id: "video-podcast", label: "Video podcast / multi-camera" },
  { id: "production", label: "Podcast production" },
  { id: "editing", label: "Podcast editing" },
  { id: "video-editing", label: "Video editing" },
  { id: "short-form", label: "Short-form (TikTok, Reels, Shorts)" },
  { id: "repurposing", label: "Content repurposing" },
  { id: "business", label: "Business content" },
  { id: "creator", label: "Creator content" },
  { id: "on-location", label: "On-location recording" },
  { id: "social", label: "Social media management" },
] as const;

export type EnquiryOptionId = (typeof enquiryOptions)[number]["id"];

export function isEnquiryOptionId(value: string): value is EnquiryOptionId {
  return enquiryOptions.some((option) => option.id === value);
}
