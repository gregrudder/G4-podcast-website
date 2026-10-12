import type { Metadata } from "next";
import { GuestWaitingPhoto } from "@/components/guest-waiting-photo";
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
      <section className="max-w-3xl">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Arriving</h2>
        <p className="mt-4 leading-relaxed text-muted">
          There is a guest waiting area at the studios. Free parking is on site.
        </p>
        <GuestWaitingPhoto className="mt-6" />
      </section>
      <StudioSpecs />
    </ServiceView>
  );
}
