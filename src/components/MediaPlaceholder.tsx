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
}: Props) {
  if (src) {
    return (
      <div className={`${aspect} ${className} relative overflow-hidden rounded-xl`}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        {kind === "video" && (
          <span className="absolute bottom-3 right-3 z-10 text-[10px] uppercase tracking-wider bg-charcoal/70 text-white rounded-full px-2.5 py-1">
            ▶ video pendiente
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${aspect} ${className} relative overflow-hidden rounded-xl bg-gradient-to-br from-forest/20 via-cloud-soft to-sky/20 flex items-end`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(45deg,var(--hanak-charcoal)_0,var(--hanak-charcoal)_1px,transparent_1px,transparent_10px)]" />
      <span className="relative z-10 m-3 text-[10px] uppercase tracking-wider bg-charcoal/70 text-white rounded-full px-2.5 py-1">
        {kind === "video" ? "▶ " : "◇ "}
        {label}
      </span>
    </div>
  );
}
