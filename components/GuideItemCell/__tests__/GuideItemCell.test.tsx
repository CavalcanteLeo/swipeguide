import { render, fireEvent } from '@testing-library/react-native';
import GuideItemCell from '../GuideItemCell';

describe('GuideItemCell', () => {
  const mockOnPress = jest.fn();

  const defaultProps = {
    title: 'Guide Title',
    description: 'This is a description of the guide.',
    guideId: 1,
    onPress: mockOnPress,
  };

  it('renders the title and description', () => {
    const { getByText } = render(<GuideItemCell {...defaultProps} />);

    expect(getByText('Guide Title')).toBeTruthy();
    expect(getByText('This is a description of the guide.')).toBeTruthy();
  });

  it('calls onPress when the component is pressed', () => {
    const { getByTestId } = render(<GuideItemCell {...defaultProps} />);
    const touchable = getByTestId('guide-item-cell');

    fireEvent.press(touchable);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders the LikeButton with the correct guideId', () => {
    const { getByTestId } = render(<GuideItemCell {...defaultProps} />);
    const likeButton = getByTestId(`like-button-${defaultProps.guideId}`);

    expect(likeButton).toBeTruthy();
  });
});
