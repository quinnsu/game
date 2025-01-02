import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
const useGames = (gameQuery) =>
useQuery({
  queryKey: ["games", gameQuery],
  queryFn: () =>
    apiClient.get(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.value,
          search: gameQuery.searchText,
        },
      }
    )
    .then((res) => res.data),
  });

  
export default useGames;
