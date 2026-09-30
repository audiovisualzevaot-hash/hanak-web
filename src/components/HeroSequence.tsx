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
 * Secuencia de apertura de Inicio, fiel al export de Illustrator y a la
 * referencia que grabó Bryan de ayana.com:
 *
 * 1. Atardecer sobre los cerros de Tarapoto (header.webp) — fija en cuadro,
 *    paneando hacia abajo a medida que se hace scroll (un paneo, nunca un
 *    zoom) hasta recorrer prácticamente toda la foto alta, de arriba a
 *    abajo — "que se vea la foto completa, no recortada".
 * 2. Mar de nubes (nubes.webp) — la segunda foto NUNCA se desliza como una
 *    hoja aparte: queda en el mismo lugar que la primera desde el inicio y
 *    solo se desvanece hacia adentro (opacity 0→1), un disolve puro sin
 *    ningún borde recto cruzando la pantalla. Igual que la Hoja 1, esta
 *    foto también recorre prácticamente toda su altura — pero en dos
 *    tramos: primero panea lento y se queda dentro de la zona de nubes
 *    mientras aparece "El primer Sky Resort de Latinoamérica" + el mapa;
 *    una vez que ese texto ya está fijo en pantalla, el paneo sigue
 *    avanzando (más rápido) hasta el final del scroll, revelando el resto
 *    de la foto (el valle) por debajo del texto ya asentado — tal como se
 *    ve en ayana.com: el fondo se sigue transformando después de que el
 *    contenido de encima ya se fijó.
 * 3. El titular de apertura ("Presentando a HANAK") no desaparece antes de
 *    que empiece el disolve — se apaga EN EL MISMO TRAMO que las dos fotos
 *    se cruzan, para que se sienta como una sola transición continua y no
 *    como dos animaciones independientes.
 *
 * Referencia pedida por Bryan (ayana.com): sin cortes, sin zooms, todo es
 * disolver y panear — el único zoom prohibido es el scale(); el paneo
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

  // --- Capa 1 — atardecer: paneo puro (sin escala) que recorre prácticamente
  // toda la foto alta antes de disolver a la Hoja 2 (pedido de Bryan: "que
  // se vea la foto completa, no recortada").
  const heroPanY = mix(4, 94, local(progress, 0, 0.48));

  // Texto "Presentando a HANAK" — se apaga EN EL MISMO TRAMO que el disolve
  // de las dos fotos (0.14→0.46, ver sheetOpacity abajo), no antes: así se
  // va "junto con la imagen" en vez de desaparecer solo antes de que pase
  // nada, como pidió Bryan viendo la referencia de ayana.com.
  const textOpacity = 1 - local(progress, 0.14, 0.46);
  const textY = -local(progress, 0.14, 0.46) * 40;

  // --- Capa 2 — mar de nubes: disolve puro, sin deslizamiento. Ambas fotos
  // ocupan el mismo lugar (inset-0) desde el principio; solo cambia el
  // opacity de la que entra. Así se ven "integradas" de verdad, sin ningún
  // borde recto cruzando la pantalla — exactamente como en ayana.com,
  // donde la foto nueva nunca se desliza como una hoja aparte.
  const sheetOpacity = local(progress, 0.14, 0.46);
  // Paneo en dos tramos: lento y dentro de la zona de nubes mientras el
  // título+mapa todavía están apareciendo (0.14→0.66), y luego — una vez
  // que ya quedaron fijos en pantalla — más rápido hasta el final del
  // scroll, recorriendo el resto de la foto (el valle) por debajo del
  // texto ya asentado. Así la foto se ve completa, como pidió Bryan, sin
  // que el mapa aparezca flotando sobre el terreno mientras se está
  // formando.
  const cloudsPanY =
    progress < 0.66
      ? mix(14, 22, local(progress, 0.14, 0.66))
      : mix(22, 90, local(progress, 0.66, 1));

  // --- Capítulo "El primer Sky Resort de Latinoamérica" + mapa, sobre la
  // misma foto de nubes/valle — nunca sobre un fondo de color sólido. Una
  // vez que llega a opacity 1 / translateY 0 se queda ahí fijo el resto
  // del scroll (el fondo sigue paneando detrás, ver cloudsPanY).
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

        {/* Texto central de apertura — sobre la hoja de atardecer. La
            animación de entrada (fundido + subida, escalonada) corre una
            sola vez al cargar la página, igual que ayana.com — separada
            del opacity/translateY de scroll, que se aplica encima. */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-5"
          style={{ opacity: textOpacity, transform: `translateY(${textY}px)` }}
        >
          <p
            className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cloud/80 mb-7 animate-hero-intro"
            style={{ animationDelay: "0.1s" }}
          >
            Presentando a
          </p>
          <Image
            src="/images/brand/lockup-cream.png"
            alt="HANAK — Sky Resort & Villas Club"
            width={280}
            height={176}
            priority
            className="w-56 sm:w-72 lg:w-80 h-auto animate-hero-intro"
            style={{ animationDelay: "0.35s" }}
          />
          <SunArc
            className="mt-9 sm:mt-11 animate-hero-intro"
            color="#fff"
            style={{ animationDelay: "0.7s" }}
          />
        </div>

        {/* Hoja 2 — mar de nubes / valle. Disolve puro (solo opacity, sin
            transform): queda en el mismo lugar que la Hoja 1 desde el
            principio y va tapándola por transparencia, nunca con un borde
            que se desliza. Luego sigue paneando; sobre ella va el segundo
            capítulo (título + mapa), tal como en el export: todo sobre la
            misma foto, nunca sobre color sólido. */}
        <div
          className="absolute inset-0"
          style={{
            opacity: sheetOpacity,
            willChange: "opacity",
          }}
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

          {/* Capítulo 2 — título + mapa, siempre sobre la foto. Apilado y
              centrado, todo más grande — como en la referencia de ayana.com
              que grabó Bryan (ahí el título, el texto y el mapa van uno
              debajo del otro, centrados, no en columnas separadas). */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-start gap-2 px-5 pt-16 text-center sm:justify-center sm:gap-3 sm:pt-0"
            style={{ opacity: introOpacity, transform: `translateY(${introY}px)` }}
          >
            <h2 className="font-display uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-forest leading-tight drop-shadow-sm">
              El primer Sky Resort
              <br /> de Latinoamérica
            </h2>

            <div className="max-w-sm sm:max-w-lg">
              <p className="text-sm sm:text-base lg:text-lg text-charcoal font-medium leading-snug">
                Sobre las nubes de la Amazonía peruana nace un nuevo concepto
                de vivir:
              </p>
              <p className="text-xs sm:text-base lg:text-lg text-charcoal/55 leading-snug">
                Un resort donde cada momento del día es un privilegio.
              </p>
            </div>

            {/* En móvil este renglón se omite: el texto de arriba ya
                transmite la idea y el espacio es demasiado justo para
                sumar una tercera línea sin competir con el mapa (el
                problema que reportó Bryan). Vuelve a partir de sm:, donde
                sí hay aire de sobra. */}
            <div className="hidden max-w-sm items-start gap-2 text-left sm:flex sm:max-w-md">
              <span className="mt-1 h-7 w-px shrink-0 bg-charcoal/25 sm:h-8" />
              <p className="text-xs leading-snug sm:text-sm">
                <span className="text-charcoal font-medium">
                  HANAK no es un condominio,
                </span>{" "}
                <span className="text-charcoal/60">
                  Es una forma distinta de estar en el mundo.
                </span>
              </p>
            </div>

            <PeruMiniMap
              className="mt-1 sm:mt-2"
              maxWidthClassName="max-w-[220px] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
