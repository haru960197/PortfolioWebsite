import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "collections/works" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    summary: z.string(),
    thumbnail: z.string().url(),
  })
});

export const collections = { work };

