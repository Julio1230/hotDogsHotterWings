import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/images/logo@3x.png';

const NavBar = () => {
  return(
    <HStack>
      <Image src={logo} boxSize='{60px}' />
      <Text color="white" >Hotdogs & Hotter Wings</Text>
    </HStack>
  )
}
export default NavBar