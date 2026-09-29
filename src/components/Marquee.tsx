// Banda de texto en loop continuo (marquee) que aparece entre el contenido y
// el footer en todas las páginas. Duplicamos el contenido una vez y animamos
// translateX(-50%) para un loop perfecto sin salto.
const ITEMS = [
  "DENTRO DE LA SELVA",
  "CULTURA VIVA",
  "NATURALEZA",
  "ARQUITECTURA",
  "EXPERIENCIA",
  "HANAK",
  "SOBRE LAS NUBES",
];

export default function Marquee() {
  const track = (
    <div className="flex items-center shrink-0">
      {ITEMS.map((item, i) => (
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
