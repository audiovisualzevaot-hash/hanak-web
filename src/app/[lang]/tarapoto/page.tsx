import type { Metadata } from "next";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import LogoMark from "@/components/LogoMark";
import VideoLightbox from "@/components/VideoLightbox";
import ScrollingGallery from "@/components/ScrollingGallery";
import ReserveCta from "@/components/ReserveCta";
import { tarapotoStats } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { format } from "@/lib/i18n/format";
import type { Locale } from "@/lib/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pageTitles.tarapoto };
}

// Bryan: cada foto que envía trae, al inicio de su nombre original, la
// pestaña a la que pertenece (p. ej. "TARAPOTO_LISTA1", "TARAPOTO_
// SECUENCIA 1"...) — estos tres grupos respetan exactamente esos
// conjuntos originales, completos (antes se usaban solo algunas fotos de
// cada grupo, y una foto de "lista" se había colado en la galería final).
// Los archivos (src) son estructurales y van fijos; el alt de cada foto
// viene del diccionario (tarapoto.culturaAlts/secuenciaAlts/
// ultimaSecuenciaAlts), en el mismo orden que estos arreglos.
const culturaSrcs = [
  "/images/tarapoto/lista1.webp",
  "/images/tarapoto/lista2.webp",
  "/images/tarapoto/lista3.webp",
  "/images/tarapoto/lista4.webp",
  "/images/tarapoto/lista5.webp",
];

const secuenciaSrcs = [
  "/images/tarapoto/secuencia-1.webp",
  "/images/tarapoto/secuencia-2.webp",
  "/images/tarapoto/secuencia-3.webp",
  "/images/tarapoto/secuencia-4.webp",
  "/images/tarapoto/secuencia-5.webp",
];

const ultimaSecuenciaSrcs = [
  "/images/tarapoto/ultima-secuencia-1.webp",
  "/images/tarapoto/ultima-secuencia-2.webp",
  "/images/tarapoto/ultima-secuencia-3.webp",
  "/images/tarapoto/ultima-secuencia-4.webp",
];

export default async function TarapotoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const t = dict.tarapoto;

  const culturaFotos = culturaSrcs.map((src, i) => ({ src, alt: t.culturaAlts[i] }));
  const secuenciaFotos = secuenciaSrcs.map((src, i) => ({ src, alt: t.secuenciaAlts[i] }));
  const ultimaSecuenciaFotos = ultimaSecuenciaSrcs.map((src, i) => ({ src, alt: t.ultimaSecuenciaAlts[i] }));

  return (
    <>
      {/* HERO + CIFRAS — foto continua de fondo, título y datos de mercado */}
      <section className="relative min-h-[115vh] flex flex-col overflow-hidden bg-forest-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tarapoto/secuencia-4.webp"
          alt={t.heroImgAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-forest-dark" />

        <div className="relative z-10 flex flex-col items-center text-center text-white px-5 pt-28 sm:pt-32">
          <h1 className="font-display text-6xl sm:text-8xl animate-tarapoto-title">
            TARAPOTO
          </h1>

          <div className="max-w-xl mt-10">
            <p className="font-display text-xl sm:text-2xl leading-snug animate-tarapoto-line [animation-delay:350ms]">
              {t.introLine1}
            </p>
            <p className="mt-5 text-cloud/85 leading-relaxed animate-tarapoto-line [animation-delay:480ms]">
              {t.introLine2}
            </p>
            <p className="mt-4 text-cloud/85 leading-relaxed animate-tarapoto-line [animation-delay:610ms]">
              {t.introLine3}
            </p>
          </div>

          {/* Video de Tarapoto — Bryan aclaró que el hero es un video, no
              una foto fija: al hacer click se abre el reproductor. Queda
              listo para recibir el .mp4 definitivo (ver VideoLightbox). */}
          <VideoLightbox
            overlay={false}
            label={t.videoLabel}
            className="mt-10 animate-tarapoto-line [animation-delay:740ms]"
          />
        </div>

        <div className="relative z-10 mt-auto px-5 sm:px-8 pb-16 sm:pb-20 pt-14">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
            {tarapotoStats.map((s, i) => (
              <div
                key={s.n}
                className="border border-white/25 rounded-xl px-4 sm:px-6 py-5 sm:py-6 text-center text-white animate-tarapoto-card"
                style={{ animationDelay: `${820 + i * 110}ms` }}
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                  {format(t.statNumberTemplate, { n: s.n })}
                </p>
                <p className="font-display text-2xl sm:text-4xl mb-2">{s.valor}</p>
                <p className="text-[11px] sm:text-sm text-white/70 leading-snug">{t.stats[s.n]}</p>
              </div>
            ))}
          </div>
          <p className="max-w-5xl mx-auto text-[11px] text-white/45 mt-6">
            {t.disclaimer}
          </p>
          <div className="max-w-5xl mx-auto mt-8 flex justify-center">
            <ReserveCta label={dict.ctas.tarapotoHero} variant="dark" />
          </div>
        </div>
      </section>

      {/* Tira de cultura y gastronomía — 5 fotos, 4 visibles, deslizando sola */}
      <ScrollingGallery images={culturaFotos} itemWidthClass="w-[50vw] sm:w-[25vw]" durationSeconds={30} />

      {/* PLAZA DE ARMAS — full bleed, protagonista */}
      <section className="relative min-h-[100vh] sm:min-h-[110vh] flex items-end overflow-hidden bg-forest">
        <MediaPlaceholder
          label={t.plazaAlt}
          kind="video"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none"
          src="/images/tarapoto/plaza-de-armas.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <p className="relative z-10 max-w-lg px-5 sm:px-8 pb-14 sm:pb-20 text-2xl sm:text-4xl text-white leading-snug">
          <span className="font-semibold">{t.cultureBold}</span>{" "}
          {t.cultureRest}
        </p>
      </section>

      {/* IDENTIDAD */}
      <section className="bg-cloud pt-20 sm:pt-28 pb-4 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-charcoal/70 leading-relaxed">
            {t.identityBody}
          </p>
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="h-px w-16 sm:w-24 bg-charcoal/20" />
            <LogoMark size={26} tone="forest" />
            <span className="h-px w-16 sm:w-24 bg-charcoal/20" />
          </div>
          <p className="font-display text-xl sm:text-2xl text-forest">
            {t.livingNear}
          </p>
        </div>
      </section>

      {/* CRECIMIENTO — galería "SECUENCIA", deslizando sola */}
      <section className="bg-cloud pt-14 pb-14 sm:pb-20 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-5xl text-forest leading-tight">
            {t.growthLine1}
            <br className="hidden sm:block" /> {t.growthLine2}
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            <span className="font-semibold text-charcoal">
              {t.growthBold}
            </span>{" "}
            {t.growthRest}
          </p>
        </div>
      </section>
      <ScrollingGallery images={secuenciaFotos} itemWidthClass="w-[50vw] sm:w-[33.333vw]" durationSeconds={34} />

      {/* PAISAJES — puerta de entrada a la Amazonía — galería "ÚLTIMA
          SECUENCIA", deslizando sola */}
      <section className="bg-cloud pt-20 pb-8 text-center">
        <h2 className="font-display text-2xl sm:text-4xl text-forest max-w-3xl mx-auto px-5 sm:px-8 leading-snug">
          {t.gatewayTitle}
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
            {t.gatewayBody1}
          </p>
          <p className="mt-4 text-charcoal/60">
            {t.gatewayBody2}
          </p>
          <div className="mt-8 flex justify-center">
            <ReserveCta label={dict.ctas.tarapotoClosing} variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
