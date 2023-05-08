import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootStack from './navigators/RootStack';

export default function App() {
  let [fontLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return <RootStack />;
}
