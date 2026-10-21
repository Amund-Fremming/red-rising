import { useLayoutEffect, useRef, useState } from 'react';
import { Animated, HostInstance, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { OrbitStage } from '../../components/OrbitStage/OrbitStage';
import { PillButton } from '../../components/PillButton/PillButton';
import { factLine, moonTexture, PLANETS } from '../../data/planets';
import { Point } from '../../utils/orbit';
import { planetScreenStyles as styles } from './planetScreenStyles';

const CHROME_START = 0.35;
const CHROME_STAGGER = 0.08;
const HEADER_DROP = 140;

type Props = {
  index: number;
  progress: Animated.Value;
  from: Point;
  startSize: number;
  onStageMeasured: (center: Point) => void;
  onBack: () => void;
};

export function PlanetScreen({ index, progress, from, startSize, onStageMeasured, onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const planet = PLANETS[index];
  const stageRef = useRef<HostInstance>(null);
  const [stageCenter, setStageCenter] = useState(from);

  useLayoutEffect(() => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
    setStageCenter(center);
    onStageMeasured(center);
  }, []);

  const along = (inputStart: number, start: number, end: number) =>
    progress.interpolate({ inputRange: [inputStart, 1], outputRange: [start, end], extrapolate: 'clamp' });
  const slideFrom = (distance: number, order: number) => [{ translateY: along(CHROME_START + order * CHROME_STAGGER, distance, 0) }];
  const stageTransform = [
    { translateX: along(0, from.x - stageCenter.x, 0) },
    { translateY: along(0, from.y - stageCenter.y, 0) },
    { scale: along(0, startSize / planet.closeUpSize, 1) },
  ];
  const aboveScreen = -(insets.top + HEADER_DROP);

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 12 }]}>
      <Animated.View pointerEvents="none" style={[styles.stars, { opacity: along(0.5, 0, 1) }]} />
      <Animated.View style={[styles.topBar, { transform: slideFrom(aboveScreen, 1) }]}>
        <PillButton label="Sol" accessibilityLabel="Back to the sky map" onPress={onBack} />
        <Text style={styles.index}>{`${index + 1} of ${PLANETS.length}`}</Text>
      </Animated.View>
      <Animated.View style={[styles.titleRow, { transform: slideFrom(aboveScreen, 0) }]}>
        <Text accessibilityRole="header" style={styles.title}>{planet.name}</Text>
        <Text style={[styles.chip, { color: planet.region.color, borderColor: planet.region.color }]}>{planet.region.label}</Text>
      </Animated.View>
      <View ref={stageRef} style={styles.stageArea}>
        <Animated.View style={{ transform: stageTransform }}>
          <OrbitStage planet={planet} width={width} labelOpacity={along(0.7, 0, 1)} />
        </Animated.View>
      </View>
      <Animated.ScrollView
        style={[styles.cards, { transform: slideFrom(height, 1) }]}
        contentContainerStyle={[styles.cardsContent, { paddingBottom: insets.bottom + 12 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Planet</Text>
        <InfoCard texture={planet.texture} title={planet.name} body={planet.lore} fact={factLine(planet)} />
        <Text style={[styles.heading, styles.moonsHeading]}>Moons</Text>
        {planet.moons.length === 0 && <Text style={styles.empty}>No moons circle this world.</Text>}
        {planet.moons.map((moon) => (
          <InfoCard key={moon.name} texture={moonTexture(moon)} title={moon.name} body={moon.note} />
        ))}
      </Animated.ScrollView>
    </View>
  );
}
