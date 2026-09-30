"use client";

import { useState } from "react";
import { testimonios } from "@/lib/content";
import MediaPlaceholder from "./MediaPlaceholder";

// Carrusel de un testimonio a la vez ("Experiencias de Socios Fundadores"),
// con foto/video a un lado y cita al otro. Cada testimonio trae su propio
// video vertical (9:16) + poster (llegaron en zips separados por cliente,
// ver public/videos|images/testimonios); si a algún testimonio le falta el
// video, cae al MediaPlaceholder para no romper el layout.
export default function SociosFundadores() {
  const [index, setIndex] = useState(0);
  const t = testimonios[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonios.length) % testimonios.length);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {t.video ? (
          // key=t.video fuerza remount al cambiar de testimonio, así el
          // <video> anterior se descarta (y se detiene) en vez de quedar
          // reproduciéndose de fondo con el poster equivocado.
          <video
            key={t.video}
            controls
            playsInline
            preload="none"
            poster={t.poster}
            className="max-w-md mx-auto lg:mx-0 w-full aspect-[9/16] rounded-xl overflow-hidden bg-charcoal/10 object-cover"
          >
            <source src={t.video} type="video/mp4" />
          </video>
        ) : (
          <MediaPlaceholder
            label={`Testimonio — ${t.nombre}`}
            kind="video"
            aspect="aspect-[9/16]"
            className="max-w-md mx-auto lg:mx-0"
          />
        )}
        <div>
          <p className="font-display text-2xl sm:text-3xl text-forest leading-snug mb-6">
            &ldquo;{t.cita}&rdquo;
          </p>
          {t.testimonioNota && (
            <p className="text-xs uppercase tracking-wide text-forest/60 mb-1.5">
              {t.testimonioNota}
            </p>
          )}
          <p className="text-charcoal/80">
            {t.nombre} — Propietario, Lote {t.lote}
          </p>
          <p className="text-sm text-charcoal/50 mt-1">{t.contexto}</p>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="w-10 h-10 rounded-full border border-forest/30 flex items-center justify-center hover:bg-forest hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 rounded-full border border-forest/30 flex items-center justify-center hover:bg-forest hover:text-white transition"
            >
              →
            </button>
            <div className="flex items-center gap-1.5 ml-2">
              {testimonios.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? "bg-forest" : "bg-forest/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
