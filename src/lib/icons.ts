import * as simpleIcons from 'simple-icons';

export interface ResolvedIcon {
  path: string;
  /** Hover colour on the dark theme. */
  dark: string;
  /** Hover colour on the light theme. */
  light: string;
}

type IconData = { path: string; hex: string };
const bySlug = simpleIcons as unknown as Record<string, IconData | undefined>;

function luminance(hex: string): number {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Looks up a simple-icons slug. Returns null when the slug is null or unknown. */
export function resolveIcon(slug: string | null): ResolvedIcon | null {
  if (!slug) return null;
  const icon = bySlug['si' + slug[0].toUpperCase() + slug.slice(1)];
  if (!icon) return null;
  const hex = '#' + icon.hex;
  const lum = luminance(icon.hex);
  return {
    path: icon.path,
    // Near-black brand colours vanish on the dark background, near-white ones on light.
    dark: lum < 0.04 ? 'var(--text)' : hex,
    light: lum > 0.8 ? 'var(--text)' : hex,
  };
}

export function monogram(name: string): string {
  return name.replace(/[^A-Za-z0-9#+]/g, '').slice(0, 2);
}
