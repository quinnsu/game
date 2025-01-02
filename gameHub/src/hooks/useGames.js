import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { all } from "axios";

const apiClient = new APIClient("/games");
const useGames = (gameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam=1}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.value,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>{
      return lastPage.next ? allPages.length + 1 : undefined;
      // RAWG API返回的数据中有next字段，若有下一页则返回页数，否则返回undefined
    }
  });

export default useGames;
