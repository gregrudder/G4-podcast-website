import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("start-a-podcast");

export default function Page() {
  return <ServiceRoute id="start-a-podcast" />;
}
