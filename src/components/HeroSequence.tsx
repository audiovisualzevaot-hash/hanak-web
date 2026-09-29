"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SunArc from "./SunArc";
import PeruMiniMap from "./PeruMiniMap";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const mix = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);
// progreso local dentro de un tramo [from, to] del progreso global
const local = (p: number, from: number, to: number) => clamp01((p - from) / (to - from));

/**
 * Secuencia de apertura de Inicio, fiel al export de Illustrator:
 *
 * 1. Atardecer sobre los cerros de Tarapoto (header.webp) — fija en cuadro,
 *    pero recorriendo la foto hacia abajo a medida que se hace scroll (un
 *    paneo, nunca un zoom): por eso Bryan envió una foto tan alta.
 * 2. Mar de nubes (nubes.webp) — una segunda "hoja" del tamaño completo de
 *    la pantalla que se desliza desde abajo y tapa la anterior. Una vez
 *    que cubre la pantalla, sigue paneando hacia abajo (de las nubes al
 *    valle) mientras, encima, aparece "El primer Sky Resort de
 *    Latinoamérica" y el mapa de ubicación — exactamente como en el
 *    export, donde ambos textos y el mapa van sobre la misma foto de
 *    fondo, nunca sobre un bloque de color sólido.
 *
 * Referencia pedida por Bryan (ayana.com): sin cortes, sin zooms, todo es
 * deslizar y paneo — el único zoom prohibido es el scale(); el paneo
 * vertical de la propia foto (object-position) sí es parte del lenguaje.
 */
export default function HeroSequence() {
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

  // --- Capa 1 — atardecer: paneo puro (sin escala) mientras está en cuadro
  const heroPanY = mix(28, 58, local(progress, 0, 0.32));

  // Texto "Presentando a HANAK" — se desvanece apenas arranca el scroll
  const textOpacity = 1 - local(progress, 0, 0.14);
  const textY = -local(progress, 0, 0.14) * 50;

  // --- Capa 2 — mar de nubes: se desliza como una hoja larga y tapa la 1
  const sheetSlide = 100 - local(progress, 0.14, 0.46) * 100;
  // panea de las nubes hacia el valle mientras se desliza, y se asienta
  // (deja de paneear) apenas empieza el capítulo de texto + mapa, para que
  // el fondo quede quieto y legible detrás de ellos
  const cloudsPanY = mix(14, 52, local(progress, 0.14, 0.6));

  // --- Capítulo "El primer Sky Resort de Latinoamérica" + mapa, sobre la
  // misma foto de nubes/valle — nunca sobre un fondo de color sólido.
  const introOpacity = local(progress, 0.5, 0.66);
  const introY = (1 - local(progress, 0.5, 0.7)) * 36;

  return (
    <section ref={trackRef} className="relative h-[440vh] bg-forest-dark">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hoja 1 — atardecer, paneo vertical sin escala */}
        <div className="absolute inset-0">
          <Image
            src="/images/inicio/header.webp"
            alt="Vista aérea de los cerros de Tarapoto al atardecer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${heroPanY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
        </div>

        {/* Texto central de apertura — sobre la hoja de atardecer */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-5"
          style={{ opacity: textOpacity, transform: `translateY(${textY}px)` }}
        >
          <p className="uppercase tracking-[0.25em] text-[11px] sm:text-xs text-cloud/80 mb-6">
            Presentando a
          </p>
          <Image
            src="/images/brand/lockup-cream.png"
            alt="HANAK — Sky Resort & Villas Club"
            width={280}
            height={176}
            priority
            className="w-44 sm:w-56 lg:w-64 h-auto"
          />
          <SunArc className="mt-8 sm:mt-10" color="#fff" />
        </div>

        {/* Hoja 2 — mar de nubes / valle. Se desliza y luego sigue paneando;
            sobre ella va el segundo capítulo (título + mapa), tal como en
            el export: todo sobre la misma foto, nunca sobre color sólido. */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${sheetSlide}%)`, willChange: "transform" }}
        >
          <Image
            src="/images/inicio/nubes.webp"
            alt="Mar de nubes descendiendo hacia el valle de Tarapoto"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${cloudsPanY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

          {/* Capítulo 2 — título + mapa, siempre sobre la foto */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5 pt-12 sm:pt-0"
            style={{ opacity: introOpacity, transform: `translateY(${introY}px)` }}
          >
            <h2 className="font-display text-2xl sm:text-5xl text-forest leading-tight drop-shadow-sm">
              El primer Sky Resort
              <br className="hidden sm:block" /> de Latinoamérica
            </h2>
            <p className="mt-2 sm:mt-4 max-w-md text-xs sm:text-base text-forest/80 leading-snug sm:leading-relaxed">
              Sobre las nubes de la Amazonía peruana nace un nuevo concepto de
              vivir:
              <span className="hidden sm:inline">
                {" "}
                un resort donde cada momento del día es un privilegio.
              </span>
            </p>

            <div className="mt-2 sm:mt-8 flex items-start gap-2 sm:gap-3 max-w-[240px] sm:max-w-sm text-left">
              <span className="mt-1 h-6 sm:h-10 w-px bg-charcoal/25 shrink-0" />
              <p className="text-[11px] sm:text-sm leading-snug">
                <span className="text-charcoal font-medium">
                  HANAK no es un condominio,
                </span>{" "}
                <span className="text-charcoal/60">
                  es una forma distinta de estar en el mundo.
                </span>
              </p>
            </div>

            <PeruMiniMap className="mt-2 sm:mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
