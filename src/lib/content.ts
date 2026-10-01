// Contenido final aprobado — HANAK Sky Resort & Villas Club
// Fuente: documento de copy final + brief de contenido (sesión de trabajo con Bryan / Grupo Zevaot)
// Todo lo marcado como PLACEHOLDER es contenido de relleno técnico, no copy aprobado.

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

export const nav = [
  { href: "/tarapoto", label: "Tarapoto" },
  { href: "/hanak", label: "Hanak" },
  { href: "/vistas", label: "Vistas" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/como-llegar", label: "Cómo llegar" },
  { href: "/masterplan", label: "Masterplan" },
  { href: "/news", label: "News" },
];

export type Testimonio = {
  nombre: string;
  lote: string;
  cita: string;
  contexto: string;
  // Video vertical (9:16) + poster en public/videos|images/testimonios —
  // llegaron en zips separados por cliente. video/poster ausentes ⇒
  // SociosFundadores cae al MediaPlaceholder.
  video?: string;
  poster?: string;
  // Nota que se muestra ARRIBA del nombre cuando el testimonio lo da otra
  // persona en representación del propietario (ej. Freddy vive en EE.UU.
  // y no pudo viajar; su hermana visitó el proyecto y dio el testimonio).
  testimonioNota?: string;
};

export const testimonios: Testimonio[] = [
  {
    nombre: "Elmer Pérez",
    lote: "O-10",
    cita: "Vivan la experiencia que yo estoy viviendo en el proyecto, espectacular.",
    contexto: "Peruano, vive en Italia.",
    video: "/videos/testimonios/elmer-perez.mp4",
    poster: "/images/testimonios/elmer-perez.jpg",
  },
  {
    nombre: "Freddy Zambrano",
    lote: "P-1",
    cita: "Es muy accesible: en una hora llegas de Lima y en una hora regresas.",
    contexto: "Vive en Estados Unidos.",
    video: "/videos/testimonios/freddy-zambrano.mp4",
    poster: "/images/testimonios/freddy-zambrano.jpg",
    testimonioNota: "Testimonio de su hermana, quien visitó el proyecto en su representación",
  },
  {
    nombre: "Julio Concha Rocca",
    lote: "M-1",
    cita: "Las vistas son impresionantes.",
    contexto: "De Huaraz, Áncash — viajó junto a su hijo.",
    video: "/videos/testimonios/julio-rocca.mp4",
    poster: "/images/testimonios/julio-rocca.jpg",
  },
  {
    nombre: "Stefano Gioe",
    lote: "K-2",
    cita: "Mi asesor me ayudó en todo el proceso.",
    contexto: "Italiano, encantado con la selva peruana.",
    video: "/videos/testimonios/stefano-gioe.mp4",
    poster: "/images/testimonios/stefano-gioe.jpg",
  },
  {
    nombre: "Elizabeth Montoya",
    lote: "M-2",
    cita: "La rentabilidad del proyecto me convenció.",
    contexto: "Peruana, vive en España.",
    video: "/videos/testimonios/elizabeth-montoya.mp4",
    poster: "/images/testimonios/elizabeth-montoya.jpg",
  },
];

export type Manzana = {
  id: string;
  lotes: number;
  vista: string;
  experiencia: "Sobre las nubes" | "Dentro de la selva" | "Mixta";
  cercania: string;
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
  { id: "A", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 9.2, y: 31.5 },
  { id: "B", lotes: 6, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 7.8, y: 38.1 },
  { id: "C", lotes: 7, vista: "Colchón de nubes, valle y cordillera (espalda)", experiencia: "Sobre las nubes", cercania: "Zonas deportivas y recepción", x: 23.5, y: 22.6 },
  { id: "D", lotes: 6, vista: "Colchón de nubes, valle y cordillera (espalda)", experiencia: "Sobre las nubes", cercania: "Zona de talleres recreativos", x: 29.5, y: 26.2 },
  { id: "E", lotes: 7, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 21.1, y: 40.2 },
  { id: "F", lotes: 6, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso y zona de degustación", x: 29.6, y: 45.9 },
  { id: "G", lotes: 6, vista: "Cordillera", experiencia: "Dentro de la selva", cercania: "Sendero de jardines Hanak y zonas deportivas", x: 44.4, y: 19.7 },
  { id: "H", lotes: 6, vista: "Inmersión total en flora y fauna", experiencia: "Dentro de la selva", cercania: "Sendero de jardines Hanak", x: 59.5, y: 27.9 },
  { id: "I", lotes: 9, vista: "Cordillera y valle de Tarapoto", experiencia: "Dentro de la selva", cercania: "Inicio de la zona inmersiva", x: 55.1, y: 31.5 },
  { id: "J", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Inti (con Manzana K), talleres y parque central", x: 44.1, y: 31.8 },
  { id: "K", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Inti (con Manzana J), talleres y parque central", x: 39.2, y: 33.2 },
  { id: "L", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Illari (con Manzana M), degustación y parque central", x: 38.9, y: 44.1 },
  { id: "M", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House, piscina infinita y degustación", x: 44.3, y: 49.7 },
  { id: "N", lotes: 8, vista: "Mixta: colchón de nubes/valle y selva", experiencia: "Mixta", cercania: "Parque 1, tramo final del proyecto", x: 83.0, y: 47.0 },
  { id: "O", lotes: 11, vista: "Cordillera, inmersa en selva", experiencia: "Dentro de la selva", cercania: "Parque 1", x: 68.1, y: 41.7 },
  { id: "P", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Parque 1 y parque central", x: 64.4, y: 45.0 },
  { id: "Q", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Parque central, parque 1, Club House y piscina infinita", x: 63.3, y: 54.0 },
  { id: "R", lotes: 10, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House, piscina infinita y parque central", x: 65.8, y: 61.7 },
  { id: "S", lotes: 3, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "—", x: 89.1, y: 69.1 },
  { id: "T", lotes: 7, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House y piscina infinita", x: 81.3, y: 76.9 },
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
  label: string;
  descripcion: string;
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
  { id: "deportes", label: "Zona deportiva", descripcion: "Canchas de pádel, tenis y básquet.", x: 21, y: 11.5 },
  { id: "recepcion", label: "Recepción · Club House", descripcion: "Punto de bienvenida y encuentro social del proyecto.", x: 13, y: 19 },
  { id: "piscina", label: "Piscina infinita", descripcion: "La piscina principal de Sky Club, con vista abierta al valle.", x: 56, y: 64 },
  { id: "spa", label: "Spa y bienestar", descripcion: "Zona de relajación, meditación y aromaterapia.", x: 72, y: 59 },
  { id: "degustacion", label: "Viñedo y degustación", descripcion: "Zona de cata y experiencias gastronómicas al aire libre.", x: 46, y: 57 },
];

export const tarapotoStats = [
  { n: "01", valor: "1.05M+", label: "Turistas anuales que recibe San Martín — un flujo que ya no depende de temporada alta." },
  { n: "02", valor: "54%", label: "Ocupación anual promedio del segmento premium de casas de campo en Tarapoto, frente a un 26.8% del mercado general." },
  { n: "03", valor: "$100–250", label: "Tarifa diaria (ADR) del segmento premium, muy por encima del promedio general de $44." },
  { n: "04", valor: "15%", label: "Apreciación anual promedio del suelo rural-urbano en los corredores de mayor crecimiento de la región durante los últimos cinco años." },
];

export const newsCalendario = [
  "Por qué Tarapoto se está convirtiendo en el destino de inversión favorito de los peruanos en el extranjero",
  "Cómo es un día en Hanak: sobre las nubes, dentro de la selva",
  "Guía rápida: qué hacer en Tarapoto si vienes a conocer tu lote",
  "El colchón de nubes, explicado: por qué Hanak tiene esta vista y qué la hace posible",
];
