import logo from '../../assets/images/logo@3x.png';
import { Image, Center, Text, Box, Container, VStack } from '@chakra-ui/react';

export const Home = () => {
    
    return (
    <VStack>
        <Box width={'100vw'} padding={4}>
            <Center fontSize={'5xl'} fontWeight={'semibold'}> Best Hotdogs and Wings in Fort Collins</Center>
        </Box>
        <Box>
            <Image src={logo} aspectRatio={4 / 5} blockSize={"500px"} />
        </Box>
        <Text fontSize={'xl'} fontWeight={'medium'}> Welcome to the Hotdogs and Hotter Wings web page. We are excited to present you with our twist 
            on hotdogs and some of our unique and delicious wing sauces. We also have other menu items like hamburgers, dorinachos, and maruchan choreadas.
            Click on the menu button to see what new and delicious creations you would like to try!
        </Text>
        <Text fontSize={'2xl'} fontWeight={'medium'}> Call ahead to make your order and to get more information on our location (970) 391 -5421</Text>
    </VStack>
        
    )

}
