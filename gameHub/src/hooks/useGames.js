import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");
const useGames = (gameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.value,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
