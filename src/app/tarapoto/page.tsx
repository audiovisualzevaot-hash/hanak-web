import MediaPlaceholder from "@/components/MediaPlaceholder";
import { tarapotoStats } from "@/lib/content";

export const metadata = { title: "Tarapoto — HANAK" };

export default function TarapotoPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center bg-forest overflow-hidden">
        <MediaPlaceholder
          label="Tarapoto — paisaje regional, dron"
          kind="video"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/tarapoto/secuencia-1.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white">
          <h1 className="font-display text-4xl sm:text-6xl max-w-2xl">Tarapoto</h1>
        </div>
      </section>

      {/* SENTIDO DE INVERSION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <h2 className="font-display text-3xl sm:text-4xl text-forest mb-4">
          El sentido de Tarapoto como inversión
        </h2>
        <p className="text-charcoal/70 max-w-2xl mb-12">
          Tarapoto dejó de ser solo un destino de turismo ecológico para
          convertirse en uno de los mercados inmobiliarios de mayor
          proyección del país. La demanda es constante — impulsada por
          escapadas de fin de semana, turismo corporativo y feriados largos —
          y el segmento premium es, con diferencia, el que mejor la captura.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {tarapotoStats.map((s) => (
            <div key={s.n} className="border-t-2 border-forest pt-4">
              <p className="text-xs text-charcoal/40 mb-1">N.º {s.n}</p>
              <p className="font-display text-3xl sm:text-4xl text-forest mb-2">{s.valor}</p>
              <p className="text-sm text-charcoal/70 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-charcoal/40 mt-8 max-w-2xl">
          Cifras de mercado y sector, no una proyección de rentabilidad
          garantizada para HANAK. Fuente: análisis de mercado independiente,
          2026.
        </p>
      </section>

      {/* EMOCIONAL Y CULTURAL */}
      <section className="bg-cloud-soft py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <MediaPlaceholder label="Lamas, Barrio Wayku, gastronomía" aspect="aspect-[4/3]" src="/images/tarapoto/plaza-de-armas.webp" />
          <div>
            <h2 className="font-display text-3xl text-forest mb-4">Emocional y cultural</h2>
            <p className="text-charcoal/70 leading-relaxed">
              A pocos minutos de Hanak, Tarapoto respira una cultura que no
              se replica en ningún otro punto del país: la calidez de Lamas,
              con su identidad kichwa viva en cada calle; el Barrio Wayku,
              guardián de tradiciones que atraviesan generaciones; y una
              gastronomía que mezcla lo amazónico con lo andino en cada
              plato. Vivir en Hanak es también vivir cerca de esta
              identidad.
            </p>
          </div>
        </div>
      </section>

      {/* ECONOMICO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-3xl text-forest mb-4">Económico</h2>
          <p className="text-charcoal/70 leading-relaxed">
            El crecimiento de Tarapoto no es una promesa — es una tendencia
            consolidada. La expansión de la mancha urbana hacia corredores
            como Morales, La Banda de Shilcayo y Sauce, sumada a la mejora de
            conectividad vial y de servicios, viene sosteniendo una de las
            plusvalías más firmes de la selva peruana.
          </p>
        </div>
        <MediaPlaceholder label="Crecimiento urbano / corredores" aspect="aspect-[4/3]" className="order-1 lg:order-2" src="/images/tarapoto/secuencia-2.webp" />
      </section>

      {/* TURISTICO */}
      <section className="bg-forest text-cloud py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <MediaPlaceholder label="Ahuashiyacu, Cordillera Escalera, Laguna Azul" aspect="aspect-[4/3]" src="/images/tarapoto/ultima-secuencia-1.webp" />
          <div>
            <h2 className="font-display text-3xl text-white mb-4">Turístico</h2>
            <p className="text-cloud/80 leading-relaxed">
              Tarapoto es la puerta de entrada a algunos de los paisajes más
              impresionantes de la Amazonía: la caída de agua de
              Ahuashiyacu, la imponente Cordillera Escalera y las aguas
              turquesa de la Laguna Azul. Un destino que ya atrae a miles de
              visitantes cada año — y que ahora también puede ser tu lugar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
