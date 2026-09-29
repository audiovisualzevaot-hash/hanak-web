"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SunArc from "./SunArc";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

/**
 * Secuencia de apertura de Inicio, en dos fotos reales de Bryan:
 *
 * 1. Atardecer sobre los cerros de Tarapoto (header.webp) — el hero, con el
 *    lockup y el logo.
 * 2. Mar de nubes (nubes.webp) — a medida que se hace scroll, las nubes
 *    "suben" desde abajo y cubren la pantalla, fundiéndose con el fondo
 *    crema del siguiente bloque ("El primer Sky Resort de Latinoamérica").
 *
 * Referencia pedida por Bryan: fluidez cinematográfica tipo ayana.com — la
 * transición del scroll son las propias nubes, no un corte duro entre
 * secciones.
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

  // Capa 1 — foto de atardecer: se desvanece y hace un leve zoom (Ken Burns)
  const heroOpacity = 1 - clamp01(progress / 0.45);
  const heroScale = 1 + progress * 0.12;

  // Texto central — se disuelve antes que la propia foto, para no
  // amontonarse con el mar de nubes que entra detrás
  const textOpacity = 1 - clamp01(progress / 0.22);
  const textY = -progress * 60;

  // Capa 2 — mar de nubes: entra desde abajo ("sube") y se asienta
  const cloudsOpacity = clamp01((progress - 0.22) / 0.4);
  const cloudsY = (1 - clamp01((progress - 0.2) / 0.65)) * 14;
  const cloudsScale = 1.1 - progress * 0.08;

  // Fundido final hacia el crema del siguiente bloque
  const fadeToNext = clamp01((progress - 0.8) / 0.2);

  return (
    <section ref={trackRef} className="relative h-[240vh] bg-forest-dark">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Capa 1 — atardecer */}
        <div
          className="absolute inset-0"
          style={{ opacity: heroOpacity, transform: `scale(${heroScale})`, willChange: "transform, opacity" }}
        >
          <Image
            src="/images/inicio/header.webp"
            alt="Vista aérea de los cerros de Tarapoto al atardecer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-forest-dark/70" />
        </div>

        {/* Capa 2 — mar de nubes, sube desde abajo */}
        <div
          className="absolute inset-0"
          style={{
            opacity: cloudsOpacity,
            transform: `translateY(${cloudsY}%) scale(${cloudsScale})`,
            willChange: "transform, opacity",
          }}
        >
          <Image
            src="/images/inicio/nubes.webp"
            alt="Mar de nubes cubriendo el valle de Tarapoto"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Texto central */}
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

        {/* Fundido hacia el crema del siguiente bloque */}
        <div
          className="absolute inset-0 bg-cloud pointer-events-none"
          style={{ opacity: fadeToNext }}
        />
      </div>
    </section>
  );
}
