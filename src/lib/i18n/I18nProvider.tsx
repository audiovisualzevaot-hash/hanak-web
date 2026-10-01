"use client";

// Puente servidor → cliente para las traducciones. app/[lang]/layout.tsx
// (Server Component) resuelve el diccionario completo del idioma actual UNA
// sola vez y lo pasa acá como prop; de ahí en adelante cualquier Client
// Component del árbol (Header, Footer, MasterplanMap, SociosFundadores,
// etc.) lo lee con useDictionary()/useLocale() sin tener que recibirlo por
// props en cada nivel. El diccionario es texto plano serializable, así que
// cruzar la frontera servidor/cliente como prop es seguro y barato.
import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "./types";
import type { Locale } from "./locales";

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useDictionary/useLocale deben usarse dentro de I18nProvider");
  }
  return ctx;
}

export function useDictionary(): Dictionary {
  return useI18n().dict;
}

export function useLocale(): Locale {
  return useI18n().locale;
}
