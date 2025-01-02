import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genres = useGenres(genreId);
  const genre = genres.data?.results.find((g) => g.id === genreId);
  const { data } = usePlatforms(platformId);
  const platform = data?.results.find((p) => p.id === platformId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
