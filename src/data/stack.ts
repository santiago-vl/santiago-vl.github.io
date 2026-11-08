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
      'Sistemas RAG',
      'Agentes y tool calling (MCP)',
      'Evaluación de LLMs',
      'Búsqueda semántica · pgvector',
      'Prompt engineering',
      'APIs Gemini · Anthropic · OpenAI',
      'LLMs self-hosted · Ollama',
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
