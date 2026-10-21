import { View } from 'react-native';
import { mapMoonSize, mapScale, MOON_PERIOD_BASE_SECONDS, MOON_PERIOD_STEP_SECONDS, Planet } from '../../data/planets';
import { useOrbitTime } from '../../hooks/useOrbitTime';
import { moonPosition, Point } from '../../utils/orbit';
import { mapMoonsStyles as styles } from './mapMoonsStyles';

type Props = {
  planets: { planet: Planet; position: Point }[];
  hiddenPlanet?: Planet;
};

export function MapMoons({ planets, hiddenPlanet }: Props) {
  const seconds = useOrbitTime();

  return planets
    .filter(({ planet }) => planet !== hiddenPlanet)
    .flatMap(({ planet, position }) =>
      planet.moons.map((moon, index) => {
        const radius = moon.orbit * mapScale(planet);
        const size = mapMoonSize(planet, moon);
        const moonCenter = moonPosition(position, radius, index, seconds, MOON_PERIOD_BASE_SECONDS, MOON_PERIOD_STEP_SECONDS);
        return (
          <View key={moon.name} pointerEvents="none" style={styles.layer}>
            <View style={[styles.ring, { left: position.x - radius, top: position.y - radius, width: radius * 2, height: radius * 2 }]} />
            <View
              style={[
                styles.moon,
                { left: moonCenter.x - size / 2, top: moonCenter.y - size / 2, width: size, height: size, borderRadius: size / 2, backgroundColor: moon.color },
              ]}
            />
          </View>
        );
      }),
    );
}
