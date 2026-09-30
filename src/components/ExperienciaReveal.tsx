"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const mix = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);
const local = (p: number, from: number, to: number) => clamp01((p - from) / (to - from));
// aparece, se sostiene en 1, y se apaga del todo — igual que en
// HeroSequence.tsx (Inicio).
const pulse = (p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) => {
  if (p < inStart) return 0;
  if (p < inEnd) return local(p, inStart, inEnd);
  if (p < outStart) return 1;
  if (p < outEnd) return 1 - local(p, outStart, outEnd);
  return 0;
};

/**
 * Secuencia continua "Sobre las nubes" → "Inmersión en selva", pedida por
 * Bryan tras ver que las dos secciones quedaban demasiado separadas: "la
 * imagen suelta que aparece [la cita] y la foto grande deben de tipo
 * acoplarse... super fluido como se hizo en INICIO". Mismo mecanismo que
 * HeroSequence.tsx (Inicio): dos "hojas" ocupando el mismo lugar (sticky),
 * la primera se disuelve en la segunda (solo opacity, sin corte), y sobre
 * la segunda van turnándose los capítulos de texto mientras la foto sigue
 * paneando sola.
 *
 * Hoja 1 — fondo crema con la "imagen suelta": una foto enmarcada con el
 * texto de la cita ("Vistas abiertas hacia el colchón de nubes...") dentro,
 * flotando sobre el crema — igual que antes, pero ahora es el primer tramo
 * de esta secuencia en vez de una sección aparte.
 * Hoja 2 — la foto larga de la selva, con paneo sostenido y sus 3
 * capítulos (título + las 2 frases del copy aprobado) reacomodados para
 * empezar recién después de la disolución.
 */
export default function ExperienciaReveal() {
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

  // --- Hoja 1 — crema + tarjeta de cita: se sostiene y luego se disuelve
  // por completo hacia la Hoja 2 (0.20→0.34), nunca antes.
  const introOpacity = 1 - local(progress, 0.2, 0.34);
  const cardY = -local(progress, 0.2, 0.34) * 20;

  // --- Hoja 2 — foto de la selva: disuelve por encima de la crema en el
  // mismo tramo (dissolve puro, sin deslizamiento) y sigue paneando sola
  // durante el resto del recorrido.
  const selvaOpacity = local(progress, 0.2, 0.34);
  const panY = mix(6, 92, progress);

  // Capítulos sobre la Hoja 2 — el título usa pulse() (no local()) porque
  // esta capa ya no arranca opaca desde progress=0: mientras selvaOpacity
  // todavía está subiendo (0.20→0.34), un titleOpacity ya en 1 se vería
  // mezclado con la tarjeta de la Hoja 1 durante la disolución. Con pulse,
  // el título recién aparece cuando la disolución ya terminó del todo.
  const titleOpacity = pulse(progress, 0.36, 0.42, 0.46, 0.52);
  const titleY = (1 - local(progress, 0.36, 0.42)) * 30;

  const caption1Opacity = pulse(progress, 0.54, 0.62, 0.7, 0.78);
  const caption1Y = (1 - local(progress, 0.54, 0.62)) * 24;

  const caption2Opacity = local(progress, 0.78, 0.86);
  const caption2Y = (1 - local(progress, 0.78, 0.86)) * 24;

  return (
    <section
      ref={trackRef}
      className="relative h-[340vh] bg-cloud"
    >
      {/* Ancla real de "Inmersión en selva": se ubica en el punto del
          recorrido donde termina la disolución y arranca ese capítulo, no
          al inicio del track completo (que todavía es "Sobre las nubes"). */}
      <div id="inmersion-en-selva" className="absolute inset-x-0 scroll-mt-20 sm:scroll-mt-24" style={{ top: "34%" }} />

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hoja 1 — crema + tarjeta de cita flotante */}
        <div
          className="absolute inset-0 bg-cloud flex items-center justify-center px-5"
          style={{ opacity: introOpacity }}
        >
          <div
            className="relative w-full max-w-xl sm:max-w-2xl aspect-[4/5] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl"
            style={{ transform: `translateY(${cardY}px)` }}
          >
            <Image
              src="/images/experiencia/1ra-foto-suelta.webp"
              alt="Sobre las nubes — colchón de nubes sobre el valle"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/20" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-10">
              <p className="text-white text-lg sm:text-2xl leading-snug">
                Vistas abiertas hacia el{" "}
                <span className="font-semibold">colchón de nubes</span>, el
                valle y la ciudad de Tarapoto — el momento que le da{" "}
                <span className="font-semibold">nombre a todo el proyecto</span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Hoja 2 — foto larga de la selva, disuelve por encima de la crema */}
        <div className="absolute inset-0" style={{ opacity: selvaOpacity }}>
          <Image
            src="/images/experiencia/foto-grande-de-fondo.webp"
            alt="Inmersión en la selva — sendero entre la vegetación nativa de Hanak"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${panY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/40" />

          {/* Capítulo — título */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5"
            style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
              Inmersión en selva
            </p>
            <h2 className="font-display text-4xl sm:text-6xl text-cloud leading-none">
              Conectando
              <br /> con la selva
            </h2>
          </div>

          {/* Capítulo — primera frase, arriba a la izquierda */}
          <div
            className="absolute z-10 left-5 sm:left-12 top-24 sm:top-28 max-w-[15rem] sm:max-w-sm"
            style={{ opacity: caption1Opacity, transform: `translateY(${caption1Y}px)` }}
          >
            <p className="text-white text-lg sm:text-2xl leading-snug bg-black/35 backdrop-blur-[2px] rounded-xl px-4 py-3">
              Para quienes eligen las manzanas más cercanas a la vegetación
              nativa.
            </p>
          </div>

          {/* Capítulo — segunda frase, abajo a la derecha */}
          <div
            className="absolute z-10 right-5 sm:right-12 bottom-16 sm:bottom-20 max-w-[15rem] sm:max-w-sm text-right"
            style={{ opacity: caption2Opacity, transform: `translateY(${caption2Y}px)` }}
          >
            <p className="text-white text-lg sm:text-2xl leading-snug bg-black/35 backdrop-blur-[2px] rounded-xl px-4 py-3">
              Rodeados de flora y fauna, con la selva como vecina directa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
