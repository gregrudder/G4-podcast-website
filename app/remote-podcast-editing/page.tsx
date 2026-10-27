import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("remote-podcast-editing");

export default function Page() {
  return <ServiceRoute id="remote-podcast-editing" />;
}
