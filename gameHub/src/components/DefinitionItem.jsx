import { Box, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const DefinitionItem = ({term, children}) => {
  return (
    <Box marginY={5}>
    <Heading as='dt' fontSize='md' color='gray.600'>
      {term}
    </Heading>
    <dd>
      {children}
    </dd>
  </Box>
  )
}

DefinitionItem.propTypes = {
  term: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}


export default DefinitionItem
