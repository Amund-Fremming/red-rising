import { colors, repeatingLinear } from '../theme';

export type Region = { label: string; color: string };

export type Moon = {
  name: string;
  note: string;
  color: string;
  size: number;
  orbit: number;
  texture?: string;
};

export type Planet = {
  name: string;
  region: Region;
  au: string;
  day: string;
  year: string;
  lore: string;
  texture: string;
  closeUpSize: number;
  mapRadius: number;
  mapAngle: number;
  mapSize: number;
  hasRing?: boolean;
  moons: Moon[];
};

const CORE: Region = { label: 'The Core', color: colors.core };
const MARS: Region = { label: 'Mars', color: colors.mars };
const RIM: Region = { label: 'The Rim', color: colors.rim };

export const LUNA_TEXTURE =
  'radial-gradient(circle at 62% 38%, rgba(95,90,84,0.55) 0% 9%, rgba(95,90,84,0) 11%), radial-gradient(circle at 36% 60%, rgba(95,90,84,0.45) 0% 13%, rgba(95,90,84,0) 15%), radial-gradient(circle at 58% 74%, rgba(95,90,84,0.35) 0% 6%, rgba(95,90,84,0) 8%), radial-gradient(circle at 30% 34%, rgba(95,90,84,0.3) 0% 5%, rgba(95,90,84,0) 7%), radial-gradient(circle, #e6e1d7, #b9b2a5)';

export const MARS_TEXTURE =
  'radial-gradient(ellipse 30% 10% at 50% 7%, rgba(245,240,232,0.9) 0% 55%, rgba(245,240,232,0) 100%), radial-gradient(ellipse 28% 18% at 38% 45%, rgba(90,30,18,0.7) 0% 55%, rgba(90,30,18,0) 100%), radial-gradient(ellipse 18% 26% at 66% 58%, rgba(100,36,20,0.6) 0% 50%, rgba(100,36,20,0) 100%), radial-gradient(circle at 30% 70%, rgba(70,22,12,0.5) 0% 8%, rgba(70,22,12,0) 12%), radial-gradient(circle, #e88a62, #b04a2a 55%, #5a1c10)';

export const PLANETS: Planet[] = [
  {
    name: 'Mercury', region: CORE, au: '0.39', day: '59-day', year: '88-day',
    lore: 'Innermost world of the Core, terraformed beneath a swollen Sun. Its great city, Heliopolis, glitters at the edge of the day.',
    texture: 'radial-gradient(circle, #a59f96, #4a4641)',
    closeUpSize: 90, mapRadius: 132, mapAngle: -25, mapSize: 22,
    moons: [],
  },
  {
    name: 'Venus', region: CORE, au: '0.72', day: '243-day', year: '225-day',
    lore: 'A gilded Core world of the Society, wrapped in cloud and old wealth.',
    texture: 'radial-gradient(ellipse 60% 12% at 45% 30%, rgba(255,246,220,0.55) 0% 50%, rgba(255,246,220,0) 100%), radial-gradient(ellipse 55% 10% at 55% 52%, rgba(150,110,55,0.45) 0% 50%, rgba(150,110,55,0) 100%), radial-gradient(ellipse 50% 11% at 40% 72%, rgba(255,240,205,0.45) 0% 50%, rgba(255,240,205,0) 100%), radial-gradient(circle, #f0d9a6, #b08a4c 60%, #5e4422)',
    closeUpSize: 104, mapRadius: 175, mapAngle: 20, mapSize: 32,
    moons: [],
  },
  {
    name: 'Earth', region: CORE, au: '1.00', day: '24-hour', year: '365-day',
    lore: 'Cradle of humanity, now a Core world that lives in the shadow of its own moon.',
    texture: 'radial-gradient(ellipse 30% 22% at 38% 40%, rgba(96,128,72,0.85) 0% 60%, rgba(96,128,72,0) 100%), radial-gradient(ellipse 22% 30% at 64% 62%, rgba(124,122,78,0.8) 0% 55%, rgba(124,122,78,0) 100%), radial-gradient(ellipse 40% 8% at 55% 26%, rgba(255,255,255,0.55) 0% 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 34% 7% at 40% 76%, rgba(255,255,255,0.45) 0% 50%, rgba(255,255,255,0) 100%), radial-gradient(circle at 40% 40%, #5f9bd2, #2a5f86 55%, #142d47)',
    closeUpSize: 110, mapRadius: 230, mapAngle: -15, mapSize: 35,
    moons: [
      { name: 'Luna', color: '#d9d4cb', size: 40, orbit: 104, texture: LUNA_TEXTURE, note: 'Seat of the Sovereign and heart of the Society. Its capital, Hyperion, rules the worlds of Sol.' },
    ],
  },
  {
    name: 'Mars', region: MARS, au: '1.52', day: '24.6-hour', year: '687-day',
    lore: 'The red world. Beneath its crust, Red helldivers mined helium-3 to “terraform” a planet already home to the Golds — the lie that lit the Rising. Capital: Agea.',
    texture: MARS_TEXTURE,
    closeUpSize: 104, mapRadius: 288, mapAngle: 18, mapSize: 29,
    moons: [
      { name: 'Phobos', color: '#a89a8c', size: 18, orbit: 92, note: 'Crowded moon-city ringed by docks, where Mars’ helium-3 is shipped out.' },
      { name: 'Deimos', color: '#8d8478', size: 14, orbit: 124, note: 'The smaller, outer moon of Mars.' },
    ],
  },
  {
    name: 'Jupiter', region: RIM, au: '5.20', day: '9.9-hour', year: '11.9-year',
    lore: 'Gateway giant of the Rim. Its moons are the strongholds of the Moon Lords, who have twice risen against the Core.',
    texture: repeatingLinear(170, [['#e2c9a2', 0, 7], ['#b07b52', 7, 11], ['#ecdcbd', 11, 17], ['#c89a6e', 17, 21]]),
    closeUpSize: 110, mapRadius: 475, mapAngle: -10, mapSize: 74,
    moons: [
      { name: 'Thebe', color: '#9c7d63', size: 8, orbit: 68, note: 'Tiny inner moon, skimming close to Jupiter.' },
      { name: 'Europa', color: '#e6e1d6', size: 14, orbit: 87, note: 'Ice moon with island cities along its equator.' },
      { name: 'Ganymede', color: '#b3a796', size: 21, orbit: 106, note: 'Political heart of the Rim and home of its great dockyards.' },
      { name: 'Callisto', color: '#7d7368', size: 18, orbit: 125, note: 'Outermost of the great Galilean moons.' },
      { name: 'Sinope', color: '#8a817a', size: 8, orbit: 142, note: 'Small, distant outer moon on a backward orbit.' },
    ],
  },
  {
    name: 'Saturn', region: RIM, au: '9.54', day: '10.7-hour', year: '29.5-year',
    lore: 'Ringed jewel of the Rim, its many moons bound to the Moon Lords’ cause.',
    texture: 'radial-gradient(circle, #ecd9ac, #a88a52 60%, #5f4a26)',
    closeUpSize: 104, mapRadius: 560, mapAngle: 9, mapSize: 54, hasRing: true,
    moons: [
      { name: 'Rhea', color: '#c9c3b8', size: 14, orbit: 104, note: 'Once the rebellious heart of the Rim — later destroyed by a bomb.' },
      { name: 'Titan', color: '#d9a75a', size: 22, orbit: 123, note: 'Saturn’s giant, hazy moon — larger than Mercury.' },
      { name: 'Iapetus', color: '#9a8f80', size: 14, orbit: 142, note: 'Two-faced moon, one hemisphere dark, one bright.' },
    ],
  },
  {
    name: 'Uranus', region: RIM, au: '19.2', day: '17.2-hour', year: '84-year',
    lore: 'A cold ice giant on the far edge of the Rim, tipped on its side.',
    texture: `${repeatingLinear(8, [['rgba(255,255,255,0.07)', 0, 6], ['rgba(255,255,255,0)', 6, 14]])}, radial-gradient(ellipse 50% 14% at 50% 20%, rgba(230,250,250,0.4) 0% 50%, rgba(230,250,250,0) 100%), radial-gradient(circle, #bfeaec, #5aa6ad 60%, #1f4e54)`,
    closeUpSize: 110, mapRadius: 612, mapAngle: -14, mapSize: 42,
    moons: [],
  },
  {
    name: 'Neptune', region: RIM, au: '30.1', day: '16.1-hour', year: '165-year',
    lore: 'Deep-blue giant of the outer dark, where the Sun is only a bright star.',
    texture: `radial-gradient(ellipse 14% 9% at 40% 46%, rgba(10,20,60,0.75) 0% 55%, rgba(10,20,60,0) 100%), radial-gradient(ellipse 12% 3% at 46% 38%, rgba(255,255,255,0.8) 0% 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 18% 3% at 62% 64%, rgba(255,255,255,0.6) 0% 50%, rgba(255,255,255,0) 100%), ${repeatingLinear(175, [['rgba(255,255,255,0.05)', 0, 8], ['rgba(0,0,0,0.06)', 8, 16]])}, radial-gradient(circle, #6f95ee, #2c4ca8 60%, #132158)`,
    closeUpSize: 110, mapRadius: 680, mapAngle: 9, mapSize: 40,
    moons: [],
  },
  {
    name: 'Pluto', region: RIM, au: '39.5', day: '6.4-day', year: '248-year',
    lore: 'The last outpost before the void.',
    texture: 'radial-gradient(circle, #d6c4ae, #6a5949)',
    closeUpSize: 80, mapRadius: 728, mapAngle: -6, mapSize: 16,
    moons: [],
  },
];

export function factLine(planet: Planet) {
  return `${planet.au} AU from Sol · ${planet.day} day · ${planet.year} orbit`;
}

export function moonTexture(moon: Moon) {
  return moon.texture ?? `radial-gradient(circle, ${moon.color}, ${moon.color})`;
}

export const MOON_PERIOD_BASE_SECONDS = 60;
export const MOON_PERIOD_STEP_SECONDS = 30;
const MIN_MAP_MOON_SIZE = 5;

export function mapScale(planet: Planet) {
  return planet.mapSize / planet.closeUpSize;
}

export function mapMoonSize(planet: Planet, moon: Moon) {
  return Math.max(MIN_MAP_MOON_SIZE, moon.size * mapScale(planet));
}
