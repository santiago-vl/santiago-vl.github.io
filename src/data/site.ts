export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface Fact {
  readonly label: string;
  readonly value: string;
  readonly live?: boolean;
}

export interface Site {
  readonly name: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly initials: string;
  readonly role: string;
  readonly title: string;
  readonly description: string;
  readonly intro: string;
  readonly avatar: string;
  readonly location: string;
  readonly university: string;
  readonly facts: readonly Fact[];
  readonly email: string;
  readonly socials: readonly SocialLink[];
}

export const site: Site = {
  name: 'Santiago Villaviciosa',
  firstName: 'Santiago',
  lastName: 'Villaviciosa',
  initials: 'S. V.',
  role: 'Manager · Senior Software Engineer',
  title: 'Santiago Villaviciosa — Manager y Senior Software Engineer',
  description:
    'Manager y Senior Software Engineer en A Coruña. Microservicios a escala con Domain-Driven ' +
    'Design y productos con IA integrada en sistemas reales.',
  intro:
    'Dirijo un equipo que diseña <b>microservicios a escala</b> con <b>Domain-Driven Design</b>. ' +
    'Fuera de horas construyo <b>productos con IA</b> que convierten datos públicos en algo útil.',
  avatar: '/assets/profile.webp',
  location: 'A Coruña, Galicia',
  university: 'Universidade da Coruña',
  facts: [
    { label: 'Ahora', value: 'Diverger · Inditex', live: true },
    { label: 'Experiencia', value: '9+ años' },
    { label: 'Productos IA', value: '4 lanzados' },
  ],
  email: 'santyswdev@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-villaviciosa' },
    { label: 'GitHub', href: 'https://github.com/santiago-vl' },
  ],
};
