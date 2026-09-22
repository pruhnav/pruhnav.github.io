import { siOrcid } from 'simple-icons';

export const site = {
  name: 'Pranav Balachander',
  title: 'Pranav Balachander',
  description:
    'Pranav Balachander. ML engineer building forecasting and retrieval systems. Published IEEE researcher.',
  email: 'p.pranavbalachander@gmail.com',
  githubUser: 'pruhnav',
};

export interface SocialLink { label: string; href: string; icon: string }

// 24x24 viewBox SVG paths.
export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/pruhnav',
    icon: 'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C16.9 5 17.9 5.3 17.9 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pranavbalachander2/',
    icon: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0000-1425-2821',
    icon: siOrcid.path,
  },
];
