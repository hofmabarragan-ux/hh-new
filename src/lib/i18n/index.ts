import da from "./da";
import en from "./en";
import es from "./es";

export const languages = ["es", "en", "da"] as const;
export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

export const getContent = (lang: Lang) => {
  switch (lang) {
    case "da":
      return da;
    case "en":
      return en;
    case "es":
      return es;
    default:
      return da;
  }
};
