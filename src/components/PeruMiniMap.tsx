// Mapa de ubicación de Hanak (Lamas, Tarapoto, aeropuerto), tal como lo
// exportó Bryan directamente de Illustrator con fondo transparente —
// reemplaza la reconstrucción a mano en SVG que se usaba antes. Es un
// único gráfico ya armado (contorno + pin HANAK + etiquetas + ruta
// punteada al aeropuerto), así que este componente solo lo ubica y lo
// dimensiona sobre la foto de fondo del hero.
export default function PeruMiniMap({
  className = "",
  maxWidthClassName = "max-w-[280px] sm:max-w-[640px]",
}: {
  className?: string;
  /** Ancho máximo del mapa — se pasa aparte para no chocar con la clase
   *  base w-full/mx-auto (dos utilidades max-w-* en el mismo elemento
   *  compiten de forma impredecible en Tailwind). */
  maxWidthClassName?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/inicio/mapa-ubicacion.webp"
      alt="Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto"
      className={`w-full h-auto mx-auto ${maxWidthClassName} ${className}`}
    />
  );
}
