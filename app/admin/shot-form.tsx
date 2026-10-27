"use client";

import { useActionState } from "react";
import { type AdminState } from "@/app/admin/actions";
import { primaryButtonClass } from "@/components/button-styles";
import type { Shot } from "@/data/shot-list";

const initial: AdminState = {};

export function ShotForm({
  action,
  shots,
}: {
  action: (state: AdminState, formData: FormData) => Promise<AdminState>;
  shots: readonly Shot[];
}) {
  const [state, formAction, pending] = useActionState(action, initial);
  return (
    <form action={formAction} className="mt-8">
      {state.message ? <p className="mb-4 text-sm text-ink">{state.message}</p> : null}
      {state.download ? (
        <a
          className="mb-4 inline-flex text-sm text-ink underline"
          href={`data:application/json,${encodeURIComponent(state.download)}`}
          download="shot-status.json"
        >
          Download shot-status.json
        </a>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-muted">
              <th className="py-2 pr-3">ID</th>
              <th className="py-2 pr-3">Section</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2">Shoot</th>
            </tr>
          </thead>
          <tbody>
            {shots.map((shot) => (
              <tr key={shot.id} className="border-b border-line align-top">
                <th className="py-3 pr-3 font-medium text-ink">{shot.id}</th>
                <td className="py-3 pr-3 text-muted">{shot.section}</td>
                <td className="py-3 pr-3">
                  <label className="sr-only" htmlFor={shot.id}>
                    Status for {shot.id}
                  </label>
                  <select
                    id={shot.id}
                    name={shot.id}
                    defaultValue={shot.status}
                    className="border border-line bg-raised px-2 py-2 text-ink"
                  >
                    <option value="awaiting">Awaiting</option>
                    <option value="uploaded">Uploaded</option>
                    <option value="published">Published</option>
                  </select>
                </td>
                <td className="py-3 text-muted">{shot.shoot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="submit" className={`${primaryButtonClass} mt-6`} disabled={pending}>
        {pending ? "Saving…" : "Save statuses"}
      </button>
    </form>
  );
}
