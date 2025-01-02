import { create } from "zustand";

const useGameQueryStore = create((set) => ({
    gameQuery: {},
    setSearchText: (searchText) =>
      set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) =>
      set((store) => ({
        gameQuery: { ...store.gameQuery, genreId, searchText: undefined },
      })),
    setPlatformId: (platformId) =>
      set((store) => ({
        gameQuery: {
          ...store.gameQuery,
          platformId,
          searchText: undefined,
        },
      })),
    setSortOrder: (sortOrder) =>
      set((store) => ({
        gameQuery: { ...store.gameQuery, sortOrder },
      })),
  }));
  
  export default useGameQueryStore;