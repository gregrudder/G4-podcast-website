import { business } from "@/config/business";
import { studioPackages } from "@/data/packages";
import type { Faq } from "@/data/faqs";

export function absoluteUrl(path: string): string {
  return new URL(path, business.siteUrl).toString();
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${business.siteUrl}/#organization`,
    name: business.tradingName,
    legalName: business.legalName,
    url: business.siteUrl,
    email: business.email,
  };
}

export function localBusinessNode() {
  return {
    "@type": "LocalBusiness",
    "@id": `${business.siteUrl}/#localbusiness`,
    name: business.tradingName,
    url: business.siteUrl,
    email: business.email,
    image: absoluteUrl(
      "/og?title=Podcast%20and%20video%20studios%20in%20Wishaw",
    ),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.countryCode,
    },
    parentOrganization: { "@id": `${business.siteUrl}/#organization` },
    areaServed: [
      "Wishaw",
      "North Lanarkshire",
      "Glasgow",
      "Lanarkshire",
      "Scotland",
    ],
  };
}

export function breadcrumbNode(items: readonly { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqNode(items: readonly Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function studioOfferNodes() {
  return studioPackages.map((tier) => ({
    "@type": "Offer",
    name: `${tier.name} studio hour`,
    price: String(tier.hourlyRateExVat),
    priceCurrency: "GBP",
    url: absoluteUrl("/pricing"),
    description: `${tier.name} studio rate, ${tier.hourlyRateExVat} pounds an hour, excluding VAT. What the hour includes is confirmed in writing when you book.`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(tier.hourlyRateExVat),
      priceCurrency: "GBP",
      unitText: "HOUR",
      valueAddedTaxIncluded: false,
    },
  }));
}

export function serviceNode(input: {
  name: string;
  description: string;
  path: string;
  offers?: readonly object[];
}) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": `${business.siteUrl}/#organization` },
    areaServed: [
      "Wishaw",
      "North Lanarkshire",
      "Glasgow",
      "Lanarkshire",
      "Scotland",
    ],
    ...(input.offers ? { offers: input.offers } : {}),
  };
}

export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
