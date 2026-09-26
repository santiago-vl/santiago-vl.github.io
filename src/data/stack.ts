export interface StackGroup {
  readonly label: string;
  readonly accent?: 'ai';
  readonly items: readonly string[];
}

export const stackIntro =
  "The tools and techniques I work with day to day. Lately I'm spending a good chunk " +
  'of my time learning and building with AI.';

export const stackGroups: readonly StackGroup[] = [
  {
    label: 'AI & LLMs',
    accent: 'ai',
    items: [
      'RAG',
      'Agents',
      'MCP',
      'Embeddings',
      'Prompt engineering',
      'Prompt eval',
      'Gemini',
      'OpenAI',
      'Anthropic',
      'Ollama',
      'pgvector',
    ],
  },
  {
    label: 'Engineering · most used',
    items: [
      'Java',
      'Python',
      'Spring Boot',
      'Microservices architecture',
      'DDD',
      'MongoDB',
      'Kafka',
      'Grafana',
    ],
  },
];
