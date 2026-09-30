"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };

/**
 * Carrusel de una foto completa a la vez, sin panel de texto ni tarjeta —
 * a diferencia del carrusel de testimonios (SociosFundadores), acá la foto
 * ocupa todo el espacio y los botones de navegación son transparentes
 * (solo la flecha, sin fondo), flotando sobre la propia imagen. Pedido
 * explícito de Bryan para la sección de "Propósito social" en Hanak.
 */
export default function PhotoCarousel({
  photos,
  aspect = "aspect-[16/9]",
}: {
  photos: Photo[];
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + photos.length) % photos.length);
  };

  return (
    <div className="relative">
      <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-charcoal/10`}>
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
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
