import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Fija la raíz del proyecto. Sin esto Turbopack sube hasta
    // C:\Users\MyM-TI (que tiene un package-lock.json suelto) y la toma
    // como raíz, rompiendo el React Client Manifest.
    root: __dirname,
  },
  // Permite abrir la web en desarrollo desde la IP de la red local
  // (p. ej. el teléfono) sin que Next bloquee los recursos /_next/*.
  // Sin esto, el JS del cliente no carga y el contenido queda oculto.
  allowedDevOrigins: ["192.168.0.28", "192.168.1.28"],
};

export default nextConfig;
