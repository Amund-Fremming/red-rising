import { ImageSourcePropType } from 'react-native';

export type GalleryEntry = { name: string; subtitle: string; image?: ImageSourcePropType };

export const CHARACTERS: GalleryEntry[] = [
  { name: 'Darrow of Lykos', subtitle: 'Red helldiver remade as a Gold, the Reaper', image: require('../images/darrow_lykos.webp') },
  { name: 'Darrow of Lykos', subtitle: 'The Reaper of Mars', image: require('../images/darrow_lykos.jpg') },
  { name: 'Eo of Lykos', subtitle: 'Red singer whose song lit the Rising', image: require('../images/eo_au_lykos.jpg') },
  { name: 'Virginia au Augustus', subtitle: 'Gold, called Mustang', image: require('../images/virginia_au_augustus.jpg') },
  { name: 'Sevro au Barca', subtitle: 'Gold, leader of the Howlers', image: require('../images/sevro_au_barca.webp') },
  { name: 'Cassius au Bellona', subtitle: 'Gold, the Morning Knight', image: require('../images/cassius_au_bellona.jpg') },
  { name: 'Victra au Julii', subtitle: 'Gold of House Julii', image: require('../images/vicra_au_julii.webp') },
  { name: 'Ragnar Volarus', subtitle: 'Obsidian warrior', image: require('../images/ragnar_volarus.webp') },
  { name: 'Sefi Volarus', subtitle: 'Obsidian, queen of the Valkyrie', image: require('../images/sefi_volarus.webp') },
  { name: 'Adrius au Augustus', subtitle: 'Gold, called the Jackal', image: require('../images/adrius_au_augustus.webp') },
  { name: 'Nero au Augustus', subtitle: 'Gold, ArchGovernor of Mars', image: require('../images/nero_au_augustus.webp') },
  { name: 'Octavia au Lune', subtitle: 'Sovereign of the Society', image: require('../images/octavia_au_lune.webp') },
  { name: 'Aja au Grimmus', subtitle: 'Gold, the Sovereign’s Fury', image: require('../images/aja_au_grimmus.webp') },
  { name: 'Fitchner au Barca', subtitle: 'Gold, Proctor of House Mars', image: require('../images/fitchner_au_barca.webp') },
  { name: 'Lorn au Arcos', subtitle: 'Gold, the Rage Knight', image: require('../images/lorn_au_arcos.webp') },
  { name: 'Roque au Fabii', subtitle: 'Gold, the poet of the Institute', image: require('../images/roque_au_fabii.webp') },
  { name: 'Kavax au Telemanus', subtitle: 'Gold, head of House Telemanus', image: require('../images/kavax_au_telemanus.webp') },
  { name: 'Daxo au Telemanus', subtitle: 'Gold, heir of House Telemanus', image: require('../images/daxo_au_telemanus.webp') },
  { name: 'Romulus au Raa', subtitle: 'Gold, Sovereign of the Rim', image: require('../images/romulus_au_raa.jpg') },
  { name: 'Diomedes au Raa', subtitle: 'Gold, the Storm Knight', image: require('../images/diomedes_au_raa.webp') },
  { name: 'Apollonius au Valii-Rath', subtitle: 'Gold, the Minotaur', image: require('../images/apollonius_au_valii-rath.webp') },
  { name: 'Tactus au Valii-Rath', subtitle: 'Gold, one of the Howlers', image: require('../images/tactus_au_valii-rath.webp') },
  { name: 'Quicksilver', subtitle: 'Silver, richest man in the Society', image: require('../images/quicksilver.webp') },
  { name: 'Harmony', subtitle: 'Red, leader in the Sons of Ares', image: require('../images/harmony.jpg') },
  { name: 'Theodora', subtitle: 'Pink, spymaster of the Rising', image: require('../images/theodora.jpg') },
  { name: 'Mickey', subtitle: 'Violet carver who remade Darrow', image: require('../images/mickey.jpg') },
];

export const CITIES: GalleryEntry[] = [
  { name: 'Agea', subtitle: 'Capital of Mars', image: require('../images/agea.jpeg') },
  { name: 'Lykos', subtitle: 'Mining colony beneath Mars', image: require('../images/lykos.jpg') },
  { name: 'Hyperion', subtitle: 'Capital of Luna and the Society', image: require('../images/luna.webp') },
  { name: 'Luna', subtitle: 'Seat of the Sovereign', image: require('../images/luna2.webp') },
  { name: 'Phobos', subtitle: 'Moon-city ringed by docks, Mars', image: require('../images/phobos.webp') },
  { name: 'Tinos', subtitle: 'Hidden city under Vengo Station, Mars' },
  { name: 'Corinth', subtitle: 'Spaceport city in the Thermic Sea, Mars' },
  { name: 'Heliopolis', subtitle: 'Wealthiest city of Mercury' },
  { name: 'New Sparta', subtitle: 'Earth' },
  { name: 'New Troy', subtitle: 'Ganymede' },
];
