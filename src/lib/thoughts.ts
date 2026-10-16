import { getCollection, type CollectionEntry } from 'astro:content';

interface ThwipSection {
  id: string;
  title: string;
  /** A sentence or two under the heading on /thwip/. */
  blurb?: string;
  /** Heading typeface and pen underline, passed through to Section. */
  font?: 'display' | 'grotesk' | 'pen';
  underline?: boolean;
}

/** Sections on /thwip/, in page order. A post joins one through its `series`; posts without one go under Thoughts. */
export const sections: ThwipSection[] = [
  {
    id: 'underlined',
    title: 'Underlined',
    blurb: "If the song was a book, these are the lines I'd underline.",
    font: 'pen',
    underline: true,
  },
  { id: 'thoughts', title: 'Thoughts' },
];

export const sectionOf = (post: CollectionEntry<'thoughts'>) =>
  sections.find((s) => s.id === (post.data.series ?? 'thoughts'))!;

/** Personal posts, newest first. Drafts are included only in dev. */
export async function getThoughts() {
  const posts = await getCollection('thoughts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
