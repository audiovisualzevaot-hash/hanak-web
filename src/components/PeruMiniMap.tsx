// Mapa de ubicación de Hanak (Lamas, Tarapoto, aeropuerto), tal como lo
// exportó Bryan directamente de Illustrator con fondo transparente —
// reemplaza la reconstrucción a mano en SVG que se usaba antes. Es un
// único gráfico ya armado (contorno + pin HANAK + etiquetas + ruta
// punteada al aeropuerto), así que este componente solo lo ubica y lo
// dimensiona sobre la foto de fondo del hero.
//
// El avioncito del ícono de "Aeropuerto" se recortó aparte (ver
// avioncito.webp) y se borró de ese lugar en el gráfico base, para poder
// darle vida propia con una animación en loop — como el detalle animado
// del aeropuerto en ayana.com — sin tener que re-exportar todo el mapa
// como SVG. Las posiciones de abajo (left/top/width en %) son las
// coordenadas exactas de ese recorte dentro del gráfico original.
export default function PeruMiniMap({
  className = "",
  maxWidthClassName = "max-w-[280px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]",
}: {
  className?: string;
  /** Ancho máximo del mapa — se pasa aparte para no chocar con la clase
   *  base w-full/mx-auto (dos utilidades max-w-* en el mismo elemento
   *  compiten de forma impredecible en Tailwind). */
  maxWidthClassName?: string;
}) {
  return (
    <div className={`relative w-full mx-auto ${maxWidthClassName} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/inicio/mapa-ubicacion.webp"
        alt="Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto"
        className="w-full h-auto"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/inicio/avioncito.webp"
        alt=""
        aria-hidden="true"
        className="absolute animate-plane-float"
        style={{ left: "76.6%", top: "75.3%", width: "6.2%", height: "auto" }}
      />
    </div>
  );
}
