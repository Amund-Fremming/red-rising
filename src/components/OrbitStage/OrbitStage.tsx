import { Animated, Text, View } from 'react-native';
import { Moon, MOON_PERIOD_BASE_SECONDS, MOON_PERIOD_STEP_SECONDS, moonTexture, Planet } from '../../data/planets';
import { useOrbitTime } from '../../hooks/useOrbitTime';
import { shade } from '../../theme';
import { labelGoesLeft, moonPosition, Point } from '../../utils/orbit';
import { PlanetDisc } from '../PlanetDisc/PlanetDisc';
import { orbitStageStyles as styles, STAGE_HEIGHT } from './orbitStageStyles';

const LABEL_EDGE_BAND = 90;

type Props = {
  planet: Planet;
  width: number;
  labelOpacity: number | Animated.AnimatedInterpolation<number>;
};

export function OrbitStage({ planet, width, labelOpacity }: Props) {
  const seconds = useOrbitTime();
  const center = { x: width / 2, y: STAGE_HEIGHT / 2 };
  const disc = planet.closeUpSize;
  const accessibilityLabel = planet.moons.length ? `${planet.name} and its moons` : planet.name;

  return (
    <View accessible accessibilityRole="image" accessibilityLabel={accessibilityLabel} style={[styles.stage, { width }]}>
      <View pointerEvents="none" style={styles.layer}>
        {planet.moons.map((moon) => (
          <View
            key={`${moon.name}-ring`}
            style={[styles.ring, { left: center.x - moon.orbit, top: center.y - moon.orbit, width: moon.orbit * 2, height: moon.orbit * 2 }]}
          />
        ))}
      </View>
      <View style={[styles.planet, { left: center.x - disc / 2, top: center.y - disc / 2 }]}>
        <PlanetDisc texture={planet.texture} size={disc} ringStroke={planet.hasRing ? 3 : undefined} glow="0 0 70px rgba(255,255,255,0.08)" />
      </View>
      <View pointerEvents="none" style={styles.layer}>
        {planet.moons.map((moon, index) => (
          <OrbitingMoon
            key={moon.name}
            moon={moon}
            position={moonPosition(center, moon.orbit, index, seconds, MOON_PERIOD_BASE_SECONDS, MOON_PERIOD_STEP_SECONDS)}
            centerX={center.x}
            labelOpacity={labelOpacity}
          />
        ))}
      </View>
    </View>
  );
}

type MoonProps = {
  moon: Moon;
  position: Point;
  centerX: number;
  labelOpacity: number | Animated.AnimatedInterpolation<number>;
};

function OrbitingMoon({ moon, position, centerX, labelOpacity }: MoonProps) {
  const half = moon.size / 2;
  const offset = half + 8;
  const labelSide = labelGoesLeft(position.x, centerX, LABEL_EDGE_BAND) ? { right: offset, alignItems: 'flex-end' as const } : { left: offset };

  return (
    <View style={[styles.anchor, { left: position.x, top: position.y }]}>
      <View style={[styles.moon, { left: -half, top: -half, width: moon.size, height: moon.size, borderRadius: half, backgroundImage: shade(moonTexture(moon)) }]} />
      <Animated.View style={[styles.labelSlot, labelSide, { opacity: labelOpacity }]}>
        <Text style={styles.label}>{moon.name}</Text>
      </Animated.View>
    </View>
  );
}
