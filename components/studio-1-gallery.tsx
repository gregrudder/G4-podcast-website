import { WorkPhoto } from "@/components/work-photo";
import { workBySlug } from "@/data/portfolio";

export function Studio1Gallery() {
  const show = workBySlug("relatively-blonde");
  if (!show) return null;
  return (
    <section>
      <h2 className="font-display text-4xl text-ink md:text-5xl">Studio 1 in use</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted">
        These photographs are from a Relatively Blonde recording in Studio 1. Jade and Lorri
        are named. One host is not named on this site.
      </p>
      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {show.images.map((image) => (
          <li key={image.src}>
            <WorkPhoto image={image} sizes="(min-width: 768px) 50vw, 100vw" />
          </li>
        ))}
      </ul>
    </section>
  );
}
