export interface NavItem {
  /** Two-digit ordinal shown before the label. */
  readonly num: string;
  readonly label: string;
  /** id of the section this item scrolls to. */
  readonly target: string;
}

export const navItems: readonly NavItem[] = [
  { num: '01', label: 'about', target: 'about-me' },
  { num: '02', label: 'work', target: 'work-experience' },
  { num: '03', label: 'projects', target: 'projects' },
  { num: '04', label: 'hobbies', target: 'hobbies' },
];
