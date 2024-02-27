import {View, Text} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
}
