import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LikeButton from '../LikeButton';
import { useGuideLikeStore } from '@/store';

jest.mock('@/store', () => ({
  useGuideLikeStore: jest.fn(),
}));

describe('LikeButton', () => {
  const mockLikeGuide = jest.fn();
  const mockLikes = { 1: 5 };

  beforeEach(() => {
    (useGuideLikeStore as unknown as jest.Mock).mockReturnValue({
      likes: mockLikes,
      likeGuide: mockLikeGuide,
    });
  });

  it('renders the correct number of likes', () => {
    const { getByText } = render(<LikeButton id={1} testID="like-button" />);
    const likeText = getByText('5 likes');

    expect(likeText).toBeTruthy();
  });

  it('calls likeGuide when the button is pressed', () => {
    const { getByTestId } = render(<LikeButton id={1} testID="like-button" />);
    const button = getByTestId('like-button');

    fireEvent.press(button);

    expect(mockLikeGuide).toHaveBeenCalledWith(1);
  });
});
