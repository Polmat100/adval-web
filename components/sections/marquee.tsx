import { SECTORES } from "@/lib/data";

export const Marquee = () => {
  const loop = [...SECTORES, ...SECTORES];
  return (
    <>
      <style>{`@keyframes adval-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div style={{ overflow: "hidden", borderBottom: "1px solid var(--borde)", background: "var(--panel)" }}>
        <div style={{ display: "flex", width: "max-content", animation: "adval-marquee 28s linear infinite" }}>
          {loop.map((m, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 18, padding: "16px 0" }}>
              <span style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 500, fontSize: 18, letterSpacing: ".1em", textTransform: "uppercase", color: "#C9D5E2", padding: "0 26px" }}>{m.t}</span>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--acento)", display: "block" }} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
