// Contenido final aprobado — HANAK Sky Resort & Villas Club
// Fuente: documento de copy final + brief de contenido (sesión de trabajo con Bryan / Grupo Zevaot)
// Todo lo marcado como PLACEHOLDER es contenido de relleno técnico, no copy aprobado.
//
// IMPORTANTE (sitio en 3 idiomas — es/en/it): este archivo quedó como
// contenido ESTRUCTURAL únicamente (ids, coordenadas x/y, rutas de
// imagen/video, números, códigos de lote). Todo el texto que se traduce
// (vista, cercanía, cita, contexto, label, descripción, los 4 titulares de
// news, las etiquetas del nav, etc.) se movió a los diccionarios por idioma
// en src/lib/i18n/dictionaries/{es,en,it}.ts, y se vuelve a juntar con estos
// datos estructurales en el componente que los consume, buscando por el id
// estable correspondiente (m.id, t.id, a.id, s.n). Así el español, el
// inglés y el italiano comparten exactamente las mismas coordenadas/fotos/
// videos sin duplicarlas tres veces.

export const site = {
  name: "HANAK",
  fullName: "HANAK Sky Resort & Villas Club",
  tagline: "El primer Sky Resort de Latinoamérica",
  developer: "Grupo Zevaot Inversiones S.A.C.",
  developerYears: "más de 5 años",
  phone: "939 217 974",
  whatsapp: "939217974",
  email: "hola@zevaot.com",
  address: "Calle Las Camelias 174, San Isidro, Lima",
  social: {
    instagram: "https://www.instagram.com/hanakskyresort/",
    tiktok:
      "https://www.tiktok.com/@hanak_skyresort?is_from_webapp=1&sender_device=pc",
    facebook:
      "https://www.facebook.com/people/Hanak-Sky-Resort-Villas-Club/61585347721515/",
    // Canal de la desarrolladora (Grupo Zevaot Inversiones), no uno propio
    // de HANAK — así lo pidió Bryan explícitamente.
    youtube: "https://www.youtube.com/@GrupoZevaotInversiones",
  },
  mapUrl: "https://maps.app.goo.gl/3dEeA3fffKtygAZv7",
};

// `key` es el id estable que usan los diccionarios (dict.nav[key]) para dar
// la etiqueta traducida; `href` es siempre la ruta canónica en español/sin
// prefijo (Header/Footer la pasan por localeHref() según el idioma activo).
export const nav = [
  { href: "/tarapoto", key: "tarapoto" },
  { href: "/hanak", key: "hanak" },
  { href: "/vistas", key: "vistas" },
  { href: "/experiencia", key: "experiencia" },
  { href: "/como-llegar", key: "comoLlegar" },
  { href: "/masterplan", key: "masterplan" },
  { href: "/news", key: "news" },
] as const;

export type Testimonio = {
  // Id estable (dict.testimonios[id]) — nunca se traduce, se usa para
  // juntar este registro con cita/contexto/testimonioNota del idioma activo.
  id: string;
  nombre: string;
  lote: string;
  // Video vertical (9:16) + poster en public/videos|images/testimonios —
  // llegaron en zips separados por cliente. video/poster ausentes ⇒
  // SociosFundadores cae al MediaPlaceholder. Mismo video en los 3 idiomas
  // (Bryan: "los videos dejalos tal cual").
  video?: string;
  poster?: string;
};

export const testimonios: Testimonio[] = [
  {
    id: "elmer-perez",
    nombre: "Elmer Pérez",
    lote: "O-10",
    video: "/videos/testimonios/elmer-perez.mp4",
    poster: "/images/testimonios/elmer-perez.jpg",
  },
  {
    id: "freddy-zambrano",
    nombre: "Freddy Zambrano",
    lote: "P-1",
    video: "/videos/testimonios/freddy-zambrano.mp4",
    poster: "/images/testimonios/freddy-zambrano.jpg",
  },
  {
    id: "julio-rocca",
    nombre: "Julio Concha Rocca",
    lote: "M-1",
    video: "/videos/testimonios/julio-rocca.mp4",
    poster: "/images/testimonios/julio-rocca.jpg",
  },
  {
    id: "stefano-gioe",
    nombre: "Stefano Gioe",
    lote: "K-2",
    video: "/videos/testimonios/stefano-gioe.mp4",
    poster: "/images/testimonios/stefano-gioe.jpg",
  },
  {
    id: "elizabeth-montoya",
    nombre: "Elizabeth Montoya",
    lote: "M-2",
    video: "/videos/testimonios/elizabeth-montoya.mp4",
    poster: "/images/testimonios/elizabeth-montoya.jpg",
  },
];

// Antes "experiencia" guardaba directo el texto en español ("Sobre las
// nubes" / "Dentro de la selva" / "Mixta") y MasterplanMap.tsx lo usaba a
// la vez como texto visible Y como key de sus mapas de color/foto
// (experienciaColor, experienciaFoto) — con 3 idiomas esas dos cosas no
// pueden ser el mismo valor (el texto se traduce, la key no). Se separan:
// `experienciaKey` es la key estable para color/foto, y el texto que se ve
// sale de dict.masterplan.experienciaLabel[experienciaKey] en el idioma
// activo.
export type ExperienciaKey = "nubes" | "selva" | "mixta";

export type Manzana = {
  id: string;
  lotes: number;
  experienciaKey: ExperienciaKey;
  // Posición en % sobre public/images/masterplan/mapa.webp. mapa.webp tenía
  // un margen crema enorme y descentrado alrededor del dibujo real (igual
  // problema que tuvo antes mapa-lima-hanak.webp) — Bryan lo notó: "el mapa
  // esta a un lado". Se recortó el archivo al contenido real y estas
  // coordenadas son las originales transformadas al nuevo encuadre
  // (x' = (x·2048 − 538) / 1343 · 100, y' = (y·1271 − 248) / 838 · 100).
  // Siguen siendo una lectura visual, no coordenadas exportadas del archivo
  // fuente, pero ahora caen sobre el dibujo en vez de sobre el margen.
  x: number;
  y: number;
};

export const manzanas: Manzana[] = [
  { id: "A", lotes: 4, experienciaKey: "nubes", x: 9.2, y: 31.5 },
  { id: "B", lotes: 6, experienciaKey: "nubes", x: 7.8, y: 38.1 },
  { id: "C", lotes: 7, experienciaKey: "nubes", x: 23.5, y: 22.6 },
  { id: "D", lotes: 6, experienciaKey: "nubes", x: 29.5, y: 26.2 },
  { id: "E", lotes: 7, experienciaKey: "nubes", x: 21.1, y: 40.2 },
  { id: "F", lotes: 6, experienciaKey: "nubes", x: 29.6, y: 45.9 },
  { id: "G", lotes: 6, experienciaKey: "selva", x: 44.4, y: 19.7 },
  { id: "H", lotes: 6, experienciaKey: "selva", x: 59.5, y: 27.9 },
  { id: "I", lotes: 9, experienciaKey: "selva", x: 55.1, y: 31.5 },
  { id: "J", lotes: 4, experienciaKey: "nubes", x: 44.1, y: 31.8 },
  { id: "K", lotes: 4, experienciaKey: "nubes", x: 39.2, y: 33.2 },
  { id: "L", lotes: 4, experienciaKey: "nubes", x: 38.9, y: 44.1 },
  { id: "M", lotes: 4, experienciaKey: "nubes", x: 44.3, y: 49.7 },
  { id: "N", lotes: 8, experienciaKey: "mixta", x: 83.0, y: 47.0 },
  { id: "O", lotes: 11, experienciaKey: "selva", x: 68.1, y: 41.7 },
  { id: "P", lotes: 4, experienciaKey: "nubes", x: 64.4, y: 45.0 },
  { id: "Q", lotes: 4, experienciaKey: "nubes", x: 63.3, y: 54.0 },
  { id: "R", lotes: 10, experienciaKey: "nubes", x: 65.8, y: 61.7 },
  { id: "S", lotes: 3, experienciaKey: "nubes", x: 89.1, y: 69.1 },
  { id: "T", lotes: 7, experienciaKey: "nubes", x: 81.3, y: 76.9 },
];

export const skyClubAmenidades = [
  { categoria: "Bienestar y relajación", items: ["Spa", "Meditación", "Jardín de aromaterapia", "Zona de sensaciones", "Zona de descanso"] },
  { categoria: "Comunidad y vida social", items: ["SUM", "Club House", "Restaurante", "Fogata y parrillas", "Alameda central"] },
  { categoria: "Productividad y aprendizaje", items: ["Coworking", "Talleres recreativos"] },
  { categoria: "Deporte y actividad física", items: ["Pádel / frontón", "Piscina infinita"] },
  { categoria: "Naturaleza y experiencias", items: ["Mirador", "Viñedo y degustación", "Aventura Hanak", "Parques"] },
];

export type AmenidadMapa = {
  id: string;
  // label/descripcion viven en dict.masterplan.amenidades[id] por idioma.
  // Posición en % sobre public/images/masterplan/mapa.webp (ya recortado,
  // ver nota en Manzana arriba) — leída visualmente sobre los elementos que
  // el propio ilustrador ya dibujó ahí (canchas, piscinas, palapas). Bryan
  // notó que "spa" y "degustación" habían quedado fuera del dibujo (caían
  // en el margen crema que tenía el archivo original) — se reubicaron
  // ambas sobre elementos reales: spa en la piscina circular secundaria,
  // degustación en el pabellón de palapas junto a la piscina principal.
  x: number;
  y: number;
};

export const amenidadesMapa: AmenidadMapa[] = [
  { id: "deportes", x: 21, y: 11.5 },
  { id: "recepcion", x: 13, y: 19 },
  { id: "piscina", x: 56, y: 64 },
  { id: "spa", x: 72, y: 59 },
  { id: "degustacion", x: 46, y: 57 },
];

// label viene de dict.tarapoto.stats[n] por idioma; valor (la cifra) no se
// traduce, es el mismo número en los 3 idiomas.
export const tarapotoStats = [
  { n: "01", valor: "1.05M+" },
  { n: "02", valor: "54%" },
  { n: "03", valor: "$100–250" },
  { n: "04", valor: "15%" },
];

// Los 4 titulares de "Próximamente" viven enteros en dict.news.calendario
// por idioma (es/en/it) — no hay dato estructural que compartir acá.
