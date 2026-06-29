import { RAZONES } from "@/lib/data";

export const PorQue = () => {
  return (
    <section id="porque" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 36px", color: "var(--titular)", fontFamily: "var(--font-cuerpo), sans-serif" }}>
      <div style={{ maxWidth: 680, marginBottom: 52 }}>
        <div style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--acento)", fontWeight: 600, marginBottom: 16 }}>¿Por qué elegirnos?</div>
        <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 46, lineHeight: 1.02, textTransform: "uppercase", margin: 0 }}>Potencia, seguridad y cumplimiento</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        {RAZONES.map((r) => (
          <div key={r.n} style={{ display: "flex", gap: 24, padding: "30px 0", borderBottom: "1px solid var(--borde)" }}>
            <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, color: "var(--acento)", minWidth: 64 }}>{r.n}</div>
            <div>
              <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 500, fontSize: 21, textTransform: "uppercase", letterSpacing: ".02em", marginBottom: 7 }}>{r.t}</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--secundario)", margin: 0, maxWidth: 420 }}>{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
