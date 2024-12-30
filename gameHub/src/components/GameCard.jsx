import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react"
import PropTypes from 'prop-types';
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";


const GameCard = ({game}) => {
  return (
   <Card  key={game.name}>
        <Image src= {getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

GameCard.propTypes = {
    game: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      metacritic: PropTypes.number,
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

