import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #0A1E46 0%, #0B2D6E 45%, #000 100%)",
          color: "white",
          position: "relative",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {/* Decorative glows */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.30, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: 9999,
              background: "#D1AD55",
              filter: "blur(90px)",
              left: -120,
              top: -120,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 560,
              height: 560,
              borderRadius: 9999,
              background: "#1F408C",
              filter: "blur(95px)",
              right: -160,
              top: -140,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 620,
              height: 620,
              borderRadius: 9999,
              background: "#0F2A5F",
              filter: "blur(95px)",
              left: 420,
              bottom: -220,
            }}
          />
        </div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Inline brand mark (no external image fetch) */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#D1AD55",
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            M
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.1 }}>M Trading</div>
            <div style={{ fontSize: 18, opacity: 0.85 }}>Global Trading Partner</div>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginTop: 32, fontSize: 56, fontWeight: 900, lineHeight: 1.05 }}>
          Premium trading support for modern supply chains.
        </div>

        {/* Subtitle */}
        <div style={{ marginTop: 22, fontSize: 22, opacity: 0.9, maxWidth: 900, lineHeight: 1.35 }}>
          Cosmetics • Machine spare parts • Electronics components • Chemicals
        </div>

        {/* Pills */}
        <div style={{ marginTop: 36, display: "flex", gap: 12 }}>
          {["Trusted sourcing", "Quality focus", "Shipment planning"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 16px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.16)",
                fontSize: 16,
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
