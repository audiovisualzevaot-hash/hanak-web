import type { Dictionary } from "../types";

// Traducción al italiano — mismo criterio que en.ts: transmite el mismo
// sentido que el español (es.ts), no palabra por palabra. Se mantienen sin
// traducir "HANAK"/"Hanak", "Sky Resort & Villas Club", "Sky Club", los
// nombres propios de lugares y personas, los códigos de lote, y los
// términos legales peruanos (SUNARP, "Grupo Zevaot Inversiones S.A.C.").
const it: Dictionary = {
  meta: {
    title: "HANAK — Il primo Sky Resort dell'America Latina",
    description:
      "Il primo Sky Resort dell'America Latina. Case di campagna sopra le nuvole, a Tarapoto, in Perù.",
  },

  pageTitles: {
    tarapoto: "Tarapoto — HANAK",
    hanak: "Concetto di Brand — HANAK",
    vistas: "Viste — HANAK",
    experiencia: "Esperienza — HANAK",
    comoLlegar: "Come Arrivare — HANAK",
    masterplan: "Masterplan — HANAK",
    news: "News — HANAK",
  },

  nav: {
    tarapoto: "Tarapoto",
    hanak: "Hanak",
    vistas: "Viste",
    experiencia: "Esperienza",
    comoLlegar: "Come arrivare",
    masterplan: "Masterplan",
    news: "News",
  },

  header: {
    scheduleCta: "Prenota un appuntamento",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },

  footer: {
    discover: "Scopri Hanak Sky Resort",
    language: "Lingua",
    copyright:
      "© HANAK · Prototipo digitale. I dati commerciali, legali e ambientali, così come tempistiche e disponibilità, devono essere verificati prima della pubblicazione.",
  },

  reserve: {
    title: "Prenota il tuo appuntamento",
    close: "Chiudi",
    subtitle: "Senza impegno — un consulente ti accompagna in tutto il processo.",
    successTitle: "Fatto!",
    successBody: "Un consulente di HANAK ti contatterà molto presto.",
    optionVideocall: "Videochiamata",
    optionVisit: "Visita guidata",
    optionWhatsapp: "WhatsApp",
    namePlaceholder: "Nome completo",
    contactPlaceholder: "Telefono / WhatsApp",
    submitting: "Invio in corso...",
    submit: "Voglio essere contattato",
    errorBody: "Si è verificato un errore nell'invio. Riprova o scrivici su WhatsApp.",
  },

  videoLightbox: {
    defaultLabel: "Riproduci video",
    close: "Chiudi video",
    comingSoonTitle: "Video in produzione",
    comingSoonBody:
      "Stiamo preparando il video ufficiale di Tarapoto. Sarà disponibile qui molto presto.",
  },

  maps: {
    rutaLimaHanakAria:
      "Mappa da Lima a Hanak: volo diretto a Tarapoto e 30 minuti via terra fino al resort",
    peruMiniMapAria: "Posizione di Hanak, tra Lamas, Tarapoto e l'aeroporto",
  },

  home: {
    arriveAlt: "Gruppo che arriva a Hanak tra le nuvole",
    arriveTitle: "Arrivare a HANAK",
    arriveSubtitle: "è molto semplice",
    siluetaAlt: "Silhouette del distretto di Hanak e logo Hanak Sky Resort & Villas Club",
    findPlaceEyebrow: "Trova il tuo posto",
    insideTitle: "Dentro HANAK",
    insideBody:
      "Venti isolati, ognuno con il proprio rapporto con il paesaggio. Esplora il masterplan e trova il tuo.",
    exploreMasterplanCta: "Esplora il masterplan",
    masterplanAlt: "Masterplan di Hanak",
    experienciasEyebrow: "Esperienze dei",
    sociosTitle: "Soci Fondatori",
    newsTitle: "Storie, novità",
    newsSubtitle: "e tutto ciò che accade a HANAK",
    viewAll: "Vedi tutto →",
  },

  priorizamosSelva: {
    discover: "Scopri Hanak",
    title: "Diamo priorità all'esperienza della foresta peruviana",
    fromHeights: "Dalle altezze",
    exploreCta: "Esplora l'esperienza",
    nubesLabel: "Sopra le Nuvole",
    selvaLabel: "Dentro la Foresta",
  },

  heroSequence: {
    heroImgAlt: "Vista aerea delle colline di Tarapoto al tramonto",
    presenting: "Presentiamo",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    cloudsImgAlt: "Mare di nuvole che scende verso la valle di Tarapoto",
    titleLine1: "Il primo Sky Resort",
    titleLine2: "dell'America Latina",
    bodyLine1: "Sopra le nuvole dell'Amazzonia peruviana nasce un nuovo concetto di vita:",
    bodyLine2: "Un resort dove ogni momento della giornata è un privilegio.",
    closingBold: "HANAK non è un condominio,",
    closingRest: "è un modo diverso di stare al mondo.",
  },

  hanakHero: {
    imgAlt: "Hanak — paesaggio e concetto di brand",
    logoAlt: "HANAK — Sky Resort & Villas Club",
    title: "Propone uno stile di vita",
    body: "Dove benessere, natura e comunità convivono in armonia.",
  },

  comoLlegarHero: {
    imgAlt: "Vista aerea della foresta e della nebbia lungo la strada verso Hanak",
    title: "Arrivare a HANAK",
    subtitle1: "Fa parte dell'esperienza",
    subtitle2: "Parte del viaggio",
  },

  comoLlegar: {
    conectaDesde: "Collegati da",
    limaAHanak: "LIMA a HANAK",
    flightsBgLabel: "Voli diretti da Lima",
    flightsTitle: "Voli diretti e giornalieri da Lima",
    flightsBody: "Con 5 compagnie aeree che operano in diversi orari durante la giornata.",
    flightLatamAlt: "Volo LATAM Lima–Tarapoto",
    flightSkyAlt: "Volo SKY Lima–Tarapoto",
    flightJetsmartAlt: "Volo JetSMART Lima–Tarapoto",
    tarapotoHanakLine1: "Da Tarapoto",
    tarapotoHanakLine2: "a Hanak",
    tarapotoHanakMobile: "Da Tarapoto a Hanak",
    tarapotoHanakBody: "A soli 30 minuti dall'aeroporto di Tarapoto.",
    closingQuote:
      "Un breve tragitto che lascia la città alle spalle, avvicinandoti poco a poco alle nuvole.",
  },

  masterplanPage: {
    aerialAlt: "Vista aerea del terreno di HANAK",
    accessAlt: "Accesso al terreno di HANAK",
    jungleAerialAlt: "Vista aerea dell'alta foresta",
    sunarpTitle: "HANAK è registrato presso la SUNARP",
    sunarpLeadIn: "Con atto di proprietà registrato a nome di",
    sunarpClosing: "Un progetto garantito fin dalla sua origine.",
    architectureTitle: "L'architettura di HANAK non compete con il paesaggio",
    architectureBody:
      "Materiali che dialogano con l'ambiente, ventilazione incrociata che sfrutta il clima d'altura, luce naturale come protagonista, e un rapporto costante tra interno ed esterno. Ogni abitazione è pensata per far entrare il paesaggio, non per nasconderlo.",
    palapaAlt: "Palapa di benvenuto HANAK",
    campanarioAlt: "Campanile d'ingresso di HANAK",
    palapaAtardecerAlt: "Palapa al tramonto",
    pergolaAlt: "Pergola e giardino di HANAK",
    findPlaceEyebrow: "Trova il tuo posto",
    theMasterplanTitle: "Il Masterplan",
    theMasterplanBody:
      "Venti isolati, ognuno con il proprio rapporto con il paesaggio. Tocca un punto sulla mappa per scoprirlo.",
  },

  masterplanMap: {
    illustrationAlt: "Illustrazione del Masterplan di HANAK",
    riachuelo: "Ruscello",
    riachueloSub: "Area di rispetto naturale",
    ingreso: "Ingresso",
    manzanaLabelTemplate: "Isolato {id}",
    closeDetailAria: "Chiudi dettaglio",
    closeAria: "Chiudi",
    loteCountTemplate: "{n} lotti",
    dtVista: "Viste",
    dtExperiencia: "Esperienza",
    dtCercania: "Vicinanze",
    ctaDisponibilidad: "Scopri la disponibilità",
    legendAmenidad: "Servizio",
    experienciaLabel: {
      nubes: "Sopra le Nuvole",
      selva: "Dentro la Foresta",
      mixta: "Mista",
    },
    manzanas: {
      A: { vista: "Mare di nuvole e vista su valle/città", cercania: "Ingresso del resort" },
      B: { vista: "Mare di nuvole e vista su valle/città", cercania: "Ingresso del resort" },
      C: {
        vista: "Mare di nuvole, valle e cordigliera (retro)",
        cercania: "Aree sportive e reception",
      },
      D: {
        vista: "Mare di nuvole, valle e cordigliera (retro)",
        cercania: "Area di laboratori ricreativi",
      },
      E: { vista: "Mare di nuvole e vista su valle/città", cercania: "Ingresso del resort" },
      F: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Ingresso e area di degustazione",
      },
      G: { vista: "Cordigliera", cercania: "Sentiero dei giardini Hanak e aree sportive" },
      H: { vista: "Immersione totale nella flora e fauna", cercania: "Sentiero dei giardini Hanak" },
      I: { vista: "Cordigliera e valle di Tarapoto", cercania: "Inizio della zona immersiva" },
      J: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Passaggio Inti (con Isolato K), laboratori e parco centrale",
      },
      K: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Passaggio Inti (con Isolato J), laboratori e parco centrale",
      },
      L: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Passaggio Illari (con Isolato M), area di degustazione e parco centrale",
      },
      M: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Club House, piscina a sfioro e area di degustazione",
      },
      N: {
        vista: "Mista: mare di nuvole/valle e foresta",
        cercania: "Parco 1, tratto finale del progetto",
      },
      O: { vista: "Cordigliera, immersa nella foresta", cercania: "Parco 1" },
      P: { vista: "Mare di nuvole e vista su valle/città", cercania: "Parco 1 e parco centrale" },
      Q: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Parco centrale, Parco 1, Club House e piscina a sfioro",
      },
      R: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Club House, piscina a sfioro e parco centrale",
      },
      S: { vista: "Mare di nuvole e vista su valle/città", cercania: "—" },
      T: {
        vista: "Mare di nuvole e vista su valle/città",
        cercania: "Club House e piscina a sfioro",
      },
    },
    amenidades: {
      deportes: { label: "Area Sportiva", descripcion: "Campi da padel, tennis e basket." },
      recepcion: {
        label: "Reception · Club House",
        descripcion: "Il punto di accoglienza e incontro sociale del progetto.",
      },
      piscina: {
        label: "Piscina a Sfioro",
        descripcion: "La piscina principale dello Sky Club, con vista aperta sulla valle.",
      },
      spa: {
        label: "Spa e Benessere",
        descripcion: "Area di relax, meditazione e aromaterapia.",
      },
      degustacion: {
        label: "Vigneto e Degustazione",
        descripcion: "Area di degustazione ed esperienze gastronomiche all'aperto.",
      },
    },
  },

  socios: {
    testimonioLabelTemplate: "Testimonianza — {name}",
    ownerLoteTemplate: "— Proprietario, Lotto {lote}",
    prevAria: "Testimonianza precedente",
    nextAria: "Testimonianza successiva",
    testimonios: {
      "elmer-perez": {
        cita: "Vivete l'esperienza che sto vivendo io in questo progetto: è spettacolare.",
        contexto: "Peruviano, vive in Italia.",
      },
      "freddy-zambrano": {
        cita: "È molto accessibile: un'ora da Lima e un'ora per tornare.",
        contexto: "Vive negli Stati Uniti.",
        nota: "Testimonianza della sorella, che ha visitato il progetto in sua rappresentanza",
      },
      "julio-rocca": {
        cita: "Le viste sono impressionanti.",
        contexto: "Di Huaraz, Áncash — ha viaggiato insieme a suo figlio.",
      },
      "stefano-gioe": {
        cita: "Il mio consulente mi ha aiutato in tutto il processo.",
        contexto: "Italiano, affascinato dalla foresta peruviana.",
      },
      "elizabeth-montoya": {
        cita: "La redditività del progetto mi ha convinto.",
        contexto: "Peruviana, vive in Spagna.",
      },
    },
  },

  experiencia: {
    heroEyebrow: "HANAK si vive in tre momenti",
    heroWord: "ESPERIENZA",
    tabNubes: "Sopra le Nuvole",
    tabSelva: "Immersione nella Foresta",
    tabSkyClub: "Sky Club",
    nubesHeroLabel: "Sopra le Nuvole — l'esperienza di punta",
    nubesEyebrow: "Sopra le Nuvole",
    nubesTitleLine1: "L'esperienza",
    nubesTitleLine2: "principale",
    nubesVideoLabel: "Riproduci video — L'esperienza principale",
    skyClubTitle: "Sky Club",
    skyClubHeroLabel: "Sky Club — i servizi di Hanak",
    amenidadesIntro: "Il sistema completo di",
    amenidadesItalic: "Servizi di HANAK",
    amenidadesBody:
      "L'insieme di spazi e servizi pensati perché ogni proprietario viva in un resort di prima categoria.",
    photoAlts: {
      alameda: "Sky Club — viale alberato e giardini di Hanak",
      columpios: "Sky Club — altalene nella pergola",
      maloca1: "Sky Club — reception della maloca",
      maloca2: "Sky Club — maloca al tramonto",
      parqueCentral: "Sky Club — area pergole e parco centrale",
    },
  },

  experienciaReveal: {
    cloudsAlt: "Sopra le Nuvole — un mare di nuvole sulla valle",
    quotePart1: "Viste aperte verso il",
    quoteBold1: "mare di nuvole",
    quotePart2: ", la valle e la città di Tarapoto — il momento che dà",
    quoteBold2: "il nome a tutto il progetto",
    quoteEnd: ".",
    jungleAlt: "Immersione nella Foresta — un sentiero tra la vegetazione nativa di Hanak",
    eyebrow: "Immersione nella Foresta",
    titleLine1: "In connessione",
    titleLine2: "con la foresta",
    caption1: "Per chi sceglie gli isolati più vicini alla vegetazione nativa.",
    caption2: "Circondati da flora e fauna, con la foresta come vicina diretta.",
  },

  vistas: {
    heroAlt: "Viste di Hanak Sky Resort — panorama del terreno e della valle",
    subtitle: "Costruito guardando le nuvole",
    videoLabel: "Riproduci il video di Viste",
    navEyebrow: "Viste di Hanak Sky Resort",
    closingBanner: "Quattro viste. Un solo luogo. Nessuna si ripete due volte.",
    momentos: {
      amanecer: {
        categoria: "ALBA",
        titulo: "Primo bagliore",
        texto:
          "L'alba arriva dal lato opposto della città, dalla Cordillera Escalera — dipingendo il cielo prima che il resto della valle si svegli.",
      },
      "mar-de-nubes": {
        categoria: "MARE DI NUVOLE",
        titulo: "Mare di nuvole",
        texto:
          'Sopra la valle e la città di Tarapoto, quasi ogni mattina, appare il mare di nuvole: il fenomeno che dà senso al nome HANAK, "sopra le nuvole".',
      },
      atardecer: {
        categoria: "TRAMONTO",
        titulo: "Ora dorata",
        texto:
          "Il tramonto avviene a sud del terreno, dietro l'ingresso — un secondo spettacolo per chi resta fino alla fine della giornata.",
      },
      anochecer: {
        categoria: "NOTTE",
        titulo: "Sotto le stelle",
        texto:
          "Lontano dalle luci della città, l'altitudine di Hanak schiarisce il cielo notturno — una chiusura diversa per ogni giornata.",
      },
    },
  },

  tarapoto: {
    heroImgAlt: "Valle di Tarapoto tra montagne e nuvole",
    introLine1: "Non è più solo una destinazione di turismo ecologico",
    introLine2: "È diventata uno dei mercati immobiliari con maggiori prospettive del paese.",
    introLine3:
      "La domanda è costante, trainata da fughe nel weekend, turismo aziendale e ponti festivi, e il segmento premium è, di gran lunga, quello che la intercetta meglio.",
    videoLabel: "Riproduci il video di Tarapoto",
    statNumberTemplate: "N. {n}",
    disclaimer:
      "Dati di mercato e di settore, non una proiezione di rendimento garantito per HANAK. Fonte: analisi di mercato indipendente, 2026.",
    plazaAlt: "Plaza de Armas di Tarapoto, vista aerea",
    cultureBold: "Tarapoto respira una cultura",
    cultureRest: "che non si ripete in nessun'altra parte del paese.",
    identityBody:
      "Il calore di Lamas, con la sua identità kichwa viva in ogni strada; il Barrio Wayku, custode di tradizioni che attraversano le generazioni; e una gastronomia che unisce sapori amazzonici e andini in ogni piatto.",
    livingNear: "Vivere a Hanak significa anche vivere vicino a questa identità",
    growthLine1: "La crescita di Tarapoto",
    growthLine2: "non è una promessa",
    growthBold: "È una tendenza consolidata.",
    growthRest:
      "L'espansione dell'area urbana verso corridoi come Morales, La Banda de Shilcayo e Sauce, unita al miglioramento della connettività stradale e dei servizi, sta sostenendo una delle plusvalenze immobiliari più solide della foresta peruviana.",
    gatewayTitle: "Tarapoto è la porta d'accesso ai paesaggi più spettacolari dell'Amazzonia:",
    gatewayBody1:
      "La cascata di Ahuashiyacu, l'imponente Cordillera Escalera e le acque turchesi della Laguna Azul.",
    gatewayBody2:
      "Una destinazione che attira già migliaia di visitatori ogni anno e che ora può diventare anche il tuo posto.",
    culturaAlts: [
      "Cacao di San Martín",
      "Juane, piatto tipico amazzonico",
      "Danza tipica di San Martín",
      "Cascata di Ahuashiyacu",
      "Fauna dell'Amazzonia peruviana",
    ],
    secuenciaAlts: [
      "Lamas, borgo coloniale tra le colline",
      "Il centro di Tarapoto in espansione",
      "Colline e sentiero verso Hanak",
      "Valle di Tarapoto tra montagne e nuvole",
      "Uccelli tipici della foresta amazzonica",
    ],
    ultimaSecuenciaAlts: [
      "Tramonto sulle colline di Tarapoto",
      "Parapendio sulla Cordillera Escalera",
      "Fiume che serpeggia nella valle amazzonica",
      "Cacao appena raccolto",
    ],
    stats: {
      "01": "Turisti annuali che arrivano a San Martín — un flusso che non dipende più dall'alta stagione.",
      "02": "Occupazione media annua del segmento premium delle case di campagna a Tarapoto, contro il 26,8% del mercato generale.",
      "03": "Tariffa giornaliera media (ADR) del segmento premium, ben al di sopra della media generale di $44.",
      "04": "Apprezzamento medio annuo del suolo rurale-urbano nei corridoi a maggiore crescita della regione negli ultimi cinque anni.",
    },
  },

  hanak: {
    quoteBold: "Questo è Wellness Real Estate:",
    quoteRest: "un immobiliare pensato a partire dalla salute fisica, mentale e ambientale.",
    h2Forest: "Crediamo che sviluppare un luogo",
    h2Olive: "non significhi trasformarlo in qualcosa di estraneo a se stesso",
    picnicAlt1: "Hanak — picnic al tramonto",
    picnicAlt2: "Hanak — tavolo da picnic",
    picnicAlt3: "Hanak — lavori sul terreno",
    picnicAlt4: "Hanak — preparazione del terreno",
    picnicAlt5: "Hanak — squadra sul terreno",
    sustainBody1:
      "Ci impegniamo a riforestare le aree del terreno che un tempo avevano una vegetazione degradata, a integrare la flora nativa in ogni angolo del progetto e ad avanzare verso un'operazione priva di plastica e a impatto climatico zero.",
    sustainBody2:
      "Non lo chiamiamo un traguardo: lo chiamiamo una direzione verso cui lavoriamo ogni giorno.",
    terrenoLabel: "Hanak — il terreno come paesaggio",
    sellPart1: "In un settore dove molti vendono metri quadrati,",
    sellPart2: "HANAK ha scelto di vendere appartenenza: a un paesaggio,",
    paisajeLabel: "Hanak — un paesaggio proprio",
    comunidadLabel: "Hanak — comunità di soci fondatori",
    sellPart3:
      "a una comunità e a un modo di intendere il riposo che in America Latina non aveva ancora un nome proprio — fino ad ora.",
  },

  news: {
    title: "News",
    intro: "Storie, novità e tutto ciò che accade a HANAK — prima che altrove.",
    comingSoon: "Prossimamente",
    subscribeTitle: "Iscriviti e scopri per primo ogni novità di HANAK",
    emailPlaceholder: "La tua email",
    subscribeButton: "Iscrivimi",
    calendario: [
      "Perché Tarapoto sta diventando la meta d'investimento preferita dai peruviani all'estero",
      "Com'è una giornata a Hanak: sopra le nuvole, dentro la foresta",
      "Guida rapida: cosa fare a Tarapoto quando vieni a vedere il tuo lotto",
      "Il mare di nuvole, spiegato: perché Hanak ha questa vista e cosa la rende possibile",
    ],
  },

  ctas: {
    homeSocios: "Investi a Hanak",
    tarapotoHero: "Scopri il primo Sky Resort dell'America Latina",
    tarapotoClosing: "Scopri Hanak",
    hanakClosing: "Conosci Hanak",
    vistasClosing: "Vivi le viste di Hanak",
    experienciaReveal: "Vivi l'esperienza Hanak",
    experienciaSkyClub: "Scopri lo Sky Club di Hanak",
    comoLlegarFlights: "Pianifica la tua visita a Hanak",
    comoLlegarClosing: "Conosci Hanak di persona",
    masterplanBelowMap: "Trova il tuo posto nel masterplan",
  },
};

export default it;
