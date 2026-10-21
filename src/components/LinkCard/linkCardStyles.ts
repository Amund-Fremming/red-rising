import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const linkCardStyles = StyleSheet.create({
  card: {
    minHeight: 72,
    paddingVertical: 14,
    paddingLeft: 18,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    backgroundColor: 'rgba(7,8,12,0.55)',
  },
  pressed: {
    borderColor: 'rgba(232,225,211,0.5)',
    backgroundColor: 'rgba(232,225,211,0.07)',
  },
  text: {
    gap: 2,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 26,
    lineHeight: 28,
    color: colors.bone,
  },
  subtitle: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.muted,
  },
});
