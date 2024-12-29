
import { Badge } from '@chakra-ui/react'
import propTypes from 'prop-types'
const CriticScore = ({score}) => {
    let color = score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red'
  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color}>
       {score}
    </Badge>
  )
}
CriticScore.propTypes = {
  score: propTypes.number.isRequired
}

export default CriticScore
