import { CormorantGaramond_600SemiBold } from '@expo-google-fonts/cormorant-garamond';
import { Spectral_400Regular, Spectral_400Regular_Italic } from '@expo-google-fonts/spectral';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { BackHandler, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GalleryScreen } from './src/screens/GalleryScreen/GalleryScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { SkyMapScreen } from './src/screens/SkyMapScreen/SkyMapScreen';
import { colors } from './src/theme';

type Route = { name: 'home' } | { name: 'map' } | { name: 'gallery' };

const HOME: Route = { name: 'home' };
const MAP: Route = { name: 'map' };

function parentOf(route: Route): Route | undefined {
  if (route.name === 'home') return undefined;
  return HOME;
}

function Screen({ route, navigate }: { route: Route; navigate: (route: Route) => void }) {
  const goBack = () => navigate(parentOf(route) ?? HOME);

  if (route.name === 'map') return <SkyMapScreen onBack={goBack} />;
  if (route.name === 'gallery') return <GalleryScreen onBack={goBack} />;
  return <HomeScreen onOpenMap={() => navigate(MAP)} onOpenGallery={() => navigate({ name: 'gallery' })} />;
}

function App() {
  const [route, setRoute] = useState<Route>(HOME);
  const [fontsLoaded] = useFonts({ CormorantGaramond_600SemiBold, Spectral_400Regular, Spectral_400Regular_Italic });

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      const parent = parentOf(route);
      if (!parent) return false;
      setRoute(parent);
      return true;
    });
    return () => subscription.remove();
  }, [route]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: colors.ink }}>{fontsLoaded && <Screen route={route} navigate={setRoute} />}</View>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
