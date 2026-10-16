import { siApplemusic, siDevpost, siDoi, siGithub, siIeee, siOrcid, siReplit, siSpotify } from 'simple-icons';
import { socials } from './site';

// simple-icons no longer ships LinkedIn, so reuse the path from the social links.
const linkedin = { path: socials.find((s) => s.label === 'LinkedIn')!.icon };

const byHost: [string, { path: string }][] = [
  ['linkedin.com', linkedin],
  ['lnkd.in', linkedin],
  ['github.com', siGithub],
  ['devpost.com', siDevpost],
  ['replit.app', siReplit],
  ['replit.com', siReplit],
  ['doi.org', siDoi],
  ['ieee.org', siIeee],
  ['orcid.org', siOrcid],
  ['spotify.com', siSpotify],
  ['music.apple.com', siApplemusic],
];

/** Brand logo for where a link goes (24x24 path), or undefined for hosts without one. */
export function linkIcon(href: string) {
  if (!/^https?:/.test(href)) return undefined;
  const host = new URL(href).hostname.replace(/^www\./, '');
  return byHost.find(([domain]) => host === domain || host.endsWith(`.${domain}`))?.[1];
}
