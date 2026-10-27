import fs from "node:fs";
import path from "node:path";
import { shotList, type Shot, type ShotStatus } from "@/data/shot-list";

function isStatus(value: string): value is ShotStatus {
  return value === "awaiting" || value === "uploaded" || value === "published";
}

export function getShots(): Shot[] {
  const file = path.join(process.cwd(), "content/shot-status.json");
  let overrides: Record<string, string> = {};
  try {
    if (fs.existsSync(file)) {
      const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as {
        shots?: Record<string, string>;
      };
      overrides = parsed.shots ?? {};
    }
  } catch {
    overrides = {};
  }
  return shotList.map((shot) => {
    const status = overrides[shot.id];
    if (status && isStatus(status)) return { ...shot, status };
    return shot;
  });
}
