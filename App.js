import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import AppStack from './navigation/app.routes';
import axios from 'axios'

axios.defaults.baseURL = 'https://news-7445a.firebaseio.com/'

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    'AvenirNext-Medium': require('./assets/fonts/AvenirNext-Medium.ttf'),
    'AvenirNext-Regular': require('./assets/fonts/AvenirNext-Regular.ttf'),
    'AvenirNext-Bold': require('./assets/fonts/AvenirNext-Bold.ttf'),
    'AvenirNext-BoldItalic': require('./assets/fonts/AvenirNext-BoldItalic.ttf'),
    'AvenirNext-DemiBold': require('./assets/fonts/AvenirNext-DemiBold.ttf'),
    'AvenirNext-DemiBoldItalic': require('./assets/fonts/AvenirNext-DemiBoldItalic.ttf'),
    'AvenirNext-Heavy': require('./assets/fonts/AvenirNext-Heavy.ttf'),
    'AvenirNext-HeavyItalic': require('./assets/fonts/AvenirNext-HeavyItalic.ttf'),
    'AvenirNext-Italic': require('./assets/fonts/AvenirNext-Italic.ttf'),
    'AvenirNext-MediumItalic': require('./assets/fonts/AvenirNext-MediumItalic.ttf'),
    'AvenirNext-UltraLight': require('./assets/fonts/AvenirNext-UltraLight.ttf'),
    'AvenirNext-UltraLightItalic': require('./assets/fonts/AvenirNext-UltraLightItalic.ttf'),
  });
  const store = storeConfig()

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
            <AppStack />
        </NavigationContainer>
        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
