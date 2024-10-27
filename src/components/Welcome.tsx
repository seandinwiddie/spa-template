import React from 'react';
import { YStack, H1, Paragraph } from 'tamagui';

const Welcome: React.FC = () => {
  return (
    <YStack space="$4" maw={600}>
      <H1 ta="center">Welcome to Tamagui.</H1>
      <Paragraph ta="center">
        Here's a basic starter to show navigating from one screen to another.
      </Paragraph>
    </YStack>
  );
};

export default Welcome;
