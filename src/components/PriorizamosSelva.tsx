"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";

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
 */
export default function PriorizamosSelva() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const travel = 30; // vw adicionales de separación en el punto máximo
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
    <section ref={trackRef} className="relative h-[220vh] bg-cloud">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Titular central — fondo crema plano, como en el export */}
        <div
          className="relative z-10 text-center px-6 max-w-2xl pointer-events-none flex flex-col items-center"
          style={{ opacity: textOpacity, transform: `scale(${textScale})` }}
        >
          <LogoMark size={22} tone="forest" className="mb-3 opacity-80" />
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-olive mb-4">
            Descubre Hanak
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-tight">
            Priorizamos la experiencia de la selva peruana
          </h2>
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-charcoal/50">
            Desde las alturas
          </p>
          <Link
            href="/experiencia"
            className="mt-8 pointer-events-auto inline-flex items-center gap-1.5 bg-forest-dark text-white text-xs uppercase tracking-[0.12em] rounded-full px-6 py-3 transition-opacity"
            style={{ opacity: ctaOpacity, transitionDuration: "300ms" }}
          >
            Explora la experiencia
            <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* Tarjeta izquierda — Sobre las nubes (link a Experiencia) */}
        <Link
          href="/experiencia"
          className="absolute top-1/2 left-1/2 z-20 aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          style={{
            width: cardWidth,
            transform: `translate(calc(-100% + ${leftX}vw), -50%) rotate(${leftTilt}deg)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/elemento-izquierda.webp"
            alt="Sobre las nubes"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
            style={{ opacity: labelOpacity }}
          >
            <p className="text-white font-display text-sm sm:text-lg">Sobre las nubes</p>
          </div>
        </Link>

        {/* Tarjeta derecha — Dentro de la selva (link a Experiencia) */}
        <Link
          href="/experiencia"
          className="absolute top-1/2 left-1/2 z-20 aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          style={{
            width: cardWidth,
            transform: `translate(${rightX}vw, -50%) rotate(${rightTilt}deg)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/inicio/elemento-derecha.webp"
            alt="Dentro de la selva"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
            style={{ opacity: labelOpacity }}
          >
            <p className="text-white font-display text-sm sm:text-lg">Dentro de la selva</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
