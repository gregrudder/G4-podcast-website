import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("podcast-production");

export default function Page() {
  return <ServiceRoute id="podcast-production" />;
}
