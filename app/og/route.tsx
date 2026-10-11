import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("title") ?? "G4 Podcast Studio & Marketing";
  const title = raw.replace(/\s+/g, " ").trim().slice(0, 140) || "G4 Podcast Studio & Marketing";

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
        <div style={{ display: "flex", width: 16, background: "#ff3b30" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 1 }}>
            G4 PODCAST STUDIO & MARKETING
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
            Wishaw, North Lanarkshire
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
