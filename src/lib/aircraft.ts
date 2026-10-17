// Side-view silhouettes of aircraft, traced from published drawings and saved at one shared
// scale (16 px to the meter), so sizes compare directly. Nose points left, gear down.
// Sources: Julien Scavini's drawings on Wikimedia Commons (CC BY-SA 3.0) for the 777, 757,
// 737-900, A319/A320/A321 and ATR 72; Clem Cleynen's A380 (CC0); and the makers' own
// airport planning documents for the 737 MAX 8, A220-300, CRJ900 and H125. The A220 and
// CRJ900 figures are drawn taller than the real thing, so those two are squashed to their
// published heights.
import type { ImageMetadata } from 'astro';
import a388 from '../assets/planes/a388.png';
import b77w from '../assets/planes/b77w.png';
import b752 from '../assets/planes/b752.png';
import a321 from '../assets/planes/a321.png';
import b739 from '../assets/planes/b739.png';
import b38m from '../assets/planes/b38m.png';
import bcs3 from '../assets/planes/bcs3.png';
import a320 from '../assets/planes/a320.png';
import crj9 from '../assets/planes/crj9.png';
import a319 from '../assets/planes/a319.png';
import at72 from '../assets/planes/at72.png';
import h125 from '../assets/planes/h125.png';

export type AircraftKey = 'a388' | 'b77w' | 'b752' | 'a321' | 'b739' | 'b38m' | 'bcs3' | 'a320' | 'crj9' | 'a319' | 'at72' | 'h125';

export const PX_PER_M = 16;

/** The space every silhouette is placed in, in meters: wide enough for the 777-300ER, tall enough for the A380. */
export const VIEW = { w: 80, h: 25 };

/** Published length (the H125's is its fuselage, without the rotor) and the traced side view. */
export const aircraft: Record<AircraftKey, { length: number; image: ImageMetadata }> = {
  a388: { length: 72.7, image: a388 },
  b77w: { length: 73.9, image: b77w },
  b752: { length: 47.3, image: b752 },
  a321: { length: 44.5, image: a321 },
  b739: { length: 42.1, image: b739 },
  b38m: { length: 39.5, image: b38m },
  bcs3: { length: 38.7, image: bcs3 },
  a320: { length: 37.6, image: a320 },
  crj9: { length: 36.3, image: crj9 },
  a319: { length: 33.8, image: a319 },
  at72: { length: 27.2, image: at72 },
  h125: { length: 10.9, image: h125 },
};
