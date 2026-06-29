import { readFile } from "node:fs/promises";
import path from "node:path";
import { CoberturaMap } from "./cobertura-map";

// Componente de servidor: lee el SVG del mapa, lo sanea y lo pasa al
// componente cliente para inyectarlo inline (necesario para el hover por región).
export async function Cobertura() {
  const file = await readFile(
    path.join(process.cwd(), "public", "peru.svg"),
    "utf8"
  );

  // Quitamos el prólogo XML y aseguramos un viewBox para que escale responsive.
  let svg = file.slice(file.indexOf("<svg"));
  if (!svg.includes("viewBox")) {
    svg = svg.replace("<svg", '<svg viewBox="0 0 542.76703 792"');
  }

  return <CoberturaMap svg={svg} />;
}
