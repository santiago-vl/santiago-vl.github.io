export type ProjectStatus = 'live' | 'upcoming' | 'private';

export type ProjectMedia =
  | { readonly kind: 'screenshot'; readonly src: string; readonly alt: string }
  | { readonly kind: 'restricted' };

export interface ProjectTag {
  readonly label: string;
  readonly ai?: boolean;
}

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly href?: string;
  readonly status: ProjectStatus;
  readonly color: string;
  readonly media: ProjectMedia;
  readonly tags: readonly ProjectTag[];
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: '● Live',
  upcoming: 'Coming soon',
  private: 'Private',
};

export const projects: readonly Project[] = [
  {
    name: 'Corunova',
    href: 'https://corunova.vercel.app/landing',
    status: 'live',
    color: '#ffb800',
    media: { kind: 'screenshot', src: '/assets/projects/corunova.jpg', alt: 'Corunova landing page' },
    description:
      'New builds, resale homes, garages and auctions across the A Coruña area on one map. ' +
      'An LLM classifies every development by phase and municipality.',
    tags: [
      { label: 'DDD' },
      { label: 'Python' },
      { label: 'Public-data scrapers' },
      { label: 'SQLite' },
      { label: 'Gemini 3.5 Flash-Lite', ai: true },
      { label: 'LLM classification', ai: true },
      { label: 'Codex CLI', ai: true },
    ],
  },
  {
    name: 'tuber.ia',
    href: 'https://tuber-ia-pulse.vercel.app/',
    status: 'live',
    color: '#ff1744',
    media: { kind: 'screenshot', src: '/assets/projects/tuberia.jpg', alt: 'tuber.ia home page' },
    description:
      'Transcribes the economics videos of the experts you follow and sums up what they expect ' +
      'from the market. Listen to it or see it on the map.',
    tags: [
      { label: 'Gemini 3.5 Flash-Lite', ai: true },
      { label: 'Whisper STT', ai: true },
      { label: 'Ollama', ai: true },
      { label: 'Codex CLI', ai: true },
      { label: 'DDD' },
      { label: 'Python' },
      { label: 'SQLite' },
    ],
  },
  {
    name: 'IntelliTrade',
    status: 'private',
    color: '#f2a93b',
    media: { kind: 'restricted' },
    description:
      'Macro-driven investment intelligence: a quantitative core, RAG over financial sources ' +
      'and a copilot that cites them.',
    tags: [
      { label: 'Agentic RAG', ai: true },
      { label: 'Grounded LLM', ai: true },
      { label: 'Microservices' },
      { label: 'pgvector' },
    ],
  },
  {
    name: 'Opositana',
    status: 'private',
    color: '#6d6bff',
    media: { kind: 'restricted' },
    description:
      'AI companion for Spanish civil-service exam candidates: a study plan that re-adjusts itself, ' +
      'anti-burnout coaching and alerts on official changes.',
    tags: [
      { label: 'Gemini 3.5 Flash-Lite', ai: true },
      { label: 'AI test generation', ai: true },
      { label: 'DDD' },
      { label: 'Next.js · NestJS' },
    ],
  },
];
