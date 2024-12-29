import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import PlatformIconList from "./PlatformIconList";


const GameCard = ({game}) => {
  return (
   <Card key={game.name} borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            <PlatformIconList platforms={game.parent_platforms} />
        </CardBody>
    </Card>
  )
}

GameCard.propTypes = {
    game: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      parent_platforms: PropTypes.arrayOf(PropTypes.shape({
        platform: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
  };

export default GameCard

