import { StyleSheet } from 'react-native';
import { colors, fonts, starryBackground } from '../../theme';

const HOME_MARS =
  'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.3), rgba(255,255,255,0) 40%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), radial-gradient(ellipse 30% 10% at 50% 7%, rgba(245,240,232,0.9) 0% 55%, rgba(245,240,232,0) 100%), radial-gradient(ellipse 28% 18% at 38% 25%, rgba(90,30,18,0.7) 0% 55%, rgba(90,30,18,0) 100%), radial-gradient(ellipse 18% 16% at 68% 30%, rgba(100,36,20,0.6) 0% 50%, rgba(100,36,20,0) 100%), radial-gradient(circle, #e88a62, #b04a2a 55%, #5a1c10)';

export const homeScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: 'hidden',
    ...starryBackground,
  },
  decoration: {
    ...StyleSheet.absoluteFill,
  },
  outerOrbit: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: colors.orbit,
  },
  marsOrbit: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: colors.orbitMars,
  },
  mars: {
    position: 'absolute',
    backgroundImage: HOME_MARS,
    boxShadow: '0 0 120px rgba(224,88,60,0.25)',
  },
  phobos: {
    position: 'absolute',
    bottom: 242,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundImage: 'radial-gradient(circle at 35% 30%, #cfc4b6, #6b6157)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  eyebrow: {
    fontFamily: fonts.italic,
    fontSize: 15,
    color: colors.muted,
  },
  title: {
    marginTop: 6,
    fontFamily: fonts.display,
    fontSize: 84,
    lineHeight: 84,
    color: colors.bone,
  },
  intro: {
    marginTop: 18,
    maxWidth: 300,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.body,
  },
  links: {
    marginTop: 40,
    gap: 12,
  },
});
