"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";
import { useDictionary, useLocale } from "@/lib/i18n/I18nProvider";
import { localeHref } from "@/lib/i18n/locales";

/**
 * Sección "Priorizamos la experiencia de la selva peruana" — Inicio.
 *
 * Fondo crema plano (no una foto), tal como el export de Illustrator: el
 * isotipo + "DESCUBRE HANAK" arriba, título y subtítulo centrados, botón
 * debajo. Dos fotos (elemento-izquierda = Sobre las nubes / elemento-
 * derecha = Dentro de la selva) arrancan unidas en el centro, cubriendo el
 * titular, y al hacer scroll se separan hacia su lado —como cartas que se
 * abren— revelando el texto. Sin marco/borde crema alrededor de las fotos
 * (pedido explícito de Bryan).
 *
 * Las dos tarjetas y el CTA central son el conector de esta sección hacia
 * /experiencia (pedido explícito de Bryan: cada slide de Inicio debe
 * enlazar a su pestaña correspondiente).
 *
 * La separación ya no espera a que el bloque anterior termine: arranca
 * apenas la sección asoma por abajo de la pantalla (progreso de ENTRADA,
 * de 0 a 1 mientras rect.top va de una pantalla completa hasta 0) y llega
 * al 100% justo cuando la sección ya ocupa toda la pantalla — para ese
 * momento el texto, las etiquetas y el botón ya están listos, en vez de
 * arrancar recién ahí (pedido de Bryan: "ni bien ya se vean, se vayan
 * separando, para cuando ya esté en la pantalla completa se vea ya el
 * texto", para que se sienta más fluido).
 */
export default function PriorizamosSelva() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1280);
  const dict = useDictionary();
  const locale = useLocale();
  const ps = dict.priorizamosSelva;

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const entrance = vh > 0 ? (vh - rect.top) / vh : 1;
      setProgress(Math.min(Math.max(entrance, 0), 1));
    };
    const onResize = () => {
      setWindowWidth(window.innerWidth);
      onScroll();
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // vw adicionales de separación en el punto máximo — más juntas y simétricas
  // en pantallas grandes (pedido de Bryan, visto en una captura de escritorio
  // ancho). En vw puro esto dejaba las tarjetas casi pegadas al título en
  // móvil (texto y tarjetas compitiendo por el mismo ancho angosto), así que
  // en pantallas chicas se mantiene la separación original.
  const travel = windowWidth < 640 ? 30 : windowWidth < 1024 ? 24 : 18;
  const leftX = -progress * travel;
  const rightX = progress * travel;
  const textOpacity = 0.12 + progress * 0.88;
  const textScale = 0.94 + progress * 0.06;
  const labelOpacity = Math.max(0, (progress - 0.35) / 0.5);

  const cardWidth = "clamp(140px, 26vw, 320px)";
  const leftTilt = -8 + progress * 2;
  const rightTilt = 8 - progress * 2;
  const ctaOpacity = Math.max(0, (progress - 0.6) / 0.35);

  return (
    // 150vh (antes 220vh): la separación ya se completa DURANTE la entrada
    // (el primer 100vh de este track), así que ya no hace falta un tramo
    // fijo tan largo después de eso — solo una pausa breve (50vh) para leer
    // el texto y el botón antes de pasar a la siguiente sección.
    <section ref={trackRef} className="relative h-[150vh] bg-cloud">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Titular central — fondo crema plano, como en el export */}
        <div
          className="relative z-10 text-center px-6 max-w-2xl pointer-events-none flex flex-col items-center"
          style={{ opacity: textOpacity, transform: `scale(${textScale})` }}
        >
          <LogoMark size={22} tone="forest" className="mb-3 opacity-80" />
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-olive mb-4">
            {ps.discover}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-tight">
            {ps.title}
          </h2>
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-charcoal/50">
            {ps.fromHeights}
          </p>
          <Link
            href={localeHref(locale, "/experiencia")}
            className="mt-8 pointer-events-auto inline-flex items-center gap-1.5 bg-forest-dark text-white text-xs uppercase tracking-[0.12em] rounded-full px-6 py-3 transition-opacity"
            style={{ opacity: ctaOpacity, transitionDuration: "300ms" }}
          >
            {ps.exploreCta}
            <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* Tarjeta izquierda — Sobre las nubes (link a Experiencia) */}
        <Link
          href={localeHref(locale, "/experiencia")}
          className="absolute top-1/2 left-1/2 z-20 aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          style={{
            width: cardWidth,
            transform: `translate(calc(-100% + ${leftX}vw), -50%) rotate(${leftTilt}deg)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/elemento-izquierda.webp"
            alt={ps.nubesLabel}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
            style={{ opacity: labelOpacity }}
          >
            <p className="text-white font-display text-sm sm:text-lg">{ps.nubesLabel}</p>
          </div>
        </Link>

        {/* Tarjeta derecha — Dentro de la selva (link a Experiencia) */}
        <Link
          href={localeHref(locale, "/experiencia")}
          className="absolute top-1/2 left-1/2 z-20 aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          style={{
            width: cardWidth,
            transform: `translate(${rightX}vw, -50%) rotate(${rightTilt}deg)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/elemento-derecha.webp"
            alt={ps.selvaLabel}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
            style={{ opacity: labelOpacity }}
          >
            <p className="text-white font-display text-sm sm:text-lg">{ps.selvaLabel}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
