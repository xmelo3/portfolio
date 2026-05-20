import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    rocnik: z.string(),
    semester: z.string(),
    caption: z.string().optional(),
    cover: image(),
    gallery: z.array(image()).default([]),
  }),
});

export const collections = { projects };