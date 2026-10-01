"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LogoMark from "./LogoMark";
import { useDictionary } from "@/lib/i18n/I18nProvider";

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const mix = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);

/**
 * Hero de Cómo Llegar — mismo mecanismo que HanakHero.tsx (que a su vez
 * sigue el criterio de HeroSequence.tsx en Inicio): la foto queda fija
 * (sticky) mientras se hace scroll y se panea verticalmente, revelando de a
 * poco toda su extensión en vez de mostrar solo una porción recortada.
 *
 * Bryan pidió expresamente "la foto grande larga, como en INICIO" después
 * de ver que la versión estática (min-h-screen) solo alcanzaba a mostrar una
 * franja central de la foto — al ser una foto muy vertical (2:3), cortaba
 * tanto la neblina/nubes de arriba como la selva de abajo. Con el paneo se
 * alcanzan a apreciar ambos extremos. A diferencia de Inicio (que cruza dos
 * fotos en 520vh) esto es un solo capítulo de texto, siempre visible sobre
 * la misma foto — mismo criterio de "no tan largo/elaborado" que ya se usó
 * en HanakHero (track de 170vh en vez de un alto fijo de viewport).
 */
export default function ComoLlegarHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const dict = useDictionary();
  const clh = dict.comoLlegarHero;

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

  // Paneo de arriba (neblina/nubes) hacia abajo (selva) a lo largo de todo
  // el recorrido del track.
  const panY = mix(4, 92, progress);

  // El indicador de scroll de abajo solo tiene sentido al principio.
  const cueOpacity = 1 - clamp01(progress / 0.15);

  return (
    <section ref={trackRef} className="relative h-[170vh] bg-forest-dark">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="/images/como-llegar/header.webp"
            alt={clh.imgAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: `50% ${panY}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/35" />
        </div>

        <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-5 gap-5 sm:gap-6">
          <h1 className="font-display uppercase text-cloud text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-tight drop-shadow-sm animate-como-llegar-title">
            {clh.title}
          </h1>

          <div className="flex flex-col items-center gap-3">
            <LogoMark size={28} tone="cream" />
            <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/85">
              {clh.subtitle1}
            </p>
            <p className="font-display italic text-teal text-5xl sm:text-7xl">
              {clh.subtitle2}
            </p>
          </div>
        </div>

        <div
          className="absolute z-10 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16"
          style={{ opacity: cueOpacity }}
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-white/35 animate-[spin_40s_linear_infinite]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </span>
        </div>
      </div>
    </section>
  );
}
