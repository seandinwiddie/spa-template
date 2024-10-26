import React from 'react';
import { YStack, Text, Button } from 'tamagui';

const Welcome: React.FC = () => {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Text fontSize="$6" fontWeight="bold">Welcome to Your SPA</Text>
      <Text fontSize={24} fontWeight="bold">
        Welcome to your SPA Template!
      </Text>
      <Text>This is a minimal template for your single-page application.</Text>
      <Button onPress={() => console.log('Button pressed')}>
        Click Me
      </Button>
    </YStack>
  );
};

export default Welcome;
