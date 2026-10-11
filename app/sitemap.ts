import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { caseStudies } from "@/data/case-studies";
import { getGuides } from "@/lib/content";

const paths = [
  "/",
  "/podcast-studio",
  "/podcast-production",
  "/podcast-editing",
  "/short-form-content",
  "/business-podcasts",
  "/on-location-recording",
  "/pricing",
  "/work",
  "/about",
  "/faq",
  "/contact",
  "/guides",
  "/privacy",
  "/cookies",
  "/booking-terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = business.contentUpdated;
  const pages = paths.map((path) => ({
    url: new URL(path, business.siteUrl).toString(),
    lastModified: updated,
  }));
  const studies = caseStudies.map((study) => ({
    url: new URL(`/work/${study.slug}`, business.siteUrl).toString(),
    lastModified: updated,
  }));
  const guides = getGuides().map((guide) => ({
    url: new URL(`/guides/${guide.slug}`, business.siteUrl).toString(),
    lastModified: guide.published,
  }));
  return [...pages, ...studies, ...guides];
}
