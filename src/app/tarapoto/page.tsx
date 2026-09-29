import MediaPlaceholder from "@/components/MediaPlaceholder";
import SunArc from "@/components/SunArc";
import LogoMark from "@/components/LogoMark";
import { tarapotoStats } from "@/lib/content";

export const metadata = { title: "Tarapoto — HANAK" };

const culturaFotos: [string, string][] = [
  ["/images/tarapoto/lista1.webp", "Cacao de San Martín"],
  ["/images/tarapoto/lista2.webp", "Juane, plato típico amazónico"],
  ["/images/tarapoto/lista3.webp", "Danza típica sanmartinense"],
  ["/images/tarapoto/lista4.webp", "Catarata de Ahuashiyacu"],
];

const crecimientoFotos: [string, string][] = [
  ["/images/tarapoto/secuencia-1.webp", "Lamas, mirador del castillo"],
  ["/images/tarapoto/secuencia-2.webp", "Morales, corredor urbano en expansión"],
  ["/images/tarapoto/secuencia-3.webp", "Vía de acceso entre cerros hacia Hanak"],
];

export default function TarapotoPage() {
  return (
    <>
      {/* HERO + CIFRAS — foto continua de fondo, título y datos de mercado */}
      <section className="relative min-h-[115vh] flex flex-col overflow-hidden bg-forest-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tarapoto/secuencia-4.webp"
          alt="Valle de Tarapoto entre montañas y nubes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-forest-dark" />

        <div className="relative z-10 flex flex-col items-center text-center text-white px-5 pt-28 sm:pt-32">
          <h1 className="font-display text-6xl sm:text-8xl">TARAPOTO</h1>
          <SunArc className="mt-6" color="#fff" />

          <div className="max-w-xl mt-10">
            <p className="font-display text-xl sm:text-2xl leading-snug">
              Dejó de ser solo un destino de turismo ecológico
            </p>
            <p className="mt-5 text-cloud/85 leading-relaxed">
              Para convertirse en uno de los mercados inmobiliarios de mayor
              proyección del país.
            </p>
            <p className="mt-4 text-cloud/85 leading-relaxed">
              La demanda es constante impulsada por escapadas de fin de
              semana, turismo corporativo y feriados largos y el segmento
              premium es, con diferencia, el que mejor la captura.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-auto px-5 sm:px-8 pb-16 sm:pb-20 pt-14">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
            {tarapotoStats.map((s) => (
              <div
                key={s.n}
                className="border border-white/25 rounded-xl px-4 sm:px-6 py-5 sm:py-6 text-center text-white"
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                  N.º {s.n}
                </p>
                <p className="font-display text-2xl sm:text-4xl mb-2">{s.valor}</p>
                <p className="text-[11px] sm:text-sm text-white/70 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="max-w-5xl mx-auto text-[11px] text-white/45 mt-6">
            Cifras de mercado y sector, no una proyección de rentabilidad
            garantizada para HANAK. Fuente: análisis de mercado independiente,
            2026.
          </p>
        </div>
      </section>

      {/* 4 fotos — cultura y gastronomía de San Martín */}
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {culturaFotos.map(([src, label]) => (
          <MediaPlaceholder
            key={src}
            label={label}
            aspect="aspect-[3/4]"
            className="!rounded-none"
            src={src}
          />
        ))}
      </div>

      {/* PLAZA DE ARMAS — full bleed con frase */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-forest">
        <MediaPlaceholder
          label="Plaza de Armas de Tarapoto, vista aérea"
          kind="video"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/tarapoto/plaza-de-armas.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <p className="relative z-10 max-w-lg px-5 sm:px-8 pb-14 sm:pb-20 text-2xl sm:text-4xl text-white leading-snug">
          <span className="font-semibold">Tarapoto respira una cultura</span>{" "}
          que no se replica en ningún otro punto del país.
        </p>
      </section>

      {/* IDENTIDAD */}
      <section className="bg-cloud pt-20 sm:pt-28 pb-4 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-charcoal/70 leading-relaxed">
            La calidez de Lamas, con su identidad kichwa viva en cada calle;
            el Barrio Wayku, guardián de tradiciones que atraviesan
            generaciones; y una gastronomía que mezcla lo amazónico con lo
            andino en cada plato.
          </p>
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="h-px w-16 sm:w-24 bg-charcoal/20" />
            <LogoMark size={26} tone="forest" />
            <span className="h-px w-16 sm:w-24 bg-charcoal/20" />
          </div>
          <p className="font-display text-xl sm:text-2xl text-forest">
            Vivir en Hanak es también vivir cerca de esta identidad
          </p>
        </div>
      </section>

      {/* CRECIMIENTO */}
      <section className="bg-cloud pt-14 pb-20 sm:pb-28 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-5xl text-forest leading-tight">
            El crecimiento de Tarapoto
            <br className="hidden sm:block" /> no es una promesa
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            <span className="font-semibold text-charcoal">
              Es una tendencia consolidada.
            </span>{" "}
            La expansión de la mancha urbana hacia corredores como Morales,
            La Banda de Shilcayo y Sauce, sumada a la mejora de conectividad
            vial y de servicios, viene sosteniendo una de las plusvalías más
            firmes de la selva peruana.
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-5xl mx-auto mt-14 gap-1 px-5 sm:px-8">
          {crecimientoFotos.map(([src, label]) => (
            <MediaPlaceholder
              key={src}
              label={label}
              aspect="aspect-[3/4]"
              className="!rounded-none"
              src={src}
            />
          ))}
        </div>
      </section>

      {/* PAISAJES — puerta de entrada a la Amazonía */}
      <section className="bg-cloud pb-8 text-center">
        <h2 className="font-display text-2xl sm:text-4xl text-forest max-w-3xl mx-auto px-5 sm:px-8 leading-snug">
          Tarapoto es la puerta de entrada de los paisajes más impresionantes
          de la Amazonía:
        </h2>
      </section>
      <div className="grid grid-cols-4 gap-1 max-w-6xl mx-auto px-5 sm:px-8">
        <MediaPlaceholder
          label="Catarata de Ahuashiyacu"
          aspect="aspect-[3/4]"
          className="!rounded-none col-span-1"
          src="/images/tarapoto/lista4.webp"
        />
        <MediaPlaceholder
          label="Mirador de la Cordillera Escalera"
          aspect="aspect-[3/4]"
          className="!rounded-none col-span-2"
          src="/images/tarapoto/ultima-secuencia-2.webp"
        />
        <MediaPlaceholder
          label="Laguna Azul"
          aspect="aspect-[3/4]"
          className="!rounded-none col-span-1"
          src="/images/tarapoto/ultima-secuencia-3.webp"
        />
      </div>
      <section className="bg-cloud pt-10 pb-20 sm:pb-28 text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <p className="font-display text-xl sm:text-2xl text-forest leading-snug">
            La caída de agua de Ahuashiyacu, la imponente Cordillera Escalera
            y las aguas turquesa de la Laguna Azul.
          </p>
          <p className="mt-4 text-charcoal/60">
            Un destino que ya atrae a miles de visitantes cada año y que
            ahora también puede ser tu lugar.
          </p>
        </div>
      </section>
    </>
  );
}
