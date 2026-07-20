import type { Metadata } from "next";
import { Oswald, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"], 
});

const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "ADVAL Global Logistics · Transporte de carga pesada en Perú",
  description:
    "Transporte terrestre y soluciones logísticas integrales en el Perú con flota EURO VI. Seguridad, puntualidad y eficiencia en cada operación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Activa las animaciones solo si el JS está vivo. El temporizador de
            seguridad revela todo el contenido si React no llega a hidratar,
            para que la web nunca se quede "solo con el fondo". */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "window.__advalReveal=setTimeout(function(){document.documentElement.classList.remove('js')},3000);",
          }}
        />
        {children}
      </body>
    </html>
  );
}
