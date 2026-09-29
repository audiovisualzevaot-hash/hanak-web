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
};

export const testimonios: Testimonio[] = [
  {
    nombre: "Elmer Pérez",
    lote: "O-10",
    cita: "Vivan la experiencia que yo estoy viviendo en el proyecto, espectacular.",
    contexto: "Peruano, vive en Italia.",
  },
  {
    nombre: "Freddy Zambrano",
    lote: "P-1",
    cita: "Es muy accesible: en una hora llegas de Lima y en una hora regresas.",
    contexto: "Vive en Estados Unidos.",
  },
  {
    nombre: "Julio Concha Rocca",
    lote: "M-1",
    cita: "Las vistas son impresionantes.",
    contexto: "De Huaraz, Áncash — viajó junto a su hijo.",
  },
  {
    nombre: "Stefano Gioe",
    lote: "K-2",
    cita: "Mi asesor me ayudó en todo el proceso.",
    contexto: "Italiano, encantado con la selva peruana.",
  },
  {
    nombre: "Elizabeth Montoya",
    lote: "M-2",
    cita: "La rentabilidad del proyecto me convenció.",
    contexto: "Peruana, vive en España.",
  },
];

export type Manzana = {
  id: string;
  lotes: number;
  vista: string;
  experiencia: "Sobre las nubes" | "Dentro de la selva" | "Mixta";
  cercania: string;
  // Posición en % sobre public/images/masterplan/mapa.webp. Calculadas a
  // partir de la captura de referencia que Bryan mandó con las manzanas ya
  // rotuladas: se leyó el pixel de cada pin en esa captura y se transformó al
  // encuadre de mapa.webp (que tiene más margen crema alrededor). Precisión
  // alta pero no perfecta — es una lectura visual, no coordenadas exportadas
  // del archivo fuente.
  x: number;
  y: number;
};

export const manzanas: Manzana[] = [
  { id: "A", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 32.3, y: 40.3 },
  { id: "B", lotes: 6, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 31.4, y: 44.6 },
  { id: "C", lotes: 7, vista: "Colchón de nubes, valle y cordillera (espalda)", experiencia: "Sobre las nubes", cercania: "Zonas deportivas y recepción", x: 41.7, y: 34.4 },
  { id: "D", lotes: 6, vista: "Colchón de nubes, valle y cordillera (espalda)", experiencia: "Sobre las nubes", cercania: "Zona de talleres recreativos", x: 45.6, y: 36.8 },
  { id: "E", lotes: 7, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso del resort", x: 40.1, y: 46.0 },
  { id: "F", lotes: 6, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Ingreso y zona de degustación", x: 45.7, y: 49.8 },
  { id: "G", lotes: 6, vista: "Cordillera", experiencia: "Dentro de la selva", cercania: "Sendero de jardines Hanak y zonas deportivas", x: 55.4, y: 32.5 },
  { id: "H", lotes: 6, vista: "Inmersión total en flora y fauna", experiencia: "Dentro de la selva", cercania: "Sendero de jardines Hanak", x: 65.3, y: 37.9 },
  { id: "I", lotes: 9, vista: "Cordillera y valle de Tarapoto", experiencia: "Dentro de la selva", cercania: "Inicio de la zona inmersiva", x: 62.4, y: 40.3 },
  { id: "J", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Inti (con Manzana K), talleres y parque central", x: 55.2, y: 40.5 },
  { id: "K", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Inti (con Manzana J), talleres y parque central", x: 52.0, y: 41.4 },
  { id: "L", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Pasaje Illari (con Manzana M), degustación y parque central", x: 51.8, y: 48.6 },
  { id: "M", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House, piscina infinita y degustación", x: 55.3, y: 52.3 },
  { id: "N", lotes: 8, vista: "Mixta: colchón de nubes/valle y selva", experiencia: "Mixta", cercania: "Parque 1, tramo final del proyecto", x: 80.7, y: 50.5 },
  { id: "O", lotes: 11, vista: "Cordillera, inmersa en selva", experiencia: "Dentro de la selva", cercania: "Parque 1", x: 70.9, y: 47.0 },
  { id: "P", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Parque 1 y parque central", x: 68.5, y: 49.2 },
  { id: "Q", lotes: 4, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Parque central, parque 1, Club House y piscina infinita", x: 67.8, y: 55.1 },
  { id: "R", lotes: 10, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House, piscina infinita y parque central", x: 69.4, y: 60.2 },
  { id: "S", lotes: 3, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "—", x: 84.7, y: 65.1 },
  { id: "T", lotes: 7, vista: "Colchón de nubes y valle/ciudad", experiencia: "Sobre las nubes", cercania: "Club House y piscina infinita", x: 79.6, y: 70.2 },
];

export const skyClubAmenidades = [
  { categoria: "Bienestar y relajación", items: ["Spa", "Meditación", "Jardín de aromaterapia", "Zona de sensaciones", "Zona de descanso"] },
  { categoria: "Comunidad y vida social", items: ["SUM", "Club House", "Restaurante", "Fogata y parrillas", "Alameda central"] },
  { categoria: "Productividad y aprendizaje", items: ["Coworking", "Talleres recreativos"] },
  { categoria: "Deporte y actividad física", items: ["Pádel / frontón", "Piscina infinita"] },
  { categoria: "Naturaleza y experiencias", items: ["Mirador", "Viñedo y degustación", "Aventura Hanak", "Parques"] },
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
