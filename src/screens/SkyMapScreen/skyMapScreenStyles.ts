import { StyleSheet } from 'react-native';
import { colors, fonts, starryBackground } from '../../theme';

export const CANVAS_WIDTH = 390;
export const CANVAS_HEIGHT = 844;

export const skyMapScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: 'hidden',
    ...starryBackground,
  },
  zoomLayer: {
    flex: 1,
    transformOrigin: 'top left',
  },
  flightBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.ink,
  },
  canvas: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    overflow: 'hidden',
    transformOrigin: 'top left',
  },
  sun: {
    position: 'absolute',
    left: 95,
    top: -140,
    width: 200,
    height: 200,
    borderRadius: 100,
    experimental_backgroundImage: 'radial-gradient(circle, #fffaf0 0%, #ffe3a3 30%, #ffad4d 55%, rgba(255,120,40,0.35) 72%, rgba(255,120,40,0) 100%)',
    boxShadow: '0 0 80px 30px rgba(255,170,80,0.25)',
  },
  orbit: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: colors.orbit,
  },
  boundary: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.boundary,
  },
  zoneLabel: {
    position: 'absolute',
    fontFamily: fonts.italic,
    fontSize: 13,
  },
  coreLabel: {
    left: 0,
    right: 0,
    top: 332,
    textAlign: 'center',
    color: colors.core,
  },
  rimLabel: {
    left: 0,
    right: 0,
    top: 360,
    textAlign: 'center',
    color: colors.rim,
  },
  beltLabel: {
    left: 22,
    top: 240,
    color: colors.muted,
  },
  namedBody: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ceres: {
    left: 22,
    top: 274,
  },
  vesta: {
    left: 318,
    top: 268,
  },
  ceresDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    experimental_backgroundImage: 'radial-gradient(circle at 35% 30%, #cfc8bc, #6d665d)',
  },
  vestaDot: {
    width: 6,
    height: 6,
    borderTopLeftRadius: 2.7,
    borderTopRightRadius: 3.3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    experimental_backgroundImage: 'radial-gradient(circle at 35% 30%, #c2b8a8, #625a50)',
  },
  bodyLabel: {
    fontFamily: fonts.italic,
    fontSize: 13,
    color: colors.bone,
  },
  planetButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planetLabelSlot: {
    position: 'absolute',
    left: -60,
    right: -60,
    alignItems: 'center',
  },
  homeButton: {
    position: 'absolute',
    left: 16,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    experimental_backgroundImage: `linear-gradient(180deg, rgba(7,8,12,0) 0%, rgba(7,8,12,0.92) 35%, ${colors.ink} 100%)`,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 38,
    lineHeight: 40,
    color: colors.bone,
  },
  hint: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.muted,
  },
});
