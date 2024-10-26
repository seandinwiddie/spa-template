import React from 'react';
import { View } from 'tamagui';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <View flex={1}>
      <Welcome />
    </View>
  );
}
