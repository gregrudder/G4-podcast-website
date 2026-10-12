import { equipment, facilities } from "@/config/business";
import { SetDiagram } from "@/components/set-diagram";
import { Studio2Gallery } from "@/components/studio-2-photos";
import { sets, studios } from "@/data/studios";

export function StudioSpecs() {
  return (
    <>
      <section className="max-w-none">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Studio 1 and Studio 2</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Both rooms are podcast studios in Wishaw. Couch and desk sets are
          available across the site. Which set is in which room, how many
          people a room holds, and whether access is step-free are confirmed
          when you book. Those details are not published here yet.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {studios.map((studio) => (
            <article key={studio.id} id={studio.anchor} className="border border-line p-5">
              <h3 className="font-display text-3xl text-ink">{studio.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{studio.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Studio2Gallery />
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          The drawings below are diagrams of the couch and desk sets, not photographs of those layouts.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {sets.map((set) => (
            <div key={set.id}>
              <SetDiagram variant={set.id} />
              <p className="mt-3 text-sm leading-relaxed text-muted">{set.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-display text-3xl text-ink md:text-4xl">Kit and facilities</h2>
        <ul className="mt-6 max-w-3xl border-t border-line">
          {[...equipment, ...facilities].map((item) => (
            <li key={item} className="border-b border-line py-3 text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
