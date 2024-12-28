import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
         <NavBar />
      </GridItem>
        <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          aside
        </GridItem> 
        </Show>
      <GridItem area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
