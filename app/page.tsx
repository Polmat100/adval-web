import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Empresa } from "@/components/sections/empresa";
import { Servicios } from "@/components/sections/servicios";
import { PorQue } from "@/components/sections/porque";
import { Cobertura } from "@/components/sections/cobertura";
import { Cotizacion } from "@/components/sections/cotizacion";
import { Contacto } from "@/components/sections/contacto";
import { Footer } from "@/components/layout/footer";

const LOGO = "/images/logoSrc.jpeg";

export default function Home() {
  return (
    <div style={{ background: "var(--fondo)" }}>
      <Header logoSrc={LOGO} />
      <Hero />
      <Marquee />
      <Empresa />
      <Servicios />
      <PorQue />
      <Cobertura />
      <Cotizacion />
      <Contacto />
      <Footer logoSrc={LOGO} />
    </div>
  );
}
