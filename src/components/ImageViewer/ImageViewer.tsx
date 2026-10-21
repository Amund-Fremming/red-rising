import { Image, ImageSourcePropType, Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PillButton } from '../PillButton/PillButton';
import { imageViewerStyles as styles } from './imageViewerStyles';

export type ViewerImage = { name: string; subtitle: string; image: ImageSourcePropType };

type Props = {
  shown: ViewerImage | null;
  onClose: () => void;
};

export function ImageViewer({ shown, onClose }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={shown !== null} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <View style={[styles.backdrop, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.topBar}>
          <PillButton label="Gallery" accessibilityLabel="Close image" onPress={onClose} />
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Close image" onPress={onClose} style={styles.imageArea}>
          {shown && <Image source={shown.image} resizeMode="contain" accessibilityLabel={shown.name} style={styles.image} />}
        </Pressable>
        {shown && (
          <View style={styles.caption}>
            <Text style={styles.name}>{shown.name}</Text>
            <Text style={styles.subtitle}>{shown.subtitle}</Text>
          </View>
        )}
      </View>
    </Modal>
  );
}
