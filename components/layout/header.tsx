import { Reveal } from "@/components/ui/reveal";

const NAV = [
    {label: "Empresa", href: "#empresa"},
    { label: "Servicios", href: "#servicios" },
    { label: "Ventajas", href: "#porque" },
    { label: "Sectores", href: "#sectores" },
];

 const WHATSAPP =
    "https://wa.me/51969195742?text=" + encodeURIComponent("Hola ADVAL, deseo una cotización para mi carga.");

 interface HeaderProps {
    logoSrc: string;
 }   

 export const Header = ({logoSrc}: HeaderProps) => {
    return (
        <header
        style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: "color-mix(in srgb, var(--fondo) 78%, transparent)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--borde)",
            fontFamily: "var(--font-cuerpo), sans-serif",
        }} 
        >
            <Reveal
            as="div"
            variant="fade"
            style={{
                maxWidth: 1280,
                margin: "0 auto",
                padding: "14px 36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
            }}
        >
          <a
            href="#inicio"
            style={{ display: "flex", alignItems: "center", gap: 13, textDecoration: "none" }}
          >
            <img
              src={logoSrc}
              alt="ADVAL"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "block",
                boxShadow: "0 0 0 1px rgba(255,255,255,.14)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-titulo), sans-serif",
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: ".06em",
                color: "var(--titular)",
                textTransform: "uppercase",
              }}
            >
              ADVAL <span style={{ color: "var(--acento)" }}>GLOBAL</span>
            </span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: "var(--secundario)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--acento)",
                color: "var(--titular)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: "12px 22px",
                borderRadius: 4,
              }}
            >
              Cotizar
            </a>
          </nav>
        </Reveal>
        </header>
    )
 }