import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { allowIndexing } from "@/lib/indexing";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${business.siteUrl}/sitemap.xml`,
    host: business.siteUrl,
  };
}
