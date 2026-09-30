"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const mix = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);
const local = (p: number, from: number, to: number) => clamp01((p - from) / (to - from));
// aparece, se sostiene en 1, y se apaga del todo — igual que en
// HeroSequence.tsx (Inicio), para que un capítulo no se quede pegado en
// pantalla para siempre.
const pulse = (p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) => {
  if (p < inStart) return 0;
  if (p < inEnd) return local(p, inStart, inEnd);
  if (p < outStart) return 1;
  if (p < outEnd) return 1 - local(p, outStart, outEnd);
  return 0;
};

/**
 * "Inmersión en selva" — la foto larga y continua de la que habló Bryan
 * ("en el medio de la hoja hay una foto que se ve completa y larga"), con el
 * mismo mecanismo de paneo sostenido que el hero de Inicio (HeroSequence) y
 * el de Hanak (HanakHero): la foto queda fija (sticky) mientras se hace
 * scroll y se revela de a poco con un solo object-position continuo, y tres
 * capítulos de texto se turnan sobre ella en vez de quedar todos quietos
 * juntos — el título de la sección primero, y luego las dos frases del
 * copy aprobado ("para quienes eligen las manzanas..." / "rodeados de flora
 * y fauna...") una a la vez, en dos esquinas distintas, tal como aparecen en
 * puntos distintos del export de Illustrator sobre la misma foto.
 */
export default function ExperienciaSelva() {
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

  // Paneo continuo de la foto a lo largo de todo el recorrido.
  const panY = mix(6, 92, progress);

  // Capítulo 1 — título de la sección: visible desde el inicio, se apaga
  // antes de que entre la primera frase.
  const titleOpacity = 1 - local(progress, 0.18, 0.3);
  const titleY = -local(progress, 0.18, 0.3) * 30;

  // Capítulo 2 — primera frase del copy, arriba a la izquierda.
  const caption1Opacity = pulse(progress, 0.3, 0.42, 0.54, 0.66);
  const caption1Y = (1 - local(progress, 0.3, 0.42)) * 24;

  // Capítulo 3 — segunda frase del copy, abajo a la derecha. Se queda
  // visible hasta el final del recorrido, para que el desenganche del
  // sticky hacia la siguiente sección se sienta limpio.
  const caption2Opacity = local(progress, 0.66, 0.78);
  const caption2Y = (1 - local(progress, 0.66, 0.78)) * 24;

  return (
    <section
      ref={trackRef}
      id="inmersion-en-selva"
      className="relative h-[260vh] bg-forest-dark scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/experiencia/foto-grande-de-fondo.webp"
            alt="Inmersión en la selva — sendero entre la vegetación nativa de Hanak"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${panY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/40" />
        </div>

        {/* Capítulo 1 — título */}
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

        {/* Capítulo 2 — primera frase, arriba a la izquierda. Fondo oscuro
            tipo "pill" detrás del texto: la foto pasa por tramos muy claros
            (cielo, follaje iluminado) donde el solo drop-shadow no alcanza
            para que el texto blanco se lea bien. */}
        <div
          className="absolute z-10 left-5 sm:left-12 top-24 sm:top-28 max-w-[15rem] sm:max-w-sm"
          style={{ opacity: caption1Opacity, transform: `translateY(${caption1Y}px)` }}
        >
          <p className="text-white text-lg sm:text-2xl leading-snug bg-black/35 backdrop-blur-[2px] rounded-xl px-4 py-3">
            Para quienes eligen las manzanas más cercanas a la vegetación
            nativa.
          </p>
        </div>

        {/* Capítulo 3 — segunda frase, abajo a la derecha */}
        <div
          className="absolute z-10 right-5 sm:right-12 bottom-16 sm:bottom-20 max-w-[15rem] sm:max-w-sm text-right"
          style={{ opacity: caption2Opacity, transform: `translateY(${caption2Y}px)` }}
        >
          <p className="text-white text-lg sm:text-2xl leading-snug bg-black/35 backdrop-blur-[2px] rounded-xl px-4 py-3">
            Rodeados de flora y fauna, con la selva como vecina directa.
          </p>
        </div>
      </div>
    </section>
  );
}
