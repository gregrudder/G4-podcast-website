/**
 * Single source of truth for public business facts.
 * Null fields and anything tagged NEEDS CONFIRMATION FROM GREG must not be
 * rendered as if they were confirmed. See TODO.md.
 */

export const NEEDS_CONFIRMATION = "NEEDS CONFIRMATION FROM GREG" as const;

export const business = {
  legalName: "G4 Marketing Ltd",
  tradingName: "G4 Podcast Studio & Marketing",
  shortName: "G4",
  domain: "g4podcast.net",
  /**
   * www is the primary host recommended in the discovery report.
   * Apex redirects to www. Confirm with Greg before DNS cutover.
   */
  siteUrl: "https://www.g4podcast.net",
  email: "info@g4-marketing.net",
  locale: "en-GB",
  /** Display is UK national format. `href` is E.164 so `tel:` does not dial a leading 0. */
  phone: {
    display: "07925 707766",
    href: "tel:+447925707766",
    e164: "+447925707766",
  },
  whatsapp: {
    href: "https://wa.me/447925707766",
    label: "WhatsApp us",
  },
  address: {
    streetAddress: null as string | null,
    streetAddressStatus: NEEDS_CONFIRMATION,
    postcode: null as string | null,
    postcodeStatus: NEEDS_CONFIRMATION,
    locality: "Wishaw",
    region: "North Lanarkshire",
    country: "Scotland",
    countryCode: "GB",
  },
  openingHours: null as string | null,
  openingHoursStatus: NEEDS_CONFIRMATION,
  companyNumber: null as string | null,
  companyNumberStatus: NEEDS_CONFIRMATION,
  vatNumber: null as string | null,
  vatNumberStatus: NEEDS_CONFIRMATION,
  parking: "Free parking on site",
  studioCount: 2,
  onLocationRecording: true,
  capacity: null as string | null,
  capacityStatus: NEEDS_CONFIRMATION,
  accessibility: null as string | null,
  accessibilityStatus: NEEDS_CONFIRMATION,
  studioDifferences: null as string | null,
  studioDifferencesStatus: NEEDS_CONFIRMATION,
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
    tiktok: null as string | null,
    linkedin: null as string | null,
    status: NEEDS_CONFIRMATION,
  },
  googleBusinessProfileUrl: null as string | null,
  googleBusinessProfileStatus: NEEDS_CONFIRMATION,
  /** ISO date used for sitemap lastmod on non-MDX pages. */
  contentUpdated: "2026-10-11",
  copyrightYear: 2026,
} as const;

export const equipment = [
  "Sony ZV-E10 cameras",
  "RØDECaster Pro II",
  "RØDE wireless microphones",
  "Professional podcast microphones",
] as const;

export const facilities = [
  "Multi-camera recording",
  "Professional lighting",
  "Couch set",
  "Desk set",
  "A TV that can show client branding",
  "Free parking on site",
] as const;
