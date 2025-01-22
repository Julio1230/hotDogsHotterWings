import { Grid, GridItem, Show, Center, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import {About} from "./components/pages/About";
import {Home} from "./components/pages/Home";
import {Menu} from "./components/pages/Menu";
import {Contact} from "./components/pages/Contact"

function App(){

  return <Grid templateAreas={{base: '"nav" "main"', lg: '"nav nav" "aside main"'}}>
    <GridItem area='nav' bg='black'><NavBar /></GridItem>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Grid>
}

export default App; 