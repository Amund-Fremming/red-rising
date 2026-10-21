import { useState } from 'react';
import { Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GalleryCard, ImagePlaceholder } from '../../components/GalleryCard/GalleryCard';
import { PillButton } from '../../components/PillButton/PillButton';
import { PlanetDisc } from '../../components/PlanetDisc/PlanetDisc';
import { CHARACTERS, CITIES, GalleryEntry } from '../../data/gallery';
import { PLANETS } from '../../data/planets';
import { galleryScreenStyles as styles } from './galleryScreenStyles';

const TABS = ['Characters', 'Worlds', 'Cities'] as const;
type Tab = (typeof TABS)[number];

const GUTTER = 20;
const COLUMN_GAP = 12;

type Props = {
  onBack: () => void;
};

export function GalleryScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [tab, setTab] = useState<Tab>('Characters');
  const cardWidth = (width - GUTTER * 2 - COLUMN_GAP) / 2;

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 12 }]}>
      <View style={styles.header}>
        <PillButton label="Home" accessibilityLabel="Back to home" onPress={onBack} />
        <Text accessibilityRole="header" style={styles.title}>Gallery</Text>
        <View accessibilityRole="tablist" style={styles.tabs}>
          {TABS.map((label) => (
            <TabButton key={label} label={label} selected={label === tab} onPress={() => setTab(label)} />
          ))}
        </View>
      </View>
      <ScrollView contentContainerStyle={[styles.grid, { paddingBottom: insets.bottom + 24 }]} showsVerticalScrollIndicator={false}>
        {tab === 'Worlds' && <WorldCards cardWidth={cardWidth} />}
        {tab === 'Characters' && <PlaceholderCards entries={CHARACTERS} cardWidth={cardWidth} />}
        {tab === 'Cities' && <PlaceholderCards entries={CITIES} cardWidth={cardWidth} />}
      </ScrollView>
    </View>
  );
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

function WorldCards({ cardWidth }: { cardWidth: number }) {
  const discSize = (cardWidth - 2) * 0.64;

  return PLANETS.map((planet) => (
    <GalleryCard key={planet.name} name={planet.name} subtitle={planet.region.label} width={cardWidth}>
      <View style={styles.worldBackdrop} />
      <PlanetDisc texture={planet.texture} size={discSize} ringStroke={planet.hasRing ? 2 : undefined} glow="0 0 40px rgba(255,255,255,0.08)" />
    </GalleryCard>
  ));
}

function PlaceholderCards({ entries, cardWidth }: { entries: GalleryEntry[]; cardWidth: number }) {
  return entries.map((entry) => (
    <GalleryCard key={entry.name} name={entry.name} subtitle={entry.subtitle} width={cardWidth}>
      <ImagePlaceholder />
    </GalleryCard>
  ));
}
