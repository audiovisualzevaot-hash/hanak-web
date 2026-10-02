import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import HeroSequence from "@/components/HeroSequence";
import PriorizamosSelva from "@/components/PriorizamosSelva";
import SociosFundadores from "@/components/SociosFundadores";
import ReserveCta from "@/components/ReserveCta";
import ScrollReveal from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref, type Locale } from "@/lib/i18n/locales";

export default async function InicioPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const h = dict.home;
  return (
    <>
      {/* HERO — atardecer → mar de nubes que sube, panea hacia el valle y
          revela "El primer Sky Resort de Latinoamérica" + el mapa, todo
          sobre la misma foto (ver HeroSequence) */}
      <HeroSequence />

      <PriorizamosSelva />

      {/* LLEGAR A HANAK — una sola foto continua de fondo (grupo llegando a
          Hanak). Como en el export de Illustrator: la silueta del distrito
          + el lockup HANAK van arriba a la IZQUIERDA, a la misma altura
          que el título "Llegar a HANAK / es muy sencillo" arriba a la
          derecha — un header de dos columnas sobre la foto, dejando el
          resto de la imagen (centro y abajo) totalmente libre. Antes el
          mapa vivía anclado abajo con mt-auto, muy lejos del título; Bryan
          pidió específicamente subirlo para que quede a la par (el
          título ya estaba bien, solo el mapa estaba mal colocado). El
          botón de ir a "Cómo llegar" sigue abajo a la derecha. */}
      <Link
        href={localeHref(lang, "/como-llegar")}
        className="group relative flex min-h-[85vh] sm:min-h-[95vh] flex-col overflow-hidden bg-forest"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/inicio/llegar-a-hanak.webp"
          alt={h.arriveAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <ScrollReveal className="relative z-10 flex justify-end px-5 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div className="text-right text-forest-dark">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              {h.arriveTitle}
            </h2>
            <p className="mt-1 text-lg sm:text-2xl lg:text-3xl text-forest-dark/70">{h.arriveSubtitle}</p>
          </div>
        </ScrollReveal>

        {/* Silueta del distrito de Hanak + lockup — gráfico real exportado
            por Bryan desde Illustrator con fondo transparente. Bryan marcó
            con un círculo a mano en una captura suya el tamaño y la
            posición que quiere: mucho más grande y más hacia el centro de
            la mitad izquierda, no un badge chico pegado a la esquina. Por
            eso va posicionado en porcentaje del contenedor completo (no en
            píxeles fijos ni atado al padding del header) — así escala
            igual de "grande" sin importar la resolución, incluyendo
            monitores anchos/ultrawide donde un ancho en px fijo se veía
            chico en proporción. */}
        <ScrollReveal
          className="absolute z-10 top-[24%] sm:top-[7%] left-[8%] sm:left-[10%] lg:left-[14%] xl:left-[16%] w-[30%] sm:w-[27%] lg:w-[23%] xl:w-[20%]"
          delayMs={120}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/mapa-llegar-hanak.webp"
            alt={h.siluetaAlt}
            className="w-full h-auto drop-shadow-sm"
          />
        </ScrollReveal>

        <ScrollReveal
          className="absolute bottom-6 right-5 sm:bottom-10 sm:right-10 z-10"
          delayMs={240}
          y={10}
        >
          <span className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 text-forest transition group-hover:bg-white group-hover:scale-110">
            ↗
          </span>
        </ScrollReveal>
      </Link>

      {/* DENTRO DE HANAK — teaser masterplan. Reordenado como en el export
          de Illustrator: texto a la izquierda, la ilustración isométrica
          grande a la derecha, sin tarjeta/rotación/sombra encima — el
          gráfico ya trae su propio fondo crema (ajustado a --hanak-cloud)
          y se integra directo con la página. Bryan insistió dos veces en
          que el plano se seguía viendo chico: además del recorte del PNG
          (mapa.webp ya viene recortado sin el margen crema muerto que
          traía el export), la sección ahora es de ancho completo — ya no
          vive dentro de un contenedor centrado — y la columna de la
          imagen no lleva padding a la derecha, así que en pantallas
          grandes el plano llega literalmente hasta el borde del navegador
          en vez de quedar encerrado en una columna angosta. */}
      <section className="w-full py-20 sm:py-28 grid lg:grid-cols-[minmax(0,26rem)_1fr] gap-10 lg:gap-12 items-center">
        <ScrollReveal className="order-1 px-5 sm:px-8 lg:pl-10 xl:pl-16">
          <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3">
            {h.findPlaceEyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-forest leading-tight mb-4">
            {h.insideTitle}
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-md mb-6">
            {h.insideBody}
          </p>
          <Link
            href={localeHref(lang, "/masterplan")}
            className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.12em] text-forest hover:underline"
          >
            {h.exploreMasterplanCta} <span aria-hidden>↗</span>
          </Link>
        </ScrollReveal>
        <ScrollReveal className="order-2 px-5 sm:px-8 lg:px-0" delayMs={150} y={32}>
          <Link href={localeHref(lang, "/masterplan")} className="group block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/inicio/mapa.webp"
              alt={h.masterplanAlt}
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </ScrollReveal>
      </section>

      {/* SOCIOS FUNDADORES */}
      <section className="bg-cloud-soft py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3 text-center lg:text-left">
              {h.experienciasEyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl text-forest mb-12 text-center lg:text-left">
              {h.sociosTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={120} y={32}>
            <SociosFundadores />
          </ScrollReveal>
          <ScrollReveal delayMs={220} className="mt-14 flex justify-center lg:justify-start">
            <ReserveCta label={dict.ctas.homeSocios} variant="light" />
          </ScrollReveal>
        </div>
      </section>

      {/* HISTORIAS, NOVEDADES — teaser oscuro */}
      <section className="bg-forest-dark text-cloud py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">{h.newsTitle}</h2>
              <p className="italic text-cloud/60 mt-1">
                {h.newsSubtitle}
              </p>
            </div>
            <Link href={localeHref(lang, "/news")} className="text-sm text-cloud/80 hover:text-white hidden sm:block">
              {h.viewAll}
            </Link>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {dict.news.calendario.slice(0, 3).map((title, i) => (
              <ScrollReveal key={title} delayMs={i * 120} y={32}>
                <Link
                  href={localeHref(lang, "/news")}
                  className="group block rounded-xl overflow-hidden border border-cloud/15 hover:border-cloud/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/20"
                >
                  <MediaPlaceholder label={title} aspect="aspect-[4/3]" className="!rounded-none" />
                  <div className="p-4">
                    <p className="text-[11px] uppercase tracking-wider text-cloud/50 mb-1">
                      {dict.news.comingSoon}
                    </p>
                    <p className="font-display text-base leading-snug">{title}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
