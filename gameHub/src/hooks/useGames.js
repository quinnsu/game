import useData from "./useData";
const useGames = (selectedGenre, selectedPlatform) =>
  useData(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre,  selectedPlatform]
  );
export default useGames;
