import AppNavigator from '@/components/AppNavigator/AppNavigator';
import { queryClient } from '@/utils/queryClient/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
