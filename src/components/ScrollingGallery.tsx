// Galería de fotos en loop continuo, mismo mecanismo que Marquee.tsx
// (translateX 0 → -50% con el contenido duplicado una vez, para un loop
// perfecto sin salto). Se desliza sola, sin necesidad de scroll ni de
// interacción del usuario — pedido explícito de Bryan para las tiras de
// fotos de Tarapoto ("SECUENCIA", "ÚLTIMA SECUENCIA" y la tira de cultura).
export default function ScrollingGallery({
  images,
  itemWidthClass = "w-[50vw] sm:w-[25vw]",
  aspect = "aspect-[3/4]",
  durationSeconds = 32,
  gapClassName = "gap-1",
}: {
  images: { src: string; alt: string }[];
  /**
   * Ancho de cada foto — controla cuántas se ven a la vez en pantalla.
   * IMPORTANTE: debe ir en unidades de viewport (vw), no en porcentaje
   * (w-1/2, w-1/4, etc). El riel (`track`, más abajo) usa `w-max` para que
   * su ancho sea la suma real de sus hijos — y un ancho en % dentro de un
   * contenedor `w-max` es una referencia circular (el % de un ancho que
   * depende de ese mismo %), que los navegadores resuelven cayendo al
   * tamaño natural de la imagen: el resultado es una sola foto gigante y
   * recortada en vez de la tira deslizante. `vw` no depende del
   * contenedor, así que el riel puede medirse con normalidad.
   */
  itemWidthClass?: string;
  aspect?: string;
  durationSeconds?: number;
  gapClassName?: string;
}) {
  const track = (
    <div className={`flex ${gapClassName} shrink-0`}>
      {images.map((img, i) => (
        <div key={i} className={`${itemWidthClass} shrink-0`}>
          <div className={`relative ${aspect} overflow-hidden`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${gapClassName} w-max animate-marquee`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
