import { TextProps, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { timestampToDate } from '@/utils/timestapToDate/timestapToDate';

interface TimeProps extends TextProps {
  time: number;
}

const TimeComponent: React.FC<TimeProps> = ({ time }) => {
  const formattedDateTime = timestampToDate(time);

  return (
    <CustomText type="caption" testID="time-component-text">
      {formattedDateTime}
    </CustomText>
  );
};

export default TimeComponent;
