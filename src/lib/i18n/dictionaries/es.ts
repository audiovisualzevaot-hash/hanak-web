// Diccionario CANÓNICO — español. Cada valor acá es exactamente el texto
// que ya estaba hardcodeado en el sitio antes de agregar idiomas (no se
// cambió ni una palabra al moverlo); en.ts/it.ts son la traducción de este
// mismo archivo, campo por campo. El tipo Dictionary (ver ../types.ts) se
// infiere de este archivo, así que cualquier clave nueva acá exige la
// misma clave en los otros dos (TypeScript lo marca en rojo si falta).
const es = {
  meta: {
    title: "HANAK — El primer Sky Resort de Latinoamérica",
    description:
      "El primer Sky Resort de Latinoamérica. Casas de campo sobre las nubes, en Tarapoto, Perú.",
  },

  pageTitles: {
    tarapoto: "Tarapoto — HANAK",
    hanak: "Concepto de marca — HANAK",
    vistas: "Vistas — HANAK",
    experiencia: "Experiencia — HANAK",
    comoLlegar: "Cómo Llegar — HANAK",
    masterplan: "Masterplan — HANAK",
    news: "News — HANAK",
  },

  nav: {
    tarapoto: "Tarapoto",
    hanak: "Hanak",
    vistas: "Vistas",
    experiencia: "Experiencia",
    comoLlegar: "Cómo llegar",
    masterplan: "Masterplan",
    news: "News",
  },

  header: {
    scheduleCta: "Agendar una cita",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  footer: {
    discover: "Descubre Hanak Sky Resort",
    language: "Lenguaje",
    copyright:
      "© HANAK · Prototipo digital. Datos comerciales, legales, ambientales, tiempos y disponibilidades deben validarse antes de publicación.",
  },

  reserve: {
    title: "Agenda tu cita",
    close: "Cerrar",
    subtitle: "Sin compromiso — un asesor te acompaña en todo el proceso.",
    successTitle: "¡Listo!",
    successBody: "Un asesor de HANAK se pondrá en contacto contigo muy pronto.",
    optionVideocall: "Videollamada",
    optionVisit: "Visita guiada",
    optionWhatsapp: "WhatsApp",
    namePlaceholder: "Nombre completo",
    contactPlaceholder: "Teléfono / WhatsApp",
    submitting: "Enviando...",
    submit: "Quiero que me contacten",
    errorBody: "Algo falló al enviar. Intenta nuevamente o escríbenos por WhatsApp.",
  },

  videoLightbox: {
    defaultLabel: "Reproducir video",
    close: "Cerrar video",
    comingSoonTitle: "Video en producción",
    comingSoonBody:
      "Estamos preparando el video oficial de Tarapoto. Muy pronto estará disponible aquí.",
  },

  maps: {
    rutaLimaHanakAria:
      "Mapa de Lima a Hanak: vuelo directo a Tarapoto y 30 minutos por tierra hasta el resort",
    peruMiniMapAria: "Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto",
  },

  home: {
    arriveAlt: "Grupo llegando a Hanak entre las nubes",
    arriveTitle: "Llegar a HANAK",
    arriveSubtitle: "es muy sencillo",
    siluetaAlt: "Silueta del distrito de Hanak y lockup Hanak Sky Resort & Villas Club",
    findPlaceEyebrow: "Encuentra tu lugar",
    insideTitle: "Dentro de HANAK",
    insideBody:
      "Veinte manzanas, cada una con su propia relación con el paisaje. Recorre el masterplan y encuentra la tuya.",
    exploreMasterplanCta: "Explora el masterplan",
    masterplanAlt: "Masterplan de Hanak",
    experienciasEyebrow: "Experiencias de",
    sociosTitle: "Socios Fundadores",
    newsTitle: "Historias, novedades",
    newsSubtitle: "y todo lo que va sucediendo en HANAK",
    viewAll: "Ver todo →",
  },

  priorizamosSelva: {
    discover: "Descubre Hanak",
    title: "Priorizamos la experiencia de la selva peruana",
    fromHeights: "Desde las alturas",
    exploreCta: "Explora la experiencia",
    nubesLabel: "Sobre las nubes",
    selvaLabel: "Dentro de la selva",
  },

  heroSequence: {
    heroImgAlt: "Vista aérea de los cerros de Tarapoto al atardecer",
    presenting: "Presentando a",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    cloudsImgAlt: "Mar de nubes descendiendo hacia el valle de Tarapoto",
    titleLine1: "El primer Sky Resort",
    titleLine2: "de Latinoamérica",
    bodyLine1: "Sobre las nubes de la Amazonía peruana nace un nuevo concepto de vivir:",
    bodyLine2: "Un resort donde cada momento del día es un privilegio.",
    closingBold: "HANAK no es un condominio,",
    closingRest: "Es una forma distinta de estar en el mundo.",
  },

  hanakHero: {
    imgAlt: "Hanak — paisaje y concepto de marca",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    title: "Propone una forma de vida",
    body: "Donde el bienestar, la naturaleza y la comunidad conviven de manera armoniosa.",
  },

  comoLlegarHero: {
    imgAlt: "Vista aérea de la selva y la neblina camino a Hanak",
    title: "Llegar a HANAK",
    subtitle1: "Es parte de la experiencia",
    subtitle2: "Parte del viaje",
  },

  comoLlegar: {
    conectaDesde: "Conecta desde",
    limaAHanak: "LIMA a HANAK",
    flightsBgLabel: "Vuelos directos desde Lima",
    flightsTitle: "Vuelos directos y diarios desde Lima",
    flightsBody: "Con 5 aerolíneas operando distintos horarios a lo largo del día.",
    flightLatamAlt: "Vuelo LATAM Lima–Tarapoto",
    flightSkyAlt: "Vuelo SKY Lima–Tarapoto",
    flightJetsmartAlt: "Vuelo JetSMART Lima–Tarapoto",
    tarapotoHanakLine1: "De Tarapoto",
    tarapotoHanakLine2: "a Hanak",
    tarapotoHanakMobile: "De Tarapoto a Hanak",
    tarapotoHanakBody: "A solo 30 minutos del aeropuerto de Tarapoto.",
    closingQuote:
      "Un breve trayecto que va dejando atrás la ciudad para acercarte, poco a poco, a las nubes.",
  },

  masterplanPage: {
    aerialAlt: "Vista aérea del terreno de HANAK",
    accessAlt: "Acceso al terreno de HANAK",
    jungleAerialAlt: "Vista aérea de la selva alta",
    sunarpTitle: "HANAK está registrado ante SUNARP",
    sunarpLeadIn: "Con partida registral a nombre de",
    sunarpClosing: "Un proyecto respaldado desde su origen.",
    architectureTitle: "La arquitectura de HANAK no compite con el paisaje",
    architectureBody:
      "Materiales que dialogan con el entorno, ventilación cruzada que aprovecha el clima de altura, luz natural como protagonista, y una relación constante entre interior y exterior. Cada vivienda está pensada para que el paisaje entre, no para taparlo.",
    palapaAlt: "Palapa de bienvenida HANAK",
    campanarioAlt: "Campanario de acceso a HANAK",
    palapaAtardecerAlt: "Palapa al atardecer",
    pergolaAlt: "Pérgola y jardín de HANAK",
    findPlaceEyebrow: "Encuentra tu lugar",
    theMasterplanTitle: "El Masterplan",
    theMasterplanBody:
      "Veinte manzanas, cada una con su propia relación con el paisaje. Toca un punto del mapa para conocerlo.",
  },

  masterplanMap: {
    illustrationAlt: "Ilustración del Master Plan de HANAK",
    riachuelo: "Riachuelo",
    riachueloSub: "Área de amortiguación natural",
    ingreso: "Ingreso",
    manzanaLabelTemplate: "Manzana {id}",
    closeDetailAria: "Cerrar detalle",
    closeAria: "Cerrar",
    loteCountTemplate: "{n} lotes",
    dtVista: "Vistas",
    dtExperiencia: "Experiencia",
    dtCercania: "Cercanía",
    ctaDisponibilidad: "Conocer disponibilidad",
    legendAmenidad: "Amenidad",
    experienciaLabel: {
      nubes: "Sobre las nubes",
      selva: "Dentro de la selva",
      mixta: "Mixta",
    },
    manzanas: {
      A: { vista: "Colchón de nubes y valle/ciudad", cercania: "Ingreso del resort" },
      B: { vista: "Colchón de nubes y valle/ciudad", cercania: "Ingreso del resort" },
      C: {
        vista: "Colchón de nubes, valle y cordillera (espalda)",
        cercania: "Zonas deportivas y recepción",
      },
      D: {
        vista: "Colchón de nubes, valle y cordillera (espalda)",
        cercania: "Zona de talleres recreativos",
      },
      E: { vista: "Colchón de nubes y valle/ciudad", cercania: "Ingreso del resort" },
      F: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Ingreso y zona de degustación",
      },
      G: { vista: "Cordillera", cercania: "Sendero de jardines Hanak y zonas deportivas" },
      H: { vista: "Inmersión total en flora y fauna", cercania: "Sendero de jardines Hanak" },
      I: { vista: "Cordillera y valle de Tarapoto", cercania: "Inicio de la zona inmersiva" },
      J: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Pasaje Inti (con Manzana K), talleres y parque central",
      },
      K: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Pasaje Inti (con Manzana J), talleres y parque central",
      },
      L: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Pasaje Illari (con Manzana M), degustación y parque central",
      },
      M: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Club House, piscina infinita y degustación",
      },
      N: {
        vista: "Mixta: colchón de nubes/valle y selva",
        cercania: "Parque 1, tramo final del proyecto",
      },
      O: { vista: "Cordillera, inmersa en selva", cercania: "Parque 1" },
      P: { vista: "Colchón de nubes y valle/ciudad", cercania: "Parque 1 y parque central" },
      Q: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Parque central, parque 1, Club House y piscina infinita",
      },
      R: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Club House, piscina infinita y parque central",
      },
      S: { vista: "Colchón de nubes y valle/ciudad", cercania: "—" },
      T: {
        vista: "Colchón de nubes y valle/ciudad",
        cercania: "Club House y piscina infinita",
      },
    } as Record<string, { vista: string; cercania: string }>,
    amenidades: {
      deportes: { label: "Zona deportiva", descripcion: "Canchas de pádel, tenis y básquet." },
      recepcion: {
        label: "Recepción · Club House",
        descripcion: "Punto de bienvenida y encuentro social del proyecto.",
      },
      piscina: {
        label: "Piscina infinita",
        descripcion: "La piscina principal de Sky Club, con vista abierta al valle.",
      },
      spa: {
        label: "Spa y bienestar",
        descripcion: "Zona de relajación, meditación y aromaterapia.",
      },
      degustacion: {
        label: "Viñedo y degustación",
        descripcion: "Zona de cata y experiencias gastronómicas al aire libre.",
      },
    } as Record<string, { label: string; descripcion: string }>,
  },

  socios: {
    testimonioLabelTemplate: "Testimonio — {name}",
    ownerLoteTemplate: "— Propietario, Lote {lote}",
    prevAria: "Testimonio anterior",
    nextAria: "Siguiente testimonio",
    testimonios: {
      "elmer-perez": {
        cita: "Vivan la experiencia que yo estoy viviendo en el proyecto, espectacular.",
        contexto: "Peruano, vive en Italia.",
      },
      "freddy-zambrano": {
        cita: "Es muy accesible: en una hora llegas de Lima y en una hora regresas.",
        contexto: "Vive en Estados Unidos.",
        nota: "Testimonio de su hermana, quien visitó el proyecto en su representación",
      },
      "julio-rocca": {
        cita: "Las vistas son impresionantes.",
        contexto: "De Huaraz, Áncash — viajó junto a su hijo.",
      },
      "stefano-gioe": {
        cita: "Mi asesor me ayudó en todo el proceso.",
        contexto: "Italiano, encantado con la selva peruana.",
      },
      "elizabeth-montoya": {
        cita: "La rentabilidad del proyecto me convenció.",
        contexto: "Peruana, vive en España.",
      },
    } as Record<string, { cita: string; contexto: string; nota?: string }>,
  },

  experiencia: {
    heroEyebrow: "HANAK se vive en tres tiempos",
    heroWord: "EXPERIENCIA",
    tabNubes: "Sobre las nubes",
    tabSelva: "Inmersión en selva",
    tabSkyClub: "Sky Club",
    nubesHeroLabel: "Sobre las nubes — la experiencia insignia",
    nubesEyebrow: "Sobre las nubes",
    nubesTitleLine1: "La experiencia",
    nubesTitleLine2: "insignia",
    nubesVideoLabel: "Reproducir video — La experiencia insignia",
    skyClubTitle: "Sky Club",
    skyClubHeroLabel: "Sky Club — amenidades de Hanak",
    amenidadesIntro: "El sistema completo de",
    amenidadesItalic: "Amenidades de HANAK",
    amenidadesBody:
      "El conjunto de espacios y servicios pensados para que cada propietario viva en un resort de categoría.",
    photoAlts: {
      alameda: "Sky Club — alameda y jardines de Hanak",
      columpios: "Sky Club — columpios en la pérgola",
      maloca1: "Sky Club — recepción de la maloca",
      maloca2: "Sky Club — maloca al atardecer",
      parqueCentral: "Sky Club — zona de pérgolas y parque central",
    },
  },

  experienciaReveal: {
    cloudsAlt: "Sobre las nubes — colchón de nubes sobre el valle",
    quotePart1: "Vistas abiertas hacia el",
    quoteBold1: "colchón de nubes",
    quotePart2: ", el valle y la ciudad de Tarapoto — el momento que le da",
    quoteBold2: "nombre a todo el proyecto",
    quoteEnd: ".",
    jungleAlt: "Inmersión en la selva — sendero entre la vegetación nativa de Hanak",
    eyebrow: "Inmersión en selva",
    titleLine1: "Conectando",
    titleLine2: "con la selva",
    caption1: "Para quienes eligen las manzanas más cercanas a la vegetación nativa.",
    caption2: "Rodeados de flora y fauna, con la selva como vecina directa.",
  },

  vistas: {
    heroAlt: "Vistas de Hanak Sky Resort — panorámica del terreno y el valle",
    subtitle: "Se construyó mirando a las nubes",
    videoLabel: "Reproducir video de Vistas",
    navEyebrow: "Vistas de Hanak Sky Resort",
    closingBanner: "Cuatro vistas. Un mismo lugar. Ninguna se repite dos veces.",
    momentos: {
      amanecer: {
        categoria: "AMANECER",
        titulo: "Primer resplandor",
        texto:
          "El amanecer llega por el lado opuesto a la ciudad, desde la Cordillera Escalera — pintando el cielo antes de que el resto del valle despierte.",
      },
      "mar-de-nubes": {
        categoria: "MAR DE NUBES",
        titulo: "Mar de nubes",
        texto:
          'Sobre el valle y la ciudad de Tarapoto, casi todas las mañanas, aparece el colchón de nubes: el fenómeno que le da sentido al nombre HANAK, "sobre las nubes".',
      },
      atardecer: {
        categoria: "ATARDECER",
        titulo: "Hora dorada",
        texto:
          "El atardecer sucede al sur del terreno, detrás del ingreso — un segundo espectáculo para quienes se quedan hasta el final del día.",
      },
      // "ANOCHER" es un typo del copy original (falta "CE") — se deja tal
      // cual en español porque Bryan no pidió corregirlo en esta tarea
      // (solo traducir); en/it sí usan la palabra completa y correcta,
      // ver nota en esos archivos.
      anochecer: {
        categoria: "ANOCHER",
        titulo: "Bajo las estrellas",
        texto:
          "Lejos del resplandor de la ciudad, la altura de Hanak despeja el cielo nocturno — un cierre distinto para cada día.",
      },
    } as Record<string, { categoria: string; titulo: string; texto: string }>,
  },

  tarapoto: {
    heroImgAlt: "Valle de Tarapoto entre montañas y nubes",
    introLine1: "Dejó de ser solo un destino de turismo ecológico",
    introLine2:
      "Para convertirse en uno de los mercados inmobiliarios de mayor proyección del país.",
    introLine3:
      "La demanda es constante impulsada por escapadas de fin de semana, turismo corporativo y feriados largos y el segmento premium es, con diferencia, el que mejor la captura.",
    videoLabel: "Reproducir video de Tarapoto",
    statNumberTemplate: "N.º {n}",
    disclaimer:
      "Cifras de mercado y sector, no una proyección de rentabilidad garantizada para HANAK. Fuente: análisis de mercado independiente, 2026.",
    plazaAlt: "Plaza de Armas de Tarapoto, vista aérea",
    cultureBold: "Tarapoto respira una cultura",
    cultureRest: "que no se replica en ningún otro punto del país.",
    identityBody:
      "La calidez de Lamas, con su identidad kichwa viva en cada calle; el Barrio Wayku, guardián de tradiciones que atraviesan generaciones; y una gastronomía que mezcla lo amazónico con lo andino en cada plato.",
    livingNear: "Vivir en Hanak es también vivir cerca de esta identidad",
    growthLine1: "El crecimiento de Tarapoto",
    growthLine2: "no es una promesa",
    growthBold: "Es una tendencia consolidada.",
    growthRest:
      "La expansión de la mancha urbana hacia corredores como Morales, La Banda de Shilcayo y Sauce, sumada a la mejora de conectividad vial y de servicios, viene sosteniendo una de las plusvalías más firmes de la selva peruana.",
    gatewayTitle:
      "Tarapoto es la puerta de entrada de los paisajes más impresionantes de la Amazonía:",
    gatewayBody1:
      "La caída de agua de Ahuashiyacu, la imponente Cordillera Escalera y las aguas turquesa de la Laguna Azul.",
    gatewayBody2:
      "Un destino que ya atrae a miles de visitantes cada año y que ahora también puede ser tu lugar.",
    culturaAlts: [
      "Cacao de San Martín",
      "Juane, plato típico amazónico",
      "Danza típica sanmartinense",
      "Catarata de Ahuashiyacu",
      "Fauna de la Amazonía peruana",
    ],
    secuenciaAlts: [
      "Lamas, pueblo colonial entre cerros",
      "Centro de Tarapoto en expansión",
      "Cerros y trocha hacia Hanak",
      "Valle de Tarapoto entre montañas y nubes",
      "Aves propias de la selva amazónica",
    ],
    ultimaSecuenciaAlts: [
      "Atardecer sobre los cerros de Tarapoto",
      "Parapente sobre la Cordillera Escalera",
      "Río serpenteando el valle amazónico",
      "Cacao recién cosechado",
    ],
    stats: {
      "01": "Turistas anuales que recibe San Martín — un flujo que ya no depende de temporada alta.",
      "02": "Ocupación anual promedio del segmento premium de casas de campo en Tarapoto, frente a un 26.8% del mercado general.",
      "03": "Tarifa diaria (ADR) del segmento premium, muy por encima del promedio general de $44.",
      "04": "Apreciación anual promedio del suelo rural-urbano en los corredores de mayor crecimiento de la región durante los últimos cinco años.",
    } as Record<string, string>,
  },

  hanak: {
    quoteBold: "Es Wellness Real Estate:",
    quoteRest: "bienes raíces pensados desde la salud física, mental y del entorno.",
    h2Forest: "Creemos que desarrollar un lugar",
    h2Olive: "no significa transformarlo en algo ajeno a sí mismo",
    picnicAlt1: "Hanak — picnic al atardecer",
    picnicAlt2: "Hanak — mesa de picnic",
    picnicAlt3: "Hanak — trabajo en el terreno",
    picnicAlt4: "Hanak — preparación del terreno",
    picnicAlt5: "Hanak — equipo en el terreno",
    sustainBody1:
      "Estamos comprometidos con reforestar las zonas del terreno que antes tenían vegetación degradada, integrar la flora nativa a cada rincón del proyecto, y avanzar hacia una operación libre de plástico y neutra en carbono.",
    sustainBody2:
      "No lo llamamos un logro — lo llamamos una dirección hacia la que trabajamos todos los días.",
    terrenoLabel: "Hanak — el terreno como paisaje",
    sellPart1: "En un sector donde muchos venden metros cuadrados,",
    sellPart2: "HANAK eligió vender pertenencia: a un paisaje,",
    paisajeLabel: "Hanak — un paisaje propio",
    comunidadLabel: "Hanak — comunidad de socios fundadores",
    sellPart3:
      "a una comunidad y a una forma de entender el descanso que en Latinoamérica todavía no tenía nombre propio — hasta ahora.",
  },

  news: {
    title: "News",
    intro:
      "Historias, novedades y todo lo que va sucediendo en HANAK — antes que en cualquier otro lugar.",
    comingSoon: "Próximamente",
    subscribeTitle: "Suscríbete y entérate primero de cada novedad de HANAK",
    emailPlaceholder: "Tu email",
    subscribeButton: "Suscribirme",
    calendario: [
      "Por qué Tarapoto se está convirtiendo en el destino de inversión favorito de los peruanos en el extranjero",
      "Cómo es un día en Hanak: sobre las nubes, dentro de la selva",
      "Guía rápida: qué hacer en Tarapoto si vienes a conocer tu lote",
      "El colchón de nubes, explicado: por qué Hanak tiene esta vista y qué la hace posible",
    ],
  },
};

export default es;
