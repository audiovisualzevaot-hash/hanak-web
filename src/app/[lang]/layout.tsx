import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "../globals.css";

// Fuente de marca real (recibida de Bryan). Un solo peso (Regular) —
// se usa como fuente de display en tamaños grandes (H1/H2), nunca en texto
// corrido pequeño.
const gealova = localFont({
  src: "../fonts/Gealova.woff2",
  variable: "--font-gealova",
  weight: "400",
  style: "normal",
  display: "swap",
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservePanel from "@/components/ReservePanel";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ReserveProvider } from "@/components/ReserveContext";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { locales, type Locale } from "@/lib/i18n/locales";

// Sitio en 3 idiomas (es/en/it) — ver src/proxy.ts para cómo una URL sin
// prefijo (español) llega hasta acá con lang="es" vía rewrite interno, y
// src/lib/i18n/locales.ts para las reglas de armado de rutas con prefijo
// (en/it). generateStaticParams pre-renderiza las 3 variantes de cada hoja.
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// OJO: el tipo de `params` que exige Next para un layout (LayoutProps, ver
// node_modules/next/dist/server/lib/router-utils/typegen.js) es
// Promise<{ lang: string }> sin angostar — a diferencia de una página
// (PageProps), que sí acepta un tipo más angosto porque su definición
// generada intersecta con `any`. Si acá se tipara como
// Promise<{ lang: Locale }>, `npm run build` falla el chequeo de tipos
// ("Type 'Promise<{ lang: string }>' is not assignable to..."). Por eso se
// recibe como string y se angosta a Locale recién adentro.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={gealova.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <I18nProvider locale={lang} dict={dict}>
          <ReserveProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ReservePanel />
            <WhatsAppButton />
          </ReserveProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
