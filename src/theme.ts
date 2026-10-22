export const colors = {
  ink: '#07080C',
  bone: '#E8E1D3',
  body: '#CFC8BA',
  bodySoft: '#B9B3A6',
  muted: '#9C9AA6',
  faint: '#6F6D78',
  core: '#D9B45A',
  mars: '#E0583C',
  rim: '#8DB4D9',
  hairline: 'rgba(232,225,211,0.10)',
  hairlineStrong: 'rgba(232,225,211,0.22)',
  orbit: 'rgba(232,225,211,0.10)',
  orbitMars: 'rgba(224,88,60,0.22)',
  boundary: 'rgba(232,225,211,0.32)',
  labelBacking: 'rgba(7,8,12,0.72)',
};

export const fonts = {
  display: 'CormorantGaramond_600SemiBold',
  body: 'Spectral_400Regular',
  italic: 'Spectral_400Regular_Italic',
};

const LIGHTING_OVERLAY =
  'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0) 45%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.65) 100%)';

export function shade(texture: string) {
  return `${LIGHTING_OVERLAY}, ${texture}`;
}

type Band = [color: string, from: number, to: number];

export function repeatingLinear(angle: number, bands: Band[], length = 180) {
  const period = bands[bands.length - 1][2];
  const stops: string[] = [];
  for (let offset = 0; offset < length; offset += period) {
    bands.forEach(([color, from, to]) => stops.push(`${color} ${offset + from}px ${offset + to}px`));
  }
  return `linear-gradient(${angle}deg, ${stops.join(', ')})`;
}

type Star = [x: number, y: number, size: number, color: string];

const STARS: Star[] = [
  [23, 41, 1, '#fff'], [87, 132, 1, '#cfd6ff'], [151, 77, 1.5, '#fff'], [211, 189, 1, '#fff'],
  [298, 54, 1, '#ffe9c9'], [356, 161, 1.5, '#fff'], [41, 251, 1, '#fff'], [129, 309, 1, '#cfd6ff'],
  [248, 283, 1, '#fff'], [331, 347, 1, '#fff'], [66, 398, 1.5, '#fff'], [189, 431, 1, '#ffe9c9'],
  [371, 452, 1, '#fff'], [18, 521, 1, '#fff'], [233, 566, 1, '#fff'], [152, 612, 1.5, '#cfd6ff'],
  [342, 655, 1, '#fff'], [79, 702, 1, '#fff'], [266, 744, 1, '#fff'], [12, 811, 1, '#fff'],
  [201, 798, 1, '#fff'], [318, 829, 1, '#ffe9c9'],
];

export const starryBackground = {
  backgroundColor: colors.ink,
  experimental_backgroundImage: STARS.map(([x, y, size, color]) => `radial-gradient(${size}px ${size}px at ${x}px ${y}px, ${color}, transparent)`).join(', '),
};
