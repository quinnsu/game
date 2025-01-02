import { Heading } from '@chakra-ui/react'
import { gameQueryPropTypes, } from '../propTypes'
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';



const GameHeading = ({gameQuery}) => {
   
    const genres = useGenres(gameQuery.genreId);
    const genre = genres.data?.results.find((g)=>g.id === gameQuery.genreId);
    const { data } = usePlatforms(gameQuery.platformId);
    const platform = data?.results.find((p) => p.id === gameQuery.platformId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    
   <Heading marginY={5} as={'h1'}>
    {heading}
   </Heading>
  )
}

GameHeading.propTypes = {
  gameQuery: gameQueryPropTypes
}

export default GameHeading
