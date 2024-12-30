import useData from "./useData";
const useGames = (gameQuery) =>
  useData(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [ gameQuery ]
  );
export default useGames;
