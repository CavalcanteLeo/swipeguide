import { TextProps, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { timestampToDate } from '@/utils/timestapToDate/timestapToDate';

interface TimeProps extends TextProps {
  time: number;
}

const TimeComponent: React.FC<TimeProps> = ({ time, ...rest }) => {
  const formattedDateTime = timestampToDate(time);

  return (
    <View {...rest}>
      <CustomText type="caption" testID="time-component-text">
        {formattedDateTime}
      </CustomText>
    </View>
  );
};

export default TimeComponent;
