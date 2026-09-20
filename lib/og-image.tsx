import { ImageResponse } from "next/og";

export const ogAlt = "Razeen Ali — building Harnesses for agents and systems that help you";
export const ogSize = { width: 1200, height: 630 };

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#fafaf9",
          color: "#16161a",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Georgia, serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 78px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#6b6b73",
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Razeen Ali · Toronto, Canada
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div style={{ fontSize: 72, letterSpacing: "-0.055em", lineHeight: 0.98 }}>
            building Harnesses for agents
          </div>
          <div style={{ color: "#0f766e", fontSize: 72, letterSpacing: "-0.055em", lineHeight: 0.98 }}>
            and systems that help you
          </div>
          <div
            style={{
              color: "#52525b",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 29,
              lineHeight: 1.35,
              marginTop: 32,
            }}
          >
            Razeen Ali · Toronto, Canada
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #d7d7d3",
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 21,
            justifyContent: "space-between",
            paddingTop: 20,
            width: "100%",
          }}
        >
          <span>razeenali.com</span>
          <span style={{ color: "#0f766e" }}>Published work · Apps · Contact</span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
