import da from "./da";
import en from "./en";
import es from "./es";

/**
 * Orden importante:
 * El primer idioma se considera el principal del proyecto.
 * HOFMA Homes default = danés.
 */
export const languages = ["da", "en", "es"] as const;
export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

/** Map simple (más fácil de mantener que switch) */
const contentMap: Record<Lang, any> = {
  da,
  en,
  es,
};

export function getContent(lang: Lang) {
  return contentMap[lang] ?? da; // fallback seguro
}