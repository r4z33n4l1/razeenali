import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#242424",
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2f2f2f",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "6px 6px 0 rgba(0,0,0,0.45)",
            color: "#8faa7e",
            fontSize: 72,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          R
        </div>
      </div>
    ),
    { ...size },
  );
}