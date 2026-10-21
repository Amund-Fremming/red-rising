import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const pillButtonStyles = StyleSheet.create({
  pill: {
    alignSelf: 'flex-start',
    height: 44,
    paddingLeft: 18,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    borderRadius: 999,
    backgroundColor: 'rgba(7,8,12,0.55)',
  },
  pressed: {
    borderColor: 'rgba(232,225,211,0.5)',
    backgroundColor: 'rgba(232,225,211,0.07)',
  },
  label: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.bone,
  },
});
