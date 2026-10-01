// Pequeño helper de interpolación para los textos del diccionario que
// necesitan un dato variable (un id de manzana, un conteo de lotes, el
// nombre de un testimonio...). Los diccionarios en sí NO pueden contener
// funciones: app/[lang]/layout.tsx (Server Component) se los pasa como
// prop a I18nProvider (Client Component), y los Server Components solo
// pueden pasar props serializables a Client Components — una función ahí
// rompería el build. Por eso cada entrada que necesita un dato variable es
// un string plantilla como "Manzana {id}" y este helper hace el reemplazo,
// igual en servidor que en cliente (es una función pura importada, no un
// valor que cruza esa frontera).
export function format(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}
