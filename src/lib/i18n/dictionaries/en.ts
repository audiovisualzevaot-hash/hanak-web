import type { Dictionary } from "../types";

// Traducción al inglés — criterio profesional, transmitiendo el mismo
// sentido que el español (es.ts), no una traducción palabra por palabra.
// Se mantienen sin traducir: "HANAK"/"Hanak", "Sky Resort & Villas Club",
// "Sky Club", nombres propios de lugares (Tarapoto, San Martín, Lamas,
// Cordillera Escalera, etc.), nombres de personas y códigos de lote, y los
// términos legales peruanos (SUNARP, "Grupo Zevaot Inversiones S.A.C.").
const en: Dictionary = {
  meta: {
    title: "HANAK — The First Sky Resort in Latin America",
    description:
      "The first Sky Resort in Latin America. Country homes above the clouds, in Tarapoto, Peru.",
  },

  pageTitles: {
    tarapoto: "Tarapoto — HANAK",
    hanak: "Brand Concept — HANAK",
    vistas: "Views — HANAK",
    experiencia: "Experience — HANAK",
    comoLlegar: "How to Get There — HANAK",
    masterplan: "Masterplan — HANAK",
    news: "News — HANAK",
  },

  nav: {
    tarapoto: "Tarapoto",
    hanak: "Hanak",
    vistas: "Views",
    experiencia: "Experience",
    comoLlegar: "How to get there",
    masterplan: "Masterplan",
    news: "News",
  },

  header: {
    scheduleCta: "Schedule a visit",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    discover: "Discover Hanak Sky Resort",
    language: "Language",
    copyright:
      "© HANAK · Digital prototype. Commercial, legal and environmental data, along with timelines and availability, must be verified before publication.",
  },

  reserve: {
    title: "Schedule your visit",
    close: "Close",
    subtitle: "No commitment — an advisor will guide you through the whole process.",
    successTitle: "All set!",
    successBody: "A HANAK advisor will get in touch with you very soon.",
    optionVideocall: "Video call",
    optionVisit: "Guided visit",
    optionWhatsapp: "WhatsApp",
    namePlaceholder: "Full name",
    contactPlaceholder: "Phone / WhatsApp",
    submitting: "Sending...",
    submit: "I'd like to be contacted",
    errorBody: "Something went wrong while sending. Try again or message us on WhatsApp.",
  },

  videoLightbox: {
    defaultLabel: "Play video",
    close: "Close video",
    comingSoonTitle: "Video in production",
    comingSoonBody:
      "We're preparing the official Tarapoto video. It will be available here very soon.",
  },

  maps: {
    rutaLimaHanakAria:
      "Map from Lima to Hanak: a direct flight to Tarapoto and a 30-minute drive to the resort",
    peruMiniMapAria: "Hanak's location, between Lamas, Tarapoto and the airport",
  },

  home: {
    arriveAlt: "Group arriving at Hanak among the clouds",
    arriveTitle: "Getting to HANAK",
    arriveSubtitle: "is very simple",
    siluetaAlt: "Silhouette of the Hanak district and the Hanak Sky Resort & Villas Club lockup",
    findPlaceEyebrow: "Find your place",
    insideTitle: "Inside HANAK",
    insideBody:
      "Twenty blocks, each with its own relationship to the landscape. Explore the masterplan and find yours.",
    exploreMasterplanCta: "Explore the masterplan",
    masterplanAlt: "Hanak masterplan",
    experienciasEyebrow: "Experiences from",
    sociosTitle: "Founding Partners",
    newsTitle: "Stories, updates",
    newsSubtitle: "and everything happening at HANAK",
    viewAll: "View all →",
  },

  priorizamosSelva: {
    discover: "Discover Hanak",
    title: "We prioritize the experience of the Peruvian jungle",
    fromHeights: "From the heights",
    exploreCta: "Explore the experience",
    nubesLabel: "Above the Clouds",
    selvaLabel: "Inside the Jungle",
  },

  heroSequence: {
    heroImgAlt: "Aerial view of the Tarapoto hills at sunset",
    presenting: "Presenting",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    cloudsImgAlt: "Sea of clouds descending toward the Tarapoto valley",
    titleLine1: "The first Sky Resort",
    titleLine2: "in Latin America",
    bodyLine1: "Above the clouds of the Peruvian Amazon, a new way of living is born:",
    bodyLine2: "A resort where every moment of the day is a privilege.",
    closingBold: "HANAK is not a condominium,",
    closingRest: "it's a different way of being in the world.",
  },

  hanakHero: {
    imgAlt: "Hanak — landscape and brand concept",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    title: "Offering a way of life",
    body: "Where wellness, nature and community coexist in harmony.",
  },

  comoLlegarHero: {
    imgAlt: "Aerial view of the jungle and mist on the way to Hanak",
    title: "Getting to HANAK",
    subtitle1: "It's part of the experience",
    subtitle2: "Part of the journey",
  },

  comoLlegar: {
    conectaDesde: "Connect from",
    limaAHanak: "LIMA to HANAK",
    flightsBgLabel: "Direct flights from Lima",
    flightsTitle: "Direct, daily flights from Lima",
    flightsBody: "With 5 airlines operating different schedules throughout the day.",
    flightLatamAlt: "LATAM flight Lima–Tarapoto",
    flightSkyAlt: "SKY flight Lima–Tarapoto",
    flightJetsmartAlt: "JetSMART flight Lima–Tarapoto",
    tarapotoHanakLine1: "From Tarapoto",
    tarapotoHanakLine2: "to Hanak",
    tarapotoHanakMobile: "From Tarapoto to Hanak",
    tarapotoHanakBody: "Just 30 minutes from Tarapoto airport.",
    closingQuote:
      "A short journey that leaves the city behind, bringing you closer, little by little, to the clouds.",
  },

  masterplanPage: {
    aerialAlt: "Aerial view of the HANAK property",
    accessAlt: "Access to the HANAK property",
    jungleAerialAlt: "Aerial view of the high jungle",
    sunarpTitle: "HANAK is registered with SUNARP",
    sunarpLeadIn: "Registered under public deed in the name of",
    sunarpClosing: "A project backed from its very origin.",
    architectureTitle: "HANAK's architecture doesn't compete with the landscape",
    architectureBody:
      "Materials that speak to their surroundings, cross-ventilation that makes the most of the highland climate, natural light as the protagonist, and a constant relationship between indoors and out. Every home is designed to let the landscape in, not shut it out.",
    palapaAlt: "HANAK welcome palapa",
    campanarioAlt: "HANAK entrance bell tower",
    palapaAtardecerAlt: "Palapa at sunset",
    pergolaAlt: "HANAK pergola and garden",
    findPlaceEyebrow: "Find your place",
    theMasterplanTitle: "The Masterplan",
    theMasterplanBody:
      "Twenty blocks, each with its own relationship to the landscape. Tap a point on the map to learn more.",
  },

  masterplanMap: {
    illustrationAlt: "Illustration of the HANAK Masterplan",
    riachuelo: "Stream",
    riachueloSub: "Natural buffer zone",
    ingreso: "Entrance",
    manzanaLabelTemplate: "Block {id}",
    closeDetailAria: "Close detail",
    closeAria: "Close",
    loteCountTemplate: "{n} lots",
    dtVista: "Views",
    dtExperiencia: "Experience",
    dtCercania: "Nearby",
    ctaDisponibilidad: "Check availability",
    legendAmenidad: "Amenity",
    experienciaLabel: {
      nubes: "Above the Clouds",
      selva: "Inside the Jungle",
      mixta: "Mixed",
    },
    manzanas: {
      A: { vista: "Sea of clouds and valley/city views", cercania: "Resort entrance" },
      B: { vista: "Sea of clouds and valley/city views", cercania: "Resort entrance" },
      C: {
        vista: "Sea of clouds, valley and mountain range (rear)",
        cercania: "Sports areas and reception",
      },
      D: {
        vista: "Sea of clouds, valley and mountain range (rear)",
        cercania: "Recreational workshop area",
      },
      E: { vista: "Sea of clouds and valley/city views", cercania: "Resort entrance" },
      F: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Entrance and tasting area",
      },
      G: { vista: "Mountain range", cercania: "Hanak garden trail and sports areas" },
      H: { vista: "Full immersion in flora and fauna", cercania: "Hanak garden trail" },
      I: { vista: "Mountain range and Tarapoto valley", cercania: "Start of the immersive zone" },
      J: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Inti Passage (with Block K), workshops and central park",
      },
      K: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Inti Passage (with Block J), workshops and central park",
      },
      L: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Illari Passage (with Block M), tasting area and central park",
      },
      M: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Club House, infinity pool and tasting area",
      },
      N: {
        vista: "Mixed: sea of clouds/valley and jungle",
        cercania: "Park 1, final stretch of the project",
      },
      O: { vista: "Mountain range, immersed in jungle", cercania: "Park 1" },
      P: { vista: "Sea of clouds and valley/city views", cercania: "Park 1 and central park" },
      Q: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Central park, Park 1, Club House and infinity pool",
      },
      R: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Club House, infinity pool and central park",
      },
      S: { vista: "Sea of clouds and valley/city views", cercania: "—" },
      T: {
        vista: "Sea of clouds and valley/city views",
        cercania: "Club House and infinity pool",
      },
    },
    amenidades: {
      deportes: { label: "Sports Area", descripcion: "Paddle, tennis and basketball courts." },
      recepcion: {
        label: "Reception · Club House",
        descripcion: "The project's welcome and social gathering point.",
      },
      piscina: {
        label: "Infinity Pool",
        descripcion: "Sky Club's main pool, with open views over the valley.",
      },
      spa: {
        label: "Spa & Wellness",
        descripcion: "Relaxation, meditation and aromatherapy area.",
      },
      degustacion: {
        label: "Vineyard & Tasting",
        descripcion: "Outdoor tasting area and gastronomic experiences.",
      },
    },
  },

  socios: {
    testimonioLabelTemplate: "Testimonial — {name}",
    ownerLoteTemplate: "— Owner, Lot {lote}",
    prevAria: "Previous testimonial",
    nextAria: "Next testimonial",
    testimonios: {
      "elmer-perez": {
        cita: "Experience what I'm experiencing in this project — it's spectacular.",
        contexto: "Peruvian, lives in Italy.",
      },
      "freddy-zambrano": {
        cita: "It's very accessible: an hour from Lima, and an hour back.",
        contexto: "Lives in the United States.",
        nota: "Testimonial given by his sister, who visited the project on his behalf",
      },
      "julio-rocca": {
        cita: "The views are breathtaking.",
        contexto: "From Huaraz, Áncash — traveled with his son.",
      },
      "stefano-gioe": {
        cita: "My advisor helped me through the whole process.",
        contexto: "Italian, captivated by the Peruvian jungle.",
      },
      "elizabeth-montoya": {
        cita: "The project's return on investment convinced me.",
        contexto: "Peruvian, lives in Spain.",
      },
    },
  },

  experiencia: {
    heroEyebrow: "HANAK is lived in three chapters",
    heroWord: "EXPERIENCE",
    tabNubes: "Above the Clouds",
    tabSelva: "Jungle Immersion",
    tabSkyClub: "Sky Club",
    nubesHeroLabel: "Above the Clouds — the signature experience",
    nubesEyebrow: "Above the Clouds",
    nubesTitleLine1: "The Signature",
    nubesTitleLine2: "Experience",
    nubesVideoLabel: "Play video — The Signature Experience",
    skyClubTitle: "Sky Club",
    skyClubHeroLabel: "Sky Club — Hanak amenities",
    amenidadesIntro: "The complete system of",
    amenidadesItalic: "HANAK Amenities",
    amenidadesBody:
      "The set of spaces and services designed so every owner lives in a world-class resort.",
    photoAlts: {
      alameda: "Sky Club — Hanak promenade and gardens",
      columpios: "Sky Club — swings at the pergola",
      maloca1: "Sky Club — maloca reception",
      maloca2: "Sky Club — maloca at sunset",
      parqueCentral: "Sky Club — pergola area and central park",
    },
  },

  experienciaReveal: {
    cloudsAlt: "Above the Clouds — a sea of clouds over the valley",
    quotePart1: "Open views toward the",
    quoteBold1: "sea of clouds",
    quotePart2: ", the valley and the city of Tarapoto — the moment that gives",
    quoteBold2: "the whole project its name",
    quoteEnd: ".",
    jungleAlt: "Jungle Immersion — a trail through Hanak's native vegetation",
    eyebrow: "Jungle Immersion",
    titleLine1: "Connecting",
    titleLine2: "to the jungle",
    caption1: "For those who choose the blocks closest to the native vegetation.",
    caption2: "Surrounded by flora and fauna, with the jungle as a direct neighbor.",
  },

  vistas: {
    heroAlt: "Views of Hanak Sky Resort — panorama of the property and valley",
    subtitle: "Built facing the clouds",
    videoLabel: "Play the Views video",
    navEyebrow: "Views of Hanak Sky Resort",
    closingBanner: "Four views. One place. None repeats twice.",
    momentos: {
      amanecer: {
        categoria: "DAWN",
        titulo: "First Light",
        texto:
          "Dawn arrives from the opposite side of the city, from the Cordillera Escalera — painting the sky before the rest of the valley wakes up.",
      },
      "mar-de-nubes": {
        categoria: "SEA OF CLOUDS",
        titulo: "Sea of Clouds",
        texto:
          'Above the valley and the city of Tarapoto, almost every morning, a sea of clouds appears — the phenomenon that gives meaning to the name HANAK, "above the clouds."',
      },
      atardecer: {
        categoria: "SUNSET",
        titulo: "Golden Hour",
        texto:
          "Sunset happens south of the property, behind the entrance — a second spectacle for those who stay until the end of the day.",
      },
      anochecer: {
        categoria: "NIGHTFALL",
        titulo: "Under the Stars",
        texto:
          "Far from the city's glow, Hanak's elevation clears the night sky — a different close to every day.",
      },
    },
  },

  tarapoto: {
    heroImgAlt: "Tarapoto valley between mountains and clouds",
    introLine1: "It's no longer just an ecotourism destination",
    introLine2: "It has become one of the country's most promising real estate markets.",
    introLine3:
      "Demand stays constant, driven by weekend getaways, corporate travel and long holidays — and the premium segment captures it better than any other.",
    videoLabel: "Play the Tarapoto video",
    statNumberTemplate: "No. {n}",
    disclaimer:
      "Market and sector figures, not a guaranteed return projection for HANAK. Source: independent market analysis, 2026.",
    plazaAlt: "Tarapoto's Plaza de Armas, aerial view",
    cultureBold: "Tarapoto breathes a culture",
    cultureRest: "found nowhere else in the country.",
    identityBody:
      "The warmth of Lamas, with its Kichwa identity alive in every street; Barrio Wayku, guardian of traditions passed down through generations; and a cuisine that blends Amazonian and Andean flavors in every dish.",
    livingNear: "Living in Hanak also means living close to this identity",
    growthLine1: "Tarapoto's growth",
    growthLine2: "is not a promise",
    growthBold: "It's an established trend.",
    growthRest:
      "The expansion of the urban footprint toward corridors like Morales, La Banda de Shilcayo and Sauce, combined with improved road connectivity and services, has been sustaining one of the strongest land-value gains in the Peruvian jungle.",
    gatewayTitle: "Tarapoto is the gateway to the Amazon's most breathtaking landscapes:",
    gatewayBody1:
      "The Ahuashiyacu waterfall, the imposing Cordillera Escalera and the turquoise waters of Laguna Azul.",
    gatewayBody2:
      "A destination that already draws thousands of visitors every year — and that can now be your place too.",
    culturaAlts: [
      "Cacao from San Martín",
      "Juane, a traditional Amazonian dish",
      "Traditional dance from San Martín",
      "Ahuashiyacu waterfall",
      "Wildlife of the Peruvian Amazon",
    ],
    secuenciaAlts: [
      "Lamas, a colonial town among the hills",
      "Downtown Tarapoto expanding",
      "Hills and the trail toward Hanak",
      "Tarapoto valley between mountains and clouds",
      "Native birds of the Amazon jungle",
    ],
    ultimaSecuenciaAlts: [
      "Sunset over the Tarapoto hills",
      "Paragliding over the Cordillera Escalera",
      "River winding through the Amazon valley",
      "Freshly harvested cacao",
    ],
    stats: {
      "01": "Annual tourists visiting San Martín — a flow that no longer depends on peak season.",
      "02": "Average annual occupancy of the premium country-home segment in Tarapoto, compared to 26.8% for the general market.",
      "03": "Average daily rate (ADR) of the premium segment, well above the general average of $44.",
      "04": "Average annual appreciation of rural-urban land in the region's fastest-growing corridors over the last five years.",
    },
  },

  hanak: {
    quoteBold: "This is Wellness Real Estate:",
    quoteRest: "real estate designed with physical, mental and environmental health in mind.",
    h2Forest: "We believe that developing a place",
    h2Olive: "doesn't mean turning it into something foreign to itself",
    picnicAlt1: "Hanak — picnic at sunset",
    picnicAlt2: "Hanak — picnic table",
    picnicAlt3: "Hanak — work on site",
    picnicAlt4: "Hanak — site preparation",
    picnicAlt5: "Hanak — team on site",
    sustainBody1:
      "We are committed to reforesting the areas of the property that once had degraded vegetation, integrating native flora into every corner of the project, and moving toward a plastic-free, carbon-neutral operation.",
    sustainBody2:
      "We don't call it an achievement — we call it a direction we work toward every day.",
    terrenoLabel: "Hanak — the land as landscape",
    sellPart1: "In an industry where many sell square meters,",
    sellPart2: "HANAK chose to sell belonging: to a landscape,",
    paisajeLabel: "Hanak — a landscape of its own",
    comunidadLabel: "Hanak — community of founding partners",
    sellPart3:
      "to a community, and to a way of understanding rest that, in Latin America, still had no name of its own — until now.",
  },

  news: {
    title: "News",
    intro: "Stories, updates, and everything happening at HANAK — before anywhere else.",
    comingSoon: "Coming soon",
    subscribeTitle: "Subscribe and be the first to know about every HANAK update",
    emailPlaceholder: "Your email",
    subscribeButton: "Subscribe",
    calendario: [
      "Why Tarapoto is becoming the favorite investment destination for Peruvians abroad",
      "What a day at Hanak looks like: above the clouds, inside the jungle",
      "Quick guide: what to do in Tarapoto when you come to see your lot",
      "The sea of clouds, explained: why Hanak has this view and what makes it possible",
    ],
  },

  ctas: {
    homeSocios: "Invest in Hanak",
    tarapotoHero: "Discover the First Sky Resort in Latin America",
    tarapotoClosing: "Discover Hanak",
    hanakClosing: "Meet Hanak",
    vistasClosing: "Experience Hanak's Views",
    experienciaReveal: "Experience Hanak",
    experienciaSkyClub: "Discover Hanak's Sky Club",
    comoLlegarFlights: "Plan Your Visit to Hanak",
    comoLlegarClosing: "Meet Hanak in Person",
    masterplanBelowMap: "Find Your Place in the Masterplan",
  },

  whatsappButton: {
    ariaLabel: "Message us on WhatsApp",
  },
};

export default en;
