import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/locales";

// NOTA: en esta versión de Next.js (16.3.7) "middleware.ts" está deprecado
// y renombrado a "proxy.ts" (ver node_modules/next/dist/docs/01-app/
// 03-api-reference/03-file-conventions/proxy.md) — de ahí el nombre de
// este archivo y de la función exportada.
//
// Arquitectura de idiomas pedida por Bryan: español vive en la raíz SIN
// prefijo visible (/tarapoto, /masterplan, etc. — exactamente las URLs que
// ya existían antes de agregar idiomas, para no romper nada publicado) y
// English/Italiano viven bajo prefijo (/en/tarapoto, /it/masterplan).
//
// Como todas las páginas están físicamente en src/app/[lang]/..., una
// visita a "/tarapoto" (sin prefijo) necesita resolverse contra el
// archivo app/[lang]/tarapoto/page.tsx con lang="es". Eso se logra con un
// rewrite interno a "/es/tarapoto": el visitante jamás ve "/es" en la
// barra de direcciones (a diferencia de un redirect), pero Next.js sí lo
// usa para encontrar la página y pasarle params.lang = "es".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // Ya trae un prefijo de idioma no-español (/en, /it) → se deja pasar tal
  // cual; Next.js la resuelve directo contra app/[lang] con ese lang.
  const hasNonDefaultLocalePrefix =
    (locales as readonly string[]).includes(firstSegment) &&
    firstSegment !== defaultLocale;
  if (hasNonDefaultLocalePrefix) {
    return NextResponse.next();
  }

  // Ruta sin prefijo = español (idioma por defecto) → rewrite interno e
  // invisible a /es/..., nunca redirect.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Excluye API routes, internals de Next, y cualquier archivo estático
    // servido desde /public (todos tienen punto en el nombre: .webp, .mp4,
    // .ico, .png, etc.) — el proxy solo debe tocar rutas de página reales.
    "/((?!api/|_next/static/|_next/image/|.*\\..*).*)",
  ],
};
