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
 * piscinas, palapas — ver amenidadesMapa en content.ts) y anotaciones fijas
 * tipo "Riachuelo"/"Ingreso" sobre esos puntos, igual que en el export.
 *
 * Bryan reportó dos problemas sobre esta primera versión: (1) el mapa se
 * veía chico y corrido "a un lado" — el archivo mapa.webp tenía un margen
 * crema enorme y descentrado alrededor del dibujo real (mismo problema que
 * tuvo antes mapa-lima-hanak.webp); se resolvió recortando el archivo al
 * contenido real (ver nota en content.ts) en vez de solo agrandar el
 * contenedor. (2) dos pines de amenidad (spa, degustación) caían fuera del
 * dibujo, sobre el margen vacío; se reubicaron sobre elementos reales del
 * ilustrador. También pidió que la ventana de detalle "se perciba" — antes
 * era una tarjeta chica anclada en una esquina; ahora se despliega grande y
 * centrada sobre el propio mapa, como en el Illustrator.
 *
 * El popup sigue sin ser un modal de pantalla completa con fondo gris
 * (Bryan fue explícito: "no como que se pone un cuadro y de fondo todo
 * gris, sino solo un cuadro") — es una tarjeta opaca que flota centrada
 * sobre el mapa; el único "fondo" es una capa invisible (sin color) que
 * permite cerrar tocando fuera de la tarjeta. Se anima con opacity+scale
 * por CSS (sin librerías) para que abrir/cerrar/cambiar de manzana se
 * sienta instantáneo.
 */
export default function MasterplanMap() {
  const [activo, setActivo] = useState<Activo>(null);

  const toggleManzana = (m: Manzana) =>
    setActivo((prev) => (prev?.tipo === "manzana" && prev.data.id === m.id ? null : { tipo: "manzana", data: m }));

  const toggleAmenidad = (a: AmenidadMapa) =>
    setActivo((prev) => (prev?.tipo === "amenidad" && prev.data.id === a.id ? null : { tipo: "amenidad", data: a }));

  return (
    <div className="relative rounded-[2rem] bg-cloud-soft border border-charcoal/10 p-3 sm:p-5 lg:p-6">
      {/* OJO: este contenedor NO recorta overflow (a propósito). El mapa es
          una caja corta y ancha (aspect-[1343/838]) — en mobile apenas mide
          ~210px de alto, menos de lo que necesita la tarjeta de detalle con
          foto. Si este div recortara overflow, la tarjeta quedaba cortada
          arriba/abajo (el mismo problema de "no se percibe" que reportó
          Bryan, por otra causa). Por eso el recorte redondeado se aplica
          solo a la imagen de fondo (capa de abajo), y pines/anotaciones/
          tarjeta viven en este contenedor sin overflow-hidden, libres de
          "desbordar" verticalmente el recuadro del mapa cuando hace falta. */}
      <div className="relative aspect-[1343/838]">
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-cloud">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/masterplan/mapa.webp"
            alt="Ilustración del Master Plan de HANAK"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Anotación fija sobre el riachuelo — no interactiva, igual que en
            el export de Illustrator. Con el mapa ya tan compacto en mobile,
            esta etiqueta terminaba tapando los pines de las manzanas G/H/I
            (más que ayudar, estorbaba) — se reserva para sm: en adelante,
            donde el mapa tiene aire de sobra para mostrarla sin chocar con
            nada. Las manzanas y amenidades siguen siendo el contenido
            interactivo principal y están visibles en todos los tamaños. */}
        <div
          className="hidden sm:flex absolute z-10 -translate-x-1/2 -translate-y-1/2 bg-cloud/95 backdrop-blur-sm rounded-full pr-3 pl-2 py-1.5 shadow-md border border-charcoal/10 items-center gap-1.5 pointer-events-none whitespace-nowrap"
          style={{ left: "67%", top: "23%" }}
        >
          <IconLeaf />
          <div className="leading-tight min-w-0">
            <p className="text-[10px] font-medium text-forest whitespace-nowrap">Riachuelo</p>
            <p className="text-[8px] text-charcoal/50 -mt-0.5">Área de amortiguación natural</p>
          </div>
        </div>

        {/* Anotación fija sobre el ingreso al resort — mismo criterio que
            Riachuelo arriba: solo de sm: en adelante, para no tapar las
            manzanas A/B en el mapa compacto de mobile. */}
        <div
          className="hidden sm:flex absolute z-10 -translate-y-1/2 bg-cloud/95 backdrop-blur-sm rounded-full pl-2 pr-3 py-1.5 shadow-md border border-charcoal/10 items-center gap-1.5 whitespace-nowrap pointer-events-none"
          style={{ left: "3%", top: "23%" }}
        >
          <span className="text-forest/80 text-xs leading-none">→</span>
          <p className="text-[10px] font-medium text-forest">Ingreso</p>
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

        {/* Capa de cierre — totalmente transparente (ningún color, ningún
            "fondo gris"), solo captura el click/tap fuera de la tarjeta
            para cerrarla. Va POR DEBAJO de los pines (z-10) para que,
            con una tarjeta abierta, se pueda tocar directamente otro pin
            y cambiar de selección sin tener que cerrar primero. */}
        <button
          type="button"
          aria-label="Cerrar detalle"
          onClick={() => setActivo(null)}
          className={`absolute inset-0 z-[5] cursor-default ${activo ? "" : "pointer-events-none"}`}
          tabIndex={activo ? 0 : -1}
        />

        {/* Tarjeta de detalle — se despliega DENTRO de la hoja, centrada
            sobre el propio mapa (grande, "que se perciba", como en el
            Illustrator), nunca como modal de pantalla completa con fondo
            gris. Queda montada siempre (nunca se desmonta) para que abrir/
            cerrar/cambiar de selección anime por transición de CSS en vez
            de aparecer de golpe. */}
        <div
          className={`absolute z-30 inset-0 flex items-center justify-center p-3 sm:p-6 transition-all duration-200 ease-out ${
            activo ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {activo?.tipo === "manzana" && (
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex w-full max-w-[26rem] sm:max-w-xl lg:max-w-2xl">
              <div className="w-28 sm:w-48 lg:w-56 shrink-0 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={experienciaFoto[activo.data.experiencia]}
                  alt={activo.data.experiencia}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-3 sm:p-7 lg:p-8 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-charcoal/45">
                    Manzana {activo.data.id}
                  </p>
                  <button
                    onClick={() => setActivo(null)}
                    className="text-charcoal/30 hover:text-charcoal text-xl leading-none -mt-1 -mr-1 p-1 shrink-0"
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                </div>
                <h3 className="font-display uppercase text-lg sm:text-3xl lg:text-4xl text-forest leading-tight mt-0.5 sm:mt-1">
                  {activo.data.experiencia}
                </h3>

                <dl className="mt-1.5 sm:mt-5 divide-y divide-charcoal/10 border-t border-charcoal/10 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2.5">
                    <span className="text-forest/70 shrink-0"><IconGrid /></span>
                    <span className="font-medium text-charcoal">{activo.data.lotes} lotes</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2.5">
                    <span className="text-forest/70 shrink-0 mt-0.5"><IconMountain /></span>
                    <div className="min-w-0">
                      <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-charcoal/45">Vistas</dt>
                      <dd className="text-charcoal/80 mt-0.5">{activo.data.vista}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2.5">
                    <span className="text-forest/70 shrink-0 mt-0.5"><IconCompass /></span>
                    <div className="min-w-0">
                      <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-charcoal/45">Experiencia</dt>
                      <dd className="text-charcoal/80 mt-0.5">{activo.data.experiencia}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2.5">
                    <span className="text-forest/70 shrink-0 mt-0.5"><IconPin /></span>
                    <div className="min-w-0">
                      <dt className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-charcoal/45">Cercanía</dt>
                      <dd className="text-charcoal/80 mt-0.5">{activo.data.cercania}</dd>
                    </div>
                  </div>
                </dl>

                <button
                  onClick={() => {
                    setActivo(null);
                    window.dispatchEvent(new CustomEvent("hanak:open-reserve"));
                  }}
                  className="w-full mt-2.5 sm:mt-6 bg-forest text-white rounded-full py-2 sm:py-3 text-xs sm:text-sm font-medium hover:bg-forest-dark transition"
                >
                  Conocer disponibilidad
                </button>
              </div>
            </div>
          )}

          {activo?.tipo === "amenidad" && (
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 w-full max-w-[22rem] sm:max-w-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <IconLeaf />
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-forest leading-tight">{activo.data.label}</h3>
                </div>
                <button
                  onClick={() => setActivo(null)}
                  className="text-charcoal/30 hover:text-charcoal text-xl leading-none -mt-1 -mr-1 p-1 shrink-0"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
              <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{activo.data.descripcion}</p>
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
