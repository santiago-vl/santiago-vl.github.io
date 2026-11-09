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
  title: 'Santiago Villaviciosa — Manager & Senior Software Engineer',
  description:
    'Manager & Senior Software Engineer in A Coruña. Microservices at scale with Domain-Driven ' +
    'Design, and AI products built into real systems.',
  intro:
    'I lead a team designing <b>microservices at scale</b> with <b>Domain-Driven Design</b>. ' +
    'After hours I build <b>AI products</b> that turn public data into something useful.',
  avatar: '/assets/profile.webp',
  location: 'A Coruña, Galicia',
  university: 'Universidade da Coruña',
  facts: [
    { label: 'Now', value: 'Diverger · Inditex', live: true },
    { label: 'Experience', value: '9+ years' },
    { label: 'AI products', value: '4 shipped' },
  ],
  email: 'santyswdev@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-villaviciosa' },
    { label: 'GitHub', href: 'https://github.com/santiago-vl' },
  ],
};
