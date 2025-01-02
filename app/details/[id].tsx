import { getGuide } from '@/api';
import CustomText from '@/components/CustomText';
import GuideDetails from '@/components/GuideDetails/GuideDetails';
import { useGuideLikeStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type SearchParams = {
  id: string;
};

export default function Index() {
  const { id } = useLocalSearchParams<SearchParams>();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['guides', id],
    queryFn: () => getGuide(Number(id)),
  });

  if (isError) return <CustomText>Error: {error.message}</CustomText>;
  if (isLoading) return <ActivityIndicator size="large" />;
  if (!data) return <CustomText>No data</CustomText>;

  return <GuideDetails guide={data} />;
}
