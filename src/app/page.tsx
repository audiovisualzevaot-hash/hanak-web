import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import HeroSequence from "@/components/HeroSequence";
import PriorizamosSelva from "@/components/PriorizamosSelva";
import SociosFundadores from "@/components/SociosFundadores";
import { newsCalendario } from "@/lib/content";

export default function InicioPage() {
  return (
    <>
      {/* HERO — atardecer → mar de nubes que sube, panea hacia el valle y
          revela "El primer Sky Resort de Latinoamérica" + el mapa, todo
          sobre la misma foto (ver HeroSequence) */}
      <HeroSequence />

      <PriorizamosSelva />

      {/* LLEGAR A HANAK — una sola foto continua de fondo (grupo llegando a
          Hanak). Abajo a la izquierda va la silueta del distrito + el
          lockup HANAK (tal como en el export — ahí es donde vive el logo
          en esta sección, no como una línea de marca aparte arriba), el
          título arriba a la derecha y el botón de ir a "Cómo llegar"
          abajo a la derecha. Todo sobre la misma foto. */}
      <Link
        href="/como-llegar"
        className="group relative flex min-h-[85vh] sm:min-h-[95vh] flex-col overflow-hidden bg-forest"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/inicio/llegar-a-hanak.webp"
          alt="Grupo llegando a Hanak entre las nubes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex justify-end px-5 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div className="text-right text-forest-dark">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Llegar a HANAK
            </h2>
            <p className="mt-1 text-lg sm:text-2xl lg:text-3xl text-forest-dark/70">es muy sencillo</p>
          </div>
        </div>

        {/* Silueta del distrito de Hanak + lockup — gráfico real exportado
            por Bryan desde Illustrator con fondo transparente (reemplaza
            la aproximación a mano de la versión anterior). Escala hasta
            pantallas anchas para que no se vea pequeño ni descentrado. */}
        <div className="relative z-10 mt-auto px-5 pb-6 sm:px-10 sm:pb-10 lg:px-14 lg:pb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/mapa-llegar-hanak.webp"
            alt="Silueta del distrito de Hanak y lockup Hanak Sky Resort & Villas Club"
            className="w-40 sm:w-64 lg:w-80 xl:w-96 h-auto drop-shadow-sm"
          />
        </div>

        <span className="absolute bottom-6 right-5 sm:bottom-10 sm:right-10 z-10 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 text-forest transition group-hover:bg-white">
          ↗
        </span>
      </Link>

      {/* DENTRO DE HANAK — teaser masterplan */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <Link href="/masterplan" className="group block order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/mapa.webp"
            alt="Masterplan de Hanak"
            className="w-full rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
          />
        </Link>
        <div className="order-1 lg:order-2">
          <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3">
            Explora el proyecto
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-forest leading-tight mb-4">
            Dentro de HANAK
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-md">
            Veinte manzanas, cada una con su propia relación con el paisaje.
            Recorre el masterplan y encuentra la tuya.
          </p>
          <Link
            href="/masterplan"
            className="inline-flex items-center gap-1.5 mt-6 text-sm text-forest hover:underline"
          >
            Ver el masterplan <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* SOCIOS FUNDADORES */}
      <section className="bg-cloud-soft py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="uppercase tracking-[0.2em] text-xs text-charcoal/50 mb-3 text-center lg:text-left">
            Experiencias de
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-forest mb-12 text-center lg:text-left">
            Socios Fundadores
          </h2>
          <SociosFundadores />
        </div>
      </section>

      {/* HISTORIAS, NOVEDADES — teaser oscuro */}
      <section className="bg-forest-dark text-cloud py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Historias, novedades</h2>
              <p className="italic text-cloud/60 mt-1">
                y todo lo que va sucediendo en HANAK
              </p>
            </div>
            <Link href="/news" className="text-sm text-cloud/80 hover:text-white hidden sm:block">
              Ver todo →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {newsCalendario.slice(0, 3).map((title) => (
              <Link
                key={title}
                href="/news"
                className="group block rounded-xl overflow-hidden border border-cloud/15 hover:border-cloud/40 transition"
              >
                <MediaPlaceholder label={title} aspect="aspect-[4/3]" className="!rounded-none" />
                <div className="p-4">
                  <p className="text-[11px] uppercase tracking-wider text-cloud/50 mb-1">
                    Próximamente
                  </p>
                  <p className="font-display text-base leading-snug">{title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
