import { beltRocks, labelGoesLeft, mapPosition } from './orbit';
import { repeatingLinear } from '../theme';
import { mapMoonSize, mapScale, PLANETS } from '../data/planets';
import { matchesQuery } from './search';

function check(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

const sun = { x: 195, y: -40 };
const mars = mapPosition(sun, 290, 18);
check(Math.abs(mars.x - 284.6) < 0.1 && Math.abs(mars.y - 235.8) < 0.1, 'mars position');

check(labelGoesLeft(300, 195, 90) === true, 'label side at 300');
check(labelGoesLeft(250, 195, 90) === false, 'label side at 250');
check(labelGoesLeft(140, 195, 90) === true, 'label side at 140');
check(labelGoesLeft(60, 195, 90) === false, 'label side at 60');

const rocks = beltRocks();
check(rocks.length === 400, `rock count ${rocks.length}`);
check(JSON.stringify(beltRocks()) === JSON.stringify(rocks), 'belt is seeded');
const rockRadii = rocks.map((rock) => Math.hypot(rock.x + rock.width / 2, rock.y + rock.height / 2));
check(rockRadii.every((radius) => radius > 330 && radius < 374), 'belt stays clear of Mars and Jupiter moons');
const original = rocks[0];
const copy = rocks[1];
const rotated = { x: original.x + original.width / 2, y: original.y + original.height / 2 };
const copyCenter = { x: copy.x + copy.width / 2, y: copy.y + copy.height / 2 };
check(Math.abs(copyCenter.x + rotated.y) < 1e-9 && Math.abs(copyCenter.y - rotated.x) < 1e-9, 'copy sits one sector to the left');

check(repeatingLinear(0, [['red', 0, 5], ['blue', 5, 10]], 20) === 'linear-gradient(0deg, red 0px 5px, blue 5px 10px, red 10px 15px, blue 15px 20px)', 'repeating gradient');

const BELT_INNER = 330;
const BELT_OUTER = 374;
PLANETS.forEach((planet) => {
  const reach = Math.max(0, ...planet.moons.map((moon) => moon.orbit * mapScale(planet) + mapMoonSize(planet, moon) / 2));
  const inner = planet.mapRadius - reach;
  const outer = planet.mapRadius + reach;
  check(outer < BELT_INNER || inner > BELT_OUTER, `${planet.name} moons cross the belt (${inner.toFixed(0)}-${outer.toFixed(0)})`);
});

const sevro = { name: 'Sevro au Barca', subtitle: 'Gold, leader of the Howlers' };
check(matchesQuery(sevro, '  SEVRO '), 'search ignores case and spaces');
check(matchesQuery(sevro, 'howlers'), 'search matches subtitle');
check(!matchesQuery(sevro, 'mustang'), 'search rejects non-matches');
check(matchesQuery({ name: 'Théodora', subtitle: '' }, 'theo'), 'search ignores accents');

console.info('orbit checks passed');
