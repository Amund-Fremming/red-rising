import { StyleSheet } from 'react-native';

export const mapMoonsStyles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFill,
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: 'rgba(232,225,211,0.07)',
  },
  moon: {
    position: 'absolute',
    boxShadow: '0 0 0 1px rgba(7,8,12,0.8)',
  },
});
