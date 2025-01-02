import { ScrollView, Text, View, StyleSheet, ViewProps } from 'react-native';

interface ListOfTagsProps extends ViewProps {
  tags: string[];
}

const ListOfTags = ({ tags, style, ...rest }: ListOfTagsProps) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollView, style]}
      testID="tags-scroll-view"
      {...rest}
    >
      {tags.map((tag, index) => (
        <View key={index} style={styles.tagContainer}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 8,
  },
  tagContainer: {
    backgroundColor: '#ffffff80',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  tagText: {
    color: '#000',
  },
});

export default ListOfTags;
