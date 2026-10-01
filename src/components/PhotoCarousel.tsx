"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string; objectPosition?: string };

const DEFAULT_SIZES = "100vw";

const AUTOPLAY_MS = 6000;

/**
 * Carrusel de una foto completa a la vez, sin panel de texto ni tarjeta —
 * a diferencia del carrusel de testimonios (SociosFundadores), acá la foto
 * ocupa todo el espacio y los botones de navegación son transparentes
 * (solo la flecha, sin fondo), flotando sobre la propia imagen. Pedido
 * explícito de Bryan para la sección de "Propósito social" en Hanak.
 *
 * Avanza solo cada 6s (AUTOPLAY_MS), además del mecanismo de botones
 * laterales — el timer se reinicia cada vez que cambia el índice, así que
 * una navegación manual no se pisa con el siguiente avance automático.
 *
 * Las 5 fotos van todas en el DOM desde el inicio, una al lado de la otra
 * en una tira horizontal, y lo único que se mueve es un translateX sobre
 * esa tira (deslizamiento real, foto empujando a foto). Antes cada cambio
 * de foto desmontaba/montaba una sola <Image>, lo que se sentía como un
 * corte + una carga (la siguiente foto recién empezaba a pedirse al
 * navegador en ese momento). Con todas precargadas (loading="eager") no
 * hay nada que esperar al deslizar.
 *
 * `className` / `frameClassName` / `dots` son opcionales y no cambian nada
 * para quien ya usa el componente sin pasarlos (Hanak): permiten reusar el
 * mismo mecanismo de deslizamiento en una sección a pantalla completa (p.
 * ej. el hero o el cierre de "Sky Club" en Experiencia), donde no queremos
 * el marco redondeado ni los puntos de página debajo — ahí `aspect` pasa a
 * ser "aspect-auto h-full" y el contenedor recibe su alto real vía
 * `className="absolute inset-0"` desde afuera.
 */
export default function PhotoCarousel({
  photos,
  aspect = "aspect-[16/9]",
  className = "",
  frameClassName = "rounded-xl bg-charcoal/10",
  dots = true,
  sizes = DEFAULT_SIZES,
}: {
  photos: Photo[];
  aspect?: string;
  className?: string;
  frameClassName?: string;
  dots?: boolean;
  // Igual criterio que MediaPlaceholder: por defecto asume pantalla
  // completa (el uso más común — heroes y cierres a pantalla completa),
  // pero el carrusel de "Propósito social" en Hanak vive dentro de un
  // contenedor max-w-5xl, así que ahí conviene pasar un valor más ajustado.
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + photos.length) % photos.length);
  };

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, photos.length]);

  // Igual que en MediaPlaceholder: si quien llama ya trae su propia utilidad
  // de position (p. ej. "absolute inset-0" para un carrusel a pantalla
  // completa), no agregamos "relative" — Tailwind no garantiza que gane
  // sobre la clase del caller si ambas compiten por la misma propiedad.
  const hasOwnPosition = /\b(absolute|fixed|sticky|static)\b/.test(className);
  const position = hasOwnPosition ? "" : "relative";

  return (
    <div className={`${position} ${className}`}>
      <div className={`relative ${aspect} w-full h-full overflow-hidden ${frameClassName}`}>
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            width: `${photos.length * 100}%`,
            transform: `translateX(-${index * (100 / photos.length)}%)`,
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative h-full flex-none"
              style={{ width: `${100 / photos.length}%` }}
            >
              {i === 0 ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority
                  sizes={sizes}
                  className="object-cover"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="eager"
                  sizes={sizes}
                  className="object-cover"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl sm:text-4xl leading-none drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] transition-transform hover:-translate-x-0.5 px-2 py-3"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Foto siguiente"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl sm:text-4xl leading-none drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] transition-transform hover:translate-x-0.5 px-2 py-3"
          >
            ›
          </button>

          {dots && (
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? "bg-forest" : "bg-forest/20"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
