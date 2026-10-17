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
      /** Tile color behind the logo, for marks that need a light background to read (e.g. "#ffffff"). */
      logoBg: z.string().optional(),
      mono: z.string().max(3),
      /** An icon replaces the trailing arrow and sits before the label. */
      links: z.array(z.object({ label: z.string(), href: z.url(), icon: image().optional() })).default([]),
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
      /** Published paper for the project; shows a "Paper" link on featured cards. */
      paper: z.url().optional(),
      /** Coverage of the project, such as an organizer's post; shows a "Media" link on featured cards. */
      media: z.url().optional(),
      badge: z.string().optional(),
      /** Colors the badge: gold for wins, psu for Penn State work (adds the lion), oss for open source (adds the GitHub mark). */
      badgeTone: z.enum(['gold', 'psu', 'oss']).optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
      order: z.number(),
    }),
});

// Personal posts at /thwip/. Not linked from the nav; the footer spider is the only way in.
const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    /** A line under the title, e.g. a song's artists. */
    subtitle: z.string().optional(),
    /** Leave out for a note that introduces its section: it shows without a date and stays at the top. */
    date: z.coerce.date().optional(),
    /** The section a post belongs to on /thwip/ (see src/lib/thoughts.ts); without one it goes under Thoughts. */
    series: z.enum(['life', 'views', 'underlined']).optional(),
    /** Where to listen, for posts about a song. */
    spotify: z.url().optional(),
    appleMusic: z.url().optional(),
    /** The song's cover art; lyric cards (quotes) in the post take their colors from it. */
    cover: image().optional(),
    /** Lyric cards at the end of the post, under "More lines that I like from this song". */
    moreLines: z.array(z.string()).default([]),
    /** Spotify playlists shown as record cards at the very end of the post, after any lyric carousel. */
    playlists: z.array(z.object({ title: z.string(), spotify: z.url(), cover: image() })).default([]),
    /** The line that leads into the playlists, shown right above them. */
    playlistsIntro: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Drafts show up in `npm run dev` but are left out of the built site. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, thoughts };
