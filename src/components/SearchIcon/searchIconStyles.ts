import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const searchIconStyles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
  lens: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 1.8,
    borderColor: colors.bone,
  },
  handle: {
    position: 'absolute',
    left: 11,
    top: 13,
    width: 7,
    height: 1.8,
    borderRadius: 1,
    backgroundColor: colors.bone,
    transform: [{ rotate: '45deg' }],
  },
});
