import React from 'react';
import { Stack } from 'expo-router';
import { env } from '@/utils/env/env';

const AppNavigator = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: env.customerName,
        headerStyle: { backgroundColor: '#ece2d0' },
      }}
    />
    <Stack.Screen
      name="details/[id]"
      options={{
        title: 'Guide',
        headerStyle: { backgroundColor: '#ece2d0' },
      }}
    />
  </Stack>
);

export default AppNavigator;
