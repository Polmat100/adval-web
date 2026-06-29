// data.ts
export const WHATSAPP ="https://wa.me/51969195742?text=" + encodeURIComponent("Hola ADVAL, deseo una cotización para mi carga.");
export const TEL = "tel:+51969195742";

export interface Carga { n: string; t: string; d: string; }
export interface Razon { n: string; t: string; d: string; }
export interface Stat  { disp: string; l: string; }
export interface Sector { n: string; t: string; }

export const STATS: Stat[] = [
  { disp: "580 HP", l: "Motor Cummins X13" },
  { disp: "14",     l: "Velocidades · ZF automatizada" },
  { disp: "12",     l: "Puntos de amarre internos" },
  { disp: "13.5 m", l: "Plataforma reforzada" },
];


export const CARGAS: Carga[] = [
  { n: "01", t: "Contenedores marítimos", d: "Unidades de 20′ y 40′ con twist locks y posición central." },
  { n: "02", t: "Bobinas de acero",       d: "Aseguramiento especializado para carga concentrada." },
  { n: "03", t: "Tuberías",               d: "Estiba y amarre para cargas de gran longitud." },
  { n: "04", t: "Estructuras metálicas",  d: "Transporte de piezas y estructuras de obra." },
  { n: "05", t: "Materiales de construcción", d: "Abastecimiento puntual a obra y planta." },
  { n: "06", t: "Maquinaria y equipos",   d: "Equipos industriales sobre plataforma reforzada." },
  { n: "07", t: "Carga paletizada",       d: "Distribución ordenada y eficiente." },
  { n: "08", t: "Carga general",          d: "Soluciones a la medida de cada operación." },
];

export const RAZONES: Razon[] = [
  { n: "01", t: "Seguridad garantizada",   d: "Operamos bajo estrictos estándares y controles preoperacionales." },
  { n: "02", t: "Puntualidad",             d: "Cumplimos los tiempos de entrega comprometidos." },
  { n: "03", t: "Equipos modernos",        d: "Flota EURO VI de última generación con ABS y retardador." },
  { n: "04", t: "Flexibilidad operativa",  d: "Adaptamos cada solución a la carga y la ruta." },
  { n: "05", t: "Atención personalizada",  d: "Seguimiento directo y permanente de su operación." },
  { n: "06", t: "Compromiso con la calidad", d: "Mejora continua en todos nuestros procesos." },
];

export const SECTORES: Sector[] = [
  { n: "01", t: "Minería" },        { n: "02", t: "Construcción" },
  { n: "03", t: "Industria" },      { n: "04", t: "Comercio" },
  { n: "05", t: "Agroindustria" },  { n: "06", t: "Energía" },
  { n: "07", t: "Importación y exportación" }, { n: "08", t: "Operadores logísticos" },
];