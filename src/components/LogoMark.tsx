import Image from "next/image";

type Tone = "forest" | "cream" | "sage";

const SRC: Record<Tone, string> = {
  forest: "/images/brand/isotipo-forest.png",
  cream: "/images/brand/isotipo-cream.png",
  sage: "/images/brand/isotipo-sage.png",
};

/**
 * Isotipo real de HANAK (el mandala de 4 pétalos dentro de 4 círculos
 * entrelazados), recibido de Bryan como PNG en tres tonos. El asset es de
 * color fijo (no es un SVG con currentColor), así que el tono correcto se
 * elige según el fondo donde se use: "cream" sobre fotos/fondos oscuros,
 * "forest" sobre fondos claros (cloud), "sage" como acento decorativo.
 */
export default function LogoMark({
  size = 28,
  tone = "forest",
  className = "",
}: {
  size?: number;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Image
      src={SRC[tone]}
      alt="Isotipo HANAK"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
