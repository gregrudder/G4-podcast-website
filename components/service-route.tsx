import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ServiceView } from "@/components/service-view";
import { getService, type ServiceId } from "@/data/services";
import { pageMeta } from "@/lib/metadata";

export function serviceMetadata(id: ServiceId): Metadata {
  const service = getService(id);
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
  });
}

export function ServiceRoute({
  id,
  children,
}: {
  id: ServiceId;
  children?: ReactNode;
}) {
  return <ServiceView service={getService(id)}>{children}</ServiceView>;
}
