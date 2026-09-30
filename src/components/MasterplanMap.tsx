"use client";

import { useState } from "react";
import { manzanas, amenidadesMapa, type Manzana, type AmenidadMapa } from "@/lib/content";

const experienciaColor: Record<Manzana["experiencia"], string> = {
  "Sobre las nubes": "bg-sky",
  "Dentro de la selva": "bg-forest",
  Mixta: "bg-gold",
};

const experienciaFoto: Record<Manzana["experiencia"], string> = {
  "Sobre las nubes": "/images/masterplan/sobre-las-nubes.webp",
  "Dentro de la selva": "/images/masterplan/dentro-de-la-selva.webp",
  Mixta: "/images/masterplan/sobre-las-nubes.webp",
};

// Pequeños iconos de línea, mismo trazo (stroke, sin relleno) para que
// combinen con la tipografía fina del resto del sitio — no había un set de
// iconos propio en el proyecto, así que se armaron acá mismo, minimalistas
// a propósito (grilla = lotes, montaña = vista, brújula = experiencia, pin =
// cercanía).
function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-4 h-4">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconMountain() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-4 h-4">
      <path d="M2.5 19 9 8l4 6.5 2.5-3.5L21.5 19Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconCompass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-4 h-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 5-5 2 2-5Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-4 h-4">
      <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-3.5 h-3.5">
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" strokeLinejoin="round" />
      <path d="M5 19c2-4 5-7 9-9" />
    </svg>
  );
}

type Activo = { tipo: "manzana"; data: Manzana } | { tipo: "amenidad"; data: AmenidadMapa } | null;

/**
 * Mapa del masterplan — reformulado a pedido de Bryan tras ver el export de
 * Illustrator: más grande y organizado dentro de una tarjeta propia (antes
 * vivía "suelto" dentro del contenedor general de la página), con pines de
 * manzana MÁS los de amenidad (antes no existían — se ubicaron a ojo sobre
 * los elementos que el propio ilustrador de mapa.webp ya dibujó: canchas,
 * piscinas, palapas — ver amenidadesMapa en content.ts) y una anotación fija
 * tipo "Riachuelo" sobre el curso de agua, igual que en el export.
 *
 * El popup dejó de ser un modal de pantalla completa con fondo gris (Bryan
 * fue explícito: "no como que se pone un cuadro y de fondo todo gris, sino
 * solo un cuadro") — ahora es una tarjeta que se despliega DENTRO de la
 * misma hoja, anclada sobre el mapa, con su propia foto según la
 * experiencia. Se anima con opacity+scale por CSS (sin librerías) para que
 * abrir/cerrar/cambiar de manzana se sienta instantáneo.
 */
export default function MasterplanMap() {
  const [activo, setActivo] = useState<Activo>(null);

  const toggleManzana = (m: Manzana) =>
    setActivo((prev) => (prev?.tipo === "manzana" && prev.data.id === m.id ? null : { tipo: "manzana", data: m }));

  const toggleAmenidad = (a: AmenidadMapa) =>
    setActivo((prev) => (prev?.tipo === "amenidad" && prev.data.id === a.id ? null : { tipo: "amenidad", data: a }));

  return (
    <div className="relative rounded-[2rem] bg-cloud-soft border border-charcoal/10 p-4 sm:p-6 lg:p-8">
      <div className="relative aspect-[2048/1271] rounded-2xl overflow-hidden bg-cloud">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/masterplan/mapa.webp"
          alt="Ilustración del Master Plan de HANAK"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Anotación fija sobre el riachuelo — no interactiva, igual que en
            el export de Illustrator. Al estar tan a la derecha (left: 84%),
            en pantallas angostas la píldora centrada se salía del mapa
            (overflow-hidden la recortaba a mitad de palabra) — se acota su
            ancho y se corre el anclaje hacia la izquierda del punto en vez
            de centrarlo, y el texto puede envolver en dos líneas en mobile. */}
        <div
          className="absolute z-10 -translate-x-[85%] sm:-translate-x-1/2 -translate-y-1/2 bg-cloud/95 backdrop-blur-sm rounded-2xl sm:rounded-full pl-2 pr-2.5 sm:pr-3 py-1.5 shadow-md border border-charcoal/10 flex items-center gap-1.5 pointer-events-none max-w-[8.5rem] sm:max-w-none sm:whitespace-nowrap"
          style={{ left: "84%", top: "16%" }}
        >
          <IconLeaf />
          <div className="leading-tight min-w-0">
            <p className="text-[10px] font-medium text-forest whitespace-nowrap">Riachuelo</p>
            <p className="text-[8px] text-charcoal/50 -mt-0.5">Área de amortiguación natural</p>
          </div>
        </div>

        {manzanas.map((m) => (
          <button
            key={m.id}
            onClick={() => toggleManzana(m)}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${
              experienciaColor[m.experiencia]
            } text-white text-[11px] sm:text-xs font-medium flex items-center justify-center shadow-md ring-2 ring-white/90 hover:scale-110 hover:shadow-lg transition-all ${
              activo?.tipo === "manzana" && activo.data.id === m.id ? "scale-110 ring-white" : ""
            }`}
            aria-label={`Manzana ${m.id}`}
          >
            {m.id}
          </button>
        ))}

        {amenidadesMapa.map((a) => (
          <button
            key={a.id}
            onClick={() => toggleAmenidad(a)}
            style={{ left: `${a.x}%`, top: `${a.y}%` }}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/95 text-forest flex items-center justify-center shadow-md ring-2 ring-forest/25 hover:scale-110 hover:ring-forest/50 transition-all ${
              activo?.tipo === "amenidad" && activo.data.id === a.id ? "scale-110 ring-forest/60" : ""
            }`}
            aria-label={a.label}
          >
            <IconLeaf />
          </button>
        ))}

        {/* Tarjeta de detalle — se despliega DENTRO de la hoja, sobre el
            mapa, sin fondo gris. Queda montada siempre (nunca se
            desmonta) para que abrir/cerrar/cambiar de selección anime por
            transición de CSS en vez de aparecer de golpe. */}
        <div
          className={`absolute z-20 left-3 right-3 bottom-3 sm:left-5 sm:bottom-5 sm:right-auto sm:w-[22rem] origin-bottom-left transition-all duration-200 ease-out ${
            activo ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }`}
        >
          {activo?.tipo === "manzana" && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex">
              <div className="w-28 sm:w-32 shrink-0 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={experienciaFoto[activo.data.experiencia]}
                  alt={activo.data.experiencia}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 sm:p-5 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl text-forest leading-none">Manzana {activo.data.id}</h3>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/45 mt-1.5">
                      {activo.data.experiencia}
                    </p>
                  </div>
                  <button
                    onClick={() => setActivo(null)}
                    className="text-charcoal/30 hover:text-charcoal text-lg leading-none -mt-1 -mr-1 p-1"
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                </div>
                <dl className="mt-3 space-y-2 text-xs text-charcoal/75">
                  <div className="flex items-start gap-2">
                    <span className="text-forest/70 mt-0.5"><IconGrid /></span>
                    <span>{activo.data.lotes} lotes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-forest/70 mt-0.5"><IconMountain /></span>
                    <span>{activo.data.vista}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-forest/70 mt-0.5"><IconCompass /></span>
                    <span>{activo.data.experiencia}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-forest/70 mt-0.5"><IconPin /></span>
                    <span>{activo.data.cercania}</span>
                  </div>
                </dl>
                <button
                  onClick={() => {
                    setActivo(null);
                    window.dispatchEvent(new CustomEvent("hanak:open-reserve"));
                  }}
                  className="w-full mt-4 bg-forest text-white rounded-full py-2.5 text-xs font-medium hover:bg-forest-dark transition"
                >
                  Conocer disponibilidad
                </button>
              </div>
            </div>
          )}

          {activo?.tipo === "amenidad" && (
            <div className="bg-white rounded-2xl shadow-2xl p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <IconLeaf />
                  </span>
                  <h3 className="font-display text-lg text-forest leading-tight">{activo.data.label}</h3>
                </div>
                <button
                  onClick={() => setActivo(null)}
                  className="text-charcoal/30 hover:text-charcoal text-lg leading-none -mt-1 -mr-1 p-1"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
              <p className="mt-2 text-xs text-charcoal/70 leading-relaxed">{activo.data.descripcion}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 px-1 text-xs text-charcoal/60">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-sky inline-block" /> Sobre las nubes
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-forest inline-block" /> Dentro de la selva
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-gold inline-block" /> Mixta
        </span>
        <span className="flex items-center gap-1.5 ml-auto">
          <span className="w-3 h-3 rounded-full bg-white ring-1 ring-forest/40 inline-block" /> Amenidad
        </span>
      </div>
    </div>
  );
}
