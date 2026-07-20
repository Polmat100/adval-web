import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir la web en desarrollo desde la IP de la red local
  // (p. ej. el teléfono) sin que Next bloquee los recursos /_next/*.
  // Sin esto, el JS del cliente no carga y el contenido queda oculto.
  allowedDevOrigins: ["192.168.0.28", "192.168.1.28"],
};

export default nextConfig;
