import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const imageViewerStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(7,8,12,0.97)',
  },
  topBar: {
    paddingHorizontal: 20,
  },
  imageArea: {
    flex: 1,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  caption: {
    paddingHorizontal: 20,
    gap: 2,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 26,
    lineHeight: 30,
    color: colors.bone,
  },
  subtitle: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.muted,
  },
});
