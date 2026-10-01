import type { Metadata } from "next";
import HanakHero from "@/components/HanakHero";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PhotoCarousel from "@/components/PhotoCarousel";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pageTitles.hanak };
}

export default async function HanakPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const hk = dict.hanak;
  return (
    <>
      <HanakHero />

      {/* Franja de cita — cierre directo del hero, misma línea que remata el
          "Concepto de marca" en el copy aprobado. */}
      <section className="bg-forest-dark py-6 sm:py-7">
        <p className="max-w-3xl sm:max-w-none mx-auto px-5 sm:px-8 text-center text-cloud text-sm sm:text-base leading-relaxed sm:whitespace-nowrap">
          <span className="font-semibold">{hk.quoteBold}</span>{" "}
          {hk.quoteRest}
        </p>
      </section>

      {/* PROPÓSITO SOCIAL — titular a dos tonos + collage de 3 fotos
          (angosta – ancha – angosta), igual que en el Illustrator. */}
      <section className="bg-cloud pt-20 sm:pt-28 pb-16 sm:pb-20">
        <h2 className="font-display uppercase text-2xl sm:text-4xl lg:text-5xl text-center leading-tight max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-forest">
            {hk.h2Forest}
          </span>
          <br />
          <span className="text-olive">
            {hk.h2Olive}
          </span>
        </h2>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-14 sm:mt-16">
          <PhotoCarousel
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 1024px, 100vw"
            photos={[
              { src: "/images/hanak/lista1.webp", alt: hk.picnicAlt1 },
              { src: "/images/hanak/lista2.webp", alt: hk.picnicAlt2 },
              { src: "/images/hanak/lista3.webp", alt: hk.picnicAlt3 },
              { src: "/images/hanak/lista4.webp", alt: hk.picnicAlt4 },
              { src: "/images/hanak/lista5.webp", alt: hk.picnicAlt5 },
            ]}
          />
        </div>

        <div className="max-w-2xl mx-auto px-5 sm:px-8 mt-10 sm:mt-12 text-center">
          <p className="text-charcoal/70 leading-relaxed text-lg">
            {hk.sustainBody1}
          </p>
          <p className="mt-4 text-charcoal/50 text-sm">
            {hk.sustainBody2}
          </p>
        </div>
      </section>

      {/* PROPÓSITO EN EL RUBRO — el párrafo aprobado fraccionado en 3
          fotos/leyendas, dispersas con aire entre ellas, tal como en el
          Illustrator. En mobile caen apiladas en el mismo orden de lectura. */}
      <section className="bg-cloud pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16 sm:space-y-0">
          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-end">
            <MediaPlaceholder
              label={hk.terrenoLabel}
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/2da-foto-suelta.webp"
              className="sm:col-span-7"
              sizes="(min-width: 640px) 55vw, 100vw"
            />
            <p className="sm:col-span-4 sm:col-start-9 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl">
              {hk.sellPart1}
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-end sm:mt-20">
            <p className="sm:col-span-4 order-2 sm:order-1 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl text-left sm:text-right">
              {hk.sellPart2}
            </p>
            <MediaPlaceholder
              label={hk.paisajeLabel}
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/1ra-foto-suelta.webp"
              className="sm:col-span-7 sm:col-start-6 order-1 sm:order-2"
              sizes="(min-width: 640px) 55vw, 100vw"
            />
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-end sm:mt-20">
            <MediaPlaceholder
              label={hk.comunidadLabel}
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/lista5.webp"
              className="sm:col-span-7"
              sizes="(min-width: 640px) 55vw, 100vw"
            />
            <p className="sm:col-span-4 sm:col-start-9 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl">
              {hk.sellPart3}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
