import React from 'react';
import { render } from '@testing-library/react-native';
import CustomText from '../CustomText';

describe('CustomText', () => {
  it('renders the text with the correct type style', () => {
    const { getByText } = render(
      <CustomText type="title" testID="custom-text">
        Test Title
      </CustomText>
    );

    const textComponent = getByText('Test Title');
    expect(textComponent.props.style).toContainEqual({
      color: '#333',
      fontSize: 24,
      lineHeight: 28,
      letterSpacing: 0.1,
    });
  });

  it('renders the text with default body style when no type is specified', () => {
    const { getByText } = render(
      <CustomText testID="custom-text">Test Body</CustomText>
    );

    const textComponent = getByText('Test Body');
    expect(textComponent.props.style).toContainEqual({
      color: '#000',
      fontSize: 17,
      lineHeight: 20,
      letterSpacing: 0.1,
    });
  });

  it('applies additional styles passed via the style prop', () => {
    const additionalStyle = { color: 'red' };
    const { getByText } = render(
      <CustomText style={additionalStyle} testID="custom-text">
        Styled Text
      </CustomText>
    );

    const textComponent = getByText('Styled Text');
    expect(textComponent.props.style).toContainEqual(additionalStyle);
  });
});
