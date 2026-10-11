import { formatPounds, studioPackages } from "@/data/packages";

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="rate-table w-full border-collapse text-left">
        <caption className="mb-4 text-left text-sm text-muted">
          Studio hire, priced by the hour and excluding VAT. What each package
          includes is not listed yet.
        </caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="py-3 pr-4 text-sm font-medium text-muted">
              Package
            </th>
            <th scope="col" className="py-3 pr-4 text-sm font-medium text-muted">
              Hourly rate, ex VAT
            </th>
            <th scope="col" className="py-3 text-sm font-medium text-muted">
              Included
            </th>
          </tr>
        </thead>
        <tbody>
          {studioPackages.map((tier) => (
            <tr key={tier.id} className="border-b border-line">
              <th scope="row" className="py-5 pr-4 font-display text-3xl text-ink">
                {tier.name}
              </th>
              <td
                data-label="Hourly rate, ex VAT"
                className="py-5 pr-4 text-lg text-ink"
              >
                {formatPounds(tier.hourlyRateExVat)}
                <span className="ml-2 text-sm text-muted">/ hour + VAT</span>
              </td>
              <td data-label="Included" className="py-5 text-sm leading-relaxed text-muted">
                Confirmed in writing when you book.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
