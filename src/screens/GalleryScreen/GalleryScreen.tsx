import { useRef, useState } from 'react';
import { Animated, Easing, Image, ImageSourcePropType, Pressable, ScrollView, Text, TextInput, TextInputInstance, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GalleryCard, ImagePlaceholder } from '../../components/GalleryCard/GalleryCard';
import { ImageViewer, ViewerImage } from '../../components/ImageViewer/ImageViewer';
import { PillButton } from '../../components/PillButton/PillButton';
import { SearchIcon } from '../../components/SearchIcon/SearchIcon';
import { CHARACTERS, CITIES } from '../../data/gallery';
import { colors } from '../../theme';
import { matchesQuery } from '../../utils/search';
import { galleryScreenStyles as styles } from './galleryScreenStyles';

const TABS = ['Characters', 'Cities'] as const;
type Tab = (typeof TABS)[number];

type Item = { name: string; subtitle: string; image?: ImageSourcePropType };

const SECTIONS: Record<Tab, Item[]> = {
  Characters: CHARACTERS,
  Cities: CITIES,
};
const EVERYTHING = TABS.flatMap((tab) => SECTIONS[tab]);

const SEARCH_ANIMATION_MS = 260;
const SEARCH_RISE = 16;
const GUTTER = 20;
const COLUMN_GAP = 12;

type Props = {
  onBack: () => void;
};

export function GalleryScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [tab, setTab] = useState<Tab>('Characters');
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState<ViewerImage | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchProgress = useRef(new Animated.Value(0)).current;
  const searchInput = useRef<TextInputInstance>(null);

  const animateSearch = (toValue: number, onDone?: () => void) =>
    Animated.timing(searchProgress, { toValue, duration: SEARCH_ANIMATION_MS, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start(onDone);

  const openSearch = () => {
    setSearchOpen(true);
    animateSearch(1);
    searchInput.current?.focus();
  };

  const closeSearch = () => {
    searchInput.current?.blur();
    setQuery('');
    animateSearch(0, () => setSearchOpen(false));
  };

  const titleOpacity = searchProgress.interpolate({ inputRange: [0, 0.6], outputRange: [1, 0], extrapolate: 'clamp' });
  const searchRise = searchProgress.interpolate({ inputRange: [0, 1], outputRange: [SEARCH_RISE, 0] });
  const cardWidth = (width - GUTTER * 2 - COLUMN_GAP) / 2;
  const searching = query.trim().length > 0;
  const items = searching ? EVERYTHING.filter((item) => matchesQuery(item, query)) : SECTIONS[tab];

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <ScrollView
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <PillButton label="Home" accessibilityLabel="Back to home" onPress={onBack} />
          <View style={styles.titleRow}>
            <Animated.Text accessibilityRole="header" style={[styles.title, { opacity: titleOpacity }]}>Gallery</Animated.Text>
            <Animated.View style={{ opacity: titleOpacity }}>
              <Pressable accessibilityRole="button" accessibilityLabel="Search the gallery" disabled={searchOpen} onPress={openSearch} style={styles.searchButton}>
                <SearchIcon />
              </Pressable>
            </Animated.View>
            <Animated.View
              pointerEvents={searchOpen ? 'auto' : 'none'}
              style={[styles.searchBar, { opacity: searchProgress, transform: [{ translateY: searchRise }] }]}
            >
              <TextInput
                ref={searchInput}
                value={query}
                onChangeText={setQuery}
                placeholder="Search characters and cities"
                placeholderTextColor={colors.muted}
                accessibilityLabel="Search the gallery"
                autoCorrect={false}
                autoCapitalize="none"
                clearButtonMode="while-editing"
                returnKeyType="search"
                keyboardAppearance="dark"
                style={styles.search}
              />
              <Pressable accessibilityRole="button" accessibilityLabel="Close search" onPress={closeSearch} hitSlop={8} style={styles.cancel}>
                <Text style={styles.cancelLabel}>Cancel</Text>
              </Pressable>
            </Animated.View>
          </View>
        </View>
        <View style={styles.tabsBar}>
          <View accessibilityRole="tablist" style={styles.tabs}>
            {TABS.map((label) => (
              <TabButton key={label} label={label} selected={!searching && label === tab} onPress={() => setTab(label)} />
            ))}
          </View>
        </View>
        <View style={styles.grid}>
          {items.length === 0 && <Text style={styles.empty}>{`Nothing in the gallery matches “${query.trim()}”.`}</Text>}
          {items.map((item, index) => (
            <Pressable
              key={`${item.name}-${index}`}
              disabled={!item.image}
              accessibilityRole={item.image ? 'button' : undefined}
              accessibilityLabel={item.image ? `View ${item.name} full screen` : undefined}
              onPress={() => item.image && setShown({ name: item.name, subtitle: item.subtitle, image: item.image })}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <GalleryCard name={item.name} subtitle={item.subtitle} width={cardWidth}>
                <CardArt item={item} />
              </GalleryCard>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <ImageViewer shown={shown} onClose={() => setShown(null)} />
    </View>
  );
}

function CardArt({ item }: { item: Item }) {
  if (item.image) return <Image source={item.image} resizeMode="cover" accessibilityLabel={item.name} style={styles.photo} />;
  return <ImagePlaceholder />;
}

type TabButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

function TabButton({ label, selected, onPress }: TabButtonProps) {
  return (
    <Pressable accessibilityRole="tab" accessibilityState={{ selected }} onPress={onPress} hitSlop={4} style={[styles.tab, selected && styles.tabSelected]}>
      <Text style={[styles.tabLabel, selected && styles.tabLabelSelected]}>{label}</Text>
    </Pressable>
  );
}
