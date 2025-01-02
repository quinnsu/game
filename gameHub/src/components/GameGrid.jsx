import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { gameQueryPropTypes } from "../propTypes";
const GameGrid = ({gameQuery}) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if  (error) return <Text>{error.message}</Text>;
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && skeletons.map( skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton  /> </GameCardContainer> )}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
              <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  
  );
};

GameGrid.propTypes = {
    gameQuery: gameQueryPropTypes
  
};

export default GameGrid;
