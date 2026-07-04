"use client";

import { useCallback, useState } from "react";
import { WHATSAPP, COTIZACION_ENDPOINT } from "@/lib/data";

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  full?: boolean; // ocupa las 2 columnas
}

const FIELDS: FormField[] = [
  { name: "Nombres y Apellidos", label: "Nombres y Apellidos", placeholder: "Ingresa tu nombre..." },
  { name: "Teléfono", label: "Número de teléfono", placeholder: "Ingresa tu teléfono...", type: "tel" },
  { name: "Correo", label: "Correo electrónico", placeholder: "Ingresa tu correo...", type: "email" },
  { name: "Asunto", label: "Asunto", placeholder: "Ingresa el asunto..." },
  { name: "Origen", label: "Origen", placeholder: "Ingresa el origen de traslado" },
  { name: "Destino", label: "Destino", placeholder: "Ingresa el destino de la carga" },
  { name: "Material", label: "Material", placeholder: "Ingresa el material a transportar" },
  { name: "Peso aproximado", label: "Peso aproximado", placeholder: "Ingresa el peso aproximado en toneladas" },
  { name: "Mensaje", label: "Mensaje (Opcional)", placeholder: "Ingresa tu mensaje...", textarea: true, full: true, required: false },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--fondo)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 7,
  padding: "14px 16px",
  fontFamily: "var(--font-cuerpo), sans-serif",
  fontSize: 15,
  color: "var(--titular)",
  outline: "none",
  boxSizing: "border-box",
};

type Estado = "inicial" | "enviando" | "enviado" | "error";

export const Cotizacion = () => {
  const [estado, setEstado] = useState<Estado>("inicial");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado("enviando");
    try {
      const res = await fetch(COTIZACION_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`FormSubmit respondió ${res.status}`);
      form.reset();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }, []);

  return (
    <section
      id="cotizar"
      style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 36px", fontFamily: "var(--font-cuerpo), sans-serif" }}
    >
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
        <div style={{ fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--acento)", fontWeight: 600, marginBottom: 16 }}>
          Cotización
        </div>
        <h2 style={{ fontFamily: "var(--font-titulo), sans-serif", fontWeight: 600, fontSize: 44, lineHeight: 1.05, textTransform: "uppercase", margin: "0 0 18px", color: "var(--titular)" }}>
          Obtén tu cotización
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--parrafo)", margin: 0 }}>
          Completa los campos a continuación y deja que nosotros nos encarguemos del resto. Uno de nuestros expertos
          en transporte de carga en Arequipa, Lima y todo el Perú se pondrá en contacto contigo lo antes posible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--tarjeta)",
          border: "1px solid var(--borde)",
          borderRadius: 14,
          padding: 44,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px 24px",
        }}
      >
        {/* Configuración de FormSubmit */}
        <input type="hidden" name="_subject" value="Nueva solicitud de cotización — Web ADVAL" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Honeypot anti-spam: los humanos no lo ven, los bots lo rellenan */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {FIELDS.map((f) => (
          <div key={f.name} style={{ gridColumn: f.full ? "1 / -1" : "auto" }}>
            <label style={{ display: "block", fontSize: 14.5, fontWeight: 600, letterSpacing: ".02em", color: "var(--titular)", marginBottom: 9 }}>
              {f.label} {f.required !== false && <span style={{ color: "var(--acento)" }}>*</span>}
            </label>
            {f.textarea ? (
              <textarea name={f.name} placeholder={f.placeholder} rows={4} required={f.required !== false} style={{ ...inputStyle, resize: "vertical" }} />
            ) : (
              <input type={f.type ?? "text"} name={f.name} placeholder={f.placeholder} required={f.required !== false} style={inputStyle} />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={estado === "enviando"}
          style={{
            gridColumn: "1 / -1",
            background: "var(--acento)",
            color: "var(--titular)",
            border: "none",
            fontFamily: "var(--font-cuerpo), sans-serif",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            padding: 18,
            borderRadius: 7,
            cursor: estado === "enviando" ? "wait" : "pointer",
            opacity: estado === "enviando" ? 0.7 : 1,
            marginTop: 8,
          }}
        >
          {estado === "enviando" ? "Enviando..." : "Enviar formulario"}
        </button>

        {estado === "enviado" && (
          <p style={{ gridColumn: "1 / -1", margin: 0, textAlign: "center", fontSize: 16, color: "var(--titular)" }}>
            ✓ Recibimos tu solicitud. Te contactaremos lo antes posible.
          </p>
        )}
        {estado === "error" && (
          <p style={{ gridColumn: "1 / -1", margin: 0, textAlign: "center", fontSize: 16, color: "var(--parrafo)" }}>
            No pudimos enviar el formulario. Inténtalo de nuevo o escríbenos directo por{" "}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ color: "var(--acento)", fontWeight: 600 }}>
              WhatsApp
            </a>.
          </p>
        )}
      </form>
    </section>
  );
};
