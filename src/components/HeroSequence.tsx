"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SunArc from "./SunArc";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

/**
 * Secuencia de apertura de Inicio, en dos fotos reales de Bryan:
 *
 * 1. Atardecer sobre los cerros de Tarapoto (header.webp) — queda fija,
 *    de fondo, sin zoom ni movimiento de cámara.
 * 2. Mar de nubes (nubes.webp) — es una segunda "hoja" larga, del tamaño
 *    completo de la pantalla, que se desliza desde abajo hacia arriba y
 *    cubre por completo a la primera. No hay corte, no hay disolución de
 *    opacidad, no hay zoom: es puro deslizamiento vertical, como una
 *    cortina o una hoja larga que sube y tapa el fotograma anterior.
 *
 * Corrección pedida por Bryan tras ver ayana.com: "todo es fluido, sin
 * cortes, sin zooms, es deslizar y como si fuesen hojas pero largas."
 * Se elimina cualquier scale()/Ken Burns y cualquier crossfade de
 * opacidad entre las dos fotos — el único movimiento es el translateY
 * de la hoja de nubes deslizándose sobre la hoja de atardecer, que
 * permanece perfectamente quieta.
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

  // Texto central — se desvanece apenas empieza a subir la hoja de nubes,
  // para que no quede atrapado bajo ella. Un leve translateY, sin escalas.
  const textOpacity = 1 - clamp01(progress / 0.28);
  const textY = -progress * 50;

  // La "hoja" de nubes: entra completa desde abajo (100% fuera de cuadro)
  // y se desliza a 0% (cubriendo toda la pantalla). Deslizamiento puro,
  // sin escala y sin fundido — el propio movimiento es la transición.
  const sheetSlide = 100 - clamp01(progress / 0.72) * 100;

  return (
    <section ref={trackRef} className="relative h-[220vh] bg-forest-dark">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hoja 1 — atardecer, fija, sin zoom ni movimiento */}
        <div className="absolute inset-0">
          <Image
            src="/images/inicio/header.webp"
            alt="Vista aérea de los cerros de Tarapoto al atardecer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
        </div>

        {/* Texto central — sobre la hoja de atardecer */}
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

        {/* Hoja 2 — mar de nubes, se desliza completa desde abajo y tapa la hoja 1 */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${sheetSlide}%)`,
            willChange: "transform",
          }}
        >
          <Image
            src="/images/inicio/nubes.webp"
            alt="Mar de nubes cubriendo el valle de Tarapoto"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Puente hacia el crema del siguiente bloque, siempre presente
              en el borde inferior de la hoja para que el empalme con la
              sección "El primer Sky Resort de Latinoamérica" sea limpio */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-cloud" />
        </div>
      </div>
    </section>
  );
}
