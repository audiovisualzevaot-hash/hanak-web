// Banda de texto en loop continuo (marquee) que aparece entre el contenido y
// el footer en todas las páginas.
//
// Bryan reportó que en vez de pasar en bucle parejo, se veía un tramo vacío
// antes de que el texto volviera a aparecer. Causa real: la técnica de
// translateX(-50%) para loop sin cortes SOLO funciona sin huecos si cada
// mitad del recorrido (una "tanda" de texto) ya es más ancha que la pantalla
// — acá una sola tanda de estos 7 textos es más angosta que un monitor de
// escritorio normal, así que al terminar de pasar la segunda tanda no había
// una tercera detrás para seguir llenando la pantalla. Se arregla repitiendo
// la lista varias veces DENTRO de cada mitad (HALF_REPEAT), no solo una vez,
// para garantizar que cada mitad sea más ancha que cualquier pantalla real
// (incluyendo monitores ultra-anchos) — la animación sigue siendo la misma,
// solo cambia cuánto texto hay detrás esperando su turno.
const ITEMS = [
  "DENTRO DE LA SELVA",
  "CULTURA VIVA",
  "NATURALEZA",
  "ARQUITECTURA",
  "EXPERIENCIA",
  "HANAK",
  "SOBRE LAS NUBES",
];

const HALF_REPEAT = 4;

export default function Marquee() {
  const items = Array.from({ length: HALF_REPEAT }, () => ITEMS).flat();

  const track = (
    <div className="flex items-center shrink-0">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-3 text-xs sm:text-sm uppercase tracking-[0.15em] text-cloud/90 whitespace-nowrap">
            {item}
          </span>
          <span className="text-cloud/50">—</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-olive overflow-hidden py-3 sm:py-4">
      <div className="flex w-max animate-marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
