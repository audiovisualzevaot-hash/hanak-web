"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { useReserve } from "./ReserveContext";
import LogoMark from "./LogoMark";
import { useDictionary, useLocale } from "@/lib/i18n/I18nProvider";
import { stripLocale, localeHref } from "@/lib/i18n/locales";

// Páginas cuya sección superior es una foto/video a pantalla completa: en
// estas el header nace transparente con texto claro y se convierte en un
// fondo sólido al hacer scroll (igual que en ayana.com). El resto (Masterplan,
// News) no tiene hero fotográfico arriba, así que el header nace ya sólido.
// Siempre rutas CANÓNICAS (sin prefijo de idioma) — se comparan contra
// stripLocale(pathname), nunca contra el pathname real.
const HERO_PAGES = ["/", "/tarapoto", "/hanak", "/vistas", "/experiencia", "/como-llegar"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open } = useReserve();
  const rawPathname = usePathname();
  const dict = useDictionary();
  const locale = useLocale();
  // Ruta canónica (sin prefijo de idioma) — así HERO_PAGES y el estado
  // "activo" del nav funcionan igual en /, /en y /it.
  const pathname = stripLocale(rawPathname);

  const hasHero = HERO_PAGES.includes(pathname);
  // Transparente solo si la página tiene hero Y todavía no se hizo scroll.
  const transparent = hasHero && !scrolled;

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  // Al entrar a una página sin hero (o cambiar de ruta), reiniciar el estado
  // de scroll para que la próxima página con hero vuelva a nacer transparente.
  // Ajustado durante el render (no en un efecto) siguiendo el patrón de React
  // para "resetear estado cuando cambia una prop": evita el re-render en
  // cascada de un setState síncrono dentro de useEffect. Es seguro en SSR
  // porque `prevPathname` nace igual a `pathname`, así que la rama de abajo
  // solo corre tras una navegación real del lado del cliente.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setScrolled(typeof window !== "undefined" && window.scrollY > 60);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-cloud/95 backdrop-blur-md border-b border-charcoal/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-500 ${
          transparent ? "h-20 sm:h-24" : "h-16 sm:h-20"
        } ${transparent ? "text-white" : "text-charcoal"}`}
      >
        {/* Solo el isotipo en el header, en todas las páginas — sin el
            wordmark "HANAK" al lado (pedido explícito de Bryan). */}
        <Link href={localeHref(locale, "/")} aria-label={site.name} className="flex items-center">
          <LogoMark size={34} tone={transparent ? "cream" : "forest"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.12em]">
          {(() => {
            const [first, ...rest] = nav;
            const last = rest.pop()!;
            return (
              <>
                <Link
                  href={localeHref(locale, first.href)}
                  className="italic opacity-70 hover:opacity-100 transition-opacity"
                >
                  {dict.nav[first.key]}
                </Link>
                <div className="flex items-center gap-7">
                  {rest.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={localeHref(locale, item.href)}
                        className={`transition-colors hover:opacity-100 ${
                          active ? "underline underline-offset-4 opacity-100" : "opacity-80"
                        }`}
                      >
                        {dict.nav[item.key]}
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href={localeHref(locale, last.href)}
                  className="italic opacity-70 hover:opacity-100 transition-opacity"
                >
                  {dict.nav[last.key]}
                </Link>
              </>
            );
          })()}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={open}
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] rounded-full px-5 py-2.5 transition-colors ${
              transparent
                ? "bg-white/10 text-white border border-white/40 hover:bg-white/20"
                : "bg-forest-dark text-white hover:bg-forest"
            }`}
          >
            {dict.header.scheduleCta}
            <span aria-hidden>↗</span>
          </button>
          <button
            aria-label={dict.header.openMenu}
            className="lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil — overlay a pantalla completa con transición suave */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-cloud transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-charcoal/10">
          <Link
            href={localeHref(locale, "/")}
            className="flex items-center gap-2.5 font-display text-lg text-forest"
            onClick={() => setMenuOpen(false)}
          >
            <LogoMark />
            {site.name}
          </Link>
          <button aria-label={dict.header.closeMenu} onClick={() => setMenuOpen(false)} className="text-forest">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 pt-10 text-lg uppercase tracking-wide">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              className={`text-charcoal/80 hover:text-forest transition-all duration-300 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              } ${pathname === item.href ? "italic text-forest" : ""}`}
            >
              {dict.nav[item.key]}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="mt-4 bg-forest-dark text-white text-sm uppercase tracking-[0.12em] rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-1.5 w-fit"
          >
            {dict.header.scheduleCta} <span aria-hidden>↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
