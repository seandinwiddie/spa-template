import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../features/store';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <TamaguiProvider config={config as any}>
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <Stack />
        </Theme>
      </TamaguiProvider>
    </ReduxProvider>
  );
}
