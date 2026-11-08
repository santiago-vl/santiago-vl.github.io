export interface Pillar {
  readonly title: string;
  readonly body: string;
}

export const aboutCopy = {
  eyebrow: 'Sobre mí · Ingeniero de software por la Universidade da Coruña',
  lead:
    'Más de 9 años construyendo backend que vive en producción. Hoy dirijo un equipo en ' +
    '<b>Diverger</b>, on-site en <b>Inditex</b>, diseñando microservicios para una de las ' +
    'mayores empresas de moda del mundo.',
} as const;

export const pillars: readonly Pillar[] = [
  {
    title: 'Domain-Driven Design',
    body:
      'Empiezo por el dominio: bounded contexts, agregados y un lenguaje común con negocio. ' +
      'Cada servicio tiene límites claros y el sistema crece sin enredarse.',
  },
  {
    title: 'Calidad de software',
    body:
      'Arquitectura hexagonal, principios SOLID y revisiones de código exigentes. ' +
      'Calidad que se nota en producción, no solo en el repositorio.',
  },
  {
    title: 'IA aplicada',
    body:
      'Integro LLMs en sistemas reales con RAG, agentes y MCP, evaluando los prompts como ' +
      'cualquier otro código. Lo demuestro en mis propios productos.',
  },
  {
    title: 'Liderazgo técnico',
    body:
      'Superviso decisiones de arquitectura y entregas, y hago mentoring a perfiles junior ' +
      'y mid para que el equipo suba de nivel.',
  },
];
