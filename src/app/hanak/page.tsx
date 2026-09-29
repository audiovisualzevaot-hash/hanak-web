import MediaPlaceholder from "@/components/MediaPlaceholder";

export const metadata = { title: "Hanak — HANAK" };

export default function HanakPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center bg-forest overflow-hidden">
        <MediaPlaceholder
          label="Hanak — concepto, paisaje + arquitectura"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/hanak/header.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white">
          <p className="uppercase tracking-[0.2em] text-xs text-cloud/80 mb-3">Marca</p>
          <h1 className="font-display text-4xl sm:text-6xl max-w-2xl">Hanak</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-16">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-4">
            Concepto de marca
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            HANAK no vende lotes. HANAK propone una forma de vida — donde el
            bienestar, la naturaleza y la comunidad conviven por diseño, no
            por accidente. Es Wellness Real Estate: bienes raíces pensados
            desde la salud física, mental y del entorno.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-4">
            Propósito social de marca
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            Creemos que desarrollar un lugar no significa transformarlo en
            algo ajeno a sí mismo. Estamos comprometidos con reforestar las
            zonas del terreno que antes tenían vegetación degradada,
            integrar la flora nativa a cada rincón del proyecto, y avanzar
            hacia una operación libre de plástico y neutra en carbono. No lo
            llamamos un logro — lo llamamos una dirección hacia la que
            trabajamos todos los días.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-4">
            Propósito de marca en el rubro
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            En un sector donde muchos venden metros cuadrados, HANAK eligió
            vender pertenencia: a un paisaje, a una comunidad y a una forma
            de entender el descanso que en Latinoamérica todavía no tenía
            nombre propio — hasta ahora.
          </p>
        </div>
      </section>
    </>
  );
}
