import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("on-location");

export default function Page() {
  return <ServiceRoute id="on-location" />;
}
