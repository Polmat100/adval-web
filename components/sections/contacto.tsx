import { WHATSAPP, TEL } from "@/lib/data";

export const Contacto = () => {
  return (
    <section id="contacto" style={{ position: "relative", overflow: "hidden", background: "var(--acento)", fontFamily: "var(--font-cuerpo), sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 120% at 90% 0%,rgba(255,255,255,.16),transparent 50%)" }} />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "84px 36px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 0.98, textTransform: "uppercase", margin: "0 0 18px", color: "var(--titular)" }}>¿Listo para mover su carga?</h2>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(255,255,255,.92)", margin: 0, maxWidth: 460 }}>
            Reciba una cotización personalizada. Atención directa y seguimiento permanente de su operación.
          </p>
          <p style={{ fontFamily: "var(--font-titulo), sans-serif", fontSize: 18, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--titular)", margin: "26px 0 0" }}>
            &quot;Transportamos confianza, conectamos oportunidades&quot;
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--fondo)", color: "var(--titular)", textDecoration: "none", fontWeight: 600, fontSize: 18, letterSpacing: ".04em", textTransform: "uppercase", padding: "20px 26px", borderRadius: 7 }}>
            WhatsApp <span style={{ color: "var(--acento)" }}>977 557 275  →</span>
          </a>
          <a href={TEL} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "color-mix(in srgb, var(--fondo) 18%, transparent)", color: "var(--titular)", textDecoration: "none", fontWeight: 600, fontSize: 18, letterSpacing: ".04em", textTransform: "uppercase", padding: "20px 26px", borderRadius: 7, border: "1.5px solid rgba(255,255,255,.5)" }}>
            Teléfono <span>977 557 275  →</span>
          </a>
          <a href="mailto:advalgloballogistics@gmail.com" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "color-mix(in srgb, var(--fondo) 18%, transparent)", color: "var(--titular)", textDecoration: "none", fontWeight: 500, fontSize: 15, letterSpacing: ".02em", padding: "18px 26px", borderRadius: 7, border: "1.5px solid rgba(255,255,255,.5)" }}>
            Correo <span>advalgloballogistics@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
