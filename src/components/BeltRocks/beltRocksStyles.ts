import { StyleSheet } from 'react-native';

export const BELT_FRAME_RADIUS = 380;

export const beltRocksStyles = StyleSheet.create({
  frame: {
    position: 'absolute',
    width: BELT_FRAME_RADIUS * 2,
    height: BELT_FRAME_RADIUS * 2,
  },
  rock: {
    position: 'absolute',
  },
});
