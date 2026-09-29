import { newsCalendario } from "@/lib/content";

export const metadata = { title: "News — HANAK" };

export default function NewsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <h1 className="font-display text-4xl sm:text-6xl text-forest mb-4">News</h1>
        <p className="text-charcoal/70 text-lg max-w-2xl mb-14">
          Historias, novedades y todo lo que va sucediendo en HANAK — antes
          que en cualquier otro lugar.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {newsCalendario.map((title) => (
            <div key={title} className="border border-charcoal/10 rounded-xl p-6 hover:border-forest transition">
              <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-3">
                Próximamente
              </p>
              <p className="font-display text-xl text-charcoal leading-snug">{title}</p>
            </div>
          ))}
        </div>

        <div className="bg-cloud-soft rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-3">
            Suscríbete y entérate primero de cada novedad de HANAK
          </h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
            <input
              type="email"
              required
              placeholder="Tu email"
              className="flex-1 rounded-full border border-charcoal/20 bg-white px-5 py-3 text-sm focus:outline-none focus:border-forest"
            />
            <button
              type="submit"
              className="bg-forest text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-forest-dark transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
