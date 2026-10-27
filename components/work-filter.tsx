"use client";

import { useState } from "react";
import Link from "next/link";
import { WorkPhoto } from "@/components/work-photo";
import {
  emptyWorkSlots,
  workCategories,
  workItems,
  type WorkCategory,
} from "@/data/portfolio";

type Filter = "All" | WorkCategory;

export function WorkFilter() {
  const [filter, setFilter] = useState<Filter>("All");
  const items =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.categories.includes(filter));
  const empty =
    filter === "All"
      ? []
      : emptyWorkSlots.filter(
          (slot) =>
            slot.category === filter &&
            !workItems.some((item) => item.categories.includes(slot.category)),
        );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter work">
        {(["All", ...workCategories] as const).map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category)}
              className={`min-h-11 border px-3 text-sm ${
                selected
                  ? "border-brand bg-brand text-white"
                  : "border-line text-ink hover:border-brand"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {items.map((item) => {
          const cover = item.images[0];
          const body = (
            <>
              {cover ? (
                <WorkPhoto image={cover} sizes="(min-width: 768px) 50vw, 100vw" />
              ) : (
                <div className="border border-line bg-raised p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">
                    {item.categories.join(", ")}
                  </p>
                  <p className="mt-4 font-display text-3xl text-ink">{item.title}</p>
                  <p className="mt-3 text-sm text-muted">No photograph on this page yet.</p>
                </div>
              )}
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                {item.categories.join(" · ")}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
            </>
          );
          return (
            <li key={item.id} className="lift-card border border-transparent">
              {item.slug ? (
                <Link href={`/our-work/${item.slug}`} className="block">
                  {body}
                </Link>
              ) : (
                body
              )}
            </li>
          );
        })}
        {empty.map((slot) => (
          <li key={slot.placeholderId} className="border border-line bg-raised p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              {slot.placeholderId} · awaiting
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink">{slot.category}</h2>
            <p className="mt-3 text-sm text-muted">{slot.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
