"use server";

import { Resend } from "resend";
import { z } from "zod";
import { business } from "@/config/business";
import {
  enquiryOptions,
  isEnquiryOptionId,
  resolveEnquiryIntent,
} from "@/data/enquiry-options";

export type EnquiryState = {
  status: "idle" | "error" | "sent" | "fallback";
  message?: string;
  fieldErrors?: Partial<
    Record<"name" | "organisation" | "email" | "phone" | "interests" | "message", string>
  >;
  mailto?: string;
  track?: boolean;
};

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120),
  organisation: z
    .string()
    .trim()
    .min(2, "Enter the business or podcast name.")
    .max(160),
  email: z.email("Enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine(
      (value) => value.length === 0 || /^[0-9+().\s-]{7,40}$/.test(value),
      "Enter a phone number, or leave this blank.",
    ),
  interests: z
    .array(z.string())
    .refine(
      (values) => values.filter(isEnquiryOptionId).length > 0,
      "Choose at least one option.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Add a short note about what you need.")
    .max(5000),
});

function fallbackMessage(body: string): EnquiryState {
  const subject = "Enquiry for G4 Podcast Studio & Marketing";
  const mailto = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return {
    status: "fallback",
    track: false,
    mailto,
    message: `We could not send this from the website. Email ${business.email} and include what you are looking for. The link below opens an email with your details filled in.`,
  };
}

function fieldErrors(error: z.ZodError): EnquiryState["fieldErrors"] {
  const errors: EnquiryState["fieldErrors"] = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in (errors ?? {}))) {
      errors[key as keyof NonNullable<EnquiryState["fieldErrors"]>] = issue.message;
    }
  }
  return errors;
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 160);
}

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const honeypot = String(formData.get("company_website") ?? "").trim();
  if (honeypot) {
    return {
      status: "sent",
      track: false,
      message: `Thanks. If we need anything else we will reply by email.`,
    };
  }

  const parsed = schema.safeParse({
    name: String(formData.get("name") ?? ""),
    organisation: String(formData.get("organisation") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    interests: formData
      .getAll("interest")
      .map(String)
      .map((value) => resolveEnquiryIntent(value) ?? value),
    message: String(formData.get("message") ?? ""),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the form and try again.",
      fieldErrors: fieldErrors(parsed.error),
    };
  }

  const { name, organisation, email, phone, message } = parsed.data;
  const interests = parsed.data.interests.filter(isEnquiryOptionId);
  const interestLabels = interests
    .map((id) => enquiryOptions.find((option) => option.id === id)?.label ?? id)
    .join(", ");

  const text = [
    `Name: ${name}`,
    `Business or podcast: ${organisation}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not given"}`,
    `Looking for: ${interestLabels}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL || business.email;

  if (!apiKey || !from) {
    return fallbackMessage(text);
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website enquiry: ${singleLine(name)}`,
      text,
    });

    if (result.error) {
      return fallbackMessage(text);
    }
  } catch {
    return fallbackMessage(text);
  }

  return {
    status: "sent",
    track: true,
    message: `Thanks. We have your enquiry and will reply to ${email}.`,
  };
}
