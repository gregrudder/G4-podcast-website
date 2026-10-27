import Link from "next/link";
import { redirect } from "next/navigation";
import { saveShotStatus } from "@/app/admin/actions";
import { ShotForm } from "@/app/admin/shot-form";
import { Container } from "@/components/container";
import { isAdmin } from "@/lib/admin-auth";
import { getShots } from "@/lib/shots";

export default async function ShotListPage() {
  if (!(await isAdmin())) redirect("/admin");
  const shots = getShots();
  return (
    <Container className="py-16">
      <p>
        <Link href="/admin" className="text-sm text-ink underline underline-offset-4">
          Admin
        </Link>
      </p>
      <h1 className="mt-4 font-display text-5xl text-ink">Content shot list</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Status is Awaiting, Uploaded or Published. Saving writes content/shot-status.json
        when the disk allows it. Commit that file so the next build uses it. This page is
        not indexed.
      </p>
      <ShotForm action={saveShotStatus} shots={shots} />
    </Container>
  );
}
