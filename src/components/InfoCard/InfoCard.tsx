import { Text, View } from 'react-native';
import { shade } from '../../theme';
import { infoCardStyles as styles } from './infoCardStyles';

type Props = {
  texture: string;
  title: string;
  body: string;
  fact?: string;
};

export function InfoCard({ texture, title, body, fact }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.dot, { experimental_backgroundImage: shade(texture) }]} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        {fact && <Text style={styles.fact}>{fact}</Text>}
      </View>
    </View>
  );
}
