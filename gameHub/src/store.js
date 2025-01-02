import { create } from "zustand";

const useGameQueryStore = create((set) => ({
    gameQuery: {},
    setSearchText: (searchText) =>
      set(() => ({ gameQuery: { searchText } })),
    
    // 选择了genreId，就要清空search
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