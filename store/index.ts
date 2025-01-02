import { create } from 'zustand';

type GuideState = {
  likes: Record<number, number>;
  likeGuide: (id: number) => void;
};

export const useGuideLikeStore = create<GuideState>((set) => ({
  likes: {},
  likeGuide: (id) => {
    set((state) => ({
      likes: {
        //
        ...state.likes,
        [id]: (state.likes[id] || 0) + 1,
      },
    }));
  },
}));
