import React from 'react';
import { YStack } from 'tamagui';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Welcome />
    </YStack>
  );
}
