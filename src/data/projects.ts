export type TagKind = 'ai' | 'arch' | 'tech';

export interface ProjectTag {
  readonly label: string;
  readonly kind: TagKind;
}

export interface ProjectStatus {
  readonly label: string;
  readonly tone: 'live' | 'upcoming';
}

export type ProjectMedia =
  | { readonly kind: 'photo'; readonly class: string }
  | { readonly kind: 'generated'; readonly class: string };

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly href?: string;
  readonly visibility: 'Public' | 'Private';
  readonly status: ProjectStatus;
  readonly media: ProjectMedia;
  readonly tags: readonly ProjectTag[];
}

export const projects: readonly Project[] = [
  {
    name: 'Corunova',
    href: 'https://corunova.vercel.app/',
    visibility: 'Public',
    status: { label: 'Live', tone: 'live' },
    media: { kind: 'photo', class: 'corunova-image' },
    description:
      'Live wall of new-construction housing across the A Coruña metropolitan area (9 municipalities). ' +
      'Discovers promotions from search + web scraping, classifies them by phase and municipality using an LLM, ' +
      'and surfaces everything in a filterable wall.',
    tags: [
      { label: 'DDD', kind: 'arch' },
      { label: 'Python', kind: 'tech' },
      { label: 'Public-data scrapers', kind: 'tech' },
      { label: 'Gemini 2.5 Flash', kind: 'ai' },
      { label: 'LLM classification', kind: 'ai' },
    ],
  },
  {
    name: 'IntelliTrade',
    href: 'https://intellitrade-copilot-web.vercel.app/',
    visibility: 'Public',
    status: { label: 'Upcoming Release', tone: 'upcoming' },
    media: { kind: 'photo', class: 'intellitrade-image' },
    description:
      'Macro-driven investment intelligence platform. A quantitative core, a RAG context ' +
      'engine over financial sources, and a grounded copilot that answers investment ' +
      'questions with explicit citations.',
    tags: [
      { label: 'Agentic RAG', kind: 'ai' },
      { label: 'Grounded LLM', kind: 'ai' },
      { label: 'Gemini 2.5 Flash', kind: 'ai' },
      { label: 'DDD', kind: 'arch' },
      { label: 'Microservices', kind: 'arch' },
      { label: 'Python', kind: 'tech' },
      { label: 'pgvector', kind: 'tech' },
    ],
  },
  {
    name: 'tuber.ia',
    visibility: 'Private',
    status: { label: 'Upcoming Release', tone: 'upcoming' },
    media: { kind: 'photo', class: 'tuber-ia-image' },
    description:
      'An AI-powered service that transcribes economic YouTube videos and processes them ' +
      'with LLM to extract key insights.',
    tags: [
      { label: 'Gemini 2.5 Flash', kind: 'ai' },
      { label: 'Whisper STT', kind: 'ai' },
      { label: 'Self-hosted Ollama', kind: 'ai' },
      { label: 'DDD', kind: 'arch' },
      { label: 'Python', kind: 'tech' },
    ],
  },
  {
    name: 'Opositana',
    href: 'https://opositana-web.vercel.app/dashboard',
    visibility: 'Public',
    status: { label: 'Upcoming Release', tone: 'upcoming' },
    media: { kind: 'generated', class: 'opositana-card' },
    description:
      'AI-powered companion for candidates of Spanish public sector exams. Personalised ' +
      'discovery, anti-burnout coaching, study planner that re-adjusts on the fly, and ' +
      'real-time alerts on official call changes.',
    tags: [
      { label: 'Gemini 2.5 Flash', kind: 'ai' },
      { label: 'AI test generation', kind: 'ai' },
      { label: 'DDD', kind: 'arch' },
      { label: 'Next.js · NestJS', kind: 'tech' },
    ],
  },
];
