export interface Job {
  readonly company: string;
  readonly role: string;
  readonly href: string;
  readonly logoClass: string;
  readonly duration: string;
  readonly startDate?: string;
  readonly subnote?: string;
}

export const employers: readonly Job[] = [
  {
    company: 'Indra',
    role: 'Software Engineer',
    href: 'https://www.indracompany.com/',
    logoClass: 'indra-logo',
    duration: 'Feb. 2017 - Dec. 2017 · 11 meses',
  },
  {
    company: 'Trileuco Solutions',
    role: 'Software Engineer',
    href: 'https://trileucosolutions.com/en/',
    logoClass: 'trileuco-logo',
    duration: 'Apr. 2018 - Mar. 2024 · 6 años',
  },
  {
    company: 'Diverger',
    role: 'Manager | Software Engineer',
    href: 'https://diverger.ai/',
    logoClass: 'diverger-logo',
    duration: 'Mar. 2024 - Present',
    startDate: '2024-03',
  },
];

export const clients: readonly Job[] = [
  {
    company: 'Inditex',
    role: 'Software Engineer',
    href: 'https://www.inditex.com/itxcomweb/es/es/home',
    logoClass: 'inditex-logo',
    duration: 'Apr. 2018 - Dec. 2025',
    subnote: 'Same client across both employers',
  },
];
