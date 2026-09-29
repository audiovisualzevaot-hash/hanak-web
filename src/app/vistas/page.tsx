import MediaPlaceholder from "@/components/MediaPlaceholder";

export const metadata = { title: "Vistas — HANAK" };

const momentos = [
  {
    titulo: "Primer resplandor",
    texto:
      "El amanecer llega por el lado opuesto a la ciudad, desde la Cordillera Escalera — pintando el cielo antes de que el resto del valle despierte.",
    imagen: "/images/vistas/primer-resplandor.webp",
  },
  {
    titulo: "Mar de nubes",
    texto:
      "Sobre el valle y la ciudad de Tarapoto, casi todas las mañanas, aparece el colchón de nubes: el fenómeno que le da sentido al nombre HANAK, \"sobre las nubes\".",
    imagen: "/images/vistas/mar-de-nubes.webp",
  },
  {
    titulo: "Hora dorada",
    texto:
      "El atardecer sucede al sur del terreno, detrás del ingreso — un segundo espectáculo para quienes se quedan hasta el final del día.",
    imagen: "/images/vistas/hora-dorada.webp",
  },
  {
    titulo: "Bajo las estrellas",
    texto:
      "Lejos del resplandor de la ciudad, la altura de Hanak despeja el cielo nocturno — un cierre distinto para cada día.",
    imagen: "/images/vistas/bajo-las-estrellas.webp",
  },
];

export default function VistasPage() {
  return (
    <>
      <section className="relative h-[55vh] flex items-center justify-center text-center bg-forest overflow-hidden">
        <MediaPlaceholder
          label="Vistas — panorámica amplia, colchón de nubes"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/vistas/mar-de-nubes.webp"
          priority
        />
        <div className="relative z-10 max-w-3xl px-5 text-white">
          <h1 className="font-display text-4xl sm:text-6xl mb-4">Las Vistas</h1>
          <p className="text-cloud/85 text-lg">
            Hay proyectos que se construyen mirando al terreno. HANAK se
            construyó mirando al cielo.
          </p>
        </div>
      </section>

      {momentos.map((m, i) => (
        <section
          key={m.titulo}
          className={`relative min-h-[70vh] flex items-center ${
            i % 2 === 0 ? "bg-cloud" : "bg-cloud-soft"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
            <MediaPlaceholder
              label={`${m.titulo} — foto/timelapse`}
              aspect="aspect-[4/3]"
              className={i % 2 === 1 ? "lg:order-2" : ""}
              src={m.imagen}
            />
            <div>
              <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-2">
                0{i + 1}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest mb-4">
                {m.titulo}
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-lg">{m.texto}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-forest text-white py-16 text-center">
        <p className="font-display text-2xl sm:text-3xl max-w-2xl mx-auto px-5">
          Tres vistas. Un mismo lugar. Ninguna se repite dos veces.
        </p>
      </section>
    </>
  );
}
