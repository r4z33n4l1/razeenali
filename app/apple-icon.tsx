import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const shadow = 10;
  const card = 132;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.bg,
        }}
      >
        <div
          style={{
            position: "relative",
            width: card,
            height: card,
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: shadow,
              left: shadow,
              width: card,
              height: card,
              background: brand.shadow,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "relative",
              width: card,
              height: card,
              display: "flex",
              flexDirection: "column",
              background: "#1a1a1a",
              border: `1px solid ${brand.cardBorder}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "#141414",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: "#ff5f57",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: "#febc2e",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: "#28c840",
                  display: "flex",
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "0 18px",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontFamily: brand.sans,
                  fontSize: 52,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: brand.ink,
                  lineHeight: 0.95,
                }}
              >
                RA
              </div>
              <div
                style={{
                  fontFamily: brand.mono,
                  fontSize: 11,
                  color: brand.sage,
                }}
              >
                curl -s summary
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}