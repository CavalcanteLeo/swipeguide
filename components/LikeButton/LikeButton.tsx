import { TouchableOpacity, StyleSheet, View, ViewProps } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { useGuideLikeStore } from '@/store';
import { useMemo } from 'react';

interface LikeButtonProps {
  id: number;
  testID?: string;
}

const styles = StyleSheet.create({
  likeButton: {
    backgroundColor: '#489fb530',
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 8,
  },
});

const LikeButton = ({ id, testID }: LikeButtonProps) => {
  const { likes, likeGuide } = useGuideLikeStore();
  const likeCount = useMemo(() => {
    return likes[id] || 0;
  }, [likes, id]);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity
        testID={testID}
        onPress={(e) => {
          likeGuide(id);
        }}
        style={styles.likeButton}
      >
        <CustomText style={{ color: '#489fb5', fontWeight: '600' }}>
          {likeCount} likes
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default LikeButton;
