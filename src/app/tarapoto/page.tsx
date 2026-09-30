import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import VideoLightbox from "@/components/VideoLightbox";
import ScrollingGallery from "@/components/ScrollingGallery";
import { tarapotoStats } from "@/lib/content";

export const metadata = { title: "Tarapoto — HANAK" };

// Bryan: cada foto que envía trae, al inicio de su nombre original, la
// pestaña a la que pertenece (p. ej. "TARAPOTO_LISTA1", "TARAPOTO_
// SECUENCIA 1"...) — estos tres grupos respetan exactamente esos
// conjuntos originales, completos (antes se usaban solo algunas fotos de
// cada grupo, y una foto de "lista" se había colado en la galería final).

// Tira de cultura y gastronomía — las 5 fotos "LISTA" completas
const culturaFotos = [
  { src: "/images/tarapoto/lista1.webp", alt: "Cacao de San Martín" },
  { src: "/images/tarapoto/lista2.webp", alt: "Juane, plato típico amazónico" },
  { src: "/images/tarapoto/lista3.webp", alt: "Danza típica sanmartinense" },
  { src: "/images/tarapoto/lista4.webp", alt: "Catarata de Ahuashiyacu" },
  { src: "/images/tarapoto/lista5.webp", alt: "Fauna de la Amazonía peruana" },
];

// Galería "SECUENCIA" — las 5 fotos "SECUENCIA" completas
const secuenciaFotos = [
  { src: "/images/tarapoto/secuencia-1.webp", alt: "Lamas, pueblo colonial entre cerros" },
  { src: "/images/tarapoto/secuencia-2.webp", alt: "Centro de Tarapoto en expansión" },
  { src: "/images/tarapoto/secuencia-3.webp", alt: "Cerros y trocha hacia Hanak" },
  { src: "/images/tarapoto/secuencia-4.webp", alt: "Valle de Tarapoto entre montañas y nubes" },
  { src: "/images/tarapoto/secuencia-5.webp", alt: "Aves propias de la selva amazónica" },
];

// Galería "ÚLTIMA SECUENCIA" — las 4 fotos "ULTIMA SECUENCIA" completas
const ultimaSecuenciaFotos = [
  { src: "/images/tarapoto/ultima-secuencia-1.webp", alt: "Atardecer sobre los cerros de Tarapoto" },
  { src: "/images/tarapoto/ultima-secuencia-2.webp", alt: "Parapente sobre la Cordillera Escalera" },
  { src: "/images/tarapoto/ultima-secuencia-3.webp", alt: "Río serpenteando el valle amazónico" },
  { src: "/images/tarapoto/ultima-secuencia-4.webp", alt: "Cacao recién cosechado" },
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

          {/* Video de Tarapoto — Bryan aclaró que el hero es un video, no
              una foto fija: al hacer click se abre el reproductor. Queda
              listo para recibir el .mp4 definitivo (ver VideoLightbox). */}
          <VideoLightbox
            overlay={false}
            label="Reproducir video de Tarapoto"
            className="mt-10"
          />
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

      {/* Tira de cultura y gastronomía — 5 fotos, 4 visibles, deslizando sola */}
      <ScrollingGallery images={culturaFotos} itemWidthClass="w-[50vw] sm:w-[25vw]" durationSeconds={30} />

      {/* PLAZA DE ARMAS — full bleed, protagonista */}
      <section className="relative min-h-[100vh] sm:min-h-[110vh] flex items-end overflow-hidden bg-forest">
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

      {/* CRECIMIENTO — galería "SECUENCIA", deslizando sola */}
      <section className="bg-cloud pt-14 pb-14 sm:pb-20 text-center">
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
      </section>
      <ScrollingGallery images={secuenciaFotos} itemWidthClass="w-[50vw] sm:w-[33.333vw]" durationSeconds={34} />

      {/* PAISAJES — puerta de entrada a la Amazonía — galería "ÚLTIMA
          SECUENCIA", deslizando sola */}
      <section className="bg-cloud pt-20 pb-8 text-center">
        <h2 className="font-display text-2xl sm:text-4xl text-forest max-w-3xl mx-auto px-5 sm:px-8 leading-snug">
          Tarapoto es la puerta de entrada de los paisajes más impresionantes
          de la Amazonía:
        </h2>
      </section>
      <ScrollingGallery
        images={ultimaSecuenciaFotos}
        itemWidthClass="w-[50vw] sm:w-[25vw]"
        durationSeconds={30}
      />
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
