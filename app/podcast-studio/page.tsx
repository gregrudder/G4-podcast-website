import type { Metadata } from "next";
import { ServiceView } from "@/components/service-view";
import { StudioSpecs } from "@/components/studio-specs";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/metadata";

const service = getService("podcast-studio");

export const metadata: Metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
});

export default function PodcastStudioPage() {
  return (
    <ServiceView service={service}>
      <StudioSpecs />
    </ServiceView>
  );
}
