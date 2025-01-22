import { Grid, GridItem, Show, Center, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App(){

  return <Grid templateAreas={{base: '"nav" "main"', lg: '"nav nav" "aside main"'}}>
    <GridItem area='nav' bg='black'><NavBar /></GridItem>
    <GridItem area='main' bg='dodgerblue'>Main</GridItem>
  </Grid>
}

export default App; 