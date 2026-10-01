import type es from "./dictionaries/es";

// El español es el diccionario canónico: su forma (inferida con `typeof`)
// es el contrato que en.ts/it.ts tienen que cumplir exactamente. Si falta
// una clave en una traducción, o sobra una, TypeScript lo marca al anotar
// ese archivo como `const en: Dictionary = {...}` — así un string nuevo
// agregado en es.ts no puede "olvidarse" de traducir.
export type Dictionary = typeof es;
