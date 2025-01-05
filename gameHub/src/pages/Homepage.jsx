import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import GameGrid from '../components/GameGrid'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
const Homepage = () => {
  return (
    <Grid
    templateAreas={{
      base: ` "main"`,
      lg: ` "aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "250px 1fr",
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={2}>
        <HStack>
          <GameHeading />
        </HStack>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )
}

export default Homepage
