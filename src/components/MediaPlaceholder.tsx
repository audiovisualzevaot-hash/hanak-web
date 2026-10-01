import Image from "next/image";

type Props = {
  label: string;
  aspect?: string; // ej. "aspect-[16/9]"
  kind?: "foto" | "video";
  className?: string;
  // Ruta real en /public (ej. "/images/tarapoto/plaza-de-armas.webp"). Si se
  // pasa, se muestra la foto real en vez del placeholder — el video sigue
  // pendiente (aún no llegan los videos), así que "kind='video'" con src
  // muestra la foto como fondo estático mientras tanto.
  src?: string;
  priority?: boolean;
  // Para los pocos usos donde la foto NO ocupa el ancho completo de la
  // pantalla (ej. collages en grilla) — por defecto asume "100vw" porque la
  // gran mayoría de los usos de este componente son fondos a pantalla
  // completa. Pasar un valor más ajustado evita que Next.js baje una
  // imagen más grande de lo que realmente se renderiza.
  sizes?: string;
};

// Placeholder visual consistente para espacios de foto/video pendientes.
// Cuando se pasa `src`, renderiza la foto real (next/image, fill + cover) sin
// cambiar el layout de la sección.
export default function MediaPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  kind = "foto",
  className = "",
  src,
  priority = false,
  sizes = "100vw",
}: Props) {
  // Tailwind genera las utilidades de "position" en el orden en que las
  // encuentra al escanear el código — no en el orden en que aparecen en el
  // string de className. Si esta base siempre incluyera "relative", en
  // ciertos builds esa regla podía terminar ganando sobre el "absolute" que
  // pasan los heros de página completa, colapsando la imagen a 0x0. Por eso
  // el positioning es condicional: solo agregamos "relative" cuando el
  // caller no trae su propio position utility.
  const hasOwnPosition = /\b(absolute|fixed|sticky|static)\b/.test(className);
  const position = hasOwnPosition ? "" : "relative";

  if (src) {
    return (
      <div className={`${aspect} ${position} ${className} overflow-hidden rounded-xl`}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspect} ${position} ${className} overflow-hidden rounded-xl bg-gradient-to-br from-forest/20 via-cloud-soft to-sky/20 flex items-end`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(45deg,var(--hanak-charcoal)_0,var(--hanak-charcoal)_1px,transparent_1px,transparent_10px)]" />
      <span className="relative z-10 m-3 text-[10px] uppercase tracking-wider bg-charcoal/70 text-white rounded-full px-2.5 py-1">
        {kind === "video" ? "▶ " : "◇ "}
        {label}
      </span>
    </div>
  );
}
