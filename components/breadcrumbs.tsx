import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbNode, graph } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(all))} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {all.map((item, index) => {
            const last = index === all.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="underline underline-offset-4">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
