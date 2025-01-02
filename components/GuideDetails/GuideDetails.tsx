import { Text, TouchableOpacity, ScrollView, View } from 'react-native';

import { z } from 'zod';
import { detailedGuideSchema } from '@/api/schema/schema';
import { useGuideLikeStore } from '@/store';
import Time from '../Time/Time';
import CustomText from '../CustomText/CustomText';
import LikeButton from '../LikeButton/LikeButton';
import ListOfTags from '../ListOfTags/ListOfTags';
import StepCarousel from '../StepCarousel/StepCarousel';

interface GuideDetailsProps {
  guide: z.infer<typeof detailedGuideSchema>;
}

const GuideDetails = ({ guide }: GuideDetailsProps) => {
  return (
    <ScrollView style={{ backgroundColor: '#ece2d0' }}>
      <CustomText style={{ marginHorizontal: 16, paddingTop: 16 }} type="title">
        {guide.MainTask}
      </CustomText>

      <View
        style={{
          marginHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <LikeButton id={guide.Id} />

        <Time time={guide.Time} />
      </View>

      <ListOfTags
        tags={guide.Categories}
        style={{ marginTop: 16, paddingHorizontal: -16 }}
      />

      <CustomText style={{ marginTop: 8, marginHorizontal: 16 }} type="body">
        {guide.MainTaskSummary}
      </CustomText>

      <StepCarousel steps={guide.Steps} />
    </ScrollView>
  );
};

export default GuideDetails;
