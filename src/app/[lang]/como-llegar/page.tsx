import type { Metadata } from "next";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import ComoLlegarHero from "@/components/ComoLlegarHero";
import RutaLimaHanak from "@/components/RutaLimaHanak";
import ReserveCta from "@/components/ReserveCta";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pageTitles.comoLlegar };
}

// Reformulación completa según el export de Illustrator que mandó Bryan
// (tercera vuelta de correcciones sobre esta misma hoja):
//
// - Hero (ComoLlegarHero.tsx): la foto es muy vertical (2:3, 3600x5400) —
//   en una sección estática de min-h-screen solo se alcanzaba a ver una
//   franja central, cortando tanto la neblina de arriba como la selva de
//   abajo. Bryan pidió expresamente "la foto grande larga, como en
//   INICIO": se reemplazó por el mismo mecanismo de paneo por scroll que
//   ya usa HeroSequence.tsx (Inicio) y HanakHero.tsx (Hanak) — track alto,
//   foto sticky, object-position animado revelando de a poco toda la
//   extensión de la foto — con el mismo criterio de HanakHero de no ser
//   tan largo/elaborado como el de Inicio (track de 170vh, un solo
//   capítulo de texto siempre visible, sin cruce a una segunda foto).
// - "Conecta desde LIMA a HANAK": el mapa (RutaLimaHanak.tsx) vivía en un
//   lienzo cuadrado con mucho margen transparente alrededor — dejaba ver
//   de más el fondo crema de la sección detrás. Se recortó el PNG pegado
//   al contenido real (ver comentario en RutaLimaHanak.tsx) y se agrandó
//   el ancho máximo del componente + el título de la sección.
// - VUELOS + DE TARAPOTO A HANAK: Bryan mandó una captura de esa parte
//   exacta del Illustrator — no es una sección altísima con los bloques
//   flotando muy separados (como había quedado con min-h-140vh), es una
//   sola foto de proporción normal (misma relación de aspecto que
//   2da-foto.webp) con todo compacto: título arriba, las 3 tarjetas de
//   vuelo grandes justo debajo, y "De Tarapoto a Hanak" más abajo. Se
//   reconstruyó la sección con la altura real de la foto (aspect-ratio,
//   no min-h forzado) y todo posicionado en porcentaje según esa captura;
//   en mobile, donde ese mismo layout quedaría demasiado apretado, se usa
//   una versión apilada en vez de las posiciones absolutas.
// - Cierra con la cita suelta sobre crema, tal como en el export. La
//   sección de "Ubicación" con el mapa de Google que tenía la versión
//   anterior sigue fuera (no está en el export; Bryan pidió quitarla).
export default async function ComoLlegarPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const cl = dict.comoLlegar;
  return (
    <>
      {/* HERO — foto larga con paneo por scroll, igual mecanismo que
          Inicio/Hanak (ver ComoLlegarHero.tsx). */}
      <ComoLlegarHero />

      {/* CONECTA DESDE LIMA A HANAK — mapa real animado, grande */}
      <section className="bg-cloud pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-5 text-center mb-8 sm:mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-3">
            {cl.conectaDesde}
          </p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-forest leading-tight">
            {cl.limaAHanak}
          </h2>
        </div>
        <RutaLimaHanak ariaLabel={dict.maps.rutaLimaHanakAria} />
      </section>

      {/* VUELOS + DE TARAPOTO A HANAK — una sola foto continua de fondo.
          Bryan mandó una captura de esta parte exacta del Illustrator: no
          es una franja altísima con los bloques flotando muy separados,
          es una foto de proporción normal (misma relación que
          2da-foto.webp) con todo compacto. De sm: en adelante la sección
          respeta esa proporción real (aspect-ratio) y el contenido va
          posicionado en porcentaje calcado de esa captura; en mobile ese
          mismo layout quedaría ilegible, así que se usa una versión
          apilada normal. */}
      <section className="relative w-full overflow-hidden bg-forest sm:aspect-[2048/1271]">
        <MediaPlaceholder
          label={cl.flightsBgLabel}
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/como-llegar/2da-foto.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/45" />

        {/* Tarjetas de vuelo — export real de Illustrator (JetSMART, LATAM,
            SKY), se muestran tal cual: recrearlas con texto y logotipos
            propios implicaría reproducir marcas de terceros. */}

        {/* Mobile — apilado normal, nada de posiciones absolutas */}
        <div className="relative z-10 flex flex-col gap-8 px-5 py-14 sm:hidden">
          <h2 className="font-display text-3xl text-white leading-tight">
            {cl.flightsTitle}
          </h2>
          <p className="text-white/80 leading-relaxed -mt-4">
            {cl.flightsBody}
          </p>

          <div className="grid grid-cols-1 gap-4">
            <MediaPlaceholder
              label={cl.flightLatamAlt}
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-latam.webp"
            />
            <MediaPlaceholder
              label={cl.flightSkyAlt}
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-sky.webp"
            />
            <MediaPlaceholder
              label={cl.flightJetsmartAlt}
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-jetsmart.webp"
            />
          </div>

          <h2 className="font-display text-3xl text-white leading-tight mt-6">
            {cl.tarapotoHanakMobile}
          </h2>
          <p className="text-white/80 leading-relaxed -mt-4">
            {cl.tarapotoHanakBody}
          </p>
        </div>

        {/* Desktop/tablet — posiciones en porcentaje calcadas de la captura
            del Illustrator que mandó Bryan */}
        <div className="hidden sm:block absolute inset-0 px-8 lg:px-14 py-8">
          <div className="relative w-full h-full">
            <div className="absolute top-[7%] inset-x-0 flex items-start justify-between gap-6">
              <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight max-w-md">
                {cl.flightsTitle}
              </h2>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-right max-w-[15rem] pt-2">
                {cl.flightsBody}
              </p>
            </div>

            <div className="absolute top-[23%] inset-x-0 grid grid-cols-3 gap-4 lg:gap-6">
              {/* Solo se ven desde sm: (grid de 3 columnas), nunca al ancho
                  completo — "sizes" ajustado para no bajar de Next.js una
                  imagen 3 veces más grande de lo que realmente se pinta. */}
              <MediaPlaceholder
                label={cl.flightLatamAlt}
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-latam.webp"
                sizes="33vw"
              />
              <MediaPlaceholder
                label={cl.flightSkyAlt}
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-sky.webp"
                sizes="33vw"
              />
              <MediaPlaceholder
                label={cl.flightJetsmartAlt}
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-jetsmart.webp"
                sizes="33vw"
              />
            </div>

            <div className="absolute top-[68%] inset-x-0 flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
                {cl.tarapotoHanakLine1}
                <br />{cl.tarapotoHanakLine2}
              </h2>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-right max-w-[15rem]">
                {cl.tarapotoHanakBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — justo después de la logística de vuelos, el momento de
          mayor intención: el usuario ya sabe cómo llegar. */}
      <section className="bg-cloud py-14 text-center">
        <ReserveCta label={dict.ctas.comoLlegarFlights} variant="light" />
      </section>

      {/* CITA DE CIERRE */}
      <section className="bg-cloud pt-6 pb-20 sm:pb-28">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="font-display italic text-2xl sm:text-3xl text-forest leading-relaxed">
            {cl.closingQuote}
          </p>
          <div className="mt-8 flex justify-center">
            <ReserveCta label={dict.ctas.comoLlegarClosing} variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
