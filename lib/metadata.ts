import type { Metadata } from "next";
import { business } from "@/config/business";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use for the homepage so the layout title template is not applied twice. */
  absolute?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: PageMetaInput): Metadata {
  const fullTitle = absolute
    ? title
    : `${title} | ${business.tradingName}`;
  const image = `/og?title=${encodeURIComponent(fullTitle)}`;
  const alt = `${fullTitle}. Podcast and video studios in Wishaw.`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: "en_GB",
      siteName: business.tradingName,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image, alt }],
    },
  };
}
