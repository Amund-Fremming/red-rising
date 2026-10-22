import { View } from 'react-native';
import { shade } from '../../theme';
import { planetDiscStyles as styles } from './planetDiscStyles';

type Props = {
  texture: string;
  size: number;
  ringStroke?: number;
  glow?: string;
};

export function PlanetDisc({ texture, size, ringStroke, glow }: Props) {
  const ringWidth = size * 1.9;

  return (
    <View style={{ width: size, height: size }} pointerEvents="none">
      <View style={[styles.disc, { borderRadius: size / 2, experimental_backgroundImage: shade(texture), boxShadow: glow }]} />
      {ringStroke !== undefined && (
        <View
          style={[
            styles.ring,
            {
              width: ringWidth,
              height: ringWidth,
              borderRadius: ringWidth / 2,
              left: (size - ringWidth) / 2,
              top: (size - ringWidth) / 2,
              borderWidth: ringStroke,
            },
          ]}
        />
      )}
    </View>
  );
}
