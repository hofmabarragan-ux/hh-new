import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    // ✅ Clave canónica compartida entre idiomas (para routing + language switcher)
    key: z.string().min(1),

    title: z.string(),
    excerpt: z.string().optional().default(""),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),

    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };