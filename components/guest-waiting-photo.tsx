import Image from "next/image";

export const guestWaitingAlt =
  "Guest waiting area at G4 Podcast Studio in Wishaw, with branded cushions on white sofas";

export function GuestWaitingPhoto({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <Image
        src="/images/g4-podcast-studio-wishaw-guest-waiting-area.jpg"
        alt={guestWaitingAlt}
        width={2400}
        height={1600}
        sizes="(min-width: 48rem) 48rem, 100vw"
        className="h-auto w-full border border-line"
      />
      <figcaption className="mt-3 text-sm text-muted">
        Guest waiting area at the Wishaw studio.
      </figcaption>
    </figure>
  );
}
