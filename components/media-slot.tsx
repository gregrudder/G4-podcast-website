import Image from "next/image";
import type { Shot } from "@/data/shot-list";
import { getShots } from "@/lib/shots";

export function MediaSlot({
  id,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  id: string;
  priority?: boolean;
  sizes?: string;
}) {
  const shot = getShots().find((item) => item.id === id);
  if (!shot) return null;
  if (shot.status === "published" && shot.src && shot.alt && shot.width && shot.height) {
    return (
      <figure>
        <div className="media-frame overflow-hidden border border-line bg-raised">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
        {shot.caption ? (
          <figcaption className="mt-3 text-sm text-muted">
            {shot.caption} <span className="text-ink">{shot.id}</span>
          </figcaption>
        ) : null}
      </figure>
    );
  }
  return <AwaitingShot shot={shot} />;
}

export function AwaitingShot({ shot }: { shot: Shot }) {
  return (
    <figure className="border border-line bg-raised">
      <div className="flex min-h-48 flex-col justify-between gap-6 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {shot.id} · {shot.status}
        </p>
        <div>
          <p className="font-display text-3xl text-ink">{shot.section}</p>
          <p className="mt-2 text-sm text-muted">
            {shot.kind} · {shot.aspect}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted">{shot.shoot}</p>
      </div>
      <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
        {shot.framing}
      </figcaption>
    </figure>
  );
}
