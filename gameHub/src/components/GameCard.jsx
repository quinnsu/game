import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

const GameCard = ({ game }) => {
  return (
    <Card key={game.name}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3 }>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name} <Emoji rating={game.rating_top}/> </Heading>
      </CardBody>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    metacritic: PropTypes.number,
    rating_top: PropTypes.number.isRequired,
    parent_platforms: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default GameCard;
