export type Point = { x: number; y: number };

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export function mapPosition(sun: Point, radius: number, angleFromVertical: number): Point {
  const angle = toRadians(angleFromVertical);
  return { x: sun.x + radius * Math.sin(angle), y: sun.y + radius * Math.cos(angle) };
}

export function moonPosition(center: Point, radius: number, index: number, seconds: number, periodBase: number, periodStep: number): Point {
  const degrees = index * 97 + 30 + (seconds * 360) / (periodBase + index * periodStep);
  const angle = toRadians(degrees);
  return { x: center.x + radius * Math.cos(angle), y: center.y + radius * Math.sin(angle) };
}

export function labelGoesLeft(x: number, centerX: number, edgeBand: number) {
  if (x >= centerX) return x > centerX + edgeBand;
  return x >= centerX - edgeBand;
}

export type Rock = { x: number; y: number; width: number; height: number; rotation: number; color: string; opacity: number; corners: number[] };

export const BELT_SECTOR_DEGREES = 90;
const BELT_RADIUS = 352;
const BELT_SPREAD = 14;
const ROCKS_PER_SECTOR = 200;

const CORNER_SHAPES = [
  [0.45, 0.55, 0.6, 0.4],
  [0.6, 0.4, 0.45, 0.55],
  [0.5, 0.5, 0.5, 0.5],
  [0.35, 0.65, 0.5, 0.5],
];

export function beltRocks(): Rock[] {
  let seed = 20231;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const rocks: Rock[] = [];
  for (let k = 0; k < ROCKS_PER_SECTOR; k++) {
    const degrees = random() * BELT_SECTOR_DEGREES - BELT_SECTOR_DEGREES / 2;
    const radius = BELT_RADIUS + (random() + random() + random() - 1.5) * BELT_SPREAD;
    const size = random() < 0.82 ? 0.9 + random() * 1.5 : 2.4 + random() * 2.2;
    const height = size * (0.65 + random() * 0.5);
    const grey = Math.round(140 + random() * 80);
    const rock = {
      width: size,
      height,
      rotation: Math.round(random() * 180),
      corners: CORNER_SHAPES[k % 4].map((fraction) => fraction * Math.min(size, height)),
      color: `rgb(${grey},${grey - 6},${grey - 16})`,
      opacity: 0.4 + random() * 0.55,
    };
    [degrees, degrees - BELT_SECTOR_DEGREES].forEach((sectorDegrees) => {
      const center = mapPosition({ x: 0, y: 0 }, radius, sectorDegrees);
      rocks.push({ ...rock, x: center.x - size / 2, y: center.y - height / 2 });
    });
  }
  return rocks;
}
