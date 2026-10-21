import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { galleryCardStyles as styles } from './galleryCardStyles';

type Props = {
  name: string;
  subtitle: string;
  width: number;
  children: ReactNode;
};

export function GalleryCard({ name, subtitle, width, children }: Props) {
  return (
    <View style={[styles.card, { width }]}>
      <View style={styles.image}>{children}</View>
      <View style={styles.caption}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function ImagePlaceholder() {
  return (
    <View style={styles.placeholder}>
      <View style={styles.icon}>
        <View style={styles.iconSun} />
      </View>
      <Text style={styles.placeholderText}>Add image</Text>
    </View>
  );
}
