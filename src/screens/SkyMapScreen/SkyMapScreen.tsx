import { useEffect, useRef, useState } from 'react';
import { Animated, BackHandler, Easing, Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BeltRocks } from '../../components/BeltRocks/BeltRocks';
import { MapMoons } from '../../components/MapMoons/MapMoons';
import { PillButton } from '../../components/PillButton/PillButton';
import { PlanetDisc } from '../../components/PlanetDisc/PlanetDisc';
import { Planet, PLANETS } from '../../data/planets';
import { useReducedMotion } from '../../hooks/useOrbitTime';
import { colors } from '../../theme';
import { mapPosition, Point } from '../../utils/orbit';
import { PlanetScreen } from '../PlanetScreen/PlanetScreen';
import { CANVAS_HEIGHT, CANVAS_WIDTH, skyMapScreenStyles as styles } from './skyMapScreenStyles';

const SUN: Point = { x: 195, y: -40 };
const ZONE_BOUNDARY_RADIUS = 395;
const PLACED_PLANETS = PLANETS.map((planet) => ({ planet, position: mapPosition(SUN, planet.mapRadius, planet.mapAngle) }));
const ZOOM_DURATION_MS = 900;

type Flight = { index: number; planet: Planet; from: Point; startSize: number };

type Props = {
  onBack: () => void;
};

function circleAround(center: Point, radius: number) {
  return { left: center.x - radius, top: center.y - radius, width: radius * 2, height: radius * 2 };
}

function between(progress: Animated.Value, from: number, to: number) {
  return progress.interpolate({ inputRange: [0, 1], outputRange: [from, to] });
}

export function SkyMapScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const reduced = useReducedMotion();
  const scrollY = useRef(0);
  const closing = useRef(false);
  const progress = useRef(new Animated.Value(0)).current;
  const [flight, setFlight] = useState<Flight | null>(null);
  const [target, setTarget] = useState<Point | null>(null);
  const scale = width / CANVAS_WIDTH;
  const duration = reduced ? 0 : ZOOM_DURATION_MS;

  const zoomInto = (index: number) => {
    if (flight) return;
    const { planet, position } = PLACED_PLANETS[index];
    progress.setValue(0);
    setFlight({ index, planet, from: { x: position.x * scale, y: position.y * scale - scrollY.current }, startSize: planet.mapSize * scale });
  };

  const zoomOut = () => {
    if (!flight || closing.current) return;
    closing.current = true;
    Animated.timing(progress, { toValue: 0, duration, easing: Easing.inOut(Easing.cubic), useNativeDriver: true }).start(() => {
      closing.current = false;
      setTarget(null);
      setFlight(null);
    });
  };

  useEffect(() => {
    if (!target) return;
    Animated.timing(progress, { toValue: 1, duration, easing: Easing.inOut(Easing.cubic), useNativeDriver: true }).start();
  }, [target]);

  useEffect(() => {
    if (!flight) return;
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      zoomOut();
      return true;
    });
    return () => subscription.remove();
  }, [flight]);

  const zoom = flight ? flight.planet.closeUpSize / flight.startSize : 1;
  const mapTransform =
    flight && target
      ? [
          { translateX: between(progress, 0, target.x - zoom * flight.from.x) },
          { translateY: between(progress, 0, target.y - zoom * flight.from.y) },
          { scale: between(progress, 1, zoom) },
        ]
      : [];
  const backdropOpacity = progress.interpolate({ inputRange: [0, 0.35, 1], outputRange: [0, 0, 1] });

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.zoomLayer, { transform: mapTransform }]}>
        <ScrollView
          contentContainerStyle={{ height: CANVAS_HEIGHT * scale }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(event) => (scrollY.current = event.nativeEvent.contentOffset.y)}
        >
          <View style={[styles.canvas, { transform: [{ scale }] }]}>
            <View style={styles.sun} />
            {PLACED_PLANETS.map(({ planet }) => (
              <View
                key={`${planet.name}-orbit`}
                style={[styles.orbit, circleAround(SUN, planet.mapRadius), planet.region.label === 'Mars' && { borderColor: colors.orbitMars }]}
              />
            ))}
            <BeltRocks sun={SUN} />
            <MapMoons planets={PLACED_PLANETS} hiddenPlanet={flight?.planet} />
            <View style={[styles.boundary, circleAround(SUN, ZONE_BOUNDARY_RADIUS)]} />
            <Text style={[styles.zoneLabel, styles.coreLabel]}>The Core</Text>
            <Text style={[styles.zoneLabel, styles.rimLabel]}>The Rim</Text>
            <Text style={[styles.zoneLabel, styles.beltLabel]}>The Belt</Text>
            <View style={[styles.namedBody, styles.ceres]}>
              <View style={styles.ceresDot} />
              <Text style={styles.bodyLabel}>Ceres</Text>
            </View>
            <View style={[styles.namedBody, styles.vesta]}>
              <Text style={styles.bodyLabel}>Vesta</Text>
              <View style={styles.vestaDot} />
            </View>
            {PLACED_PLANETS.map(({ planet, position }, index) => (
              <PlanetButton key={planet.name} planet={planet} position={position} onPress={() => zoomInto(index)} />
            ))}
          </View>
        </ScrollView>
      </Animated.View>
      <View style={[styles.homeButton, { top: insets.top + 8 }]}>
        <PillButton label="Home" accessibilityLabel="Back to home" onPress={onBack} />
      </View>
      <View pointerEvents="none" style={[styles.footer, { paddingBottom: insets.bottom + 28 }]}>
        <Text accessibilityRole="header" style={styles.title}>Sol</Text>
        <Text style={styles.hint}>Tap a world to descend</Text>
      </View>
      {flight && <Animated.View pointerEvents="none" style={[styles.flightBackdrop, { opacity: backdropOpacity }]} />}
      {flight && (
        <PlanetScreen
          index={flight.index}
          progress={progress}
          from={flight.from}
          startSize={flight.startSize}
          onStageMeasured={setTarget}
          onBack={zoomOut}
        />
      )}
    </View>
  );
}

type PlanetButtonProps = {
  planet: Planet;
  position: Point;
  onPress: () => void;
};

function PlanetButton({ planet, position, onPress }: PlanetButtonProps) {
  const hit = Math.max(48, planet.mapSize + 12);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Open ${planet.name}`}
      onPress={onPress}
      style={[styles.planetButton, { left: position.x - hit / 2, top: position.y - hit / 2, width: hit, height: hit }]}
    >
      <PlanetDisc texture={planet.texture} size={planet.mapSize} ringStroke={planet.hasRing ? 1.5 : undefined} />
      <View pointerEvents="none" style={[styles.planetLabelSlot, { top: hit - 4 }]}>
        <Text style={styles.bodyLabel}>{planet.name}</Text>
      </View>
    </Pressable>
  );
}
