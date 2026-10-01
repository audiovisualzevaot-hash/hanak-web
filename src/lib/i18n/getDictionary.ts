import type { Locale } from "./locales";
import type { Dictionary } from "./types";
import es from "./dictionaries/es";
import en from "./dictionaries/en";
import it from "./dictionaries/it";

// Diccionario completo, no carga perezosa: el sitio es chico (3 idiomas,
// un archivo cada uno) y varios Client Components lo necesitan completo de
// todas formas vía I18nProvider — no hay beneficio real en el
// import() dinámico que sugiere la guía oficial de Next.js para sitios con
// muchos más idiomas/dictionaries más pesados.
const dictionaries: Record<Locale, Dictionary> = { es, en, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
