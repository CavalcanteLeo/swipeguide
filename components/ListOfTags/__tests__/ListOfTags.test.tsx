import { render } from '@testing-library/react-native';
import ListOfTags from '../ListOfTags';

describe('ListOfTags', () => {
  const defaultProps = {
    tags: ['React', 'JavaScript', 'TypeScript'],
  };

  it('renders all tags', () => {
    const { getByText } = render(<ListOfTags {...defaultProps} />);

    defaultProps.tags.forEach((tag) => {
      expect(getByText(tag)).toBeTruthy();
    });
  });

  it('renders tags in a horizontal ScrollView', () => {
    const { getByTestId } = render(<ListOfTags {...defaultProps} />);
    const scrollView = getByTestId('tags-scroll-view');

    expect(scrollView.props.horizontal).toBe(true);
  });

  it('does not show horizontal scroll indicator', () => {
    const { getByTestId } = render(<ListOfTags {...defaultProps} />);
    const scrollView = getByTestId('tags-scroll-view');

    expect(scrollView.props.showsHorizontalScrollIndicator).toBe(false);
  });
});
