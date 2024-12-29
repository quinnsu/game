import { Box } from '@chakra-ui/react'


const GameCardContainer = ({children}) => {
  return (
   <Box  borderRadius={10} overflow={'hidden'} >
     {children}
   </Box>
  )
}

import PropTypes from 'prop-types';

GameCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameCardContainer
