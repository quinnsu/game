import { Heading } from '@chakra-ui/react'
import { gameQueryPropTypes, } from '../propTypes'


const GameHeading = ({gameQuery}) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

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
