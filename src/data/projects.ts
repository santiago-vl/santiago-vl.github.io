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
  /** A real screenshot painted via a CSS background-image class. */
  | { readonly kind: 'photo'; readonly class: string }
  /** A CSS-generated cover (no screenshot yet). */
  | { readonly kind: 'generated'; readonly class: string };

export interface Project {
  readonly name: string;
  readonly description: string;
  /** External link; omitted for private projects. */
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
      'Open-data wall of every new construction project underway across the 9 ' +
      'municipalities of the A Coruña metropolitan area. Built on a DDD backend with ' +
      'scrapers and public API integrations (Eidus, CKAN, PLACSP).',
    tags: [
      { label: 'DDD', kind: 'arch' },
      { label: 'Python', kind: 'tech' },
      { label: 'Public-data scrapers', kind: 'tech' },
    ],
  },
  {
    name: 'IntelliTrade',
    href: 'https://intellitrade-copilot-web.vercel.app/',
    visibility: 'Public',
    status: { label: 'Live', tone: 'live' },
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
    status: { label: 'Live', tone: 'live' },
    media: { kind: 'photo', class: 'tuber-ia-image' },
    description:
      'An AI-powered service that transcribes economic YouTube videos and processes them ' +
      'with LLM to extract key insights, automatically publishing them to Telegram.',
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
    status: { label: 'Live', tone: 'upcoming' },
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
