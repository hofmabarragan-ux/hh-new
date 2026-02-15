import { content as es } from "./es";
import { content as en } from "./en";
import { content as da } from "./da";

export const i18n = {
  es,
  en,
  da,
};

export const languages = ["es", "en", "da"] as const;
export type Lang = (typeof languages)[number];
