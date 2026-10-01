// Mapa Lima → Tarapoto → Hanak, tal como lo exportó Bryan directamente de
// Illustrator (fondo transparente, mismo criterio que PeruMiniMap.tsx en
// INICIO). El gráfico base (mapa-lima-hanak.webp) es ese mismo export, pero
// "limpio": el avioncito y el carrito que Bryan dibujó ahí como referencia de
// tamaño/posición se borraron a mano (rellenando con el color plano de fondo
// que había debajo — blanco junto a Lima, crema sobre la silueta de San
// Martín) y el tramo de línea punteada que quedaba debajo de cada ícono se
// volvió a trazar, para poder animarlos de verdad en vez de dejarlos fijos.
//
// Igual mecanismo que PeruMiniMap: cada ícono viaja sobre una curva
// <animateMotion> ajustada pixel a pixel a la línea punteada real del propio
// gráfico (no una curva inventada), con rotate="auto" y un fundido de
// entrada/salida para que el reinicio del loop sea invisible. La diferencia
// es que acá son DOS tramos en relevo, como pidió Bryan ("el avion de lima a
// tarapoto, y el carrito de tarapoto a Hanak"): el avión hace su recorrido,
// se apaga, y recién entonces el carrito hace el suyo — igual idea que ya
// tenía RutaAnimada.tsx (el mapa esquemático anterior), ahora sobre el mapa
// real.
export default function RutaLimaHanak({
  className = "",
  maxWidthClassName = "max-w-[760px] sm:max-w-[980px] lg:max-w-[1160px]",
  ariaLabel = "Mapa de Lima a Hanak: vuelo directo a Tarapoto y 30 minutos por tierra hasta el resort",
}: {
  className?: string;
  maxWidthClassName?: string;
  /** Server Component: no lee el contexto de i18n — quien lo usa le pasa
   *  la traducción vía dict.maps.rutaLimaHanakAria. */
  ariaLabel?: string;
}) {
  return (
    <div className={`w-full mx-auto ${maxWidthClassName} ${className}`}>
      {/* El gráfico se recortó pegado al contenido real (antes vivía en un
          lienzo cuadrado de 1440x1440 con mucho margen transparente
          alrededor, que dejaba ver de más el fondo crema de la sección
          detrás — Bryan pidió que el mapa "se vea grande" de verdad). Las
          curvas de abajo están recalculadas para el nuevo recorte
          (offset -125,-274 sobre las coordenadas originales). */}
      <svg
        viewBox="0 0 1188 897"
        className="w-full h-auto"
        role="img"
        aria-label={ariaLabel}
      >
        <image href="/images/como-llegar/mapa-lima-hanak.webp" width={1188} height={897} />

        {/* Avión — Lima → Tarapoto (1h 20min) */}
        <image
          href="/images/como-llegar/avioncito-mapa.webp"
          width={46}
          height={46}
          x={-23}
          y={-23}
          opacity={0}
        >
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;1;1"
            keyTimes="0;0.38;1"
            calcMode="linear"
            path="M 152,514 Q 474.5,156.7 797,490"
          />
          <animate
            attributeName="opacity"
            dur="10s"
            repeatCount="indefinite"
            values="0;1;1;0;0"
            keyTimes="0;0.04;0.34;0.38;1"
          />
        </image>

        {/* Carrito — Tarapoto → Hanak (30 min) */}
        <image
          href="/images/como-llegar/carrito-mapa.webp"
          width={44}
          height={38}
          x={-22}
          y={-19}
          opacity={0}
        >
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;0;1;1"
            keyTimes="0;0.46;0.86;1"
            calcMode="linear"
            path="M 797,490 C 840.2,430.3 682.6,370.7 950,311"
          />
          <animate
            attributeName="opacity"
            dur="10s"
            repeatCount="indefinite"
            values="0;0;1;1;0;0"
            keyTimes="0;0.46;0.5;0.82;0.86;1"
          />
        </image>
      </svg>
    </div>
  );
}
