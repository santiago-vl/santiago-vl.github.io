export interface StackGroup {
  readonly label: string;
  readonly accent?: boolean;
  readonly items: readonly string[];
}

export const stackGroups: readonly StackGroup[] = [
  {
    label: 'AI & LLMs',
    accent: true,
    items: [
      'RAG systems',
      'Agents & tool calling (MCP)',
      'LLM evaluation',
      'Semantic search · pgvector',
      'Prompt engineering',
      'Gemini · Anthropic · OpenAI APIs',
      'Self-hosted LLMs · Ollama',
    ],
  },
  {
    label: 'Engineering',
    items: [
      'Java',
      'Python',
      'Spring Boot',
      'Microservices',
      'DDD',
      'MongoDB',
      'Kafka',
      'Grafana',
    ],
  },
];
