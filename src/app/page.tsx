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

        <div className="relative z-10 flex justify-end px-5 pt-16 sm:px-10 sm:pt-20">
          <div className="text-right text-forest-dark">
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">Llegar a HANAK</h2>
            <p className="mt-1 text-lg sm:text-2xl text-forest-dark/70">es muy sencillo</p>
          </div>
        </div>

        {/* Silueta del distrito de Hanak + lockup — referencia aproximada
            mientras Bryan nos pasa el gráfico exportado de Illustrator con
            fondo transparente (la forma real es el límite del distrito,
            no una mancha genérica: pixel-perfect solo sale de un vector
            limpio, no de recortar la foto del export). */}
        <div className="relative z-10 mt-auto flex items-end gap-4 sm:gap-6 px-5 pb-10 sm:px-10 sm:pb-16">
          <svg viewBox="0 0 200 220" className="h-24 w-auto sm:h-36 shrink-0 drop-shadow-sm">
            <path
              d="M78 8
                 C 84 18, 74 26, 82 34
                 C 92 44, 108 40, 120 50
                 C 134 61, 132 76, 144 86
                 C 156 96, 172 92, 178 106
                 C 184 120, 172 132, 156 134
                 C 140 136, 132 126, 116 130
                 C 102 133, 96 146, 82 148
                 C 68 150, 58 142, 48 146
                 C 38 150, 34 160, 24 156
                 C 14 152, 12 140, 18 130
                 C 24 120, 36 120, 38 108
                 C 40 96, 30 88, 34 76
                 C 38 64, 52 62, 54 50
                 C 56 38, 46 30, 54 20
                 C 61 11, 72 4, 78 8 Z"
              fill="var(--color-forest-dark)"
            />
            <circle cx="96" cy="66" r="4" fill="var(--color-cloud)" />
            <path
              d="M28 148 C 40 156, 46 172, 42 190 C 38 206, 26 214, 30 220"
              fill="none"
              stroke="var(--color-cloud)"
              strokeWidth="2"
              opacity="0.85"
            />
            <path
              d="M70 150 C 80 162, 78 180, 88 194 C 96 206, 96 214, 92 220"
              fill="none"
              stroke="var(--color-cloud)"
              strokeWidth="2"
              opacity="0.85"
            />
          </svg>

          <div className="text-forest-dark pb-1">
            <p className="font-display text-2xl sm:text-4xl leading-none">HANAK</p>
            <div className="mt-2 border-t border-forest-dark/50 pt-1.5 w-fit">
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-forest-dark/75">
                Sky Resort &amp; Villas Club
              </p>
            </div>
          </div>
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
