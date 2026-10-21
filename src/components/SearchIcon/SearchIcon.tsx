import { View } from 'react-native';
import { searchIconStyles as styles } from './searchIconStyles';

export function SearchIcon() {
  return (
    <View pointerEvents="none" style={styles.icon}>
      <View style={styles.lens} />
      <View style={styles.handle} />
    </View>
  );
}
