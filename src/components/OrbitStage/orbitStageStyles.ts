import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const STAGE_HEIGHT = 300;

export const orbitStageStyles = StyleSheet.create({
  stage: {
    height: STAGE_HEIGHT,
  },
  layer: {
    ...StyleSheet.absoluteFill,
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: 'rgba(232,225,211,0.09)',
  },
  planet: {
    position: 'absolute',
  },
  anchor: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  moon: {
    position: 'absolute',
    boxShadow: `0 0 0 2px ${colors.ink}, 0 0 18px rgba(255,255,255,0.06)`,
  },
  labelSlot: {
    position: 'absolute',
    top: -12,
    width: 140,
    height: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: colors.labelBacking,
    fontFamily: fonts.italic,
    fontSize: 13,
    color: colors.bone,
  },
});
