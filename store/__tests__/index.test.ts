import { act } from 'react';
import { useGuideLikeStore } from '..';

describe('useGuideLikeStore', () => {
  //
  it('should initialize with an empty likes object', () => {
    const { likes } = useGuideLikeStore.getState();
    expect(likes).toEqual({});
  });

  // increment the number of likes
  it('should increment the number of likes', () => {
    const guideID = 123;

    act(() => {
      useGuideLikeStore.getState().likeGuide(guideID);
    });

    let { likes } = useGuideLikeStore.getState();
    expect(likes[guideID]).toBe(1);
  });
});
