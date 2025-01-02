import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { Ionicons } from '@expo/vector-icons';
import LikeButton from '../LikeButton/LikeButton';
interface GuideItemCellProps {
  title: string;
  description: string;
  guideId: number;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const GuideItemCell = ({
  title,
  guideId,
  description,
  onPress,
}: GuideItemCellProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      testID="guide-item-cell"
    >
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <CustomText type="body">{title}</CustomText>
        <CustomText
          style={{ marginTop: 4, color: '#333' }}
          type="caption"
          numberOfLines={2}
        >
          {description}
        </CustomText>

        <LikeButton id={guideId} testID={`like-button-${guideId}`} />
      </View>

      {/* Icon */}
      <Ionicons
        name="chevron-forward"
        size={18}
        color="#000"
        testID="chevron-icon"
      />
    </TouchableOpacity>
  );
};
export default GuideItemCell;
