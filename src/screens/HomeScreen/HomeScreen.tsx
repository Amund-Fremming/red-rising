import { Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinkCard } from '../../components/LinkCard/LinkCard';
import { homeScreenStyles as styles } from './homeScreenStyles';

type Props = {
  onOpenMap: () => void;
  onOpenGallery: () => void;
};

function centeredCircle(size: number, bottom: number, centerX: number) {
  return { width: size, height: size, borderRadius: size / 2, left: centerX - size / 2, bottom };
}

export function HomeScreen({ onOpenMap, onOpenGallery }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const centerX = width / 2;

  return (
    <View style={styles.screen}>
      <View pointerEvents="none" style={styles.decoration}>
        <View style={[styles.outerOrbit, centeredCircle(860, -486, centerX)]} />
        <View style={[styles.marsOrbit, centeredCircle(660, -376, centerX)]} />
        <View style={[styles.mars, centeredCircle(460, -266, centerX)]} />
        <View style={[styles.phobos, { left: centerX + 91 }]} />
      </View>
      <View style={[styles.content, { paddingTop: insets.top + 56 }]}>
        <Text style={styles.eyebrow}>The worlds of Red Rising</Text>
        <Text accessibilityRole="header" style={styles.title}>Sol</Text>
        <Text style={styles.intro}>From the mines of Mars to the moons of the Rim — explore the Society’s sky.</Text>
        <View style={styles.links}>
          <LinkCard title="Sky map" subtitle="Planets and moons of Sol" onPress={onOpenMap} />
          <LinkCard title="Gallery" subtitle="Characters, worlds and cities" onPress={onOpenGallery} />
        </View>
      </View>
    </View>
  );
}
