import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";
import { LoginForm } from "@/app/admin/login-form";
import { Container } from "@/components/container";
import { studioPackages, socialPricing, formatPounds } from "@/data/packages";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";

export default async function AdminPage() {
  const signedIn = await isAdmin();

  return (
    <Container className="py-16">
      <h1 className="font-display text-5xl text-ink">Admin</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Internal only. This page is noindex, and robots.txt disallows /admin. It is not a
        public CMS. Prices and copy live in the repo. Social media has no price field.
      </p>
      {!adminConfigured() ? (
        <p className="mt-8 max-w-xl border border-line p-4 text-sm text-muted">
          Set ADMIN_PASSWORD (at least 8 characters) in Vercel and in .env.local. Until
          then nobody can sign in, including with a blank password.
        </p>
      ) : null}
      {!signedIn ? (
        <div className="mt-8">
          <LoginForm />
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          <form action={logoutAction}>
            <button type="submit" className="text-sm text-ink underline underline-offset-4">
              Sign out
            </button>
          </form>
          <section>
            <h2 className="font-display text-3xl text-ink">Hourly packages</h2>
            <p className="mt-2 text-sm text-muted">
              Edit data/packages.ts and redeploy. These are the display values.
            </p>
            <ul className="mt-4 space-y-2 text-ink">
              {studioPackages.map((tier) => (
                <li key={tier.id}>
                  {tier.name}: {formatPounds(tier.hourlyRateExVat)} an hour + VAT
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Social media</h2>
            <p className="mt-2 text-muted">
              {socialPricing.note} Call to action: {socialPricing.cta}.
            </p>
          </section>
          <p>
            <Link href="/admin/shot-list" className="text-ink underline underline-offset-4">
              Content shot list
            </Link>
          </p>
        </div>
      )}
    </Container>
  );
}
