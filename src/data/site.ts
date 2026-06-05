export type SocialIcon = 'github' | 'linkedin' | 'mail';

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: SocialIcon;
}

export interface Site {
  readonly name: string;
  readonly roles: readonly string[];
  readonly title: string;
  readonly description: string;
  readonly avatar: string;
  readonly socials: readonly SocialLink[];
}

export const site: Site = {
  name: 'Santiago Villaviciosa',
  roles: ['Manager', 'Senior Software Engineer'],
  title: 'Santiago Villaviciosa — Engineering Manager & Senior Software Engineer',
  description:
    'Engineering Manager & Senior Software Engineer from A Coruña. Clean code, ' +
    'Domain-Driven Design, scalable microservices, and AI integrated into real-world systems.',
  avatar: '/assets/profile.webp',
  socials: [
    { label: 'GitHub', href: 'https://github.com/santiago-vl', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/santiago-villaviciosa',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:santyswdev@gmail.com', icon: 'mail' },
  ],
};
