import Link from "next/link";
import { extraRevisionFee, formatPounds, studioPackages } from "@/data/packages";

export function PricingTable() {
  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-2">
        {studioPackages.map((tier) => (
          <li key={tier.id} className="lift-card flex flex-col border border-line bg-raised p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Per hour, ex VAT</p>
            <h2 className="mt-3 font-display text-4xl text-ink">{tier.name}</h2>
            <p className="mt-2 font-display text-5xl text-ink">
              {formatPounds(tier.hourlyRateExVat)}
              <span className="ml-2 font-sans text-base text-muted">/ hour + VAT</span>
            </p>
            <ul className="mt-6 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {tier.inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Further revisions, after the rounds listed above, are {formatPounds(extraRevisionFee)}{" "}
        per revision. Where a package says individual synced video files have an additional
        cost, that amount is confirmed when you book.{" "}
        <Link href="/booking-terms" className="text-ink underline underline-offset-4">
          Booking terms
        </Link>
        .
      </p>
    </div>
  );
}
