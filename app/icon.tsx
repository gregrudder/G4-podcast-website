import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#090909",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "#f4f1ea",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          G4
        </div>
        <div style={{ display: "flex", height: 4, background: "#ff3b30" }} />
      </div>
    ),
    { ...size },
  );
}
