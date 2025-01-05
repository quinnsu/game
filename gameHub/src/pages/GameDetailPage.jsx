
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
const GameDetailPage = () => {
  const {slug} = useParams();
  const {data, isLoading, error} = useGame(slug);
  
  if (isLoading) return <Spinner />;
  if (error) throw error;
  //console.log(data.description_raw);
  const description = data.description_raw;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpendableText> 
        {description}
      </ExpendableText>
    </>
  )
}

export default GameDetailPage
