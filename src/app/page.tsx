import Link from "next/link";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import PriorizamosSelva from "@/components/PriorizamosSelva";
import { testimonios, newsCalendario, nav } from "@/lib/content";

export default function InicioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end sm:items-center overflow-hidden bg-forest">
        <MediaPlaceholder
          label="Hero — tomas aéreas en distintos horarios, degradado de nubes en loop"
          kind="video"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/inicio/header.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-0 text-white">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-cloud/80 mb-4">
            Proyecto en pre-lanzamiento
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            El primer Sky Resort de Latinoamérica
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-cloud/85 leading-relaxed">
            Sobre las nubes de la Amazonía peruana nace un nuevo concepto de
            vivir: un resort donde cada casa te pertenece y cada amanecer es
            un privilegio. HANAK no es un condominio — es una forma distinta
            de estar en el mundo.
          </p>
        </div>
      </section>

      <PriorizamosSelva />

      {/* ACCESO RAPIDO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {nav.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-charcoal/10 rounded-xl p-5 hover:border-forest hover:bg-forest hover:text-white transition"
            >
              <p className="font-display text-lg">{item.label}</p>
              <p className="text-xs mt-1 text-charcoal/50 group-hover:text-cloud/80">
                Explorar →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-cloud-soft py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-forest mb-2">
            Quienes ya eligieron Hanak lo cuentan mejor que nosotros
          </h2>
          <p className="text-charcoal/60 mb-10 max-w-2xl">
            Testimonios reales de propietarios que ya adquirieron su lote en
            HANAK.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-white rounded-xl overflow-hidden border border-charcoal/10">
                <MediaPlaceholder
                  label={`Video testimonio — ${t.nombre}`}
                  kind="video"
                  aspect="aspect-[4/5]"
                  className="!rounded-none"
                />
                <div className="p-5">
                  <p className="font-display text-base text-forest leading-snug mb-3">
                    “{t.cita}”
                  </p>
                  <p className="text-sm text-charcoal/80">
                    {t.nombre} — Propietario, Lote {t.lote}
                  </p>
                  <p className="text-xs text-charcoal/50 mt-1">{t.contexto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl sm:text-4xl text-forest">News</h2>
          <Link href="/news" className="text-sm text-forest hover:underline">
            Ver todo →
          </Link>
        </div>
        <p className="text-charcoal/60 mb-8 max-w-2xl">
          Próximamente: historias, novedades y guías para quienes ya son
          parte de Hanak.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {newsCalendario.slice(0, 3).map((title) => (
            <div key={title} className="border border-charcoal/10 rounded-xl p-5 hover:border-forest transition">
              <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-2">
                Próximamente
              </p>
              <p className="font-display text-lg text-charcoal leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
