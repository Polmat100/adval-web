import { STATS, WHATSAPP, TEL } from "@/lib/data";
import { TruckReveal } from "./truck-reveal";

  export function Hero() {
    return (
      <section
        id="inicio"
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--borde)",
          fontFamily: "var(--font-cuerpo), sans-serif",
          color: "var(--titular)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/images/volcan-misti.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 28%",
            opacity: 0.32,
            WebkitMaskImage:
              "radial-gradient(120% 95% at 50% 22%,#000 8%,rgba(0,0,0,.55) 48%,transparent 82%)",
            maskImage:
              "radial-gradient(120% 95% at 50% 22%,#000 8%,rgba(0,0,0,.55) 48%,transparent 82%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--fondo) 55%, transparent) 0%, color-mix(in srgb, var(--fondo) 32%, transparent) 38%, color-mix(in srgb, var(--fondo) 78%, transparent) 78%, var(--fondo) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 80% at 78% 12%,rgba(225,29,36,.22),transparent 55%),radial-gradient(80% 60% at 10% 90%,rgba(40,70,120,.28),transparent 60%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0  auto", padding: "96px 36px 84px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 26,
              border: "1px solid rgba(255,255,255,.18)",
              borderRadius: 100,
              padding: "8px 18px",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--acento)", display: "block", boxShadow: "0 0 10px  var(--acento)" }} />
            <span style={{ fontSize: 12.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#C9D5E2", fontWeight: 600 }}>
              ADVALURO S.A.C.
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 700, fontSize: 84, lineHeight: 0.96, letterSpacing: ".005em", textTransform: "uppercase", margin: "0 0 24px", maxWidth: 980, textWrap: "balance" }}>
            Movemos carga pesada por <span style={{ color: "var(--acento)" }}>todo el Perú</span>
          </h1>

          <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--parrafo)", margin: "0 0 38px", maxWidth: 600 }}>
            Transporte terrestre y soluciones logísticas integrales con flota EURO VI de última generación. Seguridad, eficiencia y compromiso en cada operación.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--acento)", color: "var(--titular)", textDecoration: "none", fontWeight: 600, fontSize: 16, letterSpacing: ".06em", textTransform: "uppercase", padding: "16px 30px", borderRadius: 5, boxShadow: "0 14px 36px rgba(225,29,36,.36)" }}>
              Contactar por WhatsApp
            </a>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "var(--titular)", textDecoration: "none", fontWeight: 600, fontSize: 16, letterSpacing: ".06em", textTransform: "uppercase", padding: "16px 30px", borderRadius: 5, border: "1.5px solid rgba(255,255,255,.28)" }}>
              Llamar 969 195 742
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--borde)", border: "1px solid var(--borde)", borderRadius: 10, overflow: "hidden" }}>
            {STATS.map((st) => (
              <div key={st.l} style={{ background: "var(--fondo)", padding: "26px 24px" }}>
                <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1, color: "var(--titular)" }}>{st.disp}</div>
                <div style={{ fontSize: 13.5, color: "var(--secundario)", marginTop: 8, letterSpacing: ".04em" }}>{st.l}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <TruckReveal />
          </div>
        </div>
      </section>
    );
  }