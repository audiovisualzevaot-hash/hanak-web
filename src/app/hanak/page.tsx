import HanakHero from "@/components/HanakHero";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PhotoCarousel from "@/components/PhotoCarousel";

export const metadata = { title: "Hanak — HANAK" };

export default function HanakPage() {
  return (
    <>
      <HanakHero />

      {/* Franja de cita — cierre directo del hero, misma línea que remata el
          "Concepto de marca" en el copy aprobado. */}
      <section className="bg-forest-dark py-6 sm:py-7">
        <p className="max-w-3xl sm:max-w-none mx-auto px-5 sm:px-8 text-center text-cloud text-sm sm:text-base leading-relaxed sm:whitespace-nowrap">
          <span className="font-semibold">Es Wellness Real Estate:</span>{" "}
          bienes raíces pensados desde la salud física, mental y del
          entorno.
        </p>
      </section>

      {/* PROPÓSITO SOCIAL — titular a dos tonos + collage de 3 fotos
          (angosta – ancha – angosta), igual que en el Illustrator. */}
      <section className="bg-cloud pt-20 sm:pt-28 pb-16 sm:pb-20">
        <h2 className="font-display uppercase text-2xl sm:text-4xl lg:text-5xl text-center leading-tight max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-forest">
            Creemos que desarrollar un lugar
          </span>
          <br />
          <span className="text-olive">
            no significa transformarlo en algo ajeno a sí mismo
          </span>
        </h2>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-14 sm:mt-16">
          <PhotoCarousel
            aspect="aspect-[16/10]"
            photos={[
              { src: "/images/hanak/lista1.webp", alt: "Hanak — picnic al atardecer" },
              { src: "/images/hanak/lista2.webp", alt: "Hanak — mesa de picnic" },
              { src: "/images/hanak/lista3.webp", alt: "Hanak — trabajo en el terreno" },
              { src: "/images/hanak/lista4.webp", alt: "Hanak — preparación del terreno" },
              { src: "/images/hanak/lista5.webp", alt: "Hanak — equipo en el terreno" },
            ]}
          />
        </div>

        <div className="max-w-2xl mx-auto px-5 sm:px-8 mt-10 sm:mt-12 text-center">
          <p className="text-charcoal/70 leading-relaxed text-lg">
            Estamos comprometidos con reforestar las zonas del terreno que
            antes tenían vegetación degradada, integrar la flora nativa a
            cada rincón del proyecto, y avanzar hacia una operación libre de
            plástico y neutra en carbono.
          </p>
          <p className="mt-4 text-charcoal/50 text-sm">
            No lo llamamos un logro — lo llamamos una dirección hacia la que
            trabajamos todos los días.
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
              label="Hanak — el terreno como paisaje"
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/2da-foto-suelta.webp"
              className="sm:col-span-7"
            />
            <p className="sm:col-span-4 sm:col-start-9 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl">
              En un sector donde muchos venden metros cuadrados,
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-end sm:mt-20">
            <p className="sm:col-span-4 order-2 sm:order-1 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl text-left sm:text-right">
              HANAK eligió vender pertenencia: a un paisaje,
            </p>
            <MediaPlaceholder
              label="Hanak — un paisaje propio"
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/1ra-foto-suelta.webp"
              className="sm:col-span-7 sm:col-start-6 order-1 sm:order-2"
            />
          </div>

          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-end sm:mt-20">
            <MediaPlaceholder
              label="Hanak — comunidad de socios fundadores"
              aspect="aspect-[4/5] sm:aspect-[3/2]"
              src="/images/hanak/lista5.webp"
              className="sm:col-span-7"
            />
            <p className="sm:col-span-4 sm:col-start-9 mt-5 sm:mt-0 text-charcoal/70 leading-relaxed text-lg sm:text-xl">
              a una comunidad y a una forma de entender el descanso que en
              Latinoamérica todavía no tenía nombre propio — hasta ahora.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
