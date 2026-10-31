import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const ogAlt = "Razeen Ali — ships things that work";
export const ogSize = { width: 1200, height: 630 };

const terminalLines = [
  { prompt: false, text: "razeen ali — full-stack engineer" },
  { prompt: false, text: "" },
  { prompt: true, text: "ships ai-native mobile apps + web saas" },
  { prompt: true, text: "ios, expo, ai agents, next.js tools" },
  { prompt: true, text: "still shipping." },
];

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: brand.bg,
          color: brand.ink,
          fontFamily: brand.sans,
          position: "relative",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%",
            padding: "56px 0 56px 64px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                background: brand.sage,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 16,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: brand.sage,
                fontWeight: 600,
              }}
            >
              Toronto, ON
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 108,
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
              }}
            >
              Razeen
            </div>
            <div
              style={{
                fontSize: 108,
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: brand.sage,
              }}
            >
              Ali
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 34,
                fontWeight: 500,
                color: brand.muted,
              }}
            >
              ships things that work
            </div>
          </div>

          <div
            style={{
              fontSize: 20,
              color: brand.muted,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            full-stack engineer · ai-native apps · web saas · ios
          </div>
        </div>

        {/* right terminal panel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            padding: "48px 56px 48px 24px",
            position: "relative",
          }}
        >
          <div
            style={{ position: "relative", width: "100%", display: "flex" }}
          >
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                width: "100%",
                height: "100%",
                background: "#000",
                opacity: 0.38,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "relative",
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
                  gap: 8,
                  padding: "14px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  background: "#141414",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#ff5f57",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#febc2e",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#28c840",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    marginLeft: 8,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: brand.mono,
                  }}
                >
                  zsh — summary
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  padding: "22px 20px",
                  fontFamily: brand.mono,
                  fontSize: 17,
                  lineHeight: 1.35,
                }}
              >
                <div style={{ color: brand.sage, marginBottom: 4 }}>
                  $ curl -s razeenali.com/api/summary
                </div>
                {terminalLines.map((line) =>
                  line.text ? (
                    <div
                      key={line.text}
                      style={{
                        color: line.prompt ? "#d0d0d0" : "#9a9a9a",
                        display: "flex",
                        gap: 8,
                      }}
                    >
                      {line.prompt ? (
                        <span style={{ color: brand.sage }}>›</span>
                      ) : null}
                      <span>{line.text}</span>
                    </div>
                  ) : (
                    <div key="spacer" style={{ height: 4, display: "flex" }} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}