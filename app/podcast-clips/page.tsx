import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("podcast-clips");

export default function Page() {
  return <ServiceRoute id="podcast-clips" />;
}
