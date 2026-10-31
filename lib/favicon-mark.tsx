import { brand } from "@/lib/brand";

type FaviconMarkProps = {
  size: number;
};

export function FaviconMark({ size }: FaviconMarkProps) {
  const pad = Math.round(size * 0.1);
  const cardSize = size - pad * 2;
  const shadow = Math.max(2, Math.round(size * 0.09));
  const barH = Math.max(3, Math.round(size * 0.14));
  const fontSize = Math.round(size * 0.34);

  return (
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
          width: cardSize,
          height: cardSize,
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: shadow,
            left: shadow,
            width: cardSize,
            height: cardSize,
            background: brand.shadow,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            width: cardSize,
            height: cardSize,
            display: "flex",
            flexDirection: "column",
            background: brand.card,
            border: `1px solid ${brand.cardBorder}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: barH,
              background: brand.sage,
              width: "100%",
              display: "flex",
            }}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: brand.sans,
              fontSize,
              fontWeight: 700,
              color: brand.sage,
            }}
          >
            RA
          </div>
        </div>
      </div>
    </div>
  );
}