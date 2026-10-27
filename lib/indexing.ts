/** True only on a Vercel production deployment. Preview and local builds stay noindex. */
export function allowIndexing(): boolean {
  return process.env.VERCEL_ENV === "production";
}
