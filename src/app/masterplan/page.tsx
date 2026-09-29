import MediaPlaceholder from "@/components/MediaPlaceholder";
import MasterplanMap from "@/components/MasterplanMap";

export const metadata = { title: "Masterplan — HANAK" };

export default function MasterplanPage() {
  return (
    <>
      <section className="relative h-[45vh] flex items-center bg-forest overflow-hidden pt-16 sm:pt-20">
        <MediaPlaceholder
          label="Masterplan — vista superior del proyecto"
          aspect="aspect-auto"
          className="absolute inset-0 !rounded-none opacity-60"
          src="/images/masterplan/1ra-foto-grande.webp"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-white">
          <h1 className="font-display text-4xl sm:text-6xl">Masterplan</h1>
          <p className="mt-3 text-cloud/85 text-lg max-w-xl">
            Veinte manzanas, cada una con su propia relación con el paisaje.
            Explora el mapa y encuentra la tuya.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <MasterplanMap />
      </section>

      {/* RESPALDO */}
      <section className="bg-cloud-soft py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-4">Respaldo</h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            HANAK está registrado ante SUNARP, con partida registral a
            nombre de Grupo Zevaot Inversiones S.A.C. Un proyecto respaldado
            desde su origen.
          </p>
        </div>
      </section>

      {/* CONCEPTO ARQUITECTONICO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <MediaPlaceholder label="Concepto arquitectónico" aspect="aspect-[4/3]" src="/images/masterplan/dentro-de-la-selva.webp" />
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-4">
            Concepto arquitectónico
          </h2>
          <p className="text-charcoal/70 leading-relaxed text-lg">
            La arquitectura de HANAK no compite con el paisaje — lo
            continúa. Materiales que dialogan con el entorno, ventilación
            cruzada que aprovecha el clima de altura, luz natural como
            protagonista, y una relación constante entre interior y
            exterior. Cada vivienda está pensada para que el paisaje entre,
            no para taparlo.
          </p>
        </div>
      </section>
    </>
  );
}
