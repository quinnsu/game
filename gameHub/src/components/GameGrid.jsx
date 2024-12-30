import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PropTypes from 'prop-types';
const GameGrid = ({selectedGenre, selectedPlatform}) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map( skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton  /> </GameCardContainer> )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
              <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

GameGrid.propTypes = {
  selectedGenre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_background: PropTypes.string.isRequired,
  }),
  selectedPlatform: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  })
  
};

export default GameGrid;
