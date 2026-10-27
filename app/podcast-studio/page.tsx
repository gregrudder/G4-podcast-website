import { ServiceRoute, serviceMetadata } from "@/components/service-route";
import { Studio1Gallery } from "@/components/studio-1-gallery";
import { StudioSpecs } from "@/components/studio-specs";

export const metadata = serviceMetadata("podcast-studio");

export default function PodcastStudioPage() {
  return (
    <ServiceRoute id="podcast-studio">
      <Studio1Gallery />
      <StudioSpecs />
    </ServiceRoute>
  );
}
