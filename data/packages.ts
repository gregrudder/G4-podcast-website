/**
 * Studio rates and how other services are priced.
 * Change prices here only. Pages, FAQs and schema read this file.
 * Inclusions are intentionally empty until Greg confirms them.
 */

export const NEEDS_CONFIRMATION = "NEEDS CONFIRMATION FROM GREG" as const;

export type StudioPackageId = "bronze" | "silver" | "gold" | "platinum";

export type StudioPackage = {
  id: StudioPackageId;
  name: string;
  /** Pounds sterling per hour, excluding VAT. */
  hourlyRateExVat: number;
  inclusions: null;
  inclusionsStatus: typeof NEEDS_CONFIRMATION;
};

export const studioPackages: readonly StudioPackage[] = [
  {
    id: "bronze",
    name: "Bronze",
    hourlyRateExVat: 40,
    inclusions: null,
    inclusionsStatus: NEEDS_CONFIRMATION,
  },
  {
    id: "silver",
    name: "Silver",
    hourlyRateExVat: 70,
    inclusions: null,
    inclusionsStatus: NEEDS_CONFIRMATION,
  },
  {
    id: "gold",
    name: "Gold",
    hourlyRateExVat: 90,
    inclusions: null,
    inclusionsStatus: NEEDS_CONFIRMATION,
  },
  {
    id: "platinum",
    name: "Platinum",
    hourlyRateExVat: 130,
    inclusions: null,
    inclusionsStatus: NEEDS_CONFIRMATION,
  },
];

export const editingPricing = {
  model: "quote",
  label: "Quoted per job",
} as const;

export const shortFormPricing = {
  model: "quote",
  label: "Quoted per job",
} as const;

export const socialPricing = {
  model: "consultation",
  label: "No fixed price",
  cta: "Book a consultation",
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
