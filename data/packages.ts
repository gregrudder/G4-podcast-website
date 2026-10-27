/**
 * Podcast studio rates. Change prices and inclusions here only.
 * Pages, FAQs and schema read this file.
 * Social media management is not priced here. It is quoted case by case.
 */

export type StudioPackageId = "bronze" | "silver" | "gold" | "platinum";

export type StudioPackage = {
  id: StudioPackageId;
  name: string;
  /** Pounds sterling per hour, excluding VAT. */
  hourlyRateExVat: number;
  inclusions: readonly string[];
};

/** Published revision fee. The rate card does not say whether this £5 excludes VAT. */
export const extraRevisionFee = 5;

export const studioPackages: readonly StudioPackage[] = [
  {
    id: "bronze",
    name: "Bronze",
    hourlyRateExVat: 40,
    inclusions: [
      "Studio set up with 3 cameras",
      "Raw audio and video files",
      "No producer sits in on the recording",
      "Use your own SD cards",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    hourlyRateExVat: 70,
    inclusions: [
      "Producer provided for the recording session",
      "Complete edited podcast with 1 revision (multiple edits per revision allowed)",
      "Additional edits after that revision: £5 per revision",
      "Additional cost to receive each individual video file with synced audio",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    hourlyRateExVat: 90,
    inclusions: [
      "Producer who will fact check and bring up on-screen images and videos during the podcast",
      "Complete edited podcast with 2 revisions",
      "Additional edits after those revisions: £5 per revision",
      "Additional cost for individual synced video files",
      "1 basic clip, TikTok or Reel of your choice",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    hourlyRateExVat: 130,
    inclusions: [
      "Everything in Gold",
      "4 revisions (£5 per revision after that)",
      "3 clips, Reels or TikToks of your choice",
      "A YouTube thumbnail",
    ],
  },
];

export const socialPricing = {
  model: "consultation",
  label: "Request a Quote",
  cta: "Discuss Social Media Management",
  note: "Social media management is quoted case by case. There is no set package price.",
} as const;

export const remoteEditingPricing = {
  model: "quote",
  label: "Quoted per job",
} as const;

export const onLocationPricing = {
  model: "quote",
  label: "Quoted per job",
} as const;

export function formatPounds(amount: number): string {
  return `£${amount}`;
}

export function lowestStudioRate(): number {
  return studioPackages.reduce(
    (lowest, tier) => Math.min(lowest, tier.hourlyRateExVat),
    studioPackages[0].hourlyRateExVat,
  );
}

export function fromHourlyLabel(): string {
  return `From ${formatPounds(lowestStudioRate())} an hour + VAT`;
}

export function studioRateList(): string {
  return studioPackages
    .map((tier) => `${tier.name} ${formatPounds(tier.hourlyRateExVat)}`)
    .join(", ");
}
