import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#8faa7e",
            color: "#242424",
            fontSize: 14,
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