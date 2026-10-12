import type { Metadata } from "next";
import { ServiceView } from "@/components/service-view";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/metadata";

const service = getService("podcast-production");

export const metadata: Metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
});

export default function PodcastProductionPage() {
  return <ServiceView service={service} />;
}
