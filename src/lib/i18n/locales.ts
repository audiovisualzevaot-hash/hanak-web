// Idiomas del sitio — Bryan pidió exactamente estos tres, con el español
// como ruta "de fondo" sin prefijo (así no se rompe ningún link ni dato
// de SEO/analytics ya en producción) y English/Italiano con prefijo de
// ruta (/en/..., /it/...). El mapeo invisible español ⇄ /es/... interno
// vive en src/proxy.ts (ver ese archivo para el porqué de "proxy" en vez
// de "middleware" en esta versión de Next.js).
export const locales = ["es", "en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  it: "Italiano",
};

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// Idioma actual a partir del pathname REAL del navegador (el que devuelve
// usePathname() en un Client Component) — "/en/tarapoto" -> "en",
// "/tarapoto" o "/" -> "es". Nunca devuelve "es" con prefijo visible
// porque esa variante no existe de cara al visitante (el rewrite de
// proxy.ts es interno).
export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isLocale(first) && first !== defaultLocale ? first : defaultLocale;
}

// Quita el prefijo de idioma de un pathname real y devuelve la ruta
// "canónica" — la misma forma, sin prefijo, que ya usan `nav`/`site` en
// content.ts (que son siempre en español/sin prefijo por diseño).
// "/en/tarapoto" -> "/tarapoto", "/it" -> "/", "/tarapoto" -> "/tarapoto".
export function stripLocale(pathname: string): string {
  const first = pathname.split("/")[1];
  if (isLocale(first) && first !== defaultLocale) {
    const rest = pathname.slice(first.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

// Inversa de stripLocale: dada una ruta canónica (sin prefijo) y un
// idioma, arma el href real para ese idioma. Español nunca lleva
// prefijo; English/Italiano siempre lo llevan.
export function localeHref(locale: Locale, canonicalPath: string): string {
  if (locale === defaultLocale) return canonicalPath;
  return canonicalPath === "/" ? `/${locale}` : `/${locale}${canonicalPath}`;
}
