export type Conviction = 'core' | 'tactical' | 'hedge';

export interface Holding {
  readonly name: string;
  /** Icon path under /public. */
  readonly icon: string;
  /** Render on a white plate (for dark wordmark logos). */
  readonly plate?: boolean;
}

export interface Sector {
  readonly name: string;
  /** Short label used inside the stacked allocation bar. */
  readonly barLabel: string;
  /** Allocation weight, in percent. */
  readonly weight: number;
  /** Accent colour (CSS custom property `--c`). */
  readonly color: string;
  readonly conviction: Conviction;
  readonly thesis: string;
  /** Full-width banner card instead of a half card. */
  readonly feature?: boolean;
  readonly holdings: readonly Holding[];
}

export interface Brand {
  readonly src: string;
  readonly alt: string;
}

export const portfolioCopy = {
  eyebrow: '// portfolio',
  title: "How I'm positioned",
  subtitle: 'My long-term capital, spread across high-conviction themes.',
  note:
    'Directional weights, not financial advice. Quality compounders (Hermès, Visa, Apple) ' +
    '& broad index hedges round out the rest.',
} as const;

const c = (name: string) => `/assets/companies/${name}`;

export const sectors: readonly Sector[] = [
  {
    name: 'AI & Semiconductors',
    barLabel: 'AI',
    weight: 32,
    color: '#3B82F6',
    conviction: 'core',
    feature: true,
    thesis: "Compute is the new oil — I'd rather own the picks and shovels than guess the winner.",
    holdings: [
      { name: 'NVIDIA', icon: c('nvidia.svg') },
      { name: 'ASML', icon: c('asml.svg'), plate: true },
      { name: 'Microsoft', icon: c('microsoft.svg') },
      { name: 'Alphabet', icon: c('google.svg') },
      { name: 'Amazon', icon: c('amazon.svg') },
      { name: 'Meta', icon: c('meta.svg') },
      { name: 'TSMC', icon: c('tsmc.svg') },
      { name: 'AMD', icon: c('amd.svg') },
    ],
  },
  {
    name: 'Defence & Aerospace',
    barLabel: 'Defence',
    weight: 20,
    color: '#8B5CF6',
    conviction: 'core',
    thesis: 'A structural re-armament cycle; sovereign demand is stickier than consumer.',
    holdings: [
      { name: 'Palantir', icon: c('palantir.svg') },
      { name: 'AeroVironment', icon: c('drone.svg') },
      { name: 'DroneShield', icon: c('shield.svg') },
      { name: 'Global X Defence ETF', icon: c('globalx.png'), plate: true },
    ],
  },
  {
    name: 'Energy transition & Nuclear',
    barLabel: 'Energy',
    weight: 14,
    color: '#06B6D4',
    conviction: 'tactical',
    thesis: 'Datacenters and electrification need far more grid than we have. Nuclear is back.',
    holdings: [
      { name: 'Iberdrola', icon: c('iberdrola.svg') },
      { name: 'VanEck Uranium & Nuclear ETF', icon: c('atom.svg') },
      { name: 'MSCI World Utilities', icon: c('power.svg') },
    ],
  },
  {
    name: 'Commodities',
    barLabel: 'Commodities',
    weight: 12,
    color: '#F59E0B',
    conviction: 'hedge',
    thesis: 'Insurance against monetary debasement and tail risk — asymmetry over yield.',
    holdings: [
      { name: 'Gold', icon: c('gold.svg') },
      { name: 'Silver', icon: c('silver.svg') },
      { name: 'Bitcoin', icon: c('bitcoin.svg') },
      { name: 'Ethereum', icon: c('ethereum.svg') },
    ],
  },
  {
    name: 'Healthcare innovation',
    barLabel: 'Health',
    weight: 12,
    color: '#10B981',
    conviction: 'core',
    thesis:
      'Demographics plus genomics and robotic surgery — a long arc, lightly correlated to macro.',
    holdings: [
      { name: 'Intuitive Surgical', icon: c('intuitive.svg'), plate: true },
      { name: 'Eli Lilly', icon: c('lilly.svg'), plate: true },
      { name: 'MSCI Genomic Healthcare', icon: c('dna.svg') },
    ],
  },
  {
    name: 'Cybersecurity',
    barLabel: 'Cyber',
    weight: 10,
    color: '#EC4899',
    conviction: 'tactical',
    feature: true,
    thesis: 'The attack surface only grows; embedded security software compounds quietly.',
    holdings: [
      { name: 'Palo Alto Networks', icon: c('paloaltonetworks.svg') },
      { name: 'iShares Digital Security ETF', icon: c('ishares.svg'), plate: true },
    ],
  },
];

/** Recognisable brands behind the book — the moving strip at the bottom. */
export const brands: readonly Brand[] = [
  { src: c('nvidia.svg'), alt: 'NVIDIA' },
  { src: c('microsoft.svg'), alt: 'Microsoft' },
  { src: c('apple.svg'), alt: 'Apple' },
  { src: c('google.svg'), alt: 'Alphabet' },
  { src: c('amazon.svg'), alt: 'Amazon' },
  { src: c('meta.svg'), alt: 'Meta' },
  { src: c('amd.svg'), alt: 'AMD' },
  { src: c('tsmc.svg'), alt: 'TSMC' },
  { src: c('palantir.svg'), alt: 'Palantir' },
  { src: c('paloaltonetworks.svg'), alt: 'Palo Alto Networks' },
  { src: c('visa.svg'), alt: 'Visa' },
  { src: c('hermes.svg'), alt: 'Hermès' },
  { src: c('bitcoin.svg'), alt: 'Bitcoin' },
  { src: c('ethereum.svg'), alt: 'Ethereum' },
];
