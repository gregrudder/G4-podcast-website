import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("social-media-management");

export default function Page() {
  return <ServiceRoute id="social-media-management" />;
}
