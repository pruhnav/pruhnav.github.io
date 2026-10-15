import { siDevpost, siDoi, siGithub, siIeee, siOrcid, siReplit } from 'simple-icons';

const byHost: [string, { path: string }][] = [
  ['github.com', siGithub],
  ['devpost.com', siDevpost],
  ['replit.app', siReplit],
  ['replit.com', siReplit],
  ['doi.org', siDoi],
  ['ieee.org', siIeee],
  ['orcid.org', siOrcid],
];

/** Brand logo for where a link goes (24x24 path), or undefined for hosts without one. */
export function linkIcon(href: string) {
  if (!/^https?:/.test(href)) return undefined;
  const host = new URL(href).hostname.replace(/^www\./, '');
  return byHost.find(([domain]) => host === domain || host.endsWith(`.${domain}`))?.[1];
}
