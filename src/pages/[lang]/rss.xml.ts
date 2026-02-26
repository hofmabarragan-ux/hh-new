import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { languages, type Lang } from "../../lib/i18n";

export async function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}

type BlogEntry = CollectionEntry<"blog">;

function escapeXml(value: string) {
  return value
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;")
    .split('"')
    .join("&quot;")
    .split("'")
    .join("&apos;");
}

function toDate(input: unknown): Date | null {
  if (!input) return null;
  const d = input instanceof Date ? input : new Date(String(input));
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * entry.id = "da/first-post" => "first-post"
 * NOTE: this is only a fallback. Primary slug should be entry.data.key
 * because your blog route uses /blog/[slug] where slug == data.key.
 */
function toLocalSlugFromId(id: string) {
  return id.split("/").slice(1).join("/");
}

export const GET: APIRoute = async ({ params, site, url }) => {
  const rawLang = String(params.lang ?? "da");
  const lang = (languages.includes(rawLang as any) ? rawLang : "da") as Lang;

  // Base URL robusta: PROD (Astro.site) / DEV (url.origin)
  const origin = String((site?.origin ?? url.origin)).replace(/\/+$/, "");

  // Get all posts and filter by lang + not draft
  const allPosts: BlogEntry[] = await getCollection("blog");

  const posts = allPosts
    .filter((p) => typeof p.id === "string" && p.id.startsWith(`${lang}/`))
    .filter((p) => !p.data?.draft)
    .sort((a, b) => {
      const ad = toDate(a.data?.date)?.getTime() ?? 0;
      const bd = toDate(b.data?.date)?.getTime() ?? 0;
      return bd - ad;
    });

  const feedTitle = "HOFMA Homes — Blog";
  const feedDescription =
    lang === "es"
      ? "Artículos y análisis sobre inversión inmobiliaria en España."
      : lang === "da"
        ? "Artikler og analyser om ejendomsinvestering i Spanien."
        : "Articles and analysis about real estate investing in Spain.";

  const feedLink = `${origin}/${lang}/blog`;
  const feedSelf = `${origin}/${lang}/rss.xml`;

  // Use latest post date as lastBuildDate when possible
  const latestPostDate = posts.length ? toDate(posts[0]?.data?.date) : null;
  const lastBuild = latestPostDate ?? new Date();

  const itemsXml = posts
    .map((post) => {
      // IMPORTANT: blog route uses [slug] == entry.data.key in your pages.
      const key = (post.data as any)?.key;
      const localSlug = (key ? String(key) : toLocalSlugFromId(post.id)).replace(/^\/+/, "");
      const link = `${origin}/${lang}/blog/${localSlug}`;

      const title = escapeXml(String(post.data?.title ?? "Untitled"));

      // Keep descriptions short and safe (RSS <description> is often plain text)
      const description = String(post.data?.excerpt ?? "").trim();

      const pubDate = toDate(post.data?.date) ?? lastBuild;

      return `
  <item>
    <title>${title}</title>
    <link>${link}</link>
    <guid isPermaLink="true">${link}</guid>
    <pubDate>${pubDate.toUTCString()}</pubDate>
    ${description ? `<description>${escapeXml(description)}</description>` : ""}
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(feedTitle)}</title>
  <link>${feedLink}</link>
  <description>${escapeXml(feedDescription)}</description>
  <language>${lang}</language>
  <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
  <atom:link href="${feedSelf}" rel="self" type="application/rss+xml" />
  ${itemsXml}
</channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
};