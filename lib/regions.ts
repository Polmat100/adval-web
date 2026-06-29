// Las 25 regiones del Perú. El `id` coincide con el id del <path> en public/peru.svg.
export interface Region { id: string; name: string; }

export const REGIONS: Region[] = [
  { id: "PE-AMA", name: "Amazonas" },     { id: "PE-ANC", name: "Áncash" },
  { id: "PE-APU", name: "Apurímac" },     { id: "PE-ARE", name: "Arequipa" },
  { id: "PE-AYA", name: "Ayacucho" },     { id: "PE-CAJ", name: "Cajamarca" },
  { id: "PE-CAL", name: "El Callao" },    { id: "PE-CUS", name: "Cusco" },
  { id: "PE-HUV", name: "Huancavelica" }, { id: "PE-HUC", name: "Huánuco" },
  { id: "PE-ICA", name: "Ica" },          { id: "PE-JUN", name: "Junín" },
  { id: "PE-LAL", name: "La Libertad" },  { id: "PE-LAM", name: "Lambayeque" },
  { id: "PE-LIM", name: "Lima" },         { id: "PE-LOR", name: "Loreto" },
  { id: "PE-MDD", name: "Madre de Dios" },{ id: "PE-MOQ", name: "Moquegua" },
  { id: "PE-PAS", name: "Pasco" },        { id: "PE-PIU", name: "Piura" },
  { id: "PE-PUN", name: "Puno" },         { id: "PE-SAM", name: "San Martín" },
  { id: "PE-TAC", name: "Tacna" },        { id: "PE-TUM", name: "Tumbes" },
  { id: "PE-UCA", name: "Ucayali" },
];

// El SVG trae 2 paths extra que no son regiones de la lista:
//  - PE-LMA: Lima Metropolitana (la mostramos como "Lima")
//  - PE-LKT: Lago Titicaca (agua, no interactivo)
export const LAGO_ID = "PE-LKT";

// Mapa id -> nombre para el hover sobre el mapa (incluye Lima Metropolitana).
export const REGION_NAMES: Record<string, string> = {
  ...Object.fromEntries(REGIONS.map((r) => [r.id, r.name])),
  "PE-LMA": "Lima",
};
