import { create } from "zustand";

interface LoadingState {
  load: {
    loading: boolean;
  };
  setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  load: {
    loading: false,
  },
  setLoading: (loading: boolean) =>
    set((state) => ({
      load: {
        ...state.load,
        loading,
      },
    })),
}));
