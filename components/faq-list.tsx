import { JsonLd } from "@/components/json-ld";
import { getFaqs } from "@/data/faqs";
import { faqNode, graph } from "@/lib/schema";

export function FaqList({
  ids,
  heading = "Questions",
  includeSchema = true,
}: {
  ids: readonly string[];
  heading?: string;
  includeSchema?: boolean;
}) {
  const items = getFaqs(ids);
  return (
    <section aria-labelledby="faq-heading">
      {includeSchema ? <JsonLd data={graph(faqNode(items))} /> : null}
      <h2 id="faq-heading" className="font-display text-4xl text-ink md:text-5xl">
        {heading}
      </h2>
      <div className="mt-8 border-t border-line">
        {items.map((item) => (
          <div key={item.id} className="border-b border-line py-6">
            <h3 className="text-lg font-medium text-ink">{item.question}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
