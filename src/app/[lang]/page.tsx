import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import HeroSequence from "@/components/HeroSequence";
import PriorizamosSelva from "@/components/PriorizamosSelva";
import SociosFundadores from "@/components/SociosFundadores";
import ReserveCta from "@/components/ReserveCta";
import ScrollReveal from "@/components/ScrollReveal";
import SplitText from "@/components/motion/SplitText";
import Parallax from "@/components/motion/Parallax";
import RevealImage from "@/components/motion/RevealImage";
import WaveDivider from "@/components/motion/WaveDivider";
import ContourLines from "@/components/graphics/ContourLines";
import CloudLines from "@/components/graphics/CloudLines";
import RouteLine from "@/components/graphics/RouteLine";
import LeafLines from "@/components/graphics/LeafLines";
import IsotipoWatermark from "@/components/graphics/IsotipoWatermark";
import CircleCta from "@/components/graphics/CircleCta";
import CountUp from "@/components/graphics/CountUp";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localeHref, type Locale } from "@/lib/i18n/locales";

/*
  Dinamismo de Inicio (referencia ayana.com, pedido de Bryan): cada bloque
  entra y sale con el scroll, y cada transición entre bloques tiene su propia
  forma y movimiento — a propósito ninguna se repite:

    Hero ──arc──▶ Priorizamos ──wave──▶ Llegar ──clouds──▶ Dentro
      ──hills──▶ Socios ──scoop──▶ Novedades ──mist──▶ Footer

  El bloque DUEÑO de cada borde dibuja la curva con SU color (así funciona
  también sobre fotos), por eso esos bloques son `relative z-10` y no llevan
  overflow-hidden: la decoración que sí debe recortarse va en una capa
  aparte (`absolute inset-0 overflow-hidden`).
*/
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

      {/* PRIORIZAMOS LA SELVA — dueño de dos bordes: arco arriba (sobre el
          hero) y onda en S abajo (sobre la foto de Llegar). Ver el componente. */}
      <PriorizamosSelva />

      {/* LLEGAR A HANAK — una sola foto continua de fondo (grupo llegando a
          Hanak). Como en el export de Illustrator: la silueta del distrito
          + el lockup HANAK van arriba a la IZQUIERDA, a la misma altura
          que el título "Llegar a HANAK / es muy sencillo" arriba a la
          derecha, dejando el resto de la imagen libre. La foto se mueve más
          lento que el scroll (parallax, sin scale); el título entra palabra
          por palabra; la ruta Lima → Tarapoto → HANAK se traza sola abajo a
          la izquierda; y el botón circular giratorio lleva a "Cómo llegar".
          Los paddings de arriba son mayores que antes porque la onda de
          Priorizamos cuelga sobre el borde superior de la foto. */}
      <Link
        href={localeHref(lang, "/como-llegar")}
        className="group relative flex min-h-[85vh] sm:min-h-[95vh] flex-col overflow-hidden bg-forest"
      >
        <Parallax className="absolute inset-0" strength={70}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/llegar-a-hanak.webp"
            alt={h.arriveAlt}
            className="h-full w-full object-cover"
          />
        </Parallax>

        <div className="relative z-10 flex justify-end px-5 pt-28 sm:px-10 sm:pt-36 lg:px-14 lg:pt-40">
          <div className="text-right text-forest-dark">
            <SplitText
              as="h2"
              mode="mask"
              text={h.arriveTitle}
              className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            />
            <SplitText
              as="p"
              mode="blur"
              delayMs={450}
              text={h.arriveSubtitle}
              className="mt-1 text-lg sm:text-2xl lg:text-3xl text-forest-dark/70"
            />
          </div>
        </div>

        {/* Silueta del distrito de Hanak + lockup — gráfico real exportado
            por Bryan desde Illustrator con fondo transparente, en porcentaje
            del contenedor completo (no en px) para que escale igual de
            "grande" en cualquier resolución. Entra con una máscara circular. */}
        <RevealImage
          variant="circle"
          radius={0}
          delayMs={150}
          className="absolute z-10 top-[27%] sm:top-[13%] left-[8%] sm:left-[10%] lg:left-[14%] xl:left-[16%] w-[30%] sm:w-[27%] lg:w-[23%] xl:w-[20%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/mapa-llegar-hanak.webp"
            alt={h.siluetaAlt}
            className="w-full h-auto drop-shadow-sm"
          />
        </RevealImage>

        <RouteLine className="absolute z-10 left-[4%] bottom-[19%] sm:bottom-[17%] w-[58%] sm:w-[40%] lg:w-[34%] max-w-[560px]" />

        <ScrollReveal
          className="absolute bottom-24 right-5 sm:bottom-36 sm:right-10 z-10"
          delayMs={300}
          variant="blur"
          y={14}
        >
          <CircleCta label={dict.motion.explore} size={112} />
        </ScrollReveal>
      </Link>

      {/* DENTRO DE HANAK — teaser masterplan: texto a la izquierda, la
          ilustración isométrica grande a la derecha, sin tarjeta/rotación/
          sombra (el gráfico ya trae su fondo crema). Sección de ancho
          completo: en pantallas grandes el plano llega al borde del
          navegador. Dueño del festón de nubes de arriba (sobre la foto de
          Llegar). Atrás: curvas de nivel que se dibujan solas, nubes finas
          que cruzan y el isotipo gigante girando muy lento. */}
      <section className="relative z-10 w-full bg-cloud py-24 sm:py-32 grid lg:grid-cols-[minmax(0,26rem)_1fr] gap-10 lg:gap-12 items-center">
        <WaveDivider variant="clouds" fill="var(--hanak-cloud)" edge="top" />
        {/* z-[1]: las líneas decorativas pasan POR ENCIMA del plano (que trae su
            propio fondo crema opaco) — si quedaran debajo, el PNG las taparía y
            se vería un rectángulo con las curvas cortadas en su borde. El texto
            va en z-[2] para que ninguna línea lo cruce. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <ContourLines className="absolute inset-0 h-full w-full text-forest/[0.13]" />
          <CloudLines className="absolute inset-0 text-forest/25" />
          <IsotipoWatermark className="absolute -left-40 top-1/2 -translate-y-1/2" size={560} opacity={0.07} />
        </div>

        <div className="relative z-[2] order-1 px-5 sm:px-8 lg:pl-10 xl:pl-16">
          <ScrollReveal
            variant="track"
            tracking="0.2em"
            className="uppercase text-xs text-charcoal/50 mb-3"
          >
            {h.findPlaceEyebrow}
          </ScrollReveal>
          <SplitText
            as="h2"
            mode="mask"
            text={h.insideTitle}
            className="font-display text-3xl sm:text-5xl text-forest leading-tight mb-4"
          />
          <SplitText
            as="p"
            mode="blur"
            delayMs={200}
            text={h.insideBody}
            className="text-charcoal/70 leading-relaxed max-w-md mb-6"
          />
          <ScrollReveal delayMs={250} className="mb-7 flex items-baseline gap-3">
            <CountUp to={20} className="font-display text-6xl sm:text-7xl text-forest leading-none" />
            <span className="uppercase text-xs tracking-[0.2em] text-charcoal/50">{dict.motion.blocksLabel}</span>
          </ScrollReveal>
          <ScrollReveal delayMs={350} variant="left" y={20}>
            <Link
              href={localeHref(lang, "/masterplan")}
              className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.12em] text-forest"
            >
              <span className="draw-underline">{h.exploreMasterplanCta}</span> <span aria-hidden>↗</span>
            </Link>
          </ScrollReveal>
        </div>
        <RevealImage variant="circle" radius={0} className="relative order-2 px-5 sm:px-8 lg:px-0">
          <Link href={localeHref(lang, "/masterplan")} className="group block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/inicio/mapa.webp"
              alt={h.masterplanAlt}
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </RevealImage>
      </section>

      {/* SOCIOS FUNDADORES — dueño de los cerros de arriba (dos capas que
          suben a distinta velocidad sobre el plano). Ramas de selva en
          trazo fino que se dibujan en los dos costados. */}
      <section className="relative z-10 bg-cloud-soft py-24 sm:py-32">
        <WaveDivider variant="hills" fill="var(--hanak-cloud-soft)" backFill="rgba(128,136,105,0.2)" edge="top" />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <LeafLines className="absolute -left-6 bottom-0 h-[70%] max-h-[520px] text-forest/25" />
          <LeafLines flip className="absolute -right-6 top-6 h-[60%] max-h-[460px] text-forest/20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal
            variant="track"
            tracking="0.2em"
            className="uppercase text-xs text-charcoal/50 mb-3 text-center lg:text-left"
          >
            {h.experienciasEyebrow}
          </ScrollReveal>
          <SplitText
            as="h2"
            mode="mask"
            text={h.sociosTitle}
            className="font-display text-3xl sm:text-5xl text-forest mb-12 text-center lg:text-left"
          />
          <SociosFundadores />
          <ScrollReveal delayMs={150} variant="blur" className="mt-14 flex justify-center lg:justify-start">
            <ReserveCta label={dict.ctas.homeSocios} variant="light" />
          </ScrollReveal>
        </div>
      </section>

      {/* HISTORIAS, NOVEDADES — teaser oscuro. Dueño de la "cuchara"
          cóncava de arriba; abajo, una neblina verde-oliva sube desde la base
          y se funde con la banda olivo de la marquesina.
          Las tres tarjetas entran cada una distinta (desde la izquierda,
          desenfocada, desde la derecha). */}
      <section className="relative z-10 bg-forest-dark text-cloud py-20 sm:py-28">
        <WaveDivider variant="scoop" fill="var(--hanak-forest-dark)" edge="top" />
        <WaveDivider variant="mist" fill="rgba(128,136,105,0.6)" edge="inside" />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <CloudLines className="absolute inset-0 text-cloud/15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SplitText as="h2" mode="mask" text={h.newsTitle} className="font-display text-3xl sm:text-4xl" />
              <ScrollReveal variant="fade" delayMs={300}>
                <p className="italic text-cloud/60 mt-1">{h.newsSubtitle}</p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="right" y={16} delayMs={200} className="hidden sm:block">
              <Link href={localeHref(lang, "/news")} className="text-sm text-cloud/80 hover:text-white">
                <span className="draw-underline">{h.viewAll}</span>
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {dict.news.calendario.slice(0, 3).map((title, i) => (
              <ScrollReveal
                key={title}
                variant={i === 0 ? "left" : i === 1 ? "blur" : "right"}
                delayMs={i * 140}
                y={36}
              >
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
