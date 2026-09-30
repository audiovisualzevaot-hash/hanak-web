"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const mix = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);
const local = (p: number, from: number, to: number) => clamp01((p - from) / (to - from));

/**
 * Hero de Hanak — una sola foto (no hay cross-fade a una segunda como en
 * Inicio), pero con el mismo mecanismo de paneo vertical sostenido: la foto
 * queda fija (sticky) mientras se hace scroll y se revela de a poco, y dos
 * "capítulos" de contenido se turnan sobre ella — el logotipo primero, la
 * tarjeta de texto después — en vez de aparecer todo junto y quieto.
 *
 * Bryan pidió expresamente que esto NO sea tan largo/elaborado como el
 * scroll-sequence de Inicio (que cruza dos fotos en 520vh), pero que la
 * foto sí "se vea más larga" que una sección estática simple — de ahí el
 * track de 170vh en vez de un alto fijo de viewport.
 */
export default function HanakHero() {
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

  // Paneo continuo y lento de la foto — se revela más de la imagen a medida
  // que se avanza, en vez de quedar estática.
  const panY = mix(8, 88, progress);

  // Capítulo 1 — logotipo: visible desde el inicio (con su propia animación
  // de entrada al montar, ver abajo), se apaga entre 28%-42% del scroll.
  const logoOpacity = 1 - local(progress, 0.28, 0.42);
  const logoY = -local(progress, 0.28, 0.42) * 30;

  // Capítulo 2 — tarjeta "Propone una forma de vida": aparece justo cuando
  // el logotipo termina de apagarse (40%-55%) y se queda visible hasta el
  // final del recorrido, para que el desenganche del sticky hacia la
  // siguiente sección se sienta limpio (nada desapareciendo de golpe).
  const cardOpacity = local(progress, 0.4, 0.55);
  const cardY = (1 - local(progress, 0.4, 0.55)) * 28;

  return (
    <section ref={trackRef} className="relative h-[170vh] bg-forest-dark">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hanak/header.webp"
            alt="Hanak — paisaje y concepto de marca"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${panY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/45" />
        </div>

        {/* Capítulo 1 — logotipo */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5"
          style={{ opacity: logoOpacity, transform: `translateY(${logoY}px)` }}
        >
          <Image
            src="/images/brand/lockup-grid-forest.png"
            alt="HANAK — Sky Resort & Villas Club"
            width={1440}
            height={1440}
            priority
            className="w-[22rem] sm:w-[30rem] lg:w-[36rem] h-auto animate-hero-intro"
          />
        </div>

        {/* Capítulo 2 — tarjeta de concepto */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5"
          style={{ opacity: cardOpacity, transform: `translateY(${cardY}px)` }}
        >
          <div className="max-w-md sm:max-w-lg text-center bg-cloud/95 rounded-2xl px-7 py-8 sm:px-12 sm:py-10 shadow-xl">
            <h2 className="font-display text-2xl sm:text-4xl text-forest leading-snug">
              Propone una forma de vida
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/70 leading-relaxed">
              Donde el bienestar, la naturaleza y la comunidad conviven de
              manera armoniosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
