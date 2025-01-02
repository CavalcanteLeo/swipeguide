import { getGuides } from '@/api';
import GuideItemCell from '@/components/GuideItemCell/GuideItemCell';
import { useGuideLikeStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Platform,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();

  const safeAreaInsets = useSafeAreaInsets();

  const { likes, likeGuide } = useGuideLikeStore();

  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['guides'],
    queryFn: () => getGuides(),
  });

  const refreshControl = (
    <RefreshControl refreshing={isLoading} onRefresh={refetch} />
  );

  if (isError) return <Text>Error: {error.message}</Text>;
  if (isLoading) return refreshControl;

  return (
    // Not using FlashList, but FlatList instead,
    // since I don't know the support to react native 0.76 and expo 52
    // also not using any UI lib like nativewind or tamagui

    <FlatList
      style={{
        backgroundColor: '#ece2d0',
      }}
      data={data ?? []}
      contentInset={{
        top: 16,
        bottom: Platform.OS === 'ios' ? safeAreaInsets.bottom + 16 : 16,
      }}
      keyExtractor={(item) => item.Id.toString()}
      refreshControl={refreshControl}
      ItemSeparatorComponent={() => (
        <View style={{ height: 16, justifyContent: 'center' }}>
          <View style={{ height: 1, backgroundColor: '#00000010' }} />
        </View>
      )}
      renderItem={({ item, index }) => (
        <GuideItemCell
          guideId={item.Id}
          title={item.MainTask}
          description={item.MainTaskSummary}
          onPress={() => router.push(`/details/${item.Id}`)}
        />
      )}
    />
  );
}
