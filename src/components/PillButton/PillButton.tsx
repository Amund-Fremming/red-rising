import { Pressable, Text } from 'react-native';
import { Chevron } from '../Chevron/Chevron';
import { pillButtonStyles as styles } from './pillButtonStyles';

type Props = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
};

export function PillButton({ label, accessibilityLabel, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      hitSlop={4}
      style={({ pressed }) => [styles.pill, pressed && styles.pressed]}
    >
      <Chevron direction="left" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
