export interface NavItem {
  readonly label: string;
  readonly target: string;
}

export const navItems: readonly NavItem[] = [
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Career', target: 'work' },
  { label: 'About', target: 'about' },
  { label: 'Off the clock', target: 'off-hours' },
];
