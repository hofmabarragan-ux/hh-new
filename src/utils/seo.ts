import type { Lang } from "../content/i18n";

const SITE_URL = "https://hofmahones.com";

export function buildSeo({
  lang,
  pathname,
  title,
  description,
}: {
  lang: Lang;
  pathname: string;
  title: string;
  description: string;
}) {
  const cleanPath = pathname.replace(/^\/(es|en|da)/, "");
  const canonical = `${SITE_URL}/${lang}${cleanPath}`;

  const alternates = ["es", "en", "da"].map((l) => ({
    lang: l,
    href: `${SITE_URL}/${l}${cleanPath}`,
  }));

  return {
    title,
    description,
    canonical,
    alternates,
  };
}
