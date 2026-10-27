import { ServiceRoute, serviceMetadata } from "@/components/service-route";

export const metadata = serviceMetadata("content-shoots");

export default function Page() {
  return <ServiceRoute id="content-shoots" />;
}
