"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };

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
 */
export default function PhotoCarousel({
  photos,
  aspect = "aspect-[16/9]",
}: {
  photos: Photo[];
  aspect?: string;
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

  return (
    <div className="relative">
      <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-charcoal/10`}>
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
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="eager"
                  sizes="100vw"
                  className="object-cover"
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
        </>
      )}
    </div>
  );
}
