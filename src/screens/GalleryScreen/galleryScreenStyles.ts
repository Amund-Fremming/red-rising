import { StyleSheet } from 'react-native';
import { colors, fonts, starryBackground } from '../../theme';

export const galleryScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    ...starryBackground,
  },
  header: {
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  tabsBar: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  titleRow: {
    marginTop: 14,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    backgroundColor: 'rgba(7,8,12,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cancel: {
    height: 44,
    justifyContent: 'center',
  },
  cancelLabel: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.bone,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 46,
    lineHeight: 50,
    color: colors.bone,
  },
  search: {
    flex: 1,
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    backgroundColor: colors.ink,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.bone,
  },
  empty: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.muted,
  },
  tabs: {
    flexDirection: 'row',
    gap: 6,
    padding: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(232,225,211,0.14)',
    backgroundColor: 'rgba(7,8,12,0.75)',
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
