import { ImageResponse } from "next/og";

export const alt = "TravelStation — travel assistance for flights and booking support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#172D43",
          color: "#fff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, background: "#243E56", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 16, height: 16, borderRadius: 16, background: "#D77C42" }} />
          </div>
          <div style={{ fontSize: 40, display: "flex" }}>
            <span style={{ fontWeight: 800 }}>Travel</span>
            <span style={{ fontWeight: 400 }}>Station</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 4, background: "#D77C42", marginBottom: 28 }} />
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, maxWidth: 940 }}>
            Your journey deserves a better travel experience.
          </div>
          <div style={{ fontSize: 28, color: "#c5d0da", marginTop: 24 }}>
            Flights · Booking help · 24/7 customer support
          </div>
        </div>
      </div>
    ),
    size,
  );
}
