import { ImageResponse } from "next/og";

export const alt = "Travel Station — travel assistance for flights and booking support";
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
          background: "#1a2b3c",
          color: "#fff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 52, background: "#ff6600", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 16, height: 16, borderRadius: 16, background: "#fff" }} />
          </div>
          <div style={{ fontSize: 40, display: "flex" }}>
            <span style={{ fontWeight: 800 }}>Travel Station</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 4, background: "#ff6600", marginBottom: 28 }} />
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, maxWidth: 940 }}>
            Your Concierge Desk for Travel Services
          </div>
          <div style={{ fontSize: 28, color: "#c5d0da", marginTop: 24 }}>
            Flights · Hotels · Car Rental
          </div>
        </div>
      </div>
    ),
    size,
  );
}
