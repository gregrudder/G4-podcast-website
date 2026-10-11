import { business } from "@/config/business";

export type Studio = {
  id: "studio-1" | "studio-2";
  name: string;
  anchor: "studio-1" | "studio-2";
  summary: string;
};

/**
 * Two studios are confirmed. Size, layout and which set lives in which room
 * are not. Do not invent differences here.
 */
export const studios: readonly Studio[] = [
  {
    id: "studio-1",
    name: "Studio 1",
    anchor: "studio-1",
    summary:
      "One of the two podcast studios in Wishaw. Which set is in this room, and how it differs from Studio 2, is confirmed when you book.",
  },
  {
    id: "studio-2",
    name: "Studio 2",
    anchor: "studio-2",
    summary:
      "The second podcast studio in Wishaw. Capacity and step-free access are not published yet.",
  },
];

export const sets = [
  {
    id: "couch",
    name: "Couch set",
    description:
      "A couch set for conversation shows. It is one of the two set types at the studios.",
  },
  {
    id: "desk",
    name: "Desk set",
    description:
      "A desk set for interviews and hosted shows. It is the other set type at the studios.",
  },
] as const;

export const studioNotes = {
  count: business.studioCount,
  differencesStatus: business.studioDifferencesStatus,
  capacityStatus: business.capacityStatus,
  accessibilityStatus: business.accessibilityStatus,
} as const;
