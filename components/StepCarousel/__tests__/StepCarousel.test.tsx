import React from 'react';
import { render } from '@testing-library/react-native';
import StepCarousel from '../StepCarousel';

describe('StepCarousel', () => {
  const defaultProps = {
    steps: [
      {
        Headline: 'Step 1',
        Description: 'Description for step 1',
        Links: ['Link 1', 'Link 2'],
      },
      {
        Headline: 'Step 2',
        Description: 'Description for step 2',
        Links: ['Link 3'],
      },
    ],
  };

  it('renders all steps', () => {
    const { getByText } = render(<StepCarousel {...defaultProps} />);

    defaultProps.steps.forEach((step) => {
      expect(getByText(step.Headline)).toBeTruthy();
      expect(getByText(step.Description)).toBeTruthy();
      step.Links.forEach((link) => {
        expect(getByText(link)).toBeTruthy();
      });
    });
  });

  it('renders steps in a horizontal FlatList', () => {
    const { getByTestId } = render(<StepCarousel {...defaultProps} />);
    const flatList = getByTestId('step-carousel-flatlist');

    expect(flatList.props.horizontal).toBe(true);
  });

  it('does not show horizontal scroll indicator', () => {
    const { getByTestId } = render(<StepCarousel {...defaultProps} />);
    const flatList = getByTestId('step-carousel-flatlist');

    expect(flatList.props.showsHorizontalScrollIndicator).toBe(false);
  });
});
