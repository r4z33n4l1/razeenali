import { ImageResponse } from "next/og";

export const ogAlt = "Razeen Ali — ships things that work";
export const ogSize = { width: 1200, height: 630 };

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#242424",
          color: "#ececec",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: "#8faa7e" }} />
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8faa7e",
              fontWeight: 600,
            }}
          >
            Toronto, ON
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Razeen Ali
          </div>
          <div style={{ fontSize: 36, color: "#8faa7e", fontWeight: 600 }}>
            ships things that work
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ position: "relative", display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top: 6,
                left: 6,
                width: "100%",
                height: "100%",
                background: "#000000",
                opacity: 0.35,
              }}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                width: "100%",
                padding: "22px 28px",
                background: "#2f2f2f",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
                fontSize: 24,
                color: "#d8d8d8",
              }}
            >
              <span style={{ color: "#8faa7e" }}>$</span>
              <span style={{ marginLeft: 10 }}>
                curl -s razeenali.com/api/summary
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              color: "rgba(236,236,236,0.55)",
              fontWeight: 500,
            }}
          >
            <span>full-stack engineer</span>
            <span>ai-native apps · web saas · ios</span>
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}