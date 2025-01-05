import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{ transform: "scale(1.03)", transition: "transform 0.15s ease-in" }}
    >
      {children}
    </Box>
  );
};

import PropTypes from "prop-types";

GameCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameCardContainer;
