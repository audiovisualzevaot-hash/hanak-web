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

      {/* LLEGAR A HANAK — teaser */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-forest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/inicio/2da-foto.webp"
          alt="Vista aérea camino a Hanak"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p className="uppercase tracking-[0.2em] text-xs text-cloud/80 mb-3">Ubicación</p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-4">
              Llegar a HANAK es muy sencillo
            </h2>
            <Link
              href="/como-llegar"
              className="inline-flex items-center gap-1.5 text-sm text-cloud hover:text-white hover:underline"
            >
              Ver cómo llegar <span aria-hidden>→</span>
            </Link>
          </div>

          <Link
            href="/como-llegar"
            className="group relative block aspect-[4/3] max-w-sm ml-auto w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <MediaPlaceholder
              label="Camino a Hanak — grupo llegando entre la neblina"
              aspect="aspect-[4/3]"
              className="!rounded-none h-full"
              src="/images/hanak/2da-foto-suelta.webp"
            />
            <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-forest group-hover:bg-white transition">
              ↗
            </span>
          </Link>
        </div>
      </section>

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
