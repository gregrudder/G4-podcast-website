import Image from "next/image";

type StudioShot = {
  src: string;
  alt: string;
  caption: string;
};

export const studio2Hero = {
  src: "/images/g4-studio-2-wishaw-armchairs-fireplace.jpg",
  alt: "Studio 2 at G4 in Wishaw: two tan leather armchairs with boom-arm microphones, a black coffee table, and a slatted wood wall with an electric fireplace.",
  caption: "Studio 2 in Wishaw.",
} as const;

/** The wall TV in this frame is showing a client-logo placeholder. */
export const studio2LogoScreen = {
  src: "/images/g4-studio-2-wishaw-two-chairs-logo-screen.jpg",
  alt: "Studio 2 at G4 in Wishaw: two armchairs facing the camera, with the wall TV showing the words YOUR LOGO HERE.",
  caption: "Studio 2. The wall TV is showing a client logo.",
} as const;

const studio2Shots: readonly StudioShot[] = [
  {
    src: studio2Hero.src,
    alt: studio2Hero.alt,
    caption: "Two tan leather armchairs, boom-arm microphones, and an electric fireplace.",
  },
  {
    src: "/images/g4-studio-2-wishaw-leather-sofa-red-chair.jpg",
    alt: "Studio 2 at G4 in Wishaw: a tan leather sofa and a red velvet armchair, three boom-arm microphones, a wooden coffee table, and a fireplace.",
    caption: "Tan leather sofa, red velvet armchair, and three boom-arm microphones.",
  },
  {
    src: "/images/g4-studio-2-wishaw-sofa-tv-fireplace.jpg",
    alt: "Studio 2 at G4 in Wishaw: a leather sofa and a red chair with boom-arm microphones, and a wall TV above the fireplace.",
    caption: "Leather sofa and red chair, with a wall TV above the fireplace.",
  },
  {
    src: studio2LogoScreen.src,
    alt: studio2LogoScreen.alt,
    caption: studio2LogoScreen.caption,
  },
  {
    src: "/images/g4-studio-2-wishaw-mic-arms-detail.jpg",
    alt: "Close-up of boom-arm microphones over a Studio 2 set at G4 in Wishaw.",
    caption: "Boom-arm microphones over the set.",
  },
];

function StudioPhoto({
  shot,
  priority = false,
  sizes,
}: {
  shot: { src: string; alt: string };
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={2400}
      height={1600}
      sizes={sizes}
      priority={priority}
      className="h-auto w-full border border-line"
    />
  );
}

export function Studio2Hero({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <StudioPhoto
        shot={studio2Hero}
        priority
        sizes="(min-width: 72rem) 72rem, 100vw"
      />
      <figcaption className="mt-3 text-sm text-muted">{studio2Hero.caption}</figcaption>
    </figure>
  );
}

export function ClientLogoScreen({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <StudioPhoto
        shot={studio2LogoScreen}
        sizes="(min-width: 48rem) 36rem, 100vw"
      />
      <figcaption className="mt-3 text-sm text-muted">{studio2LogoScreen.caption}</figcaption>
    </figure>
  );
}

export function Studio2Gallery() {
  return (
    <div id="studio-2-setups">
      <h2 className="font-display text-3xl text-ink md:text-4xl">Studio 2 set-up options</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted">
        Studio 2 has more than one set-up. These are photographs of that room in Wishaw.
      </p>
      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {studio2Shots.map((shot) => (
          <li key={shot.src}>
            <figure>
              <StudioPhoto shot={shot} sizes="(min-width: 768px) 50vw, 100vw" />
              <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">Set-ups for two or three people shown.</p>
    </div>
  );
}
