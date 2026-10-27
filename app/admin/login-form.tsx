"use client";

import { useActionState } from "react";
import { loginAction, type AdminState } from "@/app/admin/actions";
import { primaryButtonClass } from "@/components/button-styles";

const initial: AdminState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initial);
  return (
    <form action={action} className="max-w-sm space-y-4">
      {state.message ? (
        <p role="alert" className="text-sm text-danger">
          {state.message}
        </p>
      ) : null}
      <label htmlFor="password" className="block text-sm text-ink">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="w-full border border-line bg-raised px-3 py-3 text-ink"
      />
      <button type="submit" className={primaryButtonClass} disabled={pending}>
        {pending ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}
