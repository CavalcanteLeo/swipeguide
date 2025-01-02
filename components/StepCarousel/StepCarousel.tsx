import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import CustomText from '../CustomText/CustomText';

const { width } = Dimensions.get('window');
const itemWidth = width - 80;

type Step = {
  Headline: string;
  Description: string;
  Links: string[];
};

type StepCarouselProps = {
  steps: Step[];
};

const StepCarousel: React.FC<StepCarouselProps> = ({ steps }) => {
  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      snapToInterval={itemWidth + 16}
      snapToAlignment="start"
      data={steps}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: 16 }}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      renderItem={({ item, index }) => (
        <View style={styles.stepContainer}>
          <CustomText type="title" style={styles.pageNumber}>
            {index + 1}
          </CustomText>
          <CustomText type="title" style={styles.headline}>
            {item.Headline}
          </CustomText>
          <CustomText type="body" style={styles.description}>
            {item.Description}
          </CustomText>
          {item.Links.map((link, linkIndex) => (
            <Text key={linkIndex} style={styles.link}>
              {link}
            </Text>
          ))}
        </View>
      )}
      keyExtractor={(item, index) => item.Headline}
      testID="step-carousel-flatlist"
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
    marginTop: 16,
  },
  stepContainer: {
    width: itemWidth,
    padding: 16,
    backgroundColor: '#ffffff80',
    borderRadius: 24,
  },
  pageNumber: {
    marginBottom: 8,
    fontWeight: 'light',
    borderRadius: 100,
    lineHeight: 34,
    fontSize: 18,
    width: 34,
    height: 34,
    backgroundColor: '#00000020',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  headline: {
    marginBottom: 8,
    fontWeight: 'semibold',
  },
  description: {
    marginBottom: 8,
  },
  link: {
    fontSize: 12,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default StepCarousel;
