export interface NavItem {
  readonly label: string;
  readonly target: string;
}

export const navItems: readonly NavItem[] = [
  { label: 'Skills', target: 'skills' },
  { label: 'Proyectos', target: 'projects' },
  { label: 'Trayectoria', target: 'work' },
  { label: 'Sobre mí', target: 'about' },
  { label: 'Fuera del código', target: 'off-hours' },
];
