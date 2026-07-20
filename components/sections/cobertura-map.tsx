"use client";

import { useState, useCallback, type MouseEvent } from "react";
import { REGIONS, LAGO_ID, REGION_NAMES } from "@/lib/regions";
import { Reveal } from "@/components/ui/reveal";

const DEFAULT = "Perú · 25 regiones de cobertura";

export function CoberturaMap({ svg }: { svg: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [label, setLabel] = useState<string>(DEFAULT);

  const enter = useCallback((id: string, name: string) => {
    setActive(id);
    setLabel(name);
  }, []);
  const leave = useCallback(() => {
    setActive(null);
    setLabel(DEFAULT);
  }, []);

  // Delegación sobre el SVG inline: detecta el <path> bajo el cursor.
  const onMapOver = (e: MouseEvent<HTMLDivElement>) => {
    const path = (e.target as Element).closest("path");
    if (!path || path.id === LAGO_ID) return;
    const name = REGION_NAMES[path.id];
    if (name) enter(path.id, name);
  };

  return (
    <section
      id="cobertura"
      style={{
        background: "var(--panel)",
        borderTop: "1px solid var(--borde)",
        borderBottom: "1px solid var(--borde)",
        fontFamily: "var(--font-cuerpo), sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 36px", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
        {/* Texto + leyenda */}
        <Reveal as="div" variant="left">
          <div style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--acento)", fontWeight: 600, marginBottom: 16 }}>Cobertura</div>
          <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 46, lineHeight: 1.02, textTransform: "uppercase", margin: "0 0 20px", color: "var(--titular)" }}>
            Operamos en todo el Perú
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--parrafo)", margin: "0 0 28px", maxWidth: 480 }}>
            Llegamos a las 25 regiones del país con rutas de carga terrestre. Pase el cursor por el mapa o las regiones para explorar nuestra cobertura.
          </p>

          {/* Indicador de la región */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 18, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--titular)", background: "var(--fondo)", border: "1px solid var(--borde)", borderLeft: "3px solid var(--acento)", padding: "12px 18px", borderRadius: 6, marginBottom: 28 }}>
            {label}
          </div>

          {/* Grilla de regiones */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {REGIONS.map((r) => {
              const on = active === r.id;
              return (
                <button
                  key={r.id}
                  onMouseEnter={() => enter(r.id, r.name)}
                  onMouseLeave={leave}
                  style={{
                    fontFamily: "var(--font-cuerpo), sans-serif",
                    textAlign: "left",
                    background: on ? "#10203a" : "var(--fondo)",
                    border: `1px solid ${on ? "rgba(225,29,36,.7)" : "var(--borde)"}`,
                    color: on ? "var(--titular)" : "#C9D5E2",
                    fontSize: 13.5,
                    fontWeight: 500,
                    letterSpacing: ".02em",
                    padding: "9px 12px",
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "all .2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--acento)", display: "block", flex: "none" }} />
                  {r.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mapa */}
        <Reveal as="div" variant="right" delay={120} style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 60% at 60% 35%,rgba(225,29,36,.14),transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
          <div
            className={active ? `peru-map active-${active}` : "peru-map"}
            onMouseOver={onMapOver}
            onMouseLeave={leave}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </Reveal>
      </div>

      {/* Resaltado de la región activa (desde la leyenda) */}
      {active && (
        <style>{`.active-${active} #${active}{fill:var(--acento);}`}</style>
      )}
    </section>
  );
}
