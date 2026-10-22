import { StyleSheet } from 'react-native';
import { colors, fonts, repeatingLinear } from '../../theme';

export const galleryCardStyles = StyleSheet.create({
  card: {
    gap: 8,
  },
  image: {
    aspectRatio: 4 / 5,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    gap: 1,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 18,
    lineHeight: 21,
    color: colors.bone,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 16,
    color: colors.muted,
  },
  placeholder: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#0d0e14',
    experimental_backgroundImage: repeatingLinear(135, [['rgba(232,225,211,0.035)', 0, 10], ['rgba(232,225,211,0)', 10, 20]], 340),
  },
  icon: {
    width: 20,
    height: 16,
    borderWidth: 1.5,
    borderRadius: 2,
    borderColor: colors.faint,
    padding: 3,
  },
  iconSun: {
    width: 4,
    height: 4,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: colors.faint,
  },
  placeholderText: {
    fontFamily: fonts.italic,
    fontSize: 12,
    color: colors.muted,
  },
});
