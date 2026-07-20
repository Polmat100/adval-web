import { CARGAS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export const Servicios = () => {
  return (
    <section id="servicios" style={{ background: "var(--panel)", borderTop: "1px solid var(--borde)", borderBottom: "1px solid var(--borde)", color: "var(--titular)", fontFamily: "var(--font-cuerpo), sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 36px" }}>
        <Reveal as="div" style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--acento)", fontWeight: 600, marginBottom: 16 }}>Servicios</div>
          <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 46, lineHeight: 1.02, textTransform: "uppercase", margin: 0 }}>Cargas que transportamos</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {CARGAS.map((c, i) => (
            <Reveal as="article" delay={i * 90} key={c.n} style={{ background: "var(--fondo)", border: "1px solid var(--borde)", borderRadius: 10, padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 700, fontSize: 26, color: "var(--acento-apagado)", marginBottom: 14 }}>{c.n}</div>
              <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 500, fontSize: 19, textTransform: "uppercase", letterSpacing: ".02em", color: "var(--titular)", marginBottom: 9 }}>{c.t}</div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--secundario)", margin: 0 }}>{c.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
