import { Pressable, Text, View } from 'react-native';
import { Chevron } from '../Chevron/Chevron';
import { linkCardStyles as styles } from './linkCardStyles';

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export function LinkCard({ title, subtitle, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`${title}. ${subtitle}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Chevron direction="right" size={10} />
    </Pressable>
  );
}
