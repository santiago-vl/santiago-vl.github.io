export type Conviction = 'core' | 'tactical' | 'hedge';

export interface Holding {
  readonly name: string;
  readonly icon: string;
  readonly plate?: boolean;
  readonly isin?: string;
}

export interface Sector {
  readonly name: string;
  readonly weight: number;
  readonly color: string;
  readonly conviction: Conviction;
  readonly thesis: string;
  readonly feature?: boolean;
  readonly holdings: readonly Holding[];
}

export interface Brand {
  readonly src: string;
  readonly alt: string;
}

export const portfolioCopy = {
  eyebrow: 'Investing · how I\'m positioned',
  title: '38 positions, 8 themes',
  subtitle:
    'Long-term capital, weighted by conviction. Hover a logo to see its ISIN and copy it.',
  note: 'Indicative weights. Not financial advice.',
} as const;

const c = (name: string) => `/assets/companies/${name}`;

export const sectors: readonly Sector[] = [
  {
    name: 'AI & Semiconductors',
    weight: 26,
    color: '#3B82F6',
    conviction: 'core',
    feature: true,
    thesis: "Compute is the new oil — I'd rather own the picks and shovels than guess the winner.",
    holdings: [
      { name: 'NVIDIA', icon: c('nvidia.svg'), isin: 'US67066G1040' },
      { name: 'ASML', icon: c('asml.svg'), plate: true, isin: 'NL0010273215' },
      { name: 'Microsoft', icon: c('microsoft.svg'), isin: 'US5949181045' },
      { name: 'Alphabet', icon: c('google.svg'), isin: 'US02079K3059' },
      { name: 'Amazon', icon: c('amazon.svg'), isin: 'US0231351067' },
      { name: 'Meta', icon: c('meta.svg'), isin: 'US30303M1027' },
      { name: 'Infineon Technologies', icon: c('infineon.png'), plate: true, isin: 'DE0006231004' },
      { name: 'Lumentum Holdings', icon: c('lumentum.png'), plate: true, isin: 'US55024U1097' },
      { name: 'Data Center REITs & Digital Infrastructure', icon: c('globalx.png'), plate: true, isin: 'IE00BMH5Y327' },
    ],
  },
  {
    name: 'Defence & Aerospace',
    weight: 18,
    color: '#8B5CF6',
    conviction: 'core',
    thesis: 'A structural re-armament cycle; sovereign demand is stickier than consumer.',
    holdings: [
      { name: 'Palantir', icon: c('palantir.svg'), isin: 'US69608A1088' },
      { name: 'AeroVironment', icon: c('aerovironment.png'), plate: true, isin: 'US0080731088' },
      { name: 'DroneShield', icon: c('droneshield.png'), plate: true, isin: 'AU000000DRO2' },
      { name: 'Future of Defence ETF', icon: c('hanetf.png'), plate: true, isin: 'IE000OJ5TQP4' },
      { name: 'Global X Defence Tech ETF', icon: c('globalx.png'), plate: true, isin: 'IE000JCW3DZ3' },
      { name: 'Global Aerospace & Defence ETF', icon: c('missile.svg'), isin: 'IE000U9ODG19' },
    ],
  },
  {
    name: 'Energy, water & Nuclear',
    weight: 10,
    color: '#06B6D4',
    conviction: 'tactical',
    thesis:
      'Datacenters and electrification need far more grid than we have — nuclear, utilities and water.',
    holdings: [
      { name: 'Iberdrola', icon: c('iberdrola.svg'), isin: 'ES0144580Y14' },
      { name: 'iShares MSCI World Utilities', icon: c('power.svg'), isin: 'IE000A89Y2G7' },
      { name: 'VanEck Uranium & Nuclear Technologies', icon: c('atom.svg'), isin: 'IE000M7V94E1' },
      { name: 'iShares Global Water', icon: c('water.svg'), isin: 'IE00B1TXK627' },
      { name: 'Willdan Group', icon: c('leaf.svg'), isin: 'US96924N1000' },
    ],
  },
  {
    name: 'Healthcare innovation',
    weight: 10,
    color: '#10B981',
    conviction: 'core',
    thesis:
      'Demographics plus genomics and robotic surgery — a long arc, lightly correlated to macro.',
    holdings: [
      { name: 'Intuitive Surgical', icon: c('intuitive.svg'), plate: true, isin: 'US46120E6023' },
      { name: 'Eli Lilly', icon: c('lilly.svg'), plate: true, isin: 'US5324571083' },
      { name: 'Xtrackers MSCI Genomic Healthcare', icon: c('dna.svg'), isin: 'IE000KD0BZ68' },
    ],
  },
  {
    name: 'Robotics, Automation & Mobility',
    weight: 8,
    color: '#F97316',
    conviction: 'tactical',
    thesis: 'Automation and electrification are reshaping how things get built and moved.',
    holdings: [
      { name: 'Tesla', icon: c('tesla.svg'), isin: 'US88160R1014' },
      { name: 'iShares Automation & Robotics', icon: c('robot.svg'), isin: 'IE00BYZK4552' },
      { name: 'iShares Electric Vehicles & Driving Tech', icon: c('ev.svg'), isin: 'IE00BGL86Z12' },
    ],
  },
  {
    name: 'Commodities & crypto',
    weight: 9,
    color: '#F59E0B',
    conviction: 'hedge',
    thesis: 'Insurance against monetary debasement and tail risk — asymmetry over yield.',
    holdings: [
      { name: 'iShares Physical Gold', icon: c('gold.svg'), isin: 'IE00B4ND3602' },
      { name: 'iShares Physical Silver', icon: c('silver.svg'), isin: 'IE00B4NCWG09' },
      { name: 'Bitcoin', icon: c('bitcoin.svg') },
      { name: 'Ethereum', icon: c('ethereum.svg') },
    ],
  },
  {
    name: 'Cybersecurity',
    weight: 5,
    color: '#EC4899',
    conviction: 'tactical',
    thesis: 'The attack surface only grows; embedded security software compounds quietly.',
    holdings: [
      { name: 'Palo Alto Networks', icon: c('paloaltonetworks.svg'), isin: 'US6974351057' },
      { name: 'iShares Digital Security', icon: c('ishares.svg'), plate: true, isin: 'IE00BG0J4C88' },
    ],
  },
  {
    name: 'Core, financials & compounders',
    weight: 14,
    color: '#64748B',
    conviction: 'core',
    feature: true,
    thesis: "Broad-market ballast and quality compounders that don't lean on any single theme.",
    holdings: [
      { name: 'Apple', icon: c('apple.svg'), isin: 'US0378331005' },
      { name: 'Visa', icon: c('visa.svg'), plate: true, isin: 'US92826C8394' },
      { name: 'Hermès', icon: c('hermes.png'), plate: true, isin: 'FR0000052292' },
      { name: 'iShares Core MSCI EM IMI', icon: c('globe.svg'), isin: 'IE00BKM4GZ66' },
      { name: 'iShares MSCI World Financials', icon: c('bank.svg'), isin: 'IE00BJ5JP097' },
      { name: 'iShares STOXX Europe 50', icon: c('europe.svg'), isin: 'DE0005933949' },
    ],
  },
];

export const brands: readonly Brand[] = [
  { src: c('nvidia.svg'), alt: 'NVIDIA' },
  { src: c('microsoft.svg'), alt: 'Microsoft' },
  { src: c('apple.svg'), alt: 'Apple' },
  { src: c('google.svg'), alt: 'Alphabet' },
  { src: c('amazon.svg'), alt: 'Amazon' },
  { src: c('meta.svg'), alt: 'Meta' },
  { src: c('asml.svg'), alt: 'ASML' },
  { src: c('palantir.svg'), alt: 'Palantir' },
  { src: c('paloaltonetworks.svg'), alt: 'Palo Alto Networks' },
  { src: c('visa.svg'), alt: 'Visa' },
  { src: c('hermes.png'), alt: 'Hermès' },
  { src: c('tesla.svg'), alt: 'Tesla' },
  { src: c('iberdrola.svg'), alt: 'Iberdrola' },
  { src: c('lilly.svg'), alt: 'Eli Lilly' },
  { src: c('intuitive.svg'), alt: 'Intuitive Surgical' },
  { src: c('bitcoin.svg'), alt: 'Bitcoin' },
  { src: c('ethereum.svg'), alt: 'Ethereum' },
];
