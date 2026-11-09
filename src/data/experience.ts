export interface Job {
  readonly company: string;
  readonly role: string;
  readonly href: string;
  readonly logo: string;
  readonly period: string;
  readonly duration?: string;
  readonly startDate?: string;
}

export const employers: readonly Job[] = [
  {
    company: 'Indra',
    role: 'Software Engineer',
    href: 'https://www.indracompany.com/',
    logo: '/assets/indra_logo.webp',
    period: 'Feb 2017 — Dec 2017',
    duration: '11 months',
  },
  {
    company: 'Trileuco Solutions',
    role: 'Software Engineer',
    href: 'https://trileucosolutions.com/en/',
    logo: '/assets/trileuco_solutions_logo.webp',
    period: 'Apr 2018 — Mar 2024',
    duration: '6 years',
  },
  {
    company: 'Diverger',
    role: 'Manager · Software Engineer',
    href: 'https://diverger.ai/',
    logo: '/assets/diverger_logo.webp',
    period: 'Mar 2024 — today',
    startDate: '2024-03',
  },
];

export const clients: readonly Job[] = [
  {
    company: 'Inditex',
    role: 'Software Engineer',
    href: 'https://www.inditex.com/itxcomweb/es/es/home',
    logo: '/assets/inditex_logo.webp',
    period: 'Apr 2018 — Dec 2025',
  },
];
