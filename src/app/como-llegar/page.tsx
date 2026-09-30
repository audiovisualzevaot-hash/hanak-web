import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import RutaLimaHanak from "@/components/RutaLimaHanak";

export const metadata = { title: "Cómo llegar — HANAK" };

// Reformulación completa según el export de Illustrator que mandó Bryan
// (tercera vuelta de correcciones sobre esta misma hoja):
//
// - Hero: ya con la foto definitiva que mandó Bryan (cerro con selva y
//   neblina), a pantalla completa. Gradiente mucho más liviano — igual
//   criterio que el de Inicio (HeroSequence.tsx: from-black/20 via-black/5
//   to-black/30) — para que se vea "gran parte de la foto" en vez de
//   taparla. Título + bloque "Parte del viaje" ahora van como una sola
//   composición centrada (antes el título vivía arriba a la izquierda,
//   separado del resto) y más grandes, como pidió Bryan.
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
      {/* HERO — foto a pantalla completa, tratamiento igual al de Inicio:
          gradiente liviano (se ve casi toda la foto) y todo el texto en una
          sola composición centrada, grande. */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-forest-dark">
        <MediaPlaceholder
          label="Cómo llegar — HANAK"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/como-llegar/header.webp"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/35" />

        <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-5 gap-5 sm:gap-6">
          <h1 className="font-display uppercase text-cloud text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-tight drop-shadow-sm">
            Llegar a HANAK
          </h1>

          <div className="flex flex-col items-center gap-3">
            <LogoMark size={28} tone="cream" />
            <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/85">
              Es parte de la experiencia
            </p>
            <p className="font-display italic text-teal text-5xl sm:text-7xl">
              Parte del viaje
            </p>
          </div>
        </div>

        <div className="absolute z-10 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/35 animate-[spin_40s_linear_infinite]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </span>
        </div>
      </section>

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
