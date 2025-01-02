import { render } from '@testing-library/react-native';
import TimeComponent from '../Time';

describe('TimeComponent', () => {
  const time = new Date('2023-10-10T14:48:00').getTime();

  it('renders the formatted time and date', () => {
    const { getByTestId } = render(<TimeComponent time={time} />);
    const textComponent = getByTestId('time-component-text');

    expect(textComponent.props.children).toBe('14:48, Oct 10, 2023');
  });
});
