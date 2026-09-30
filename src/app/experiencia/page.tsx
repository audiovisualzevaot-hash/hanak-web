import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import VideoLightbox from "@/components/VideoLightbox";
import PhotoCarousel from "@/components/PhotoCarousel";
import ExperienciaReveal from "@/components/ExperienciaReveal";

export const metadata = { title: "Experiencia — HANAK" };

// Bryan mandó el export de Illustrator de esta hoja (05-Experiencias_4.png):
// el hero deja de ser una franja de 50vh para pasar a foto a pantalla
// completa con "HANAK se vive en tres tiempos" + "EXPERIENCIA", debajo va
// una franja de 3 anclas (Sobre las nubes / Inmersión en selva / Sky Club),
// luego "01 Sobre las nubes" a pantalla completa con su propio botón de
// play, seguido de una secuencia continua (ver ExperienciaReveal.tsx) que
// acopla la cita con foto ("imagen suelta") y la foto larga de la selva en
// un solo scroll fluido, igual mecanismo que el hero de Inicio, y "Sky
// Club" cerrando con sus fotos de amenidades.
//
// Confirmado con Bryan:
// - Los contadores tipo "< 5/11 >" del export NO se replican tal cual: esas
//   partes pasan a ser un carrusel real, igual mecanismo que el de Hanak
//   (PhotoCarousel — flechas a los lados + avance automático cada 6s).
// - La lista de amenidades por categoría que tenía la página anterior se
//   quita del todo y se reemplaza por ese carrusel de fotos.
// - El video de "01 Sobre las nubes" usa el mismo placeholder "video en
//   producción" que Tarapoto/Vistas, hasta que Bryan mande el definitivo.
// - Revisé los zips que Bryan ya había mandado (FOTOS_WEB.zip y los de
//   socios/testimonios): no hay fotos nuevas específicas para esta hoja
//   (aérea distinta, selva con dos personas, palmeras+montaña, etc.), así
//   que por ahora se reusan las 9 fotos que ya estaban en /experiencia,
//   reacomodadas a los roles nuevos del export. En cuanto Bryan mande fotos
//   específicas, solo hay que cambiar los `src`.
const tabs = [
  { id: "sobre-las-nubes", label: "Sobre las nubes" },
  { id: "inmersion-en-selva", label: "Inmersión en selva" },
  { id: "sky-club", label: "Sky Club" },
];

export default function ExperienciaPage() {
  return (
    <>
      {/* HERO — foto a pantalla completa (antes franja de 50vh) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
        <MediaPlaceholder
          label="Experiencia — HANAK"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/experiencia/header.webp"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55" />

        <div className="relative z-10 flex flex-col items-center text-center px-5">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/75 mb-4">
            HANAK se vive en tres tiempos
          </p>
          <h1 className="font-display text-cloud text-5xl sm:text-8xl lg:text-9xl tracking-wide">
            EXPERIENCIA
          </h1>
        </div>

        {/* Cue decorativo de scroll — círculo punteado girando, como en el
            export de Illustrator. */}
        <div className="absolute z-10 bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/35 animate-[spin_40s_linear_infinite]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </span>
        </div>
      </section>

      {/* FRANJA DE ANCLAS — a los 3 momentos de la página */}
      <section className="bg-cloud py-8 sm:py-10 border-b border-charcoal/10">
        <div className="max-w-3xl mx-auto px-5">
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {tabs.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 hover:border-forest hover:bg-forest/5 px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs uppercase tracking-wider text-forest transition"
              >
                <LogoMark size={12} tone="forest" />
                {t.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 01 — SOBRE LAS NUBES: a pantalla completa, con su propio botón de
          play (video en producción, mismo mecanismo que Tarapoto/Vistas). */}
      <section
        id="sobre-las-nubes"
        className="relative min-h-[85vh] sm:min-h-screen overflow-hidden bg-forest scroll-mt-20 sm:scroll-mt-24"
      >
        <MediaPlaceholder
          label="Sobre las nubes — la experiencia insignia"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/experiencia/header.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/35" />

        <div className="relative z-10 min-h-[85vh] sm:min-h-screen flex flex-col justify-between px-5 sm:px-10 py-14 sm:py-20">
          <p className="text-right text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70">
            Sobre las nubes
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-6xl text-white leading-none">
              La experiencia
              <br /> insignia
            </h2>
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center mb-2">
              <div className="absolute inset-0 rounded-full border border-dashed border-white/40" />
              <VideoLightbox
                overlay={false}
                label="Reproducir video — La experiencia insignia"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — SOBRE LAS NUBES (cita) → INMERSIÓN EN SELVA: secuencia
          continua, igual mecanismo que el hero de Inicio (ver
          ExperienciaReveal.tsx) — la tarjeta de cita sobre fondo crema se
          disuelve en la foto larga de la selva, sin cortes entre ambas. */}
      <ExperienciaReveal />

      {/* 03 — SKY CLUB */}
      <section
        id="sky-club"
        className="bg-cloud pt-16 sm:pt-24 pb-12 sm:pb-16 scroll-mt-20 sm:scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <LogoMark size={28} tone="forest" className="mx-auto mb-4" />
          <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide text-forest">
            Sky Club
          </h2>
        </div>
      </section>

      <section className="relative min-h-[70vh] sm:min-h-screen overflow-hidden bg-forest">
        <MediaPlaceholder
          label="Sky Club — amenidades de Hanak"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/experiencia/campanario.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
        <div className="relative z-10 min-h-[70vh] sm:min-h-screen flex items-end px-5 sm:px-10 pb-14 sm:pb-20">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 items-end w-full">
            <h3 className="font-display text-3xl sm:text-5xl text-white leading-tight">
              El sistema completo de{" "}
              <span className="italic">Amenidades de HANAK</span>
            </h3>
            <p className="text-white/80 leading-relaxed sm:text-right sm:justify-self-end sm:max-w-sm">
              El conjunto de espacios y servicios pensados para que cada
              propietario viva en un resort de categoría.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre de Sky Club — antes era una grilla de 6 fotos + una lista de
          amenidades por categoría; a pedido de Bryan, ambas se reemplazan
          por un carrusel (mismo mecanismo que el de Hanak). */}
      <section className="relative h-[60vh] sm:h-[85vh] bg-forest overflow-hidden">
        <PhotoCarousel
          aspect="aspect-auto h-full"
          className="absolute inset-0"
          frameClassName=""
          dots={false}
          photos={[
            { src: "/images/experiencia/amenidades-de-hanak.webp", alt: "Sky Club — alameda y jardines de Hanak" },
            { src: "/images/experiencia/columpios.webp", alt: "Sky Club — columpios en la pérgola", objectPosition: "50% 62%" },
            { src: "/images/experiencia/maloca1.webp", alt: "Sky Club — recepción de la maloca" },
            { src: "/images/experiencia/maloca2.webp", alt: "Sky Club — maloca al atardecer" },
            { src: "/images/experiencia/parque-central.webp", alt: "Sky Club — zona de pérgolas y parque central" },
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </section>
    </>
  );
}
