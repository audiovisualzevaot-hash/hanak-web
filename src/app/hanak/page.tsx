import Image from "next/image";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import ScrollingGallery from "@/components/ScrollingGallery";

export const metadata = { title: "Hanak — HANAK" };

// Galería de cierre — las 5 fotos "lista" de la carpeta hanak, mismo
// mecanismo de tira deslizante que las galerías de Tarapoto.
const listaFotos = [
  { src: "/images/hanak/lista1.webp", alt: "Detalle de arquitectura Hanak" },
  { src: "/images/hanak/lista2.webp", alt: "Paisaje del proyecto Hanak" },
  { src: "/images/hanak/lista3.webp", alt: "Naturaleza integrada al proyecto" },
  { src: "/images/hanak/lista4.webp", alt: "Vista del entorno de Hanak" },
  { src: "/images/hanak/lista5.webp", alt: "Detalle del paisaje amazónico" },
];

export default function HanakPage() {
  return (
    <>
      {/* HERO — full-bleed, protagonista el logotipo real (lockup), no el
          nombre en texto plano: es la hoja de marca, así que el peso visual
          va al lockup tal como pidió Bryan. */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-forest-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hanak/header.webp"
          alt="Hanak — concepto, paisaje y arquitectura"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-forest-dark" />

        <div className="relative z-10 flex flex-col items-center text-center px-5">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cloud/80 mb-7">
            Marca
          </p>
          <Image
            src="/images/brand/lockup-cream.png"
            alt="HANAK — Sky Resort & Villas Club"
            width={280}
            height={176}
            priority
            className="w-56 sm:w-72 lg:w-80 h-auto"
          />
        </div>
      </section>

      {/* CONCEPTO DE MARCA — full bleed, cita protagonista, mismo lenguaje
          que "Plaza de Armas" en Tarapoto. */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-forest">
        <MediaPlaceholder
          label="Concepto de marca — paisaje Hanak"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/hanak/1ra-foto-suelta.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-2xl px-5 sm:px-8 pb-14 sm:pb-20">
          <p className="uppercase tracking-[0.2em] text-xs text-cloud/70 mb-4">
            Concepto de marca
          </p>
          <p className="font-display text-2xl sm:text-4xl text-white leading-snug">
            HANAK no vende lotes. HANAK propone una forma de vida — donde el
            bienestar, la naturaleza y la comunidad conviven por diseño, no
            por accidente.
          </p>
          <p className="mt-5 text-white/70 leading-relaxed max-w-xl">
            Es Wellness Real Estate: bienes raíces pensados desde la salud
            física, mental y del entorno.
          </p>
        </div>
      </section>

      {/* PROPÓSITO SOCIAL DE MARCA — texto + foto lado a lado */}
      <section className="bg-cloud py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <LogoMark size={24} tone="forest" />
              <span className="h-px flex-1 bg-charcoal/15" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-forest mb-5">
              Propósito social de marca
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Creemos que desarrollar un lugar no significa transformarlo en
              algo ajeno a sí mismo. Estamos comprometidos con reforestar las
              zonas del terreno que antes tenían vegetación degradada,
              integrar la flora nativa a cada rincón del proyecto, y avanzar
              hacia una operación libre de plástico y neutra en carbono. No
              lo llamamos un logro — lo llamamos una dirección hacia la que
              trabajamos todos los días.
            </p>
          </div>
          <MediaPlaceholder
            label="Reforestación y flora nativa en Hanak"
            aspect="aspect-[4/5]"
            src="/images/hanak/2da-foto-suelta.webp"
            className="order-first lg:order-last"
          />
        </div>
      </section>

      {/* PROPÓSITO DE MARCA EN EL RUBRO — invertido: foto a la izquierda */}
      <section className="bg-cloud pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <MediaPlaceholder
            label="Pertenencia — comunidad y paisaje Hanak"
            aspect="aspect-[4/5]"
            src="/images/hanak/3ra-foto-suelta.webp"
          />
          <div>
            <div className="flex items-center gap-4 mb-6">
              <LogoMark size={24} tone="forest" />
              <span className="h-px flex-1 bg-charcoal/15" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-forest mb-5">
              Propósito de marca en el rubro
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              En un sector donde muchos venden metros cuadrados, HANAK eligió
              vender pertenencia: a un paisaje, a una comunidad y a una forma
              de entender el descanso que en Latinoamérica todavía no tenía
              nombre propio — hasta ahora.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre — tira de fotos deslizando sola, mismo cierre visual que
          usa Tarapoto para las galerías de foto. */}
      <ScrollingGallery images={listaFotos} itemWidthClass="w-[50vw] sm:w-[25vw]" durationSeconds={30} />
    </>
  );
}
