import Image from "next/image";
import MasterplanMap from "@/components/MasterplanMap";

export const metadata = { title: "Masterplan — HANAK" };

// Reformulación completa según el export de Illustrator que mandó Bryan —
// lo que había antes (header de 45vh + dos párrafos sueltos + el mapa) era
// "muy distinto" al export, así que se rehace entero:
//
// - Apertura "HANAK está registrado ante SUNARP" y "Concepto arquitectónico"
//   pasan de párrafo+foto simple a un collage de fotos de tamaños mixtos
//   (una grande + varias chicas, como pidió Bryan), con el propio mapa.webp
//   como marca de agua de muy baja opacidad detrás, sobre el crema — nunca
//   se pidieron fotos nuevas para esto, así que se usaron las que ya
//   estaban en el proyecto, agrupadas por lo que realmente muestran: las
//   fotos aéreas reales del terreno (dron) para la sección de SUNARP, y los
//   renders de arquitectura (palapa, campanario, pérgola) para la de
//   concepto arquitectónico.
// - El mapa (MasterplanMap.tsx) se agrandó dentro de su propia tarjeta,
//   sumó pines de amenidad además de los de manzana, y su ventana de
//   detalle dejó de ser un modal de pantalla completa con fondo gris — pidió
//   expresamente "solo un cuadro", así que ahora es una tarjeta que se
//   despliega dentro de la misma hoja, con foto según la experiencia.
export default function MasterplanPage() {
  return (
    <>
      {/* HANAK ESTÁ REGISTRADO ANTE SUNARP — collage + headline */}
      <section className="relative overflow-hidden bg-cloud pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/masterplan/mapa.webp"
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute -right-[15%] top-[0%] w-[75%] max-w-4xl opacity-[0.07] grayscale contrast-125"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-center">
          <div className="grid grid-cols-[1.3fr_1fr] grid-rows-2 gap-3 sm:gap-4 h-[300px] sm:h-[400px] lg:h-[460px]">
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/masterplan/1ra-foto-grande.webp"
                alt="Vista aérea del terreno de HANAK"
                fill
                sizes="(min-width: 1024px) 32vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/masterplan/foto-pequena-2.webp"
                alt="Acceso al terreno de HANAK"
                fill
                sizes="(min-width: 1024px) 22vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/masterplan/foto-pequena-1.webp"
                alt="Vista aérea de la selva alta"
                fill
                sizes="(min-width: 1024px) 22vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest leading-tight">
              HANAK está registrado ante SUNARP
            </h1>
            <p className="mt-5 text-charcoal/70 leading-relaxed text-lg">
              Con partida registral a nombre de{" "}
              <span className="font-medium text-charcoal">Grupo Zevaot Inversiones S.A.C.</span>
              <br />
              Un proyecto respaldado desde su origen.
            </p>
          </div>
        </div>
      </section>

      {/* CONCEPTO ARQUITECTONICO — headline + collage */}
      <section className="relative overflow-hidden bg-cloud-soft py-16 sm:py-24">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl sm:text-5xl text-forest leading-tight mb-5">
              La arquitectura de HANAK no compite con el paisaje
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg max-w-md">
              Materiales que dialogan con el entorno, ventilación cruzada que
              aprovecha el clima de altura, luz natural como protagonista, y
              una relación constante entre interior y exterior. Cada vivienda
              está pensada para que el paisaje entre, no para taparlo.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[340px] sm:h-[420px] lg:h-[480px]">
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/masterplan/foto-pequena-3.webp"
                  alt="Palapa de bienvenida HANAK"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/masterplan/2da-foto-grande.webp"
                  alt="Campanario de acceso a HANAK"
                  fill
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/masterplan/foto-pequena-4.webp"
                  alt="Palapa al atardecer"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Acento chico superpuesto — mismo criterio de "tamaños
                mixtos" del collage de arriba, ahora con un cuarto recorte
                que se asoma sobre el mosaico. */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 lg:w-28 aspect-[3/4] rounded-xl overflow-hidden shadow-lg ring-4 ring-cloud-soft">
              <Image
                src="/images/masterplan/foto-pequena-5.webp"
                alt="Pérgola y jardín de HANAK"
                fill
                sizes="10vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EL MASTERPLAN — mapa grande e interactivo */}
      <section className="max-w-[90rem] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3">Encuentra tu lugar</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-tight">
            El Masterplan
          </h2>
          <p className="mt-3 text-charcoal/70 text-lg">
            Veinte manzanas, cada una con su propia relación con el paisaje.
            Toca un punto del mapa para conocerlo.
          </p>
        </div>
        <MasterplanMap />
      </section>
    </>
  );
}
