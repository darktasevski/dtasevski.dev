import { defineCollection, z } from "astro:content";

const reads = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    publishedDate: z.date(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
  }),
});

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  reads,
  posts,
  notes,
};
