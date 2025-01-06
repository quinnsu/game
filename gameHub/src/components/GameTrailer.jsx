import useTrailers from "../hooks/useTrailers.js";
import propTypes from "prop-types";

const GameTrailer = ({ gameId }) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

GameTrailer.propTypes = {
  gameId: propTypes.number.isRequired,
};
export default GameTrailer;
