import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("business-video");

export default function Page() {
  return <ServiceRoute id="business-video" />;
}
