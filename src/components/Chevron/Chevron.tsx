import { View } from 'react-native';
import { colors } from '../../theme';
import { chevronStyles as styles } from './chevronStyles';

type Props = {
  direction: 'left' | 'right';
  size?: number;
};

export function Chevron({ direction, size = 9 }: Props) {
  const rotation = direction === 'left' ? '45deg' : '-135deg';

  return (
    <View
      pointerEvents="none"
      style={[styles.chevron, { width: size, height: size, borderColor: colors.bone, transform: [{ rotate: rotation }] }]}
    />
  );
}
