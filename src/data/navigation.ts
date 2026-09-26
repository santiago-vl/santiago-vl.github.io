export interface NavItem {
  readonly num: string;
  readonly label: string;
  readonly target: string;
}

export const navItems: readonly NavItem[] = [
  { num: '01', label: 'about', target: 'about-me' },
  { num: '02', label: 'work', target: 'work-experience' },
  { num: '03', label: 'projects', target: 'projects' },
  { num: '04', label: 'hobbies', target: 'hobbies' },
];
