const sources = {
  monogram: "/brand/g4-monogram.svg",
  "monogram-dark": "/brand/g4-monogram-dark.svg",
  "wordmark-dark": "/brand/g4-wordmark-dark.svg",
  "lockup-dark": "/brand/g4-lockup-dark.svg",
  "lockup-light": "/brand/g4-lockup-light.svg",
} as const;

export function Logo({
  variant,
  className,
  alt,
}: {
  variant: keyof typeof sources;
  className?: string;
  /** Pass "" when a parent link already names the business. */
  alt: string;
}) {
  return (
    // SVG lockups stay sharp at any size. The image optimizer is for photos.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={sources[variant]} alt={alt} className={className} />
  );
}
