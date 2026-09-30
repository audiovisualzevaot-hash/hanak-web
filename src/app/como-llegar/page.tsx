import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import RutaLimaHanak from "@/components/RutaLimaHanak";

export const metadata = { title: "Cómo llegar — HANAK" };

// Reformulación completa según el export de Illustrator que mandó Bryan
// (segunda vuelta de correcciones sobre esta misma hoja):
//
// - El hero deja de ser una franja de 45vh para pasar a foto a pantalla
//   completa, igual mecanismo que el resto de las hojas (Inicio,
//   Experiencia): título "LLEGAR A HANAK" arriba, y más abajo el bloque
//   "Es parte de la experiencia" / "Parte del viaje" (este último en el
//   acento teal que ya estaba reservado en globals.css para este uso
//   exacto). La foto del export es un cerro con pasto + mar de nubes,
//   distinta a la que hoy vive en /como-llegar (bosque neblinoso) — Bryan
//   va a mandar la foto definitiva para este hero, así que por ahora se
//   mantiene el header.webp actual a pantalla completa como placeholder;
//   en cuanto llegue la nueva foto, solo hay que cambiar el `src` de abajo.
// - "Conecta desde LIMA a HANAK": el mapa esquemático (RutaAnimada.tsx) se
//   reemplaza por el mapa real que exportó Bryan de Illustrator (mismo
//   criterio que el mini-mapa de Inicio — PeruMiniMap.tsx), mostrado grande
//   ("como si fuesen dos bloques"), con el avión y el carrito animados de
//   verdad sobre la línea punteada real del gráfico (ver RutaLimaHanak.tsx
//   para el detalle de cómo se limpiaron y recortaron esos íconos).
// - Debajo, una sola foto continua (2da-foto.webp, ya estaba en el
//   proyecto y calza con la foto del export) hace de fondo para dos
//   momentos: arriba "Vuelos directos y diarios desde Lima" con las 3
//   tarjetas de vuelo que mandó Bryan (JetSMART, LATAM, SKY — export real
//   de Illustrator, se muestran tal cual como gráfico, no se recrean con
//   texto/logos propios), y abajo "De Tarapoto a Hanak". El copy sigue
//   mencionando "5 aerolíneas" a pedido de Bryan, como adelanto de las 2
//   tarjetas que faltan mandar.
// - Cierra con la cita suelta sobre crema, tal como en el export. La
//   sección de "Ubicación" con el mapa de Google que tenía la versión
//   anterior se quita del todo (no está en el export; Bryan pidió
//   quitarla).
export default function ComoLlegarPage() {
  return (
    <>
      {/* HERO — foto a pantalla completa (antes franja de 45vh) */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-forest-dark">
        <MediaPlaceholder
          label="Cómo llegar — HANAK"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/como-llegar/header.webp"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/55" />

        <div className="relative z-10 flex flex-col flex-1 px-5 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-14 sm:pb-20">
          <h1 className="font-display uppercase text-cloud text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-tight max-w-2xl">
            Llegar a HANAK
          </h1>

          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <LogoMark size={24} tone="cream" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80">
              Es parte de la experiencia
            </p>
            <p className="font-display italic text-teal text-4xl sm:text-6xl">
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
          <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3">
            Conecta desde
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-tight">
            LIMA a HANAK
          </h2>
        </div>
        <RutaLimaHanak />
      </section>

      {/* VUELOS + DE TARAPOTO A HANAK — una sola foto continua de fondo */}
      <section className="relative min-h-[140vh] sm:min-h-[120vh] overflow-hidden bg-forest">
        <MediaPlaceholder
          label="Vuelos directos desde Lima"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/como-llegar/2da-foto.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/60" />

        <div className="relative z-10 flex flex-col justify-between min-h-[140vh] sm:min-h-[120vh] px-5 sm:px-10 lg:px-14 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 max-w-4xl">
            <h2 className="font-display text-3xl sm:text-5xl text-white leading-tight">
              Vuelos directos y diarios desde Lima
            </h2>
            <p className="text-white/80 leading-relaxed sm:text-right sm:max-w-xs">
              Con 5 aerolíneas operando distintos horarios a lo largo del día.
            </p>
          </div>

          {/* Tarjetas de vuelo — export real de Illustrator (JetSMART, LATAM,
              SKY), se muestran tal cual: recrearlas con texto y logotipos
              propios implicaría reproducir marcas de terceros. */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 max-w-4xl mx-auto w-full my-10 sm:my-0">
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

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-5xl text-white leading-tight">
              De Tarapoto a Hanak
            </h2>
            <p className="text-white/80 leading-relaxed sm:text-right sm:max-w-xs">
              A solo 30 minutos del aeropuerto de Tarapoto.
            </p>
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
