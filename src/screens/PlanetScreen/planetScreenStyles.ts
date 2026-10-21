import { StyleSheet } from 'react-native';
import { colors, fonts, starryBackground } from '../../theme';
import { STAGE_HEIGHT } from '../../components/OrbitStage/orbitStageStyles';

export const planetScreenStyles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFill,
    paddingHorizontal: 20,
  },
  stars: {
    ...StyleSheet.absoluteFill,
    ...starryBackground,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  index: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.muted,
  },
  titleRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 46,
    lineHeight: 50,
    color: colors.bone,
  },
  chip: {
    marginBottom: 8,
    paddingVertical: 3,
    paddingHorizontal: 11,
    borderWidth: 1,
    borderRadius: 999,
    fontFamily: fonts.italic,
    fontSize: 13,
  },
  stageArea: {
    flex: 1,
    minHeight: STAGE_HEIGHT,
    justifyContent: 'center',
    marginHorizontal: -20,
  },
  cards: {
    flexGrow: 0,
    flexShrink: 1,
    marginTop: 6,
  },
  cardsContent: {
    gap: 8,
  },
  heading: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.muted,
  },
  moonsHeading: {
    marginTop: 4,
  },
  empty: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.muted,
  },
});
