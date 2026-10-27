import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "g4_admin";

export function adminConfigured(): boolean {
  return (process.env.ADMIN_PASSWORD ?? "").length >= 8;
}

function sign(secret: string): string {
  return createHmac("sha256", "g4-admin-session-v1").update(secret).digest("hex");
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const jar = await cookies();
  const value = jar.get(COOKIE)?.value ?? "";
  const expected = sign(process.env.ADMIN_PASSWORD ?? "");
  if (value.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(value), Buffer.from(expected));
}

export async function setAdminCookie(): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE, sign(process.env.ADMIN_PASSWORD ?? ""), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });
}

export async function clearAdminCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export function passwordsMatch(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}
