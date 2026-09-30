import MediaPlaceholder from "@/components/MediaPlaceholder";
import ComoLlegarHero from "@/components/ComoLlegarHero";
import RutaLimaHanak from "@/components/RutaLimaHanak";

export const metadata = { title: "Cómo llegar — HANAK" };

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
export default function ComoLlegarPage() {
  return (
    <>
      {/* HERO — foto larga con paneo por scroll, igual mecanismo que
          Inicio/Hanak (ver ComoLlegarHero.tsx). */}
      <ComoLlegarHero />

      {/* CONECTA DESDE LIMA A HANAK — mapa real animado, grande */}
      <section className="bg-cloud pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-5 text-center mb-8 sm:mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-3">
            Conecta desde
          </p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-forest leading-tight">
            LIMA a HANAK
          </h2>
        </div>
        <RutaLimaHanak />
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
          label="Vuelos directos desde Lima"
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
            Vuelos directos y diarios desde Lima
          </h2>
          <p className="text-white/80 leading-relaxed -mt-4">
            Con 5 aerolíneas operando distintos horarios a lo largo del día.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <MediaPlaceholder
              label="Vuelo LATAM Lima–Tarapoto"
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-latam.webp"
            />
            <MediaPlaceholder
              label="Vuelo SKY Lima–Tarapoto"
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-sky.webp"
            />
            <MediaPlaceholder
              label="Vuelo JetSMART Lima–Tarapoto"
              aspect="aspect-[1440/543]"
              className="!rounded-none"
              src="/images/como-llegar/vuelo-jetsmart.webp"
            />
          </div>

          <h2 className="font-display text-3xl text-white leading-tight mt-6">
            De Tarapoto a Hanak
          </h2>
          <p className="text-white/80 leading-relaxed -mt-4">
            A solo 30 minutos del aeropuerto de Tarapoto.
          </p>
        </div>

        {/* Desktop/tablet — posiciones en porcentaje calcadas de la captura
            del Illustrator que mandó Bryan */}
        <div className="hidden sm:block absolute inset-0 px-8 lg:px-14 py-8">
          <div className="relative w-full h-full">
            <div className="absolute top-[7%] inset-x-0 flex items-start justify-between gap-6">
              <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight max-w-md">
                Vuelos directos y diarios desde Lima
              </h2>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-right max-w-[15rem] pt-2">
                Con 5 aerolíneas operando distintos horarios a lo largo del día.
              </p>
            </div>

            <div className="absolute top-[23%] inset-x-0 grid grid-cols-3 gap-4 lg:gap-6">
              <MediaPlaceholder
                label="Vuelo LATAM Lima–Tarapoto"
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-latam.webp"
              />
              <MediaPlaceholder
                label="Vuelo SKY Lima–Tarapoto"
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-sky.webp"
              />
              <MediaPlaceholder
                label="Vuelo JetSMART Lima–Tarapoto"
                aspect="aspect-[1440/543]"
                className="!rounded-none"
                src="/images/como-llegar/vuelo-jetsmart.webp"
              />
            </div>

            <div className="absolute top-[68%] inset-x-0 flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
                De Tarapoto
                <br />a Hanak
              </h2>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed text-right max-w-[15rem]">
                A solo 30 minutos del aeropuerto de Tarapoto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITA DE CIERRE */}
      <section className="bg-cloud py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="font-display italic text-2xl sm:text-3xl text-forest leading-relaxed">
            Un breve trayecto que va dejando atrás la ciudad para acercarte,
            poco a poco, a las nubes.
          </p>
        </div>
      </section>
    </>
  );
}
