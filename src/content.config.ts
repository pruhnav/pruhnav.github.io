import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      location: z.string(),
      /** Where the remote work was done; shows a "Remote" tag with this as its tooltip. */
      remote: z.string().optional(),
      start: z.string().optional(),
      end: z.string().optional(),
      tags: z.array(z.string()).default([]),
      logo: image().optional(),
      mono: z.string().max(3),
      link: z.object({ label: z.string(), href: z.url() }).optional(),
      order: z.number(),
      /** Set to true to keep a role in the repo without showing it on the site. */
      hidden: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
      badge: z.string().optional(),
      /** Colors the badge: gold for wins, psu for Penn State work (adds the lion), oss for open source (adds the GitHub mark). */
      badgeTone: z.enum(['gold', 'psu', 'oss']).optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
      order: z.number(),
    }),
});

export const collections = { experience, projects };
