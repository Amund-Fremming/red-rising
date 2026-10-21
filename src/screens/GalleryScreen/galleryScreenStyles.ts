import { StyleSheet } from 'react-native';
import { colors, fonts, starryBackground } from '../../theme';

export const galleryScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    ...starryBackground,
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 14,
    fontFamily: fonts.display,
    fontSize: 46,
    lineHeight: 50,
    color: colors.bone,
  },
  tabs: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 6,
    padding: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(232,225,211,0.14)',
  },
  tab: {
    flex: 1,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabSelected: {
    backgroundColor: colors.bone,
  },
  tabLabel: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.bone,
  },
  tabLabelSelected: {
    color: colors.ink,
  },
  grid: {
    marginTop: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 16,
  },
  worldBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#0b0c11',
    backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.05), rgba(7,8,12,0) 70%)',
  },
});
