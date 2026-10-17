import { getCollection, type CollectionEntry } from 'astro:content';

interface ThwipSection {
  id: string;
  title: string;
  /** A few words under the heading on /thwip/. A section with one shows even before its first post. */
  blurb?: string;
  /** Heading typeface and pen underline, passed through to Section. */
  font?: 'display' | 'grotesk' | 'pen' | 'serif' | 'neon' | 'melt';
  underline?: boolean;
  /** Shown as a part of music, under the albums on repeat, instead of as its own section. */
  music?: boolean;
}

/**
 * Sections on /thwip/, in page order. A post joins one through its `series`; posts without one
 * go under Thoughts. `music` holds no posts itself: it's the albums on repeat, with the series
 * marked `music` (Underlined) listed under them.
 */
export const sections: ThwipSection[] = [
  {
    id: 'life',
    title: 'Life',
    blurb:
      "So this is the first of the three sections. Here you'll probably see me post life updates, or a quote or Gita verse I came across that I think is solid. Most of it will be about personal growth and the lessons I've learned along the way.",
    font: 'serif',
  },
  { id: 'music', title: 'music', font: 'neon' },
  {
    id: 'views',
    title: 'Views',
    blurb:
      'This is where you\'ll see my "hot" takes. How "hot" they are is for you to judge. I\'ll probably end up ranting about new tech across different fields, or about careers. None of the views here are meant to harm or offend anyone. It\'s all just a big dump of my thoughts. Some of these will age well. Some won\'t.',
    font: 'melt',
  },
  {
    id: 'underlined',
    title: 'Underlined',
    blurb: "If the song was a book, these are the lines I'd underline.",
    font: 'pen',
    underline: true,
    music: true,
  },
  { id: 'thoughts', title: 'Thoughts' },
];

export const sectionOf = (post: CollectionEntry<'thoughts'>) =>
  sections.find((s) => s.id === (post.data.series ?? 'thoughts'))!;

/** Personal posts: undated ones (section intros) first, then newest first. Drafts are included only in dev. */
export async function getThoughts() {
  const posts = await getCollection('thoughts', ({ data }) => import.meta.env.DEV || !data.draft);
  const time = (p: CollectionEntry<'thoughts'>) => p.data.date?.valueOf() ?? Infinity;
  return posts.sort((a, b) => time(b) - time(a));
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
