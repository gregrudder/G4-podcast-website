import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("title") ?? "G4 Podcast Studio & Marketing";
  const title = raw.replace(/\s+/g, " ").trim().slice(0, 140) || "G4 Podcast Studio & Marketing";
  const studio = await readFile(
    join(process.cwd(), "public/images/g4-studio-2-wishaw-armchairs-fireplace.jpg"),
  );
  const studioSrc = `data:image/jpeg;base64,${studio.toString("base64")}`;

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
        <div style={{ display: "flex", width: 520, height: "100%", overflow: "hidden" }}>
          {/* next/og paints this data URL. next/image does not run in ImageResponse. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={studioSrc}
            width={520}
            height={630}
            alt=""
            style={{ objectFit: "cover", width: 520, height: 630 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "56px 48px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 48,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 24, color: "#c8c2b8" }}>
            G4 Podcast Studio · Wishaw, North Lanarkshire
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
