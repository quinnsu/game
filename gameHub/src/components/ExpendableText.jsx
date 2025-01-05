import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const ExpendableText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) {
    return null;
  } 
  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit);
  return (
    <Text>
      {summary}...
      <Button
        marginLeft={2}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};
ExpendableText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ExpendableText;
