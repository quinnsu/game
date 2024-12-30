import "./App.css";
import { useState } from "react";
import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  // Query object pattern
  const [gameQuery, setGameQuery] = useState({ genre: null, platform: null }); 
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector gameQuery={gameQuery} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        {/* 这里扩展运算符后，属性名和value相等，可以用这种简洁的写法 */} 
        <GameGrid gameQuery={gameQuery} selectedPlatform = {gameQuery.platform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
