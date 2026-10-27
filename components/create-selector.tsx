import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { createOptions } from "@/data/create-options";

export function CreateSelector() {
  return (
    <Reveal stagger>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {createOptions.map((option, index) => (
          <li key={option.id} className="stagger-item">
            <Link
              href={option.href}
              className="lift-card group flex h-full min-h-44 flex-col justify-between border border-line bg-raised p-5"
            >
              <span className="text-xs font-medium tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-6 font-display text-2xl leading-tight text-ink">
                {option.label}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-muted">{option.hint}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
