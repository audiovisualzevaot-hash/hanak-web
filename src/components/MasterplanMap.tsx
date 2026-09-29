"use client";

import { useState } from "react";
import { manzanas, type Manzana } from "@/lib/content";

const experienciaColor: Record<Manzana["experiencia"], string> = {
  "Sobre las nubes": "bg-sky",
  "Dentro de la selva": "bg-forest",
  Mixta: "bg-gold",
};

export default function MasterplanMap() {
  const [activa, setActiva] = useState<Manzana | null>(null);

  return (
    <div className="relative">
      <div className="relative aspect-[2048/1271] rounded-2xl overflow-hidden bg-cloud-soft border border-charcoal/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/masterplan/mapa.webp"
          alt="Ilustración del Master Plan de HANAK"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {manzanas.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiva(m)}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full ${
              experienciaColor[m.experiencia]
            } text-white text-xs font-medium flex items-center justify-center shadow-lg ring-2 ring-white hover:scale-110 transition`}
            aria-label={`Manzana ${m.id}`}
          >
            {m.id}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-4 text-xs text-charcoal/60">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-sky inline-block" /> Sobre las nubes
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-forest inline-block" /> Dentro de la selva
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-gold inline-block" /> Mixta
        </span>
      </div>

      {activa && (
        <div
          className="fixed inset-0 z-[90] bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setActiva(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-2xl text-forest">Manzana {activa.id}</h3>
              <button onClick={() => setActiva(null)} className="text-charcoal/40 hover:text-charcoal text-xl">
                ×
              </button>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-charcoal/40 uppercase text-xs tracking-wider">Lotes</dt>
                <dd className="text-charcoal/80">{activa.lotes}</dd>
              </div>
              <div>
                <dt className="text-charcoal/40 uppercase text-xs tracking-wider">Vista</dt>
                <dd className="text-charcoal/80">{activa.vista}</dd>
              </div>
              <div>
                <dt className="text-charcoal/40 uppercase text-xs tracking-wider">Experiencia</dt>
                <dd className="text-charcoal/80">{activa.experiencia}</dd>
              </div>
              <div>
                <dt className="text-charcoal/40 uppercase text-xs tracking-wider">Cercanía</dt>
                <dd className="text-charcoal/80">{activa.cercania}</dd>
              </div>
            </dl>
            <button
              onClick={() => {
                setActiva(null);
                window.dispatchEvent(new CustomEvent("hanak:open-reserve"));
              }}
              className="w-full mt-6 bg-forest text-white rounded-full py-3 text-sm font-medium hover:bg-forest-dark transition"
            >
              Conocer disponibilidad
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
