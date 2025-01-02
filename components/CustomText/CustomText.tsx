import React from 'react';
import { Text, TextStyle } from 'react-native';

type TextType = 'title' | 'subtitle' | 'body' | 'caption';

interface CustomTextProps {
  children: React.ReactNode;
  type?: TextType;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
  testID?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  type = 'body',
  style = {},
  numberOfLines = 0,
  testID,
  ...props
}) => {
  const styles = {
    titleText: {
      color: '#333',
      fontSize: 24,
      lineHeight: 28,
      letterSpacing: 0.1,
    },
    subtitleText: {
      color: '#333',
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.1,
    },
    bodyText: {
      color: '#000',
      fontSize: 17,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    captionText: {
      color: '#000',
      fontSize: 14,
      lineHeight: 18,
      letterSpacing: 0.1,
    },
  };

  const textStyles = {
    title: styles.titleText,
    subtitle: styles.subtitleText,
    body: styles.bodyText,
    caption: styles.captionText,
  };

  return (
    <Text
      style={[textStyles[type], style]}
      numberOfLines={numberOfLines}
      {...props}
      testID={testID}
    >
      {children}
    </Text>
  );
};

export default CustomText;
