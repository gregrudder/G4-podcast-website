/** Checkbox options on the enquiry form. Ids are validated on the server. */

export const enquiryOptions = [
  { id: "start-podcast", label: "Start a podcast" },
  { id: "studio", label: "Studio hire or a visit" },
  { id: "production", label: "Full podcast production" },
  { id: "editing", label: "Remote podcast editing" },
  { id: "clips", label: "Short-form clips" },
  { id: "social", label: "Social media management" },
  { id: "content-shoot", label: "One-off content shoot" },
  { id: "event", label: "Event content" },
  { id: "on-location", label: "On-location recording" },
  { id: "business", label: "Business video and photography" },
  { id: "quote", label: "Request a quote" },
] as const;

export type EnquiryOptionId = (typeof enquiryOptions)[number]["id"];

const aliases: Record<string, EnquiryOptionId> = {
  "studio-recording": "studio",
  "video-podcast": "studio",
  "video-editing": "editing",
  "short-form": "clips",
  repurposing: "clips",
  creator: "content-shoot",
  "start-project": "quote",
};

export function isEnquiryOptionId(value: string): value is EnquiryOptionId {
  return enquiryOptions.some((option) => option.id === value);
}

export function resolveEnquiryIntent(value: string | null | undefined): EnquiryOptionId | null {
  if (!value) return null;
  if (isEnquiryOptionId(value)) return value;
  return aliases[value] ?? null;
}

export function enquiryLabel(id: EnquiryOptionId): string {
  return enquiryOptions.find((option) => option.id === id)?.label ?? id;
}
