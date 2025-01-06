import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  //console.log(data.description_raw);
  const description = data.description_raw;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpendableText>{description}</ExpendableText>
      <SimpleGrid columns={2}>
        <DefinitionItem term="Platforms">
          {data.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={data.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {data.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {data.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>

        <GameTrailer gameId={data.id} />

    </>
  );
};

export default GameDetailPage;
