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
  upcoming: 'Próximamente',
  private: 'Privado',
};

export const projects: readonly Project[] = [
  {
    name: 'Corunova',
    href: 'https://corunova.vercel.app/landing',
    status: 'live',
    color: '#ffb800',
    media: { kind: 'screenshot', src: '/assets/projects/corunova.jpg', alt: 'Landing de Corunova' },
    description:
      'Obra nueva, segunda mano, garajes y subastas de la comarca de A Coruña en un mapa. ' +
      'Un LLM clasifica cada promoción por fase y municipio.',
    tags: [
      { label: 'DDD' },
      { label: 'Python' },
      { label: 'Scrapers públicos' },
      { label: 'SQLite' },
      { label: 'Gemini 3.5 Flash-Lite', ai: true },
      { label: 'Clasificación LLM', ai: true },
      { label: 'Codex CLI', ai: true },
    ],
  },
  {
    name: 'tuber.ia',
    href: 'https://tuber-ia-pulse.vercel.app/',
    status: 'live',
    color: '#ff1744',
    media: { kind: 'screenshot', src: '/assets/projects/tuberia.jpg', alt: 'Portada de tuber.ia' },
    description:
      'Transcribe los vídeos de economía de los expertos que sigues y resume qué esperan ' +
      'del mercado. Para escuchar o ver en el mapa.',
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
      'Inteligencia inversora guiada por macro: núcleo cuantitativo, RAG sobre fuentes ' +
      'financieras y un copiloto que cita sus fuentes.',
    tags: [
      { label: 'RAG agéntico', ai: true },
      { label: 'Grounded LLM', ai: true },
      { label: 'Microservicios' },
      { label: 'pgvector' },
    ],
  },
  {
    name: 'Opositana',
    status: 'private',
    color: '#6d6bff',
    media: { kind: 'restricted' },
    description:
      'Compañera con IA para opositores: plan de estudio que se reajusta solo, coaching ' +
      'anti-burnout y avisos de cambios oficiales.',
    tags: [
      { label: 'Gemini 3.5 Flash-Lite', ai: true },
      { label: 'Generación de tests', ai: true },
      { label: 'DDD' },
      { label: 'Next.js · NestJS' },
    ],
  },
];
