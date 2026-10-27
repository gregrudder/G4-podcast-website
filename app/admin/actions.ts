"use server";

import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";
import {
  adminConfigured,
  clearAdminCookie,
  isAdmin,
  passwordsMatch,
  setAdminCookie,
} from "@/lib/admin-auth";
import { shotList, type ShotStatus } from "@/data/shot-list";

export type AdminState = { message?: string; download?: string };

function isStatus(value: string): value is ShotStatus {
  return value === "awaiting" || value === "uploaded" || value === "published";
}

export async function loginAction(
  _previous: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!adminConfigured()) {
    return {
      message:
        "Set ADMIN_PASSWORD in the environment (at least 8 characters) before this page will sign anyone in.",
    };
  }
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!passwordsMatch(password, expected)) {
    return { message: "That password is not right." };
  }
  await setAdminCookie();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await clearAdminCookie();
  redirect("/admin");
}

export async function saveShotStatus(
  _previous: AdminState,
  formData: FormData,
): Promise<AdminState> {
  if (!(await isAdmin())) {
    return { message: "Sign in again." };
  }
  const shots: Record<string, ShotStatus> = {};
  for (const shot of shotList) {
    const value = String(formData.get(shot.id) ?? "");
    if (isStatus(value)) shots[shot.id] = value;
  }
  const payload = JSON.stringify({ shots }, null, 2);
  const file = path.join(process.cwd(), "content/shot-status.json");
  try {
    fs.writeFileSync(file, `${payload}\n`);
    return {
      message:
        "Saved content/shot-status.json. Commit that file and redeploy for the public site to pick it up. A Vercel write does not persist.",
    };
  } catch {
    return {
      message:
        "This server cannot write the file. Download the JSON and commit it as content/shot-status.json.",
      download: payload,
    };
  }
}
