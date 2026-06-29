"use client";

import { useState } from "react";
import Image from "next/image";

export function TruckReveal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ver foto del camión"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 9,
          background: "color-mix(in srgb, var(--fondo) 55%, transparent)",
          color: "var(--titular)",
          border: "1px solid var(--borde)",
          cursor: "pointer",
          fontFamily: "var(--font-cuerpo), sans-serif",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          padding: "12px 20px",
          borderRadius: 5,
        }}
      >
        <EyeIcon />
        Ver camión
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "color-mix(in srgb, var(--footer) 82%, transparent)",
            backdropFilter: "blur(4px)",
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--acento)",
              color: "var(--titular)",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 22,
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Evita que el clic en la imagen cierre el visor */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(92vw, 1100px)",
              height: "min(80vh, 700px)",
              border: "1px solid var(--borde)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,.5)",
            }}
          >
            <Image
              src="/images/camion.jpg"
              alt="Camión de ADVAL Global Logistics"
              fill
              sizes="92vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

function EyeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
