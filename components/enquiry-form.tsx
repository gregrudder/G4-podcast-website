"use client";

import { useActionState, useEffect, useRef, useSyncExternalStore } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { primaryButtonClass } from "@/components/button-styles";
import { enquiryOptions } from "@/data/enquiry-options";
import { track } from "@/lib/track";

const initialState: EnquiryState = { status: "idle" };

function readIntent(): string | null {
  const intent = new URLSearchParams(window.location.search).get("intent");
  if (intent && enquiryOptions.some((option) => option.id === intent)) {
    return intent;
  }
  return null;
}

function emptySubscribe() {
  return () => {};
}

function serverIntent(): string | null {
  return null;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initialState);
  const preselected = useSyncExternalStore(emptySubscribe, readIntent, serverIntent);
  const tracked = useRef(false);

  useEffect(() => {
    if (state.status === "sent" && state.track && !tracked.current) {
      tracked.current = true;
      track("form_submit");
    }
  }, [state]);

  if (state.status === "sent") {
    return (
      <p role="status" className="border border-line bg-raised p-6 text-ink">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="space-y-6" aria-busy={pending} noValidate={false}>
      {state.status === "error" ? (
        <div role="alert" className="border border-line p-4">
          <p className="font-medium text-ink">{state.message}</p>
          {state.fieldErrors ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-danger">
              {Object.entries(state.fieldErrors).map(([key, message]) =>
                message ? (
                  <li key={key}>
                    <a href={`#${key}`} className="underline underline-offset-4">
                      {message}
                    </a>
                  </li>
                ) : null,
              )}
            </ul>
          ) : null}
        </div>
      ) : null}

      {state.status === "fallback" ? (
        <div role="status" className="border border-line bg-raised p-4">
          <p className="text-ink">{state.message}</p>
          {state.mailto ? (
            <p className="mt-3">
              <a
                className="text-ink underline underline-offset-4"
                href={state.mailto}
                onClick={() => track("mailto_click")}
              >
                Email info@g4-marketing.net with these details
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          aria-invalid={state.fieldErrors?.name ? true : undefined}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          className="mt-2 w-full border border-line bg-raised px-3 py-3 text-ink"
        />
        <FieldError id="name-error" message={state.fieldErrors?.name} />
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-ink">
          Business or podcast
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          required
          maxLength={160}
          aria-invalid={state.fieldErrors?.organisation ? true : undefined}
          aria-describedby={
            state.fieldErrors?.organisation ? "organisation-error" : "organisation-hint"
          }
          className="mt-2 w-full border border-line bg-raised px-3 py-3 text-ink"
        />
        <p id="organisation-hint" className="mt-2 text-sm text-muted">
          The show, the business, or your own name if you do not have one yet.
        </p>
        <FieldError id="organisation-error" message={state.fieldErrors?.organisation} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          aria-invalid={state.fieldErrors?.email ? true : undefined}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          className="mt-2 w-full border border-line bg-raised px-3 py-3 text-ink"
        />
        <FieldError id="email-error" message={state.fieldErrors?.email} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
          aria-invalid={state.fieldErrors?.phone ? true : undefined}
          aria-describedby={state.fieldErrors?.phone ? "phone-error" : undefined}
          className="mt-2 w-full border border-line bg-raised px-3 py-3 text-ink"
        />
        <FieldError id="phone-error" message={state.fieldErrors?.phone} />
      </div>

      <fieldset
        id="interests"
        aria-describedby={state.fieldErrors?.interests ? "interest-error" : undefined}
      >
        <legend className="text-sm font-medium text-ink">
          What you are looking for
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {enquiryOptions.map((option) => (
            <label
              key={`${option.id}-${preselected ?? "none"}`}
              className="flex min-h-11 items-center gap-3 border border-line px-3 py-2 text-sm text-ink"
            >
              <input
                type="checkbox"
                name="interest"
                value={option.id}
                defaultChecked={preselected === option.id}
                className="size-4 accent-mark"
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id="interest-error" message={state.fieldErrors?.interests} />
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          aria-describedby={state.fieldErrors?.message ? "message-error" : "message-hint"}
          className="mt-2 w-full border border-line bg-raised px-3 py-3 text-ink"
        />
        <p id="message-hint" className="mt-2 text-sm text-muted">
          Dates, how many people, and whether you need an edit or clips.
        </p>
        <FieldError id="message-error" message={state.fieldErrors?.message} />
      </div>

      <button type="submit" className={primaryButtonClass} disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
