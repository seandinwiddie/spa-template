import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../features/store';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <TamaguiProvider config={config}>
        <Theme name="light">
          <Slot />
        </Theme>
      </TamaguiProvider>
    </ReduxProvider>
  );
}
