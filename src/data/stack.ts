export interface StackGroup {
  readonly label: string;
  readonly accent?: boolean;
  readonly items: readonly string[];
}

export const stackGroups: readonly StackGroup[] = [
  {
    label: 'IA y LLMs',
    accent: true,
    items: [
      'Prompt engineering',
      'RAG',
      'Agents',
      'MCP',
      'Embeddings',
      'Prompt eval',
      'API Gemini',
      'API Anthropic',
      'API OpenAI',
      'Ollama',
      'pgvector',
    ],
  },
  {
    label: 'Ingeniería',
    items: [
      'Java',
      'Python',
      'Spring Boot',
      'Microservicios',
      'DDD',
      'MongoDB',
      'Kafka',
      'Grafana',
    ],
  },
];
