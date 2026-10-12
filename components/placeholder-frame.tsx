export function PlaceholderFrame({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <figure className="border border-line bg-raised">
      <div className="flex min-h-56 flex-col justify-between border-l-8 border-l-mark p-6 md:min-h-72">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {kicker}
        </p>
        <p className="font-display text-4xl leading-tight text-ink md:text-5xl">
          {title}
        </p>
        <p className="text-sm text-muted">No photograph</p>
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
        Placeholder graphic for {title}. No stock photograph of people is used.
      </figcaption>
    </figure>
  );
}
