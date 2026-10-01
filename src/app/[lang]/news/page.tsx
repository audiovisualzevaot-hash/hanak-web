import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDictionary(lang).pageTitles.news };
}

export default async function NewsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const n = getDictionary(lang).news;
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <h1 className="font-display text-4xl sm:text-6xl text-forest mb-4">{n.title}</h1>
        <p className="text-charcoal/70 text-lg max-w-2xl mb-14">
          {n.intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {n.calendario.map((title) => (
            <div key={title} className="border border-charcoal/10 rounded-xl p-6 hover:border-forest transition">
              <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-3">
                {n.comingSoon}
              </p>
              <p className="font-display text-xl text-charcoal leading-snug">{title}</p>
            </div>
          ))}
        </div>

        <div className="bg-cloud-soft rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-forest mb-3">
            {n.subscribeTitle}
          </h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
            <input
              type="email"
              required
              placeholder={n.emailPlaceholder}
              className="flex-1 rounded-full border border-charcoal/20 bg-white px-5 py-3 text-sm focus:outline-none focus:border-forest"
            />
            <button
              type="submit"
              className="bg-forest text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-forest-dark transition"
            >
              {n.subscribeButton}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
