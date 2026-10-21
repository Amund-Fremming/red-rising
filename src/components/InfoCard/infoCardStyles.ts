import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const infoCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  dot: {
    marginTop: 7,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    gap: 1,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 19,
    lineHeight: 22,
    color: colors.bone,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 18,
    color: colors.bodySoft,
  },
  fact: {
    fontFamily: fonts.italic,
    fontSize: 13,
    lineHeight: 18,
    color: colors.muted,
  },
});
