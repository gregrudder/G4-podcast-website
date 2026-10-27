import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("event-content");

export default function Page() {
  return <ServiceRoute id="event-content" />;
}
