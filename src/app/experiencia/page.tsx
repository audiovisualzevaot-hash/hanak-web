import MediaPlaceholder from "@/components/MediaPlaceholder";
import { skyClubAmenidades } from "@/lib/content";

export const metadata = { title: "Experiencia — HANAK" };

export default function ExperienciaPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center bg-forest overflow-hidden">
        <MediaPlaceholder
          label="Experiencia — HANAK"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/experiencia/header.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white">
          <h1 className="font-display text-4xl sm:text-6xl">Experiencia</h1>
          <p className="mt-3 text-cloud/85 text-lg">HANAK se vive en tres tiempos.</p>
        </div>
      </section>

      {/* SOBRE LAS NUBES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <MediaPlaceholder label="Sobre las nubes" aspect="aspect-[4/3]" src="/images/experiencia/1ra-foto-suelta.webp" />
        <div>
          <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-2">01</p>
          <h2 className="font-display text-3xl text-forest mb-4">Sobre las nubes</h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            La experiencia insignia. Vistas abiertas hacia el colchón de
            nubes, el valle y la ciudad de Tarapoto — el momento que le da
            nombre a todo el proyecto.
          </p>
        </div>
      </section>

      {/* DENTRO DE LA SELVA */}
      <section className="bg-cloud-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-2">02</p>
            <h2 className="font-display text-3xl text-forest mb-4">Dentro de la selva</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Una inmersión distinta, para quienes eligen las manzanas más
              cercanas a la vegetación nativa — rodeados de flora y fauna,
              con la selva como vecina directa.
            </p>
          </div>
          <MediaPlaceholder label="Dentro de la selva" aspect="aspect-[4/3]" className="order-1 lg:order-2" src="/images/experiencia/foto-grande-de-fondo.webp" />
        </div>
      </section>

      {/* SKY CLUB */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-2 text-center">03</p>
        <h2 className="font-display text-3xl text-forest mb-4 text-center">Sky Club</h2>
        <p className="text-charcoal/70 leading-relaxed text-lg max-w-2xl mx-auto text-center mb-14">
          El sistema completo de amenidades de HANAK — el conjunto de
          espacios y servicios pensados para que cada propietario viva el
          resort, no solo su lote.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <MediaPlaceholder label="Piscina infinita" />
          <MediaPlaceholder label="Club House / Restaurante" />
          <MediaPlaceholder label="Spa y bienestar" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skyClubAmenidades.map((cat) => (
            <div key={cat.categoria} className="border-t-2 border-forest pt-4">
              <p className="font-display text-base text-forest mb-3">{cat.categoria}</p>
              <ul className="text-sm text-charcoal/70 space-y-1.5">
                {cat.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
