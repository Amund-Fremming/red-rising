import { StyleSheet } from 'react-native';

export const planetDiscStyles = StyleSheet.create({
  disc: {
    flex: 1,
    overflow: 'hidden',
  },
  ring: {
    position: 'absolute',
    borderColor: 'rgba(232,215,170,0.65)',
    transform: [{ rotate: '-18deg' }, { scaleY: 0.28 }],
  },
});
