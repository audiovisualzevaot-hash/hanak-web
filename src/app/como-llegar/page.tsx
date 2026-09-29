import MediaPlaceholder from "@/components/MediaPlaceholder";
import RutaAnimada from "@/components/RutaAnimada";
import { site } from "@/lib/content";

export const metadata = { title: "Cómo llegar — HANAK" };

export default function ComoLlegarPage() {
  return (
    <>
      <section className="relative h-[45vh] flex items-center bg-forest overflow-hidden">
        <MediaPlaceholder
          label="Ruta Tarapoto — Hanak, dron"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/como-llegar/header.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white">
          <h1 className="font-display text-4xl sm:text-6xl">Cómo llegar</h1>
          <p className="mt-3 text-cloud/85 text-lg max-w-xl">
            Llegar a HANAK es parte del viaje, no un obstáculo antes de él.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-16">
        <div>
          <h2 className="font-display text-2xl text-forest mb-3">La ruta completa</h2>
          <p className="text-charcoal/70 leading-relaxed text-lg mb-8 max-w-2xl">
            Desde Lima hasta Hanak, en dos tramos: un vuelo directo a Tarapoto
            y un breve trayecto por tierra hasta el resort.
          </p>
          <RutaAnimada />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl text-forest mb-3">De Lima a Tarapoto</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Vuelos directos y diarios desde Lima, con 5 aerolíneas operando
              distintos horarios a lo largo del día — mañana, tarde y noche.
              Nunca estás a más de un vuelo de distancia.
            </p>
          </div>
          <MediaPlaceholder label="Aeropuerto de Tarapoto" aspect="aspect-[4/3]" src="/images/como-llegar/2da-foto.webp" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <MediaPlaceholder label="Trayecto Tarapoto — Hanak" aspect="aspect-[4/3]" className="lg:order-2" src="/images/inicio/llegar-a-hanak.webp" />
          <div className="lg:order-1">
            <h2 className="font-display text-2xl text-forest mb-3">De Tarapoto a Hanak</h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              A solo 30 minutos del aeropuerto de Tarapoto — un breve
              trayecto que va dejando atrás la ciudad para acercarte, poco a
              poco, a las nubes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl text-forest mb-4">Ubicación</h2>
          <div className="rounded-xl overflow-hidden border border-charcoal/10 aspect-video">
            <iframe
              title="Ubicación de HANAK"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                site.mapUrl
              )}&output=embed`}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <a
            href={site.mapUrl}
            target="_blank"
            className="inline-block mt-3 text-sm text-forest hover:underline"
          >
            Abrir en Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
