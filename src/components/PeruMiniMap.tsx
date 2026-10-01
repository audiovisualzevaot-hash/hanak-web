// Mapa de ubicación de Hanak (Lamas, Tarapoto, aeropuerto), tal como lo
// exportó Bryan directamente de Illustrator con fondo transparente —
// reemplaza la reconstrucción a mano en SVG que se usaba antes. Es un
// único gráfico ya armado (contorno + pin HANAK + etiquetas + ruta
// punteada al aeropuerto), así que este componente solo lo ubica y lo
// dimensiona sobre la foto de fondo del hero.
//
// El ícono del avioncito se recortó aparte (avioncito.webp, sin el círculo
// verde — ese círculo quedó pintado de nuevo en el gráfico base como el
// pin fijo del "Aeropuerto") para poder animarlo de verdad: en vez de solo
// flotar en el sitio, ahora RECORRE la línea punteada real que va del
// aeropuerto hasta HANAK — igual que el detalle animado de ayana.com. La
// curva de <animateMotion> de abajo es un arco de círculo (centro y radio
// calculados a partir de la propia línea punteada del gráfico, pixel por
// pixel) que calza exactamente sobre esa ruta, así que el avioncito viaja
// pegado a las rayitas del mapa y no en línea recta.
export default function PeruMiniMap({
  className = "",
  maxWidthClassName = "max-w-[280px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]",
  ariaLabel = "Ubicación de Hanak, entre Lamas, Tarapoto y el aeropuerto",
}: {
  className?: string;
  /** Ancho máximo del mapa — se pasa aparte para no chocar con la clase
   *  base w-full/mx-auto (dos utilidades max-w-* en el mismo elemento
   *  compiten de forma impredecible en Tailwind). */
  maxWidthClassName?: string;
  /** Texto del aria-label — este componente es un Server Component y no
   *  lee el contexto de i18n directamente; el que lo usa (HeroSequence)
   *  le pasa la traducción vía dict.maps.peruMiniMapAria. */
  ariaLabel?: string;
}) {
  return (
    <div className={`w-full mx-auto ${maxWidthClassName} ${className}`}>
      <svg
        viewBox="0 0 1292 867"
        className="w-full h-auto"
        role="img"
        aria-label={ariaLabel}
      >
        <image href="/images/inicio/mapa-ubicacion.webp" width={1292} height={867} />
        {/* El avioncito arranca centrado en su propio origen (x/y negativos
            a la mitad de su ancho/alto) para que <animateMotion> lo mueva
            por su centro, no por la esquina — si no, viaja "descolgado"
            de la línea punteada en vez de montado sobre ella. */}
        <image href="/images/inicio/avioncito.webp" width={40} height={40} x={-20} y={-20}>
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            rotate="auto"
            path="M 1053 651 A 243.58 243.58 0 0 0 781 343"
          />
          {/* Se apaga justo antes de llegar y se enciende recién saliendo,
              para que el reinicio del loop (de HANAK de vuelta al
              aeropuerto) sea invisible, como pidió Bryan: un viaje
              continuo del aeropuerto a HANAK, nunca un salto brusco. */}
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.92;1"
            dur="5.5s"
            repeatCount="indefinite"
          />
        </image>
      </svg>
    </div>
  );
}
