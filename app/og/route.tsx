import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("title") ?? "G4 Podcast Studio & Marketing";
  const title = raw.replace(/\s+/g, " ").trim().slice(0, 140) || "G4 Podcast Studio & Marketing";
  const logo = await readFile(join(process.cwd(), "public/brand/g4-monogram.png"));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#090909",
          color: "#f4f1ea",
        }}
      >
        <div style={{ display: "flex", width: 16, background: "#A80000" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* next/og paints this data URL. next/image does not run in ImageResponse. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${logo.toString("base64")}`}
              width={148}
              height={148}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#c8c2b8" }}>
            G4 Podcast Studio · Wishaw, North Lanarkshire
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
