export interface Pillar {
  readonly title: string;
  readonly body: string;
}

export const aboutCopy = {
  eyebrow: 'About · Software engineer, Universidade da Coruña',
  lead:
    '9+ years building backend that lives in production. Today I lead a team at ' +
    '<b>Diverger</b>, on-site at <b>Inditex</b>, designing microservices for one of the ' +
    'largest fashion companies in the world.',
  languages:
    '<b>English · intermediate.</b> I communicate comfortably in everyday work situations ' +
    'and in technical discussions.',
} as const;

export const pillars: readonly Pillar[] = [
  {
    title: 'Domain-Driven Design',
    body:
      'I start from the domain: bounded contexts, aggregates and a shared language with the ' +
      'business. Every service has clear boundaries and the system grows without tangling.',
  },
  {
    title: 'Software quality',
    body:
      'Hexagonal architecture, SOLID principles and demanding code reviews. Quality you can ' +
      'see in production, not just in the repository.',
  },
  {
    title: 'Applied AI',
    body:
      'I build LLMs into real systems with RAG, agents and MCP, and evaluate prompts like any ' +
      'other code. My own products are the proof.',
  },
  {
    title: 'Seniority',
    body:
      'Judgement on what to build and what not to, end-to-end ownership, and mentoring ' +
      'junior and mid-level engineers so the whole team levels up.',
  },
];
