const BLOQUES = [
  { t: "Misión", d: "Brindar servicios de transporte y logística que superen las expectativas de nuestros clientes, garantizando seguridad, puntualidad y eficiencia operativa." },
  { t: "Visión", d: "Ser una empresa líder en transporte y logística en el Perú, reconocida por la calidad de sus servicios, innovación y compromiso con la seguridad." },
];

export const Empresa = () => {
  return (
    <section id="empresa" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 36px", color: "var(--titular)", fontFamily: "var(--font-cuerpo), sans-serif" }}>
      <div style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 56, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--acento)", fontWeight: 600, marginBottom: 16 }}>Quiénes somos</div>
          <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 46, lineHeight: 1.02, textTransform: "uppercase", margin: 0 }}>Su aliado estratégico en logística</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--parrafo)", margin: "24px 0 0" }}>
            Empresa peruana especializada en transporte terrestre, comprometida con operaciones responsables, tecnología moderna y altos estándares de calidad.
          </p>
        </div>
        <div style={{ display: "grid", gap: 18 }}>
          {BLOQUES.map((b) => (
            <div key={b.t} style={{ background: "var(--tarjeta)", border: "1px solid var(--borde)", borderLeft: "4px solid var(--acento)", borderRadius: 10, padding: 30 }}>
              <div style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 22, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10 }}>{b.t}</div>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--parrafo)", margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
