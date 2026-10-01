import type { Metadata } from "next";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import VideoLightbox from "@/components/VideoLightbox";
import ReserveCta from "@/components/ReserveCta";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pageTitles.vistas };
}

// Bryan mandó el export de Illustrator de esta hoja: el hero deja de ser una
// franja de 55vh con logo simple para pasar a ser foto/video a pantalla
// completa (mismo mecanismo que Tarapoto — VideoLightbox con botón de play,
// listo para el .mp4 en cuanto lo envíe), y cada "momento" deja de ser una
// caja de foto+texto lado a lado para ser una foto a pantalla completa con
// el texto superpuesto — igual al tratamiento de "Plaza de Armas" en
// Tarapoto. La franja de navegación de arriba (AMANECER | MAR DE NUBES |
// ATARDECER | ANOCHER) son anclas que bajan directo a cada sección.
//
// NOTA: la foto de fondo del hero es temporal (hora-dorada.webp, prestada
// de la sección "Atardecer") — Bryan confirmó que tiene una foto específica
// para ese lugar y la va a enviar; en cuanto llegue, solo hay que cambiar
// el `src` del <img> del hero.
//
// Estructural (id/imagen) va fijo acá; categoria/titulo/texto de cada
// momento vienen del diccionario (dict.vistas.momentos[id]), por idioma.
const momentosBase = [
  { id: "amanecer", imagen: "/images/vistas/primer-resplandor.webp" },
  { id: "mar-de-nubes", imagen: "/images/vistas/mar-de-nubes.webp" },
  { id: "atardecer", imagen: "/images/vistas/hora-dorada.webp" },
  { id: "anochecer", imagen: "/images/vistas/bajo-las-estrellas.webp" },
];

export default async function VistasPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const v = dict.vistas;
  const momentos = momentosBase.map((m) => ({ ...m, ...v.momentos[m.id] }));
  return (
    <>
      {/* HERO — foto de fondo a pantalla completa + video (mismo mecanismo
          que Tarapoto: VideoLightbox con botón de play, placeholder "en
          producción" hasta que llegue el .mp4 definitivo). */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/vistas/hero-vistas.webp"
          alt={v.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

        <div className="relative z-10 flex flex-col items-center text-center px-5">
          <LogoMark size={44} tone="cream" className="mb-5" />
          <h1 className="font-display text-cloud text-5xl sm:text-7xl tracking-wide animate-vistas-title">
            HANAK
          </h1>
          <p className="mt-5 font-display italic text-cloud/85 text-lg sm:text-2xl">
            {v.subtitle}
          </p>

          {/* Botón de play en mobile: no hay espacio a los lados del texto
              centrado en una pantalla angosta, así que va en flujo normal,
              debajo del subtítulo. Instancia separada de la de sm+ (abajo)
              porque el contexto de posicionamiento absoluto es distinto en
              cada caso — no se puede resolver con solo clases responsive
              sobre un único elemento. */}
          <div className="sm:hidden relative mt-8 w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_40s_linear_infinite]" />
            <VideoLightbox overlay={false} label={v.videoLabel} />
          </div>
        </div>

        {/* Botón de play en sm+: separado del texto, pegado al costado
            derecho de la sección completa — como en el Illustrator. */}
        <div className="hidden sm:flex absolute z-10 right-16 top-1/2 -translate-y-1/2 w-28 h-28 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_40s_linear_infinite]" />
          <VideoLightbox overlay={false} label={v.videoLabel} />
        </div>
      </section>

      {/* FRANJA DE NAVEGACIÓN — ancla a cada momento */}
      <section className="bg-cloud py-10 sm:py-12 border-b border-charcoal/10">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="font-display uppercase tracking-[0.2em] text-forest text-base sm:text-lg mb-6">
            {v.navEyebrow}
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-3 text-[11px] sm:text-xs uppercase tracking-wider text-charcoal/70">
            {momentos.map((m, i) => (
              <span key={m.id} className="flex items-center gap-3 sm:gap-4">
                <a
                  href={`#${m.id}`}
                  className="inline-flex items-center gap-2 hover:text-forest transition"
                >
                  <LogoMark size={12} tone="forest" />
                  {m.categoria}
                </a>
                {i < momentos.length - 1 && (
                  <span className="text-charcoal/25">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* MOMENTOS — foto a pantalla completa por momento, texto superpuesto */}
      {momentos.map((m) => (
        <section
          key={m.id}
          id={m.id}
          className="relative min-h-[85vh] sm:min-h-screen flex items-end overflow-hidden bg-forest scroll-mt-20 sm:scroll-mt-24"
        >
          <MediaPlaceholder
            label={`${m.categoria} — ${m.titulo}`}
            aspect="aspect-auto"
            className="absolute inset-0 !rounded-none"
            src={m.imagen}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          <div className="relative z-10 w-full px-5 sm:px-10 pb-14 sm:pb-20 grid sm:grid-cols-2 gap-6 sm:gap-10 items-end">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 mb-2">
                {m.categoria}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-none">
                {m.titulo}
              </h2>
            </div>
            <p className="text-white/80 leading-relaxed sm:text-right sm:justify-self-end sm:max-w-sm">
              {m.texto}
            </p>
          </div>
        </section>
      ))}

      <section className="bg-forest text-white py-16 text-center">
        <p className="font-display text-2xl sm:text-3xl max-w-2xl mx-auto px-5">
          {v.closingBanner}
        </p>
        <div className="mt-8 flex justify-center">
          <ReserveCta label={dict.ctas.vistasClosing} variant="dark" />
        </div>
      </section>
    </>
  );
}
